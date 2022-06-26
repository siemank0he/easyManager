const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Documents');
app.use("/documents", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Serwer na porcie 3001");
    });
});



