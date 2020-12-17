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
      string sql = "SELECT * FROM games";
      return _db.Query<Game>(sql);
    }

    internal IEnumerable<Game> GetOtherGames()
    {
      string sql = "SELECT * FROM games WHERE status != 'unlocked'||'locked'";
      return _db.Query<Game>(sql);
    }

    internal Game Create(Game newGame)
    {
      string sql = @"
            INSERT INTO games(name, gameDate, loc, time, network, sponsor,  wId, status)
            VALUES(@Name, @GameDate, @Loc, @Time, @Network, @Sponsor,  @WId, @Status); 
            SELECT LAST_INSERT_ID()
        ";
      newGame.Id = _db.ExecuteScalar<int>(sql, newGame);
      return newGame;
    }
    internal Game EditGame(Game gameToUpdate)
    {
      {
        string sql = "UPDATE Games SET name = @name, sponsor=@Sponsor, gameDate=@GameDate, loc=@Loc, time=@Time, network=@Network, wId =@WId, status = @Status WHERE id = @Id";
        int affectedRows = _db.Execute(sql, gameToUpdate);
        return gameToUpdate;
      }
    }

    internal IEnumerable<Game> GetUserGames(string userId)
    {

      string sql = "SELECT * FROM Games WHERE userId = @UserId";
      return _db.Query<Game>(sql, new { userId });
    }

    internal bool Delete(int id)
    {
      {
        string sql = @"
     DELETE FROM games WHERE(id =@Id) LIMIT 1";
        int affectedRows = _db.Execute(sql, new { id });
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