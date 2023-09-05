import React, {useState} from 'react'
import ChoiceAB from '../views/start/ChoiceAB'
import ChoiceA from '../views/decA/ChoiceA'
import ChoiceB from '../views/level4/ChoiceB'
import ChoiceA1AB from '../views/level2/ChoiceA1AB'
import ChoiceA2AB from '../views/level3/ChoiceA2AB'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Window() {


const [optVal, setOptVal] = useState('default')
const choicesL1 = useSelector((state)=>state.optionAB.choice)
const choicesL2 = useSelector((state)=>state.optionA.choice)


  return (
    <div>
     
      {optVal === "default" ? (
        <ChoiceAB />
      ) : optVal === "authorize" ? (
        <ChoiceA />
      ) : optVal === "kill" ? (
        <ChoiceB />
      ) : optVal === 'success' ? (
        <ChoiceA1AB/>
      ) : optVal === 'failure'? (
        <ChoiceA2AB/>
      ) :null
      
      }
      <button onClick={()=>setOptVal(choicesL1)}>Submit</button>
      <button onClick={()=>setOptVal(choicesL2)}>Submit</button>
     
    </div>
  );
}

export default Window 

////{choice1=='default'? <ChoiceAB/>
//:choice1=='optionA' ? <ChoiceA/>
//:choice1=='optionB'? <ChoiceB/>
//:null}

/*{useSelector((state)=>state.optionAB.choice)==='optionA'? <ChoiceA/>:
useSelector((state)=>state.optionAB.choice)==='optionB'?
<ChoiceB/>: null}*/

// lazy import method:  const Component = React.lazy(()=>import('./Component'))

// switch(expr){
//    case 'kjdsfj':
 //       return 
//    case 'dfdfsd':
//        return
//    default:
 //       return