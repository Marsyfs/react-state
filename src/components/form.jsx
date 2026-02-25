import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

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