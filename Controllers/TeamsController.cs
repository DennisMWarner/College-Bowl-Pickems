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
  public class TeamsController : ControllerBase
  {
    private readonly TeamsService _ts;
    public TeamsController(TeamsService ts)
    {
      _ts = ts;
    }
    [HttpGet]

    public ActionResult<IEnumerable<Team>> Get()
    {
      try
      {
        return Ok(_ts.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Team> Post([FromBody] Team newTeam)
    {
      try
      {
        return Ok(_ts.Create(newTeam));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpPut]
    [Authorize]

    public ActionResult<Team> EditTeam([FromBody] Team teamToUpdate)
    {
      try
      {
        return Ok(_ts.EditTeam(teamToUpdate));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}