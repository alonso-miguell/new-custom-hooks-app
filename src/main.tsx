import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PokemonPage} from "./PokemonPage.tsx";
import {FocusScreen} from "./hooks/useRef/FocusScreen.tsx";
import {TasksApp} from "@/hooks/useReducer/TaskApp.tsx";
import {TasksAppWithReducer} from "@/hooks/useReducer/TaskAppWithReducer.tsx";
import {ScrambleWords} from "@/hooks/useReducer/ScrambleWords.tsx";
import {ScrambleWordsWithReducer} from "@/hooks/useReducer/ScrambleWordsWithReducer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*<PokemonPage></PokemonPage>*/}
      {/*<FocusScreen></FocusScreen>*/}
      {/*<TasksApp></TasksApp>*/}
      {/*<TasksAppWithReducer></TasksAppWithReducer>*/}
      <ScrambleWordsWithReducer></ScrambleWordsWithReducer>
  </StrictMode>,
)
