import AmountSelect from "../ui-components/AmountSelect";
import { useEffect, useState } from "react";

function Amount(){
  const [option, setOption] = useState([]);

  useEffect(()=>{
    (async function(){
      const response = await fetch("https://ktfyc77aoadihz7oldpo7pi3cq0cbxcy.lambda-url.ap-northeast-1.on.aws/");
      const json = await response.json();
      
      const options = json.map((item)=>{
        return <option key={item.id} value={item.id}>{item.name}</option>
      });
      setOption(options)
    })();
  },[])

  useEffect(()=>{
    console.log(option)
  },[option])
  return(
    <AmountSelect templateSelect={option}></AmountSelect>
  )
}

export default Amount