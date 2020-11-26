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
  public class PicksController : ControllerBase
  {
    private readonly PicksService _ps;
    public PicksController(PicksService ps)
    {
      _ps = ps;
    }
    [HttpGet]
    [Authorize]

    public ActionResult<IEnumerable<Pick>> Get()
    {
      try
      {
        return Ok(_ps.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }
    [HttpGet("myPicks")]
    [Authorize]
    public ActionResult<IEnumerable<Pick>> GetByUserId()
    {
      try
      {
        var userClaim = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        var userId = userClaim.Value;

        return Ok(_ps.GetByUserId(userId));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Pick> Post([FromBody] Pick newPick)
    {
      try
      {
        return Ok(_ps.Create(newPick));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpPut]
    [Authorize]

    public ActionResult<Pick> EditPick([FromBody] Pick PickToUpdate)
    {
      try
      {
        return Ok(_ps.EditPick(PickToUpdate));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}