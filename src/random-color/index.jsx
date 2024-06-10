import {useState,useEffect} from "react";
export default function RandomColor(){
  const[typeOfColor,setTypeOfColor]=useState('hex')
  const[color,setColor]=useState("#000000")

  function handleUtility(length)
  {
    return Math.floor(Math.random()*length)
  }

  function handleSetRandomHexColor()
  {
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexcolor="#"

    for(let i=0;i<6;i++)
      {
        hexcolor +=hex[handleUtility(hex.length)]
      }
      console.log(hexcolor)
      setColor(hexcolor)
  }
  function handleSetRandomRgbColor()
  {
    const r=handleUtility(256)
    const g=handleUtility(256)
    const b=handleUtility(256)

    setColor(`rgb${r},${g},${b}`)

  }

  useEffect(()=>
    {
  if(typeOfColor==='rgb')handleSetRandomRgbColor()
  else handleSetRandomHexColor()

    },[typeOfColor])
    return (
      <div style={{
        width:"100vw",
        height:"100vh",
        background:color
      }}>
        <button onClick={()=>setTypeOfColor('hex')}>Generate HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Generate RGB Color</button>
        <button onClick={typeOfColor==='hex'?handleSetRandomHexColor:handleSetRandomHexColor}>
          Generate Random Color</button>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"white",
            fontSize:"60px",
            marginTop:"60px",
            marginLeft:"40px",


          }}>
            <h1>{typeOfColor === 'rgb'?'RGB Color':'HEX Color'}</h1>
            <h3>{color}</h3>
          </div>
      </div>
       
    );
    

  
}
