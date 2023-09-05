import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceA} from './decASlice'



function ChoiceA() {


const dispatch = useDispatch()

  return (
    <div>
        Development Success or Fail?
        <select onChange={(e)=>dispatch(choiceA(e.target.value))}>
            <option/>
            <option type='text' value='success'>Success</option>
            <option type='text' value='failure'>Failure</option>
        </select>
       
       
      
    </div>
  )
}

export default ChoiceA