using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace MazeGameWeb.Controllers
{
    //[Authorize]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public JObject Get(int id)
        {
            var j = new JObject();
            j["bla"] = "value";
            return j;
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public string Put(int id, [FromBody]string value)
        {
            return "bla";
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
