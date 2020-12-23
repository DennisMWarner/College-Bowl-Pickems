using System;
using System.Collections.Generic;
using System.Data;
using BowlPickems.Models;
using Dapper;

namespace BowlPickems.Repositories
{
  public class UsersRepository
  {
    private readonly IDbConnection _db;

    public UsersRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<User> Get()
    {

      string sql = "SELECT * FROM users";
      return _db.Query<User>(sql);
    }
    internal IEnumerable<User> GetByUserId(string userId)
    {
      string sql = "SELECT * FROM users WHERE userId =@UserId";
      return _db.Query<User>(sql, new { userId });
    }
    internal User Create(User newUser)
    {
      string sql = @"
            INSERT INTO users(name, userId, imgUrl, tieBreaker, email)
            VALUES(@Name, @UserId, @ImgUrl, @TieBreaker, @Email); 
            SELECT LAST_INSERT_ID()
        ";
      newUser.Id = _db.ExecuteScalar<int>(sql, newUser);
      return newUser;
    }



    internal IEnumerable<Game> GetUserUsers(string userId)
    {

      string sql = "SELECT * FROM users WHERE userId = @UserId";
      return _db.Query<Game>(sql, new { userId });

    }

    // internal bool Delete(int id)
    // {
    //   {
    //     string sql = @"
    //  DELETE FROM users WHERE id =@Id  LIMIT 1";
    //     int affectedRows = _db.Execute(sql, new { id });
    //     return affectedRows == 1;
    //   }
    // }

    internal User EditUser(User UserToUpdate)
    {
      {
        string sql = "UPDATE users SET  name=@Name, userId=@UserId, imgUrl=@ImgUrl, tieBreaker=@TieBreaker, email=@Email WHERE id = @Id";
        int affectedRows = _db.Execute(sql, UserToUpdate);
        return UserToUpdate;
      }
    }

    internal User GetUserById(int id)
    {
      string sql = "SELECT * FROM users WHERE id = @Id";
      return _db.QueryFirstOrDefault<User>(sql, new { id });
    }
  }
}