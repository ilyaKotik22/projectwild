'use client';

import React, {useEffect,useMemo} from "react";
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

    const { values, slider } = useMemo(() => ({
        values: filter.filter.changeValue,
        slider: filter.filter.changeValueSlider
    }), [filter.filter.changeValue, filter.filter.changeValueSlider]);

    const filteredItems = useMemo(() =>
            items.getFinalItems(values, slider),
        [items.getFinalItems(values, slider), values, slider]
    );

    return (

            <div className={ style.CardsContainer}>
                {filteredItems.length > 0 ? filteredItems.map((el:any)=>(
                    <Link key={el.id} href={{
                        pathname: '/item',
                        query: {
                            id: el.id
                        },

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
