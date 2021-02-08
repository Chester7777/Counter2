import React from "react";
import style from "./MyDisplay.module.css"

type MyDisplayType = {
    counter: number
}

export const MyDisplay = (props: MyDisplayType) => {

    return (
        <div className={props.counter === 5 ? style.myDisplay_error : style.myDisplay}>
            <span className={style.my_number}>{props.counter}</span>
        </div>
    )
}