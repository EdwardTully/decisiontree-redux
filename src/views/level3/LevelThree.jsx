import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {choice} from './levelThreeSlice'


function LevelThree() {


const dispatch = useDispatch()
const [decisionOne, setDecisionOne] = useState()

  return (
    <div>
       DP: Produce Commercially or Shelve?
        <select onChange={(e)=>setDecisionOne(e.target.value)}>
        <option/>
            <option type='text' value='produce commercially'>Produce Commercially</option>
            <option type='text' value='shelve'>Shelve</option>
        </select>
      
        <button onClick={()=>dispatch(choice(decisionOne))}>Submit</button>
    
        
    </div>
  )
}

export default LevelThree