using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using Dapper;

namespace BowlPickems.Repositories
{
  public class GamesRepository
  {
    private readonly IDbConnection _db;

    public GamesRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Game> Get()
    {

      string sql = "SELECT * FROM Games";
      return _db.Query<Game>(sql);
    }

    internal Game Create(Game newGame)
    {
      string sql = @"
            INSERT INTO games(name, gameDate, loc, time, network)
            VALUES(@Name, @GameDate, @Loc, @Time, @Network); 
            SELECT LAST_INSERT_ID()
        ";
      newGame.Id = _db.ExecuteScalar<int>(sql, newGame);
      return newGame;
    }



    internal IEnumerable<Game> GetUserGames(string userId)
    {

      string sql = "SELECT * FROM Games WHERE userId = @UserId";
      return _db.Query<Game>(sql, new { userId });

    }

    internal bool Delete(int id, string userId)
    {
      {
        string sql = @"
     DELETE FROM games WHERE(id =@Id AND userId = @UserId) LIMIT 1";
        int affectedRows = _db.Execute(sql, new { id, userId });
        return affectedRows == 1;
      }
    }

    internal bool EditGame(Game GameToUpdate)
    {
      {
        string sql = "UPDATE Games SET Views = @views, Games = @Games WHERE id = @Id";
        int affectedRows = _db.Execute(sql, GameToUpdate);
        return affectedRows == 1;
      }
    }

    internal Game GetGameById(int id)
    {
      string sql = "SELECT * FROM games WHERE id = @Id";
      return _db.QueryFirstOrDefault<Game>(sql, new { id });
    }
  }
}