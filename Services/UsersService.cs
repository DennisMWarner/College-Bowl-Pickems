using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using BowlPickems.Repositories;

namespace BowlPickems.Services
{
  public class UsersService
  {
    private readonly UsersRepository _repo;
    public UsersService(UsersRepository repo)
    {
      _repo = repo;
    }

    public IEnumerable<User> Get()
    {
      return _repo.Get();
    }
    public IEnumerable<User> GetByUserId(string userId)
    {
      return _repo.GetByUserId(userId);
    }
    public User Create(User newUser)
    {
      return _repo.Create(newUser);
    }

    // internal string Delete(int id)
    // {
    //   if (_repo.Delete(id))
    //   {
    //     return "User successfully removed.";
    //   }
    //   throw new Exception("Could not delete user");
    // }
    // internal User EditUser(User userToUpdate)
    // {
    //   return _repo.EditUser(userToUpdate);


    // }
    internal User EditUser(User userToUpdate)
    {
      return _repo.EditUser(userToUpdate);
    }
  }
}