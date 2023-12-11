import React from "react";

const Form = props => (
  <form onSubmit={ props.addWeather }>
    <input type="text" name="city" placeholder="Введіть місто" />
    <button>Отримати погоду</button>
  </form>
) 

export default Form;