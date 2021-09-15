const servers = require('./config/server')
require('./config/database')
require('./config/routes')(servers)