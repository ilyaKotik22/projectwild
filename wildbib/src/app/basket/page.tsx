import React from "react";
import {BodyBasketItems} from "@/components/shared/BodyBasket";
import {FinishCost} from "@/components/shared/finishCost";

export default function Page():React.JSX.Element{
    return (
        <div className={'flex justify-between mt-5'}>
            <BodyBasketItems ClassName={'basket'}/>
            <FinishCost/>
        </div>
    );
};
