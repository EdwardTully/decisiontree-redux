import React from 'react'
import { useDispatch} from 'react-redux'
import {choiceAB} from './decABSlice'


function ChoiceA1AB() {


const dispatch = useDispatch()

  return (
    <div>
       Produce Commercially or Shelve?
        <select onChange={(e)=>dispatch(choiceAB(e.target.value))}>
        <option/>
            <option type='text' value='produce'>Produce Commercially</option>
            <option type='text' value='shelve'>Shelve</option>
        </select>
      

    
        
    </div>
  )
}

export default ChoiceA1AB