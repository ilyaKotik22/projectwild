'use client'
import React, {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import basketStore from "@/store/BasketStore";
import items from '../../store/ItemsStore'
import {Button} from "@/components/ui/button";
import {observer} from "mobx-react-lite";
interface Props{
    ClassName?: string
}

export const BodyItem: React.FC<Props> = observer(({ ClassName }) => {
    const searchParams = useSearchParams();
    useEffect(() => {
        items.fetchGetItems()
    }, []);
    // Получение одиночного параметра
    const id = searchParams.get('id');
    return (
        <div className={ ClassName}>
            {items.clothes.map((el:any)=>{
                if (Number(el.id) === Number(id))
                return(
                    <div key={el.id}>
                        <div className="">{el.name}</div>
                        <div className="">{el.description}</div>
                        <div className="">{el.price}</div>
                        <div className="">{el.sex}</div>
                        <div className="">{el.material}</div>
                        <Button onClick={()=>basketStore.fetchPostItem(el)} >Добавть в корзину</Button>

                    </div>
                )
            })}
        </div>);
});