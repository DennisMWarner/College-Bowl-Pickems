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
    public IEnumerable<Game> GetOtherGames()
    {
      return _repo.GetOtherGames();
    }
    public Game Create(Game newGame)
    {
      return _repo.Create(newGame);
    }
    internal Game EditGame(Game gameToUpdate)
    {
      return _repo.EditGame(gameToUpdate);


    }
    internal string Delete(int id)
    {
      if (_repo.Delete(id))
      {
        return "game deleted.";
      }
      throw new Exception("Could not delete DB data");
    }
  }
}