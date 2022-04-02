import { Satellite } from "@mui/icons-material";

export default (state,action)=>{
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return{
                ...state,
                transactions:Satellite.transactions.filter(transaction=>transaction.id!==action.Payload)
            }
            
        case "TOGGLE_DARKMODE":
            console.log("darkmode toggled"+state.darkmode)
            return{
                
                ...state,
                darkmode:!state.darkmode
            }
                    
                    
                
            
    
        default:
            return state
    }
}