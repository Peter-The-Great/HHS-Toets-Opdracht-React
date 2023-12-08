using HHS_CSharp_React.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HHS_CSharp_React.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly IWeatherForecastRepository _repo;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherForecastRepository repo)
    {
        _logger = logger;
        _repo = repo;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return _repo.GetWeatherForecasts() ?? new List<WeatherForecast>();
    }

    [HttpGet("{id}")]
    public WeatherForecast GetByName(int id)
    {
        var item = _repo.GetWeatherForecast(id);

        if(item == null)
        {
            return null;
        }

        return item;
    }

    // TODO: implementeer weather forecast toevoegen
    [HttpPost]
    public WeatherForecast Add(WeatherForecast weatherForecast)
    {
        if(weatherForecast != null)
        {
            return _repo.Add(weatherForecast);
        }

        return null;
    }
}

