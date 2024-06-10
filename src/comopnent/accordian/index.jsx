
import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {
    const[selected,setSelected]=useState(0)
    const[enableMultiple,setEnableMultiple]=useState(false)
    const[multiple,setMultiple]=useState([])
    const[symbol,setSymbol]=useState('+')
    
    function Togglesymbol(){
       
      setSymbol((prevSymbol)=>(prevSymbol=== '+'?'-':'+'))
    }

    function handlesingleselection(getCurrentId)
    {
        setSelected(getCurrentId===selected?null:getCurrentId)
    }

    function handleMultipleSelection(getCurrentId)
    {
        let cpyMultiple=[...multiple]
        const findindexofCurrentId=cpyMultiple.indexOf(getCurrentId)

        if(findindexofCurrentId===-1)
            cpyMultiple.push(getCurrentId)
        else
        cpyMultiple.splice(findindexofCurrentId,1)

        setMultiple(cpyMultiple);
    }
    console.log(selected,setMultiple);

    
  
    return(
        <div className="wrapper">
            <button onClick={()=>setEnableMultiple(!enableMultiple)}>Enable Multiple Selection</button>
            <div className="accordian">
                {data &&data.length>0 ?(
                    data.map((dataItem)=>(
                        <div className="item">
                            <div onClick={enableMultiple?
                            ()=>handleMultipleSelection(dataItem.id)
                            :()=>handlesingleselection(dataItem.id)}className="title">
                                <h3>{dataItem.question}</h3>
                                <span onClick={Togglesymbol}>{symbol}</span>
                            </div>
                            {
                                (selected===dataItem.id || multiple.indexOf(dataItem.id)!== -1)?
                                    <div className="content">{dataItem.answer}</div>
                                :null
                            }
                        </div>
                    ))
                ):(
                    <div>No datafound</div> )
                }
                </div>
                </div>
 );}