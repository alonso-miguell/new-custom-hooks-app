import {useTrafficLight} from "./hooks/useTrafficLight.tsx";

export const TrafficLightWithHook = () => {

    const {colors, handleColorChange, counter, color}= useTrafficLight();


    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin"> Semaforo con useEffect</h1>
                <h2 className="text-white text-xl"> {`Counter: ${counter}`}</h2>

                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={ {width: `${ (counter/5) *100}%` }}>
                    </div>


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