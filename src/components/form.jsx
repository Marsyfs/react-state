import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  //this stores what the user is typing in the form, and updates the state with the new values.

  const [submittedData, setSubmittedData] = useState(null);

  //So we use submittedData to store what was submitted, and formData to store what is currently being typed. This way, we can show the submitted data separately from the form inputs.
  //formData => what the user is currently typing, submittedData => what was submitted when the form was submitted.

  const handleChange = (e) => {
    const { name, value } = e.target;

  //Declare a variable and assign a function to it that takes in the event as an argument.
  //The event contains information about the input that triggered the change, such as its name and value. We use destructuring to extract the name and value from the event target.
  //eg. e.target === the input element, <input name="age" value="29" /> => e.target.name === "age", e.target.value === "29", short hand is const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  //[name] : value means update whichever field is being changed, eg [name] === "age", then update the age field with the new value. This way, we can use the same handleChange function for both inputs, and it will update the correct field in the formData state based on the name of the input that triggered the change.

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  //this deals with what happens when we click submit. We submit the event, prevent the page refreshing so we dont lose our state and we make the submittedData equal to the formData, which is what the user has typed in. This way, we can show the submitted data separately from the form inputs.

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Age:
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Profile:</h3>
          <p>
            {submittedData.name} is {submittedData.age} years old
          </p>
        </div>
      )}
    </>
  );
}

//we have stopped the refresh on submit in the handleSubmit function. submittedData && is a CONDITIONAL RENDER. It means if there is submittedData, then render it, if there isn't, don't.