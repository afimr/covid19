import React, { useState } from "react";
import './App.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


export default class FetchCountry extends React.Component { 
  
  state = {
    loading: true,
    isSelected: true,
    country: null,
    countrySelect: null,
    value: 'USA',
    variable:'USA'
  }

  onChange = e =>{
    this.setState({value: e.target.value});
    this.setState({variable: e.target.options[e.target.selectedIndex].text});
    
  }

  async componentDidUpdate(){
    const {value}=this.state;
    if(value !== "country"){
    var selectedUrl = "https://covid19.mathdro.id/api/countries/"+value;
    let selectedResponse = await fetch(selectedUrl);
    let selectedData = await selectedResponse.json(selectedUrl);
    this.setState({ countrySelect: selectedData});
    }
  }

  async componentDidMount() {
    const url = "https://covid19.mathdro.id/api";
    const response = await fetch(url);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    this.setState({ country: data, loading: false});
  }
 

  render() {
    
    const {value}=this.state;
    const {variable}=this.state;


    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.country) {
      return <div>Failed to get data</div>;
    }

    if(value !== "USA" && value !=="country"){
      return(<div className="Output">
      <h2 className ="global">WORLD STATISTIC</h2>
      <div className="divContainer">
        <div className="confirmed">
          <span>Confirmed </span>
			    <p>{numberWithCommas(this.state.country.confirmed.value)}</p>
        </div>

        <div className="recovered">
          <span>Recovered </span>
			    <p>{numberWithCommas(this.state.country.recovered.value)}</p>
        </div>
        <div className="deaths">
          <span>Deaths </span>
			    <p>{numberWithCommas(this.state.country.deaths.value)}</p>
        </div>
      </div>

      <select className="combobox"
        
        value ={value} onChange={this.onChange}
      >
        <option value="country">Country...</option>
        <option value="afghanistan">Afghanistan</option>
        <option value="armenia">Armenia</option>
        <option value="azerbaijan">Azerbaijan</option>
        <option value="bahrain">Bahrain</option>
        <option value="bangladesh	">Bangladesh</option>
        <option value="bhutan">Bhutan</option>
        <option value="brunei">Brunei</option>
        <option value="cambodia">Cambodia</option>
        <option value="china">China</option>
        <option value="cyprus">Cyprus</option>
        <option value="denmark">Denmark</option>
        <option value="ecuador">Ekuador</option>
        <option value="fiji">Fiji</option>
        <option value="philippines">Filipina</option>
        <option value="georgia">Georgia</option>
        <option value="haiti">Haiti</option>
        <option value="india">India</option>
        <option value="indonesia">Indonesia</option>
        <option value="iran">Iran</option>
        <option value="iraq">Iraq</option>
        <option value="israel">Israel</option>
        <option value="japan">Japan</option>
        <option value="jordan">Jordan</option>
        <option value="kazakhstan">Kazakhstan</option>
        <option value="kuwait">Kuwait</option>
        <option value="kyrgyzstan">Kyrgyzstan</option>
        <option value="laos">Laos</option>
        <option value="lebanon">Lebanon</option>
        <option value="malaysia">Malaysia</option>
        <option value="maldives">Maldives</option>
        <option value="mongolia">Mongolia</option>
        <option value="nepal">Nepal</option>
        <option value="nigeria">Nigeria</option>
        <option value="oman">Oman</option>
        <option value="romania">Rumania</option>
        <option value="pakistan">Pakistan</option>
        <option value="france">Perancis</option>
        <option value="philippines">Philippines</option>
        <option value="qatar">Qatar</option>
        <option value="SAU">Saudi Arabia</option>
        <option value="singapore">Singapore</option>
        <option value="KR">South Korea</option>
        <option value="LK">Sri Lanka</option>
        <option value="taiwan">Taiwan</option>
        <option value="tajikistan">Tajikistan</option>
        <option value="thailand">Thailand</option>
        <option value="timor-leste">Timor-Leste</option>
        <option value="turkey">Turkey</option>
        <option value="ARE">United Arab Emirates</option>
        <option value="uzbekistan">Uzbekistan</option>
        <option value="venezuela">Venezuela</option> 
        <option value="vietnam">Vietnam</option>
        <option value="yemen">Yemen</option>
        <option value="jordan">Yordania</option>
        <option value="zimbabwe">Zimbabwe</option>
      </select>

      <h2 className ="global" id="display">{variable}</h2>

      <div className="divContainer">
        <div className="confirmed">
          <span>Confirmed </span>
			    <p>{numberWithCommas(this.state.countrySelect.confirmed.value)}</p>
        </div>

        <div className="recovered">
          <span>Recovered </span>
			    <p>{numberWithCommas(this.state.countrySelect.recovered.value)}</p>
        </div>
        <div className="deaths">
          <span>Deaths </span>
			    <p>{numberWithCommas(this.state.countrySelect.deaths.value)}</p>
        </div>
      </div>
    </div>
    );
    }

