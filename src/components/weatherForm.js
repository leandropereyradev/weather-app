import { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") setCity(value);
  };

  const submit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <div className="formContainer">
      <div>
        <h1 className="titleForm">Weather App</h1>
      </div>
      <div>
        <form onSubmit={submit}>
          <label htmlFor="city" className="inputContainer">
            <span>
              <h3>City: </h3>
            </span>
            <input type="text" id="city" onChange={onChange} autoFocus className="inputForm" />
          </label>
        </form>
      </div>
    </div>
  );
}
