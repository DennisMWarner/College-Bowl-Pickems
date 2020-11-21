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
  public class GamesController : ControllerBase
  {
    private readonly GamesService _gs;
    public GamesController(GamesService gs)
    {
      _gs = gs;
    }
    [HttpGet]

    public ActionResult<IEnumerable<Game>> Get()
    {
      try
      {
        return Ok(_gs.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Game> Post([FromBody] Game newGame)
    {
      try
      {
        return Ok(_gs.Create(newGame));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpPut("{id}")]
    [Authorize]

    public ActionResult<Game> EditGame([FromBody] Game gameToUpdate)
    {
      try
      {
        return Ok(_gs.EditGame(gameToUpdate));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpDelete("{id}")]
    [Authorize]
    public ActionResult<string> Delete(int id)
    {
      try
      {

        return Ok(_gs.Delete(id));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

  }
}