using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace sage_report_app_backend.Models
{
    public class AppSetting
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Key { get; set; } = null!;
        public string Value { get; set; } = null!;
    }
}
