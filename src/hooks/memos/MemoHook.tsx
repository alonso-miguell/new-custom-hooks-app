import {useCallback, useState} from 'react';
import {MyTitle} from "@/hooks/memos/MyTitle.tsx";
import {MySubTitle} from "@/hooks/memos/MySubtitle.tsx";

/**
 * If the feunction is declared OUTSIDE
 * the component, we don't need to "memo" it using
 * callback, since the memo ref won't change after
 * each re-render
 */

// const handleMyAPICall = (myValue: string) => {
//   console.log('Llamar a mi API ' + myValue);
// };


export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');


    /**
     * When passing functions as props to components,
     * everytime we re-render the component we create a new
     * memory reference for that function if that function is
     * declared INSIDE the component, so the component
     * re-renders even if we used memo.
     *
     * The way for "memorizing" functions is to use:
     * useCallback(
     *      the whole function boy here
     *      ), [dependencies];
     *
     * Kind of similar to using useEffect hook
     */

    const handleMyAPICall =
        useCallback(
            () => {
                console.log('Llamar a mi API - ', subTitle);
            }
            , [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title}/>
            <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall}/>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello, ' + new Date().getTime())}
            >
                Cambiar título
            </button>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubTitle('World, ' + new Date().getTime())}
                // onClick={() => setSubTitle('World')}
            >
                Cambiar subtitulo
            </button>
        </div>
    );
};