using System;
using System.Web.Http;
using System.Collections.Generic;
using System.Linq;
using MazeGameWeb.Models;

namespace MazeGameWeb.Controllers
{
    public class GameRecordsController : ApiController
    {
        private readonly List<GameRecordModel> _records = new List<GameRecordModel>();
        
        public IEnumerable<GameRecordModel> GetAllRecords()
        {
            return _records;
        }

        public IHttpActionResult GetRecord(string userName)
        {
            var record = _records.FirstOrDefault(z => z.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));

            if (record == null) return NotFound();

            return Ok(record);
        }

        [HttpPost]
        public void AddRecord(GameRecordModel record)
        {
            _records.Add(record);
        }

        [HttpPost]
        public void UpdateRecord(string userName, int rank)
        {
            var record = _records.FirstOrDefault(z => z.UserName.Equals(userName, StringComparison.OrdinalIgnoreCase));
            if (record == null) return;

            record.Rank = rank;
        }
    }
}
