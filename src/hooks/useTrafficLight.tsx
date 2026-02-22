import {useEffect, useState} from "react";

export const useTrafficLight = () => {

    const colors = {
        'red': 'bg-red-500 animate-pulse',
        'green': 'bg-green-500 animate-pulse',
        'yellow': 'bg-yellow-500 animate-pulse',
        'gray': 'bg-gray-500 animate-pulse',
    };

    type LightColor = 'red' | 'green' | 'yellow';

    const [color, setColor] = useState<LightColor>("red");
    const [counter, setCounter] = useState<number>(5);

    const handleColorChange = (color: LightColor) => {
        setColor(color);
        setCounter(() => 5);
    }


    // Para countDown
    //Forma correcta para evitar Eslint error
    useEffect(() => {

        const interval = setInterval(() => {
            console.log(counter);
            if (counter > 0) {
                setCounter(counter - 1);
            } else {
                setCounter(() => 5);

                if (color === 'red') {
                    setColor("green");
                }
                if (color === 'yellow') {
                    setColor("red");
                }
                if (color === 'green') {
                    setColor("yellow");
                }
            }

        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [color, counter]);

    return {
        colors, handleColorChange, counter, color
    }
}