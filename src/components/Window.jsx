
import ChoiceAB from '../views/start/ChoiceAB'
import LevelTwo from '../views/level2/LevelTwo'
import LevelThree from '../views/level3/LevelThree'
import LevelFour from '../views/level4/LevelFour'

import {useSelector} from 'react-redux'


function Window() {


 const choiceObj = {
   choicesL1: "",
   choicesL2: "",
   choicesL3: "",
   choicesL4: "",
 };

 choiceObj.choicesL1 = useSelector((state) => state.optionAB.choice);
 choiceObj.choicesL2 = useSelector((state) => state.optionTwo.choice);
 choiceObj.choicesL3 = useSelector((state) => state.optionThree.choice);
 choiceObj.choicesL4 = useSelector((state) => state.optionFour.choice);



/*console.log(choicesL2)
console.log(choicesL3)
console.log(choicesL4)*/
/*const choicesL1 = 'authorize'
const choicesL2 = 'succeed'
const choicesL3 = 'produce commercially'
const choicesL4 = 'comp introduces'*/

function evalForm(){

 
  if (
    choiceObj.choicesL1 === "authorize" &&
    choiceObj.choicesL2 === "succeeds" &&
    choiceObj.choicesL3 === "produce commercially" &&
    choiceObj.choicesL4 === "comp introduces"
  ) {
    const solution = 'Expand market, hold share'
    return <h1>{solution}</h1>
  }
 else if (
  choiceObj.choicesL1 === "authorize" &&
  choiceObj.choicesL2 === "succeeds" &&
  choiceObj.choicesL3 === "produce commercially" &&
  choiceObj.choicesL4 === "comp does not introduce"
  ) {
    const solution =('Expand market and your share')
    return <h1>{solution}</h1>
  }
  else if (
    choiceObj.choicesL1 === "authorize" &&
    choiceObj.choicesL2 === "succeeds" &&
    choiceObj.choicesL3 === "shelve" &&
    choiceObj.choicesL4 === "comp introduces"
  ) {
    const solution =("Introduce late, slight market loss.");
    return <h1>{solution}</h1>
  }
  else if (
    choiceObj.choicesL1 === "authorize" &&
    choiceObj.choicesL2 === "succeeds" &&
    choiceObj.choicesL3 === "shelve" &&
    choiceObj.choicesL4 === "comp does not introduce"
  ) {
    const solution =("No change in market, cost of development.");
    return <h1>{solution}</h1>
  }
  else if (
    choiceObj.choicesL1 === "authorize" &&
    choiceObj.choicesL2 === "fails" &&
    choiceObj.choicesL4 === "comp introduces"
  ) {
    const solution = ("License process, or try again to develop.");
    return <h1>{solution}</h1>
  }
  else if (
    choiceObj.choicesL1 === "authorize" &&
    choiceObj.choicesL2 === "fails" &&
    choiceObj.choicesL4 === "comp does not introduce"
  ) {
    const solution = "No change in situation.";
    return <h1>{solution}</h1>
  }
  else if (choiceObj.choicesL1 === "kill" && choiceObj.choicesL4 === "comp introduces") {
    const solution = "License process, or try again to develop."
    return <h1>{solution}</h1>;
  }
  else if (choiceObj.choicesL1 === "kill" && choiceObj.choicesL4 === "comp does not introduce") {
    const solution ="No Change"
    return <h1>{solution}</h1>;
  }else{ const solution =('keep trying')
  return <h1>{solution}</h1>}
 
};



  return (
    <div>
     
     
        <ChoiceAB />
    
        <LevelTwo />
      
        <LevelThree />
    
      <LevelFour />
      
      
        <button onClick={evalForm}>Submit</button>

        {evalForm()}
    
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