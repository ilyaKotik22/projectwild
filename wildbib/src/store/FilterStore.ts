import {makeAutoObservable} from "mobx";
interface Props{
    ClassName?: string
    title: string
    items: string[][]
    defaultValue: {slider: number, category: string[]}
    changeValue:string[][]
    changeValueSlider: number,
    inputValue: string

}
class FilterStore{

    filter:Props = {
        title: 'Выбрать',
        items: [['all sex','unisex', 'female', 'male'],['all material','хлопок','кожа','шерсть','полиэстер'] ],
        defaultValue: {slider: 13000, category: ['all sex','all material']},
        changeValue: [['all sex'],['all material']],
        changeValueSlider: 13000,
        inputValue: '',
    }
    constructor() {
        makeAutoObservable(this)
    }

    onInputChange(val:string){
        this.filter.inputValue = val
    }

    onChangee(val:string){
        const currentValues = this.filter.changeValue;
        for (const currentValuesKey in currentValues) {
            if (this.filter.items[currentValuesKey].includes(val)){
                if (currentValues[currentValuesKey].includes(val)) {
                    this.filter.changeValue[currentValuesKey] = currentValues[currentValuesKey].filter(v => v !== val);
                } else {
                    this.filter.changeValue[currentValuesKey] = [...currentValues[currentValuesKey], val]
                }
            }
        }
    }
}
export default new FilterStore()