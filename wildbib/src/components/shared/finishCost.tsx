'use client'
import React from "react";
import BasketStore from "@/store/BasketStore";
import style from '../../app/css/Basket.module.scss'
import {observer} from "mobx-react-lite";
interface Props{
    ClassName?: string
}

export const FinishCost: React.FC<Props> = observer(({ ClassName }) => {
    return (
        <div className={style.finalCost}>
            <div className="">
                <b>Итоговая цена</b>
                <div className=""></div>
                <b>{BasketStore.sum}</b>


            </div>

        </div>);
});