import React, { Component } from 'react';
import { EditWeatherForecastForm } from './EditWeatherForecastForm';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = {
          forecasts: [], singleForecast: null, loading: true
      };

      this.populateWeatherData = this.populateWeatherData.bind(this);
  }

  componentDidMount() {
      this.populateWeatherData();
      this.fetchOne();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
         
            <th>Temp. (C)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast, index) =>
              <tr key={index}>
              
              <td>{forecast.temperatureC}</td>
 
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
    }

    static renderSingleForecast(forecast) {
        return (<table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                  
                    <th>Temp. (C)</th>
                    
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>{forecast?.temperatureC}</td>
                    <td>{forecast?.summary}</td>
                </tr>
            </tbody>
        
        </table>
        );
    }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
          : FetchData.renderForecastsTable(this.state.forecasts);

      let singleForecast = this.state.loading
          ? <p><em>Loading...</em></p>
          : FetchData.renderSingleForecast(this.state.singleForecast);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <h1>Single forecast</h1>
            {singleForecast}

            <EditWeatherForecastForm populateWeatherData={this.populateWeatherData } />
      </div>
    );
  }

  async populateWeatherData() {
      const response = await fetch('weatherforecast');
    
      const data = await response.json();

    this.setState({ forecasts: data, loading: false });
    }

    async fetchOne() {
        const response = await fetch('weatherforecast/1');
        const data = await response.json();
        console.log(data);
        this.setState({ singleForecast: data, loading: false });
    } 
}
