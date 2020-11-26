namespace BowlPickems.Models
{
  public class Team
  {
    public int Id { get; set; }

    public string Name { get; set; }
    public string AbbName { get; set; }
    public string PriColor { get; set; }
    public string SecColor { get; set; }
    public string TriColor { get; set; }
    public string ConfRecord { get; set; }
    public string OverallRec { get; set; }
    public string MascotImg { get; set; }
    public string MascotName { get; set; }
    public string TeamUrl { get; set; }
    public string streak { get; set; }
    public int GameId { get; set; }


  }

}