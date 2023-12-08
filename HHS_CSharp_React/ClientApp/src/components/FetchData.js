import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = {
          forecasts: [], singleForecast: null, loading: true
      };
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
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
    }

    static renderSingleForecast(forecast) {
        return (<div>
            <span>Date: {forecast.date}</span><br />
            <span>Temp: {forecast.temperatureC}</span><br />
            <span>Summary: {forecast.summary}</span>
        </div>);
    }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
          : FetchData.renderForecastsTable(this.state.forecasts);

      let singleForecast = this.state.loading || !this.state.singleForecast
          ? <p><em>Loading...</em></p>
          : FetchData.renderSingleForecast(this.state.singleForecast);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
            {contents}

            <h1>Single forecast</h1>
            {singleForecast}
      </div>
    );
  }

  async populateWeatherData() {
      const response = await fetch('weatherforecast');
    
      const data = await response.json();

    this.setState({ forecasts: data, loading: false });
    }

    async fetchOne() {
        const response = await fetch('weatherforecast/test1');
        const data = await response.json();
        console.log(data);
        this.setState({ singleForecast: data, loading: false });
    } 
}