    else if(value ==='USA' || value ==='country'){
    return(<div className="Output">
      <h2 className ="global">WORLD STATISTIC</h2>
      <div className="divContainer">
        <div className="confirmed">
          <span>Confirmed </span>
			    <p>{numberWithCommas(this.state.country.confirmed.value)}</p>
        </div>

        <div className="recovered">
          <span>Recovered </span>
			    <p>{numberWithCommas(this.state.country.recovered.value)}</p>
        </div>
        <div className="deaths">
          <span>Deaths </span>
			    <p>{numberWithCommas(this.state.country.deaths.value)}</p>
        </div>
      </div>

      <select className="combobox"
        
        value ={value} onChange={this.onChange}
      >
        <option value="country">Country...</option>
        <option value="afghanistan">Afghanistan</option>
        <option value="armenia">Armenia</option>
        <option value="azerbaijan">Azerbaijan</option>
        <option value="bahrain">Bahrain</option>
        <option value="bangladesh	">Bangladesh</option>
        <option value="bhutan">Bhutan</option>
        <option value="brunei">Brunei</option>
        <option value="cambodia">Cambodia</option>
        <option value="china">China</option>
        <option value="cyprus">Cyprus</option>
        <option value="denmark">Denmark</option>
        <option value="ecuador">Ekuador</option>
        <option value="philippines">Filipina</option>
        <option value="fiji">Fiji</option>
        <option value="georgia">Georgia</option>
        <option value="haiti">Haiti</option>
        <option value="india">India</option>
        <option value="indonesia">Indonesia</option>
        <option value="iran">Iran</option>
        <option value="iraq">Iraq</option>
        <option value="israel">Israel</option>
        <option value="japan">Japan</option>
        <option value="jordan">Jordan</option>
        <option value="kazakhstan">Kazakhstan</option>
        <option value="kuwait">Kuwait</option>
        <option value="kyrgyzstan">Kyrgyzstan</option>
        <option value="laos">Laos</option>
        <option value="lebanon">Lebanon</option>
        <option value="malaysia">Malaysia</option>
        <option value="maldives">Maldives</option>
        <option value="mongolia">Mongolia</option>
        <option value="nepal">Nepal</option>
        <option value="nigeria">Nigeria</option>
        <option value="oman">Oman</option>
        <option value="pakistan">Pakistan</option>
        <option value="france">Perancis</option>
        <option value="philippines">Philippines</option>
        <option value="qatar">Qatar</option>
        <option value="romania">Rumania</option>
        <option value="SAU">Saudi Arabia</option>
        <option value="singapore">Singapore</option>
        <option value="KR">South Korea</option>
        <option value="LK">Sri Lanka</option>
        <option value="taiwan">Taiwan</option>
        <option value="tajikistan">Tajikistan</option>
        <option value="thailand">Thailand</option>
        <option value="timor-leste">Timor-Leste</option>
        <option value="turkey">Turkey</option>
        <option value="AE">United Arab Emirates</option>
        <option value="uzbekistan">Uzbekistan</option>
        <option value="venezuela">Venezuela</option> 
        <option value="vietnam">Vietnam</option>
        <option value="yemen">Yemen</option>
        <option value="jordan">Yordania</option>
        <option value="Zimbabwe">Zimbabwe</option>
      </select>
    </div>
    );
    
  }
  }
}