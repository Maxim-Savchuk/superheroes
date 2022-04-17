const mongoose = require('mongoose');
const app = require('../app');

const { PORT = 3001 } = process.env;

mongoose
  .connect(
    'mongodb+srv://mmaxsavchuk:HCMb87CvsKDV3vK@cluster0.hymwc.mongodb.net/superheroesdb?retryWrites=true&w=majority',
    { useNewUrlParser: true },
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
      console.log('Database connection successful');
    }),
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
