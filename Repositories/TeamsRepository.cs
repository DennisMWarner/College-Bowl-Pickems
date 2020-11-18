using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using Dapper;

namespace BowlPickems.Repositories
{
  public class TeamsRepository
  {
    private readonly IDbConnection _db;

    public TeamsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Team> Get()
    {

      string sql = "SELECT * FROM teams";
      return _db.Query<Team>(sql);
    }

    internal Team Create(Team newTeam)
    {
      string sql = @"
            INSERT INTO teams(name, abbName, priColor, secColor, triColor, confRecord, overallRec, mascotImg, teamUrl, gameId)
            VALUES(@Name, @AbbName, @PriColor, @SecColor, @TriColor, @ConfRecord, @OverallRec, @MascotImg, @TeamUrl, @GameId); 
            SELECT LAST_INSERT_ID()
        ";
      newTeam.Id = _db.ExecuteScalar<int>(sql, newTeam);
      return newTeam;
    }



    internal IEnumerable<Game> GetUserTeams(string userId)
    {

      string sql = "SELECT * FROM teams WHERE userId = @UserId";
      return _db.Query<Game>(sql, new { userId });

    }

    internal bool Delete(int id, string userId)
    {
      {
        string sql = @"
     DELETE FROM teams WHERE(id =@Id AND userId = @UserId) LIMIT 1";
        int affectedRows = _db.Execute(sql, new { id, userId });
        return affectedRows == 1;
      }
    }

    // internal bool EditTeam(Team TeamToUpdate)
    // {
    //   {
    //     string sql = "UPDATE teams SET Views = @views, Teams = @Teams WHERE id = @Id";
    //     int affectedRows = _db.Execute(sql, TeamToUpdate);
    //     return affectedRows == 1;
    //   }
    // }

    internal Team EditTeam(Team teamToUpdate)
    {
      {
        string sql = "UPDATE teams SET gameId = @GameId WHERE id = @Id";
        int affectedRows = _db.Execute(sql, teamToUpdate);
        return teamToUpdate;
      }
    }

    internal Team GetTeamById(int id)
    {
      string sql = "SELECT * FROM teams WHERE id = @Id";
      return _db.QueryFirstOrDefault<Team>(sql, new { id });
    }
  }
}