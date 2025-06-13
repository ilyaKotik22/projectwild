'use client'
import React from "react";
import {MenuFilter} from "@/components/shared/MenuFilter";
import Items from "@/store/ItemsStore";
import {Cards} from "@/components/shared/Cards";
import {Cardss} from "@/components/shared/Cardss";

interface Props{
    ClassName?: string
}

export const Menu: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ 'flex gap-20 mt-15'}>
            <MenuFilter/>
            <Cards/>

        </div>);
};