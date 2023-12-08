using System;
using HHS_CSharp_React.Infrastructure;

namespace HHS_CSharp_React.Repositories
{
	public class WeatherForecastRepository : IWeatherForecastRepository
	{
        private readonly ApplicationDbContext _context;
        public WeatherForecastRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<WeatherForecast> GetWeatherForecasts()
        {
            return _context.WeatherForecasts.ToList();
        }

        public WeatherForecast? GetWeatherForecast(int id)
        {    
            return _context.WeatherForecasts.FirstOrDefault(x => x.Id == id);  
        }

        // TODO: implementeer weather forecast toevoegen
        public WeatherForecast Add(WeatherForecast weatherForecast)
        {
            _context.WeatherForecasts.Add(weatherForecast);
            _context.SaveChanges();
            return weatherForecast;
        }
    }
}

