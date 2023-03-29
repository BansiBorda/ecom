const initialData = {
    list :[]
}


const rootReducer = (state=initialData,Action) => {
    switch(Action.type){
        case "Add_To_Do":
            const{id,data}=Action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            case "Delete_To_Do":
            // const{id,data}=Action.payload;
            const newlist = state.list.filter((elem)=>elem.id !== Action.id)
            return{
                ...state,
                list:newlist
            }
            case "Remove_To_Do":
                return{
                    ...state,
                    list:[]
                }
            default:return state;
    }
 
}

export default rootReducer
