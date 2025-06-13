import React from "react";

interface Props{
    ClassName?: string
}

export const Pip: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>

        </div>);
};