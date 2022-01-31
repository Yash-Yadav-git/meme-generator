import React, { useState } from "react";

export default function PracticeForm() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [formData, setState] = React.useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
    checked: false,
  });

  function handleChange(event) {
    console.log(formData);
    setState((prevData) => {
      const { name, type, value, checked } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    formData.password === formData.confirmPassword && formData.checked === true
      ? console.log(
          "Successfully signed in and thanks for subscribing to our newsletter"
        )
      : console.log("Passwords do not match");

    //   ? console.log("Thanks for signing up for our newsletter")
    //   : console.log("we wont send the mails");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="emailAddress"
          onChange={handleChange}
          value={formData.emailAddress}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="checked"
            onChange={handleChange}
            checked={formData.checked}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
