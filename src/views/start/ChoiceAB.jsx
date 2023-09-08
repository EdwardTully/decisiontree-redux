import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {choiceAB} from './decABSlice'


function ChoiceAB() {


const dispatch = useDispatch()
const [decisionOne, setDecisionOne] = useState()

  return (
    <div>
       DP: Authorize or Kill Project?
        <select onChange={(e)=>setDecisionOne(e.target.value)}>
        <option/>
            <option type='text' value='authorize'>Authorize Project</option>
            <option type='text' value='kill'>Kill Project</option>
        </select>
      
        <button onClick={()=>dispatch(choiceAB(decisionOne))}>Submit</button>
    
        
    </div>
  )
}

export default ChoiceAB