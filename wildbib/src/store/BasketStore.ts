import {makeAutoObservable} from "mobx";
interface itemInterface{
    id: number
    name: string
    description: string
    price: number
    sex: string
    material: string
    count: number
}
interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}
class BasketStore{
    items: itemInterface[] = []
    sum =0

    constructor() {
        makeAutoObservable(this)
    }

    async fetchApi(
        url:string,
        methode: 'POST' | 'GET',
        body?: any
    ):Promise<ApiResponse>{
        try {
            const response = await fetch(`http://localhost:5000/api/${url}`, {
                method: methode,
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(body)
            })
            return response.json()
        } catch (er){
            return { success: false, message: "Network error" }
        }
    }

    async fetchPostItem(el:any){
        el.count = 1
        let res:any = await this.fetchApi('putBasket', 'POST',el)
    }

    async fetchGetBasket(){
        let res:any = await this.fetchApi('basket', 'GET',)
        console.log(res.success)
        if (!res.success) {
            this.items = res
            this.calculateTotal();
        }
    }

    updateItemCount(id:number, action: '+'| '-'){
        for (const argumentsKey in this.items) {
            if (id === this.items[argumentsKey].id){
                this.items[argumentsKey].count += action === "+" ? 1 : -1;
            }
        }
        let res = this.fetchApi('crementBasket','POST', {id: id, action: action})
        this.calculateTotal()
    }

    calculateTotal(){
        this.sum = this.items.reduce(
            (total,el)=> total + el.price * el.count,0
        )
    }

    incrementCounter = (id:number)=> this.updateItemCount(id,'+')
    decrementCounter = (id: number)=> this.updateItemCount(id,'-')
}
export default new BasketStore()