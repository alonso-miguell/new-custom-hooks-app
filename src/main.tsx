import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PokemonPage} from "./PokemonPage.tsx";
import {FocusScreen} from "./hooks/useRef/FocusScreen.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*<PokemonPage></PokemonPage>*/}
      <FocusScreen></FocusScreen>
  </StrictMode>,
)
