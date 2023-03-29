export const addtodo = (data)=>
{
    return{
        type:"Add_To_Do",
        payload:{
           id:new Date().getTime().toString(),
           data:data
           
        }
    }
}
export const deletetodo = (id)=>
{
    return{
        type:"Delete_To_Do",
        id
        }
    }
export const remove = ()=>
{
    return{
        type:"Remove_To_Do",
        
        }
    }
