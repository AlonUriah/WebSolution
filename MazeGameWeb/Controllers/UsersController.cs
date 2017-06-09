using System;
using System.Linq;
using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using MazeGameWeb.Models;

namespace MazeGameWeb.Controllers
{
    public class UsersController : ApiController
    {
        private readonly List<UserModel> _users = new List<UserModel>();

        public IEnumerable<UserModel> GetAllUsers()
        {
            return _users;
        }

        public IHttpActionResult GetUser(string userName)
        {
            var user = _users.FirstOrDefault(z => z.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
            if (user == null) return NotFound();

            return Ok(user);
        }

        [HttpPost]
        public IHttpActionResult AddUser(UserModel user)
        {
            _users.Add(user);
            return Ok();
        }

        [HttpPost]
        public void DeleteUser(UserModel user)
        {
            if (!_users.Contains(user)) return;

            _users.Remove(user);
        }
    }
}
