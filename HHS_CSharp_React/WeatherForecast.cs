using System.ComponentModel.DataAnnotations;

namespace HHS_CSharp_React;

public class WeatherForecast
{
    [Key]
    public int Id { get; set; }

    public int TemperatureC { get; set; }

    public string? Summary { get; set; }
}

