using Newtonsoft.Json.Linq;

namespace MazeGameWeb.Models
{
    public class GameRecordModel
    {
        public long RecordId { set; get; }
        public int Rank { set; get; }
        public string UserName { set; get; }
        public int Wins { set; get; }
        public int Losses { set; get; }

        public static GameRecordModel FromJason(JObject gameRecordInJason)
        {
            return new GameRecordModel();
        }

        public JObject ToJason()
        {
            return new JObject();
        }
    }
}