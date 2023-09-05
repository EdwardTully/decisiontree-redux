import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {choiceB} from './decBSlice'


function ChoiceB() {

const dispatch = useDispatch()



  return (
    <div>
        Select B1 or B2
        <select onChange={(e)=>dispatch(choiceB(e.target.value))}>
            <option/>
            <option value='optionB1'>Option B1</option>
            <option value='optionB2'>Option B2</option>
        </select>
       
      
       
    </div>
  )
}

export default ChoiceB