import {makeAutoObservable} from "mobx";

type Item ={
    id: number
    name: string
    description: string
    price: number
    sex: string
    material: string
}

class Items{

    clothes:Item[] =[]
    clothesInput:Item[] = []
    constructor() {
        makeAutoObservable(this)
    }

    async fetchGetItems(){
        try {
            const response = await fetch('http://localhost:5000/api/items');
            const data = await response.json();
            this.clothes = data.items || [];
        } catch (error) {
            console.error('Failed to fetch items:', error);
        }
    }

    getFinalItems(variable:[][] |any,variableSlider:number){
        let finalItems:Item[] = []
        if (variable[0].includes('all sex') && variable[1].includes('all material')) {
            finalItems = this.clothes
        }else {
            finalItems = this.clothes.filter((el:Item)=>(
                variable[0].includes(el.sex) || variable[0].includes('all sex'))
                &&
                (variable[1].includes(el.material) || variable[1].includes('all material')))
        }
        finalItems = finalItems.filter((el:Item )=> el.price < variableSlider)
        return finalItems
    }

    getFinalItemsForInput(val:string){
        let finalArr:Item[] = []
        let a = String(val).charAt(0).toUpperCase() + String(val).slice(1);
        finalArr = this.clothes.filter((el:any)=> el.name.includes(a) && val!== '' )
        return finalArr
    }
}
export default new Items()