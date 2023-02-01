
import React, { useState } from 'react'

const TextArea = (props) => {

    const [text, setText] = useState("")

     const  Updata = ()=>{ 
        let data = text.toUpperCase()
        setText(data)
        props.showAlert("Convert UpperCase ", "Successfully")
        document.title = "Convert UpperCase mode"
     }

     const Lodata = ()=>{
       var data = text.toLocaleLowerCase()
         setText(data)
         props.showAlert("Convert LowerCase ", "Successfully")
         document.title = "Convert LowerCase mode"
     }
     
   const Clear =()=>{
   var data = ""
   setText(data)
   props.showAlert("Clear text ", "Successfully")
   document.title = "Clear  mode"
   }

   const  select = ()=>{
  //   let data = document.getElementById("myBox")
  //  data.select()
   navigator.clipboard.writeText(text)
   document.getSelection().removeAllRanges();
   props.showAlert("select text ", "Successfully")
   document.title = "select text  mode"

   }

   const space = ()=>{
      let data = text.split(/[ ]+/)
      setText(data.join(" "))
      props.showAlert("space remove ", "Successfully")
      document.title = "Select mode"
     
   }
  return (
<>
<div className="mb-3 my-4"  style={{color:props.mode==="dark"?"white":"#042743"}}>
  <h1>{props.heading}</h1>
  <textarea className="form-control"
   value={text} style={{backgroundColor:props.mode==="dark"?"#042743":"white" , color:props.mode==="dark"?"white":"dark"}}  onChange={(event)=>setText(event.target.value)}  id="myBox" rows="8"></textarea>
</div>
 <div >
<button disabled={text.length===0}  type="button"  onClick={Updata}   className="btn btn-primary my-2 m-2">Change UpperCase</button>
<button disabled={text.length===0}  type="button" onClick={Lodata}  className="btn btn-secondary m-2">Change to LowerCase</button>
<button disabled={text.length===0}  type="button" onClick={Clear}  className="btn btn-success m-2">Clear</button>
<button disabled={text.length===0}  type="button" onClick={select} className="btn btn-danger m-2">Copy-Text</button>
<button disabled={text.length===0}  type="button" onClick={space} className="btn btn-warning m-2">Remove-space</button>
 </div>

 <div className="container my-4"  style={{color:props.mode==="dark"?"white":"#042743"}}>
 <h1>Text -Sammary</h1>
 <p>{ text?.split(/\s+/)?.filter((el)=>{return el.length!==0}).length} :  Word && {text?.length} : Latter </p>

  <p> {text.length>0?0.008 * text?.split(" ")?.length:"0"} Minuts read </p>
  <h2>Text Preview</h2>
  {text.length>0?text:"Nothing to Preview !.."}
 </div>
</>
  )
}

export default TextArea
