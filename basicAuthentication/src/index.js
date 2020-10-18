const app = require('./app');
require('./database');

// Get necessary settings to init the server
const PORT = app.get('PORT');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));