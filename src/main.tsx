import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {NewReactApp} from "./NewReactApp.tsx";
import {TrafficLight} from "./TrafficLight.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<NewReactApp />*/}
      <TrafficLight></TrafficLight>
  </StrictMode>,
)
