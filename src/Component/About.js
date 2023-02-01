import React, { useState } from 'react'

const About = () => {
    const[style, setStyle] = useState({
            backgroundColor:"black",
            color:"white",
            border:"1px solid #fff"
        })

        const[btntext , setBtntext] = useState("Enble to dark mode")

    const  togglestyle = ()=>{
        if(style.color ==="black"){
            setStyle({
                backgroundColor:"black",
                color:"white",
                border:"1px solid white"
            })
            setBtntext("Enble to light mode")
        }
        else{
            setStyle({
                backgroundColor:"white",
                color:"black",
                border:"1px solid black"
            }) 
            setBtntext("Enble to dark mode")
        }
    }
    
  return (
    <div className="container my-4" style={style}>
    <h1>About us</h1>
    <div className="accordion accordion-flush"   id="accordionFlushExample">
    <div className="accordion-item"  style={style}  >
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item"  style={style}>
      <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item"  style={style}>
      <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed"  style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>
  <button type="button" onClick={togglestyle}  className="btn btn-primary my-2 m-2">{btntext}</button>
  </div>
  )
}

export default About
