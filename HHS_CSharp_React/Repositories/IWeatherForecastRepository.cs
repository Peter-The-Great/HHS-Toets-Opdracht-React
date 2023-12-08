using System;
using HHS_CSharp_React.Infrastructure;

namespace HHS_CSharp_React.Repositories
{
	public interface IWeatherForecastRepository
	{
        IEnumerable<WeatherForecast> GetWeatherForecasts();

        WeatherForecast? GetWeatherForecast(int id);

        WeatherForecast Add(WeatherForecast weatherForecast);
    }
}

