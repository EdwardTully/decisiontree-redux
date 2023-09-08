import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {choice2} from './levelTwoSlice'


function LevelTwo() {


const dispatch = useDispatch()
const [decisionOne, setDecisionOne] = useState()

  return (
    <div>
       Obs: Development Succees or Fails?
        <select onChange={(e)=>setDecisionOne(e.target.value)}>
        <option/>
            <option type='text' value='succeeds'>Succeeds</option>
            <option type='text' value='fails'>Fails</option>
        </select>
      
        <button onClick={()=>dispatch(choice2(decisionOne))}>Submit</button>
    
        
    </div>
  )
}

export default LevelTwo