import React, { Component } from 'react';
import {Cards, Chart, CountryPicker } from '../components';
import styles from '../App.module.css';
import { fetchData } from '../api';
import Header from './HeaderComponent';

class Main extends React.Component {
    state = {
        data: {},
      }
    
      async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({ data: fetchedData });
      }
    render() {
        const { data } = this.state;
      return (
        <div>
            <Header />
        <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker />
            <Chart /> 
        </div>
        </div>
      );
    }
  }

  export default Main;