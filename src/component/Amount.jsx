import AmountSelect from "../ui-components/AmountSelect";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { postFetch } from "../../functions";

function Amount(){
  const [option, setOption] = useState([]);
  const [buttonState, setButtonState] = useState(true);
  const [buttonText, setButtonText] = useState('追加')
  const [tempId,setTempId] = useState('');
  const [selectState, setSelectState] = useState(true);
  const [selectText, setSelectText] = useState('読み込み中です');
  const [searchParams] = useSearchParams();
  const pageId = searchParams.get('id');
  const insertFuncUrl = "https://5435rsl5qvfs6myzs3ypcmahyy0smtyb.lambda-url.ap-northeast-1.on.aws/";

  useEffect(()=>{
    (async function(){
      const response = await fetch("https://ktfyc77aoadihz7oldpo7pi3cq0cbxcy.lambda-url.ap-northeast-1.on.aws/");
      const json = await response.json();
      
      const options = json.map((item)=>{
        return <option key={item.id} value={item.id}>{item.name}</option>
      });
      setOption(options)
      setSelectState(false);
      setSelectText('テンプレートを選択');
    })();
  },[])

  const handleSelectChange = (e)=>{
    const value = e.target.value;
    if(value){
      setButtonState(false);
      setTempId(value);
    }else{
      setButtonState(true);
      setTempId('');
    }
  }

  const handleClick = async()=>{
    setButtonState(true);
    setButtonText('追加しています...');
    const params = {
      pageId: pageId,
      tempId: tempId
    }
    const insertResult = await postFetch(insertFuncUrl,params);
    setButtonState(false);
    setButtonText('追加');
    console.log("client",insertResult);
  }

  useEffect(()=>{
    console.log(pageId);
  },[pageId])
  return(
    <AmountSelect
     templateSelect={option}
     onChange={handleSelectChange}
     buttonState={buttonState}
     handleClick={handleClick}
     buttonLabel={buttonText}
     selectState={selectState}
     selectPlaceHolder={selectText}
     ></AmountSelect>
  )
}

export default Amount