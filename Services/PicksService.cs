using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using BowlPickems.Repositories;

namespace BowlPickems.Services
{
  public class PicksService
  {
    private readonly PicksRepository _repo;
    public PicksService(PicksRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<Pick> Get()
    {
      return _repo.Get();
    }
    public IEnumerable<Pick> GetByUserId(string userId)
    {
      return _repo.GetByUserId(userId);
    }
    public Pick Create(Pick newPick)
    {
      return _repo.Create(newPick);
    }
    internal Pick EditPick(Pick pickToUpdate)
    {
      return _repo.EditPick(pickToUpdate);


    }
    // internal string Delete(string userId)
    // {
    //   if (_repo.Delete(userId) > 1)
    //   {
    //     return "picks successfully removed.";
    //   }
    //   throw new Exception("Could not delete picks");
    // }

  }
}