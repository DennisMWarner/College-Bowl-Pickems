namespace BowlPickems.Models
{
  public class Pick
  {
    public int Id { get; set; }
    public string UserId { get; set; }
    public int GameId { get; set; }
    public int teamId { get; set; }
    public int Points { get; set; }

  }
}