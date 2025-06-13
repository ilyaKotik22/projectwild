'use client'
import React, {useEffect} from "react";
import style from '../../app/css/Basket.module.scss'
import {Button} from "@/components/ui/button";
import BasketStore from "@/store/BasketStore";
import {observer} from "mobx-react-lite";
interface Props{
    ClassName?: string
}

export const BodyBasketItems: React.FC<Props> = observer(({ ClassName }) => {
    useEffect(() => {
        BasketStore.fetchGetBasket()
    }, []);

    return (
        <div className={ style.basketList}>
            {BasketStore.items.map((el:any)=>{
                if (el.count > 0){
                    return (
                        <div key={el.id} className={style.basketList__basketCard}>
                            <div className={style.basket__name}>{el.name}</div>
                            <div className={style.basketList__cost}>
                                <div>{el.count}</div>
                                <Button onClick={()=>BasketStore.incrementCounter(el.id)}>+</Button>
                                <div className="">{el.price}</div>
                                <Button onClick={()=>BasketStore.decrementCounter(el.id)}>-</Button>
                            </div>
                        </div>
                    )
                }

            })}

        </div>);
});