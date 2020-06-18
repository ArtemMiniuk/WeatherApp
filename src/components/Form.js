import React from "react";

const Form = props => (
	<form onSubmit = {props.getWeather}>
      <input type="text" name="city" placeholder="Город..."/>
      <button>Поиск</button>
  </form>    
);

export default Form; 