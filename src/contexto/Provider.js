import { useState } from "react"
import Contexto from "./Contexto"


const Provider = ({children}) => {
    const [laCorrecta, setLacorrecta]=useState("");

    const escribirCorrecta=(aGuardar="")=>{
        setLacorrecta(aGuardar)
    }
    return (
        <Contexto.Provider value={{
            escribirCorrecta,laCorrecta
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider
