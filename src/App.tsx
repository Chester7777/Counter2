import React, {useEffect, useState} from "react";
import "./App.css";
import {MyButton} from "./Components/MyButton/MyButton";
import {MyDisplay} from "./Components/MyDisplay/MyDisplay";


// export type ActiveType = "on" | "off" | null


function App() {

    let [counter, setCounter] = useState<number>(0)
    // let [active, setActive] = useState<ActiveType>(null)

    let ButtonInc = () => {
        let newCounter = counter + 1
        setCounter(newCounter)
        // setActive("on")
    }
    let ButtonReset = () => {
        setCounter(0)
        // setActive("off")
    }


    const setLocalStorageValue = () => {
        localStorage.setItem("keyValue", JSON.stringify(counter))
        // localStorage.setItem("keyValue", counter.toString()) //можно так
    }

    useEffect(() => {
        let saveString  = localStorage.getItem("keyValue")
        if(saveString) {
            let saveNumber = JSON.parse(saveString)
            setCounter(saveNumber)
        }
    }, [])

    //localStorage.getItem - в ручную сохранение и вывидение информации на UI
    // const getLocalStorageValue = () => {
    //     let saveString  = localStorage.getItem("keyValue")
    //     if(saveString) {
    //         let saveNumber = JSON.parse(saveString)
    //         setCounter(saveNumber)
    //     }
    // }

    // очищение LocalStorage
    // const clearLocalStorageValue = () => {
    //     localStorage.clear()
    //     setCounter(0)
    // }

    return (
        <div className="App">
            <h1>My counter</h1>
            <div>
                <MyDisplay
                    counter={counter}
                />
            </div>
            <MyButton
                title="inc"
                callBack={ButtonInc}
                disabled={counter}
                counter={counter}
                // active={active}
                // type="on"
            />
            <MyButton
                title="reset"
                callBack={ButtonReset}
                counter={counter}
                // active={active}
                // type="off"
            />
            <MyButton
                title="save"
                callBack={setLocalStorageValue}
                counter={counter}
                // active={active}
                // type="off"
            />
        </div>
    );
}

export default App;
