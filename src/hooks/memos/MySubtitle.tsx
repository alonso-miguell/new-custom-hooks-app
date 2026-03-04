import React from "react";

interface Props {
    subtitle: string;

    // callMyAPI: (myValue: string) => void;
    callMyAPI: () => void;
}

/**
 * We can use memo to avoid re-rendering components
 * when the parent component changes or to avoid re-rendering
 * the father when the child changes, on this way we can re-render each
 * component when really required
 *
 * just add:
 * React.memo( the whole component here );
 */

export const MySubTitle =
    React.memo(

        ({subtitle, callMyAPI}: Props) => {
            console.log('MySubTitle re-render');

            return (
                <>
                    <h6 className="text-2xl font-bold">{subtitle}</h6>

                    <button
                        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                        onClick={callMyAPI}
                    >
                        Llamar a función
                    </button>
                </>
            );
        }

        );