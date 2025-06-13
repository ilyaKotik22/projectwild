import React from "react";

interface Props{
    ClassName?: string
}

export const TsBlock: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};