import React, { useState } from 'react'
import {addtodo,deletetodo,remove} from '../Action/constant'
import {useDispatch, useSelector} from 'react-redux'

const Todo = () => {
    const[inputData,setinputData]=useState('');
    const list=useSelector((state)=>state.todoReducer.list)
    const dispatch = useDispatch();

  return (
    <>
      <div className='main-div'>
      <div className='child-div'>
        <figure>
        <figcaption> TO-do list</figcaption>
       </figure>

       <div className='addite'>
        <input type='text' placeholder='add items' value={inputData} onChange={(event)=>setinputData(event.target.value)}/>
        <button type='submit' onClick={()=>dispatch(addtodo(inputData),
            setinputData(''))} >Add</button>
       </div>
       <div className='showItem'>
        {
            list.map((elem)=>{
                return(
                    <div className='eachitem' key={elem.id}>
                        <h3>{elem.data}</h3>
                        <button type='submit' title='Delete item' onClick={()=>dispatch(deletetodo(elem.id))}>delete</button>

                    </div>
                )
            })
        }
       </div>
       <div className='showitems'>
        <button className='btn effect04' data-sm-link-text="remove all"
        onClick={()=>dispatch(remove())}>
            <span>Remove All</span>
        </button>
       </div>
       </div>
       </div>
        
      
    </>
  )
}

export default Todo