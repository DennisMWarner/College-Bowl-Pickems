using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BowlPickems.Models;
using BowlPickems.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BowlPickems.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UsersController : ControllerBase
  {
    private readonly UsersService _us;
    public UsersController(UsersService us)
    {
      _us = us;
    }
    [HttpGet]
    [Authorize]

    public ActionResult<IEnumerable<User>> Get()
    {
      try
      {
        return Ok(_us.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }


    [HttpPost]
    [Authorize]
    public ActionResult<User> Post([FromBody] User newUser)
    {
      try
      {
        return Ok(_us.Create(newUser));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    // [HttpDelete("{id}")]
    // [Authorize]
    // public ActionResult<string> Delete(int id)
    // {
    //   try
    //   {

    //     return Ok(_us.Delete(id));
    //   }
    //   catch (System.Exception error)
    //   {
    //     return BadRequest(error.Message);
    //   }
    // }


    [HttpPut("{id}")]
    [Authorize]
    public ActionResult<User> EditUser([FromBody] User userToUpdate)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        userToUpdate.UserId = userId.Value;
        return Ok(_us.EditUser(userToUpdate));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}