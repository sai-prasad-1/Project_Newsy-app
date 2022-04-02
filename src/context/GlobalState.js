import React,{createContext,useReducer} from "react"
import AppReducer from "./AppReducer"



// iNITIAL sTATE

const initialState ={
    transactions:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ],
        darkmode:true
} 


// create global context 

export const GlobalContext = createContext(initialState)



export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction(id)  {
        dispatch({
            type:"DELETE_TRANSACTION",
            Payload:id
        })
        
    }

    function toggleDarkmode() {
        dispatch({
            type:"TOGGLE_DARKMODE"
            
        })
        
    }
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            darkmode:state.darkmode,
            toggleDarkmode

        }} >
            {children}
        </GlobalContext.Provider>
    )
}