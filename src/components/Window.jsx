import React, {useState, useEffect} from 'react'
import ChoiceAB from '../views/start/ChoiceAB'
import ChoiceA from '../views/decA/ChoiceA'
import ChoiceB from '../views/decB/ChoiceB'
import {useSelector} from 'react-redux'

function Window() {


  
    
// lazy import method:  const Component = React.lazy(()=>import('./Component'))

// switch(expr){
//    case 'kjdsfj':
 //       return 
//    case 'dfdfsd':
//        return
//    default:
 //       return


const choicesAll = useSelector((state)=>state.optionAB.choice)


  return (
    <div>
     
      {choicesAll === "default" ? (
        <ChoiceAB />
      ) : choicesAll === "optionA" ? (
        <ChoiceA />
      ) : choicesAll == "optionB" ? (
        <ChoiceB />
      ) : null}
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