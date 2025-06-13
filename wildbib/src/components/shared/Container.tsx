import React from "react";
import style from '../../app/css/Container.module.scss'

interface Props{
    ClassName?: string,
    children: any
}

export const Container: React.FC<Props> = ({ ClassName, children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>);
};