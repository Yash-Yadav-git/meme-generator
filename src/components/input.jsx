import React from "react";

function input() {
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
        <button className="button-section" type="submit">
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
