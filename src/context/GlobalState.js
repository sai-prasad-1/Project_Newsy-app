import React,{createContext,useReducer} from "react"
import AppReducer from "./AppReducer"



// iNITIAL sTATE

const initialState ={
        darkmode:true
} 


// create global context 

export const GlobalContext = createContext(initialState)



export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function toggleDarkmode() {
        dispatch({
            type:"TOGGLE_DARKMODE"
            
        })
        
    }
    return(
        <GlobalContext.Provider value={{
            darkmode:state.darkmode,
            toggleDarkmode

        }} >
            {children}
        </GlobalContext.Provider>
    )
}