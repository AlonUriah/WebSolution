namespace MazeGameWeb.Models
{
    public class UserModel
    {
        public long UserId { set; get; }
        public int dummy { set; get; }
        public long? RecordId { set; get; }
        public string UserName { set; get; }
        public string Password { set; get; } 
    }
}