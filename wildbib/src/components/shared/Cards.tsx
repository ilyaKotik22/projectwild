'use client';
import React, {useEffect} from "react";
import style from '../../app/css/Card.module.scss'
import items from '../../store/ItemsStore'
import filter from '../../store/FilterStore'
import {observer} from "mobx-react-lite";
import Link from "next/link";
interface Props{
    ClassName?: string
}

export const Cards: React.FC<Props> = observer(({}) => {
    useEffect(() => {
        items.fetchGetItems()
    }, []);
    let values = filter.filter.changeValue
    let slider = filter.filter.changeValueSlider

    return (

            <div className={ style.CardsContainer}>
                {Number(items.getFinalItems(values,slider).length) !== 0 ? items.getFinalItems(values,slider).map((el:any)=>(
                    <Link key={el.id} href={{
                        pathname: '/item',
                        query: {
                            id: el.id
                        }
                    }}>
                        <div  className={style.Card}>
                            <div className="">{el.name}</div>
                            <div className="">{el.price}</div>
                        </div>
                    </Link>

                )) : 'Нет товаров'}
                {}
            </div>);


});
