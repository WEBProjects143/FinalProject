// import Dash from "../Components/Pages/Dashboard";
export const initialState={
    products:[],
    filterProducts:[]
}
export const filterfunction=(state,action)=>{
    switch(action.type){
        case "ASC":
            return{
                ...state,
                filterProducts:[...state.products].sort((a,b)=>a.price-b.price)

            }
             case "DESC":{
                return{
                    ...state,
                    filterProducts:[...state.products].sort((a,b)=>b.price-a.price)
                }
             }
            default:
            return state
    }
}
// export default filterfunction