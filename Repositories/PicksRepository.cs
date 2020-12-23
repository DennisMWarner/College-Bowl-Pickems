using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using Dapper;

namespace BowlPickems.Repositories
{
  public class PicksRepository
  {
    private readonly IDbConnection _db;

    public PicksRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Pick> Get()
    {

      string sql = "SELECT * FROM picks";
      return _db.Query<Pick>(sql);
    }
    internal IEnumerable<Pick> GetByUserId(string userId)
    {
      string sql = "SELECT * FROM picks WHERE userId =@UserId";
      return _db.Query<Pick>(sql, new { userId });
    }
    internal Pick Create(Pick newPick)
    {
      string sql = @"
            INSERT INTO picks(gameId, userId, teamId, points)
            VALUES(@GameId, @UserId, @TeamId, @Points); 
            SELECT LAST_INSERT_ID()
        ";
      newPick.Id = _db.ExecuteScalar<int>(sql, newPick);
      return newPick;
    }



    internal IEnumerable<Game> GetUserPicks(string userId)
    {

      string sql = "SELECT * FROM picks WHERE userId = @UserId";
      return _db.Query<Game>(sql, new { userId });

    }

    // internal int Delete(string userId)
    // {
    //   {
    //     string sql = @"
    //  DELETE FROM picks WHERE userId = @UserId";
    //     int affectedRows = _db.Execute(sql, new { userId });
    //     return affectedRows;
    //   }
    // }

    internal Pick EditPick(Pick pickToUpdate)
    {
      {
        string sql = "UPDATE picks SET  teamId = @TeamId, points=@Points WHERE id = @Id";
        int affectedRows = _db.Execute(sql, pickToUpdate);
        return pickToUpdate;
      }
    }

    internal Pick GetPickById(int id)
    {
      string sql = "SELECT * FROM picks WHERE id = @Id";
      return _db.QueryFirstOrDefault<Pick>(sql, new { id });
    }
  }
}