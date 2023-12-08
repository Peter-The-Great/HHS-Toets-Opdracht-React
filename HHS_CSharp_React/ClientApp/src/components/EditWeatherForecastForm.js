import React, { Component } from 'react';

export class EditWeatherForecastForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
                temperatureC: 0,
                summary: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {       
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        // stuur post request naar API
        
            const response = await fetch('weatherforecast', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: 0, ...this.state })
            });

            await response.json();

        this.props.populateWeatherData();
         
    }

    render() {
        return (
            <div>
                <h1 id="tableLabel">Weather forecast voegen</h1>
                <form>
                    <label>
                        Summary:
                        <input type="text" name="summary" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Temp:
                        <input type="number" name="temperatureC" onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}
