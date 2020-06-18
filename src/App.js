import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ae04de5a38e25aab5746a94d969bcd6a";

class App extends Component {
	state = {
		city: undefined,
		country: undefined,
		temperature: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,
	};
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		if (city) {
			let data;
			try {
				const api_call = await fetch(
					`http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${API_KEY}&units=metric`
				);
				data = await api_call.json();
				this.setState({
					city: data.name,
					country: data.sys.country,
					temperature: data.main.temp,
					humidity: data.main.humidity,
					description: data.weather[0].description,
					error: "",
				});
			} catch (e) {
				alert("Ошибка");
			}
		} else {
			this.setState({
				city: undefined,
				country: undefined,
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				error: "Введите, пожалуйста, название города",
			});
		}
	};
	render() {
		return (
			<div>
				<div id='background-wrap'>
					<div class='x1'>
						<div class='cloud'></div>
					</div>

					<div class='x2'>
						<div class='cloud'></div>
					</div>

					<div class='x3'>
						<div class='cloud'></div>
					</div>

					<div class='x4'>
						<div class='cloud'></div>
					</div>

					<div class='x5'>
						<div class='cloud'></div>
					</div>
				</div>
				<div className='wrapper'>
					<div className='main'>
						<div className='container'>
							<div className='row'>
								<div className='col-xs-5 title-container'>
									<Titles />
								</div>
								<div className='col-xs-7 form-container'>
									<Form getWeather={this.getWeather} />
									<Weather
										city={this.state.city}
										country={this.state.country}
										temperature={this.state.temperature}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
