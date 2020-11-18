using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using BowlPickems.Repositories;

namespace BowlPickems.Services
{
  public class GamesService
  {
    private readonly GamesRepository _repo;
    public GamesService(GamesRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<Game> Get()
    {
      return _repo.Get();
    }
    public Game Create(Game newGame)
    {
      return _repo.Create(newGame);
    }
  }
}