import React from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {Slider} from "@/components/ui/slider";
import style from '../../app/css/MenuFilter.module.scss'
import {observer} from "mobx-react-lite";
import filterStore from '../../store/FilterStore'

interface Props{
    ClassName?: string

}

export const MenuFilter: React.FC<Props> = observer(({ ClassName}) => {
    let defaultCategorys1 = filterStore.filter.defaultValue.category[0]
    let defaultCategorys2 = filterStore.filter.defaultValue.category[1]
    let itemsFilterOneHalf = filterStore.filter.items[0]
    let itemsFilterSecondHalf = filterStore.filter.items[1]
    let changeSlider = filterStore.filter.changeValueSlider

    const renderItems = (items:string[], defaultItem:string)=> {
        return items.map((el:any)=>{
            if (el === defaultItem){
                console.log(el)
                return(
                    <div key={el}  className={'flex gap-2 mt-2 items-center'}>
                        <Checkbox onCheckedChange={()=>filterStore.onChangee(el)} defaultChecked className={'w-5 h-5'} />
                        <b>{el}</b>
                    </div>
                )
            }else {

                return(
                    <div key={el}  className={'flex gap-2 mt-2 items-center'}>
                        <Checkbox onCheckedChange={()=>filterStore.onChangee(el)}  className={'w-5 h-5'} />
                        <b>{el}</b>
                    </div>)
            }
        })
    }

    return (
        <div className={ style.filter}>
            <h1 className="">{filterStore.filter.title}</h1>

            {renderItems(itemsFilterOneHalf,defaultCategorys1)}
            <br/>
            {renderItems(itemsFilterSecondHalf,defaultCategorys2)}

            <div className="mt-5 flex justify-between">
                <b>{changeSlider}</b>
                <b>13000</b>
            </div>
            <Slider
                onValueChange={value => filterStore.filter.changeValueSlider = value[0]}
                defaultValue={[filterStore.filter.changeValueSlider]}
                max={13000}
                step={1}
            />
            <div className="">

            </div>
        </div>);
});