
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  return (
    <>
      <label>
        Name:
        <input
          value={formData.name}
          onChange={e => {
            setFormData({
              ...formData,
              name: e.target.value
            });
          }}
        />
      </label>

      <label>
        Age:
        <input
          value={formData.age}
          onChange={e => {
            setFormData({
              ...formData,
              age: e.target.value
            });
          }}
        />
      </label>

      <div>
        {formData.name} {formData.age}
      </div>
    </>
  );
}
