using Microsoft.AspNet.SignalR;

namespace MazeGameWeb.Models
{
    public class MultiPlayerGamesHub : Hub
    {
        public void NotifyOpponent(string opponentUserName, int row, int column)
        {
            Clients.All.broadcastMessage(opponentUserName, "koko");
        }
    }
}