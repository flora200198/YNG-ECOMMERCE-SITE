const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
    });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);
module.exports = app; // Export the app for testing or further configuration
