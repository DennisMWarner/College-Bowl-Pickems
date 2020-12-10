namespace BowlPickems.Models
{
  public class User
  {
    public int Id { get; set; }
    public string UserId { get; set; }
    public string Email { get; set; }
    public string ImgUrl { get; set; }
    public string Name { get; set; }
    public int TieBreaker { get; set; }
  }
}