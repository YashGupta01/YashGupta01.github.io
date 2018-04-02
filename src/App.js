import React, { Component } from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_Key = "9c4e5c111907f078eae62a19e4218ea9";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const data = await api_call.json();
    console.log(data);

  }

  render() {
    return (
      <div className="App">
       <Title />
       <Form getWeather={this.getWeather} />
       <Weather />
      </div>
    );
  }
}

export default App;
