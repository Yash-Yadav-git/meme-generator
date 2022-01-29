import React from "react";
import memeData from "../memeData";

function input() {
  // let imageUrl = memeData.data.memes.map((x) => {
  //   console.log(x.url);
  // });

  function imageUrl() {
    let data = memeData.data.memes;
    let randomNumber = Math.floor(Math.random() * data.length);
    let url = data[randomNumber].url;
    console.log(url);
  }
  return (
    <section className="input-section-wrapper">
      <div className="inputs">
        <input
          type="text"
          className="input-1"
          placeholder="Enter Top Line Text Here"
        />
        <input
          type="text"
          className="input-1"
          placeholder="Enter Bottom Line Text Here"
        />
      </div>

      <div>
        <button className="button-section" type="submit" onClick={imageUrl}>
          <label htmlFor="button-section" className="labels">
            GET NEW IMAGE
          </label>
        </button>
      </div>
      <div className="image-wrapper"></div>
    </section>
  );
}

export default input;
