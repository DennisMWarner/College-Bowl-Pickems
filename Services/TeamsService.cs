using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using BowlPickems.Repositories;

namespace BowlPickems.Services
{
  public class TeamsService
  {
    private readonly TeamsRepository _repo;
    public TeamsService(TeamsRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<Team> Get()
    {
      return _repo.Get();
    }
    public Team Create(Team newTeam)
    {
      return _repo.Create(newTeam);
    }
    internal Team EditTeam(Team teamToUpdate)
    {
      return _repo.EditTeam(teamToUpdate);


    }
  }
}