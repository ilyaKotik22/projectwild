'use client'
import React from "react";
import style from '../../app/css/header.module.scss'
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {MapPin, ShoppingCart, User} from "lucide-react";
import store from '../../store/FilterStore'
import storeItems from '../../store/ItemsStore'
import {observer} from "mobx-react-lite";
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = observer(({ ClassName }) => {
    return (
        <div className={style.header}>
            <div className={style.header__block}>
                <h1 >wildbib</h1>
            </div>
            <div className={style.header__block}>
                <Input onChange={(event)=>store.onInputChange(event.target.value)} className={'w-150'} placeholder={'Найти'}/>
            </div>
            <div className={style.header__block}>
                <Link className={'block text-center'} href={'/'}>
                    <MapPin className={'ml-3'}/>

                    адреса
                </Link>
                <Link href={'/'}>
                    <User className={'ml-2'} />
                    войти
                </Link>
                <Link href={'/basket'}>
                    <ShoppingCart className={'ml-3'} />
                    корзина
                </Link>

            </div>

            <div className={style.recommendation}>
                {storeItems.getFinalItemsForInput(store.filter.inputValue).map((el:any)=>{
                    return(
                        <div key={el.id}>
                            <Link href={{
                                pathname: '/item',
                                query: {
                                    id: el.id
                                }
                            }} >
                                {el.name}
                            </Link>
                        </div>


                    )
                })}
            </div>
        </div>);
});