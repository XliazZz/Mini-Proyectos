const server = require('./src/app.js');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

try {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
} catch (error) {
  console.log(error);
};