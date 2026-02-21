import {useEffect, useState} from "react";

export const TrafficLight = () => {

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

    /**
     * Esto funciona segun el curso, pero e suna mala practica y manda ESLIN error debido a que:
     * el segundo useEffect hace uso sincrono de useState para counter y a su vez
     * tiene counter como depdencia, pudiendo generar un loop de renderizado.
     *
     * Para evitar esto se recomienda:
     * - Utilizar useState con algun timer (como setInterval/setTimeout)
     * - Utilizar la forma funcional --> setCounter( (prev) => prev-1) )
     * - Debido al punto anterior, se evita agregar counter como dependencia de useEffect
     */
    // Para countDown
    // useEffect(() => {
    //    
    //     if(counter<=0 ) return;
    //    const interval=setInterval( () =>{
    //         console.log(counter);
    //         setCounter(counter - 1);
    //
    //     }, 1000);
    //
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [color, counter]);
    //
    // //Para manjear el cambio de semaforo
    // useEffect(() => {
    //     if(counter>0) return;
    //
    //     if(color==='red'){
    //         handleColorChange("green");
    //     }
    //     if(color==='yellow'){
    //         handleColorChange("red");
    //     }
    //     if(color==='green'){
    //         handleColorChange("yellow");
    //     }
    // }, [color, counter, handleColorChange]);


    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin"> Semaforo con useEffect</h1>
                <h2 className="text-white text-xl"> {`Counter: ${counter}`}</h2>


                <div className={`w-32 h-32 ${color === 'red' ? colors['red'] : colors['gray']}  rounded-full`}></div>
                <div
                    className={`w-32 h-32 ${color === 'yellow' ? colors['yellow'] : colors['gray']}  rounded-full`}></div>
                <div
                    className={`w-32 h-32 ${color === 'green' ? colors['green'] : colors['gray']}  rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button
                        onClick={() => handleColorChange("red")}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button
                        onClick={() => handleColorChange("yellow")}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button
                        onClick={() => handleColorChange("green")}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
};