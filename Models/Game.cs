namespace BowlPickems.Models
{
  public class Game
  {
    public int Id { get; set; }

    public string Name { get; set; }
    public string GameDate { get; set; }
    public string Loc { get; set; }
    public string Time { get; set; }
    public string Network { get; set; }

    public int GameId { get; set; }


  }
  // public class VaultKeepViewModel : Game
  // {
  //   public int VaultKeepId { get; set; }
  // }
}