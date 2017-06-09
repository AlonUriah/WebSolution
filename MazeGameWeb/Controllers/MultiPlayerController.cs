using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MazeGameWeb.Models;

namespace MazeGameWeb.Controllers
{
    public class MultiPlayerController : ApiController
    {
        private readonly List<UserModel> _users = new List<UserModel>();
        public IHttpActionResult GetPlayerLocation()
        {
            //var user = _users.FirstOrDefault(z => z.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
            //if (user == null) return NotFound();

            return Ok();// (user);
        }

        public IHttpActionResult GetOpponentLocation(string userName)
        {
            var user = _users.FirstOrDefault(z => z.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
            if (user == null) return NotFound();

            return Ok(user);
        }
    }
}
