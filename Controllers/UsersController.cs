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
    [HttpPut]
    [Authorize]

    public ActionResult<User> EditUser([FromBody] User UserToUpdate)
    {
      try
      {
        return Ok(_us.EditUser(UserToUpdate));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}