import React from 'react'
import { useDispatch} from 'react-redux'
import {choiceA1AB} from './choiceA1ABSlice'


function ChoiceA1AB() {


const dispatch = useDispatch()

  return (
    <div>
       Produce Commercially or Shelve?
        <select onChange={(e)=>dispatch(choiceA1AB(e.target.value))}>
        <option/>
            <option type='text' value='produce'>Produce Commercially</option>
            <option type='text' value='shelve'>Shelve</option>
        </select>
      

    
        
    </div>
  )
}

export default ChoiceA1AB