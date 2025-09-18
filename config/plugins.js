// config/plugins.js
module.exports = {
  'csv-export': {
    enabled: true,
    config: {
      // Optional configuration
      maxExportCount: 1000, // Maximum number of entries to export (default: 1000)
      defaultFields: ['id', 'createdAt', 'updatedAt'], // Default fields to include
      delimiter: ',', // CSV delimiter (default: ',')
      encoding: 'utf8', // File encoding (default: 'utf8')
      exportPath: './exports', // Path for temporary export files (default: './exports')
      dateFormat: 'YYYY-MM-DD HH:mm:ss', // Date format in exports (default: 'YYYY-MM-DD HH:mm:ss')
    },
  },
};
