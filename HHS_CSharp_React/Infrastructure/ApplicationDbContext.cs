using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HHS_CSharp_React.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }

        public ApplicationDbContext() : base()
        {

        }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}

