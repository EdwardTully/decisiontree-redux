import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceA} from './decASlice'



function ChoiceA() {

const choiceA12 = useSelector((state)=>state.optionA.choiceA)
const dispatch = useDispatch()

  return (
    <div>
        Select A1 or A2
        <select onChange={(e)=>dispatch(choiceA(e.target.value))}>
            <option/>
            <option type='text' value='optionA1'>Option A1</option>
            <option type='text' value='optionA2'>Option A2</option>
        </select>
        {<div>Choice A1 or A2: {choiceA12}</div>}
        <button onClick={()=>''}>Submit</button>
      
    </div>
  )
}

export default ChoiceA