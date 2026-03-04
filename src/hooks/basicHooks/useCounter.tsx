import {useState} from "react";

export const useCounter = ( value: number) => {

    const [counter, setCounter] = useState<number>(value);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        if(counter === 1){
            console.log("can't be decreased more");
            return;
        }
        setCounter(counter - 1);
    }

    return {
        counter,
        increaseCounter,
        decreaseCounter,
    }
}