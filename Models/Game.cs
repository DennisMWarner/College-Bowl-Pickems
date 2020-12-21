namespace BowlPickems.Models
{
  public class Game
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Sponsor { get; set; }
    public string GameDate { get; set; }
    public string Loc { get; set; }
    public string Time { get; set; }
    public string Network { get; set; }

    public int WId { get; set; }
    public string Status { get; set; }

  }

}