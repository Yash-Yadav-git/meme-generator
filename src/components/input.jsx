import React, { useState } from "react";
import memeData from "../memeData";

const Input = ()=> {

  const [image,setImage]= useState('https://i.imgflip.com/30b1gx.jpg')
  const [uppterText,setUpperText] = useState('')
  const [lowerText,setLowerText] = useState('')


  function imageUrl() {
    let data = memeData.data.memes;
    let randomNumber = Math.floor(Math.random() * data.length);
    let url = data[randomNumber].url;
    setImage(url)
  }

  const handleUpperChange = (e)=>{
    setUpperText(e.target.value)
  }
  const handlelowerChange = (e)=>{
    setLowerText(e.target.value)
  }

  const imagewrapper= {
    padding: "35px",
    marginBottom: "10%",
    height: "600px",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: "2px solid #d5d4d8",
    display:"flex",
    flexDirection:"column",
    justifyContent: 'space-between',
    alignItems:'center',
    fontSize:'50px',
    textTransform:'uppercase'
  }
  
  return (
    <section className="input-section-wrapper">
      <div className="inputs">
        <input
          type="text"
          className="input-1"
          placeholder="Enter Top Line Text Here"
          onChange={handleUpperChange}
        />
        <input
          type="text"
          className="input-1"
          placeholder="Enter Bottom Line Text Here"
          onChange={handlelowerChange}
        />
      </div>

      <div>
        <button className="button-section" type="submit" onClick={imageUrl}>
          <label htmlFor="button-section" className="labels">
            GET NEW IMAGE
          </label>
        </button>
      </div>
      <div style={imagewrapper} >
     
      <span>{uppterText}</span>
        <span>{lowerText}</span>
      </div>
    </section>
  );
}

export default Input;
