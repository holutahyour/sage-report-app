using MongoDB.Driver;
using sage_report_app_backend.Models;

namespace sage_report_app_backend.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<AppSetting> _appSettingsCollection;

        public MongoDbService(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("MongoDbConnection");
            var databaseName = configuration.GetConnectionString("MongoDbName");

            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);

            _appSettingsCollection = database.GetCollection<AppSetting>("AppSettings");
        }

        public async Task<List<AppSetting>> GetAppSettingsAsync() =>
            await _appSettingsCollection.Find(_ => true).ToListAsync();

        public async Task<AppSetting?> GetAppSettingAsync(string id) =>
            await _appSettingsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAppSettingAsync(AppSetting newAppSetting) =>
            await _appSettingsCollection.InsertOneAsync(newAppSetting);

        public async Task UpdateAppSettingAsync(string id, AppSetting updatedAppSetting) =>
            await _appSettingsCollection.ReplaceOneAsync(x => x.Id == id, updatedAppSetting);

        public async Task RemoveAppSettingAsync(string id) =>
            await _appSettingsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
