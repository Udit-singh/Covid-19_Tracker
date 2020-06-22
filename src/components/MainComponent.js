import React, { Component } from 'react';
import {Cards, Chart, CountryPicker } from '../components';
import styles from '../App.module.css';
import { fetchData } from '../api';
import Header from './HeaderComponent';

class Main extends React.Component {
    state = {
        data: {},
        country: '',
      }
    
      async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({ data: fetchedData });
      }
      
    
      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    
    render() {
      const { data, country } = this.state;

      return (
        <div>
            <Header />
        <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} /> 
        </div>
        </div>
      );
    }
  }

  export default Main;