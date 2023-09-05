import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceB} from './decBSlice'


function ChoiceB() {

const dispatch = useDispatch()
const choiceB12 = useSelector((state)=>state.optionB.choiceB)


  return (
    <div>
        Select B1 or B2
        <select onChange={(e)=>dispatch(choiceB(e.target.value))}>
            <option/>
            <option value='optionB1'>Option B1</option>
            <option value='optionB2'>Option B2</option>
        </select>
        {<div>Selection: {choiceB12}</div>}
        <button onClick={()=>''}>Submit</button>
       
    </div>
  )
}

export default ChoiceB