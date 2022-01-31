import React, { useState } from "react";

function Forms() {
  const [formData, seState] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    checked: true,
    employment: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    seState((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //submitToApi(formData);
    console.log(formData);
  }

  // console.log(formData.employment);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        placeholder="First Name"
        value={formData.lastName}
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checked"
        checked={formData.checked}
        onChange={handleChange}
      />
      <label htmlFor="checker">Hoagya?</label>
      <br />
      <fieldset>
        <legend>Current Employment Status</legend>
        <input
          type="radio"
          id="unemployment"
          value="unemployment"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === "unemployment"}
        />
        <label htmlFor="unemployment">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          value="part-time"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          id="contract"
          value="contract"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === "contract"}
        />
        <label htmlFor="contract">Contract</label>
        <br />
        <input
          type="radio"
          id="full-time"
          value="full-time"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full time</label>
        <br />
      </fieldset>

      <button>Submit</button>
    </form>
  );
}

export default Forms;
