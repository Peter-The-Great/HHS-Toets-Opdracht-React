using Microsoft.AspNetCore.Mvc;

namespace HHS_CSharp_React.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private static readonly List<WeatherForecast> weatherForecasts = new List<WeatherForecast>()
    {
        new WeatherForecast()
        {
            Date = DateOnly.FromDateTime(DateTime.Now),
            Summary = "Test1",
            TemperatureC = 25
        },
        new WeatherForecast()
        {
            Date = DateOnly.FromDateTime(DateTime.Now),
            Summary = "Test2",
            TemperatureC = 27
        }
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("{name}")]
    public WeatherForecast GetByName(string name)
    {
        var item = weatherForecasts
            .FirstOrDefault(x =>
            string.Equals(x.Summary, name, StringComparison.InvariantCultureIgnoreCase));

        ArgumentNullException.ThrowIfNull(item);

        return item;
    }
}

