import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceAB} from './decABSlice'


function ChoiceAB() {

const choiceAorB = useSelector((state)=>state.optionAB.choice)
const dispatch = useDispatch()

  return (
    <div>
        Select A or B
        <select onChange={(e)=>dispatch(choiceAB(e.target.value))}>
        <option/>
            <option type='text' value='optionA'>Option A</option>
            <option type='text' value='optionB'>Option B</option>
        </select>
        {<div>Choice A or B: {choiceAorB}</div>}

        <button onClick={()=>''}>Submit</button>
        
    </div>
  )
}

export default ChoiceAB