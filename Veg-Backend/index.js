const express = require('express');
const app = express();
const vegetables = require("./routes/vegetables");

app.use('/api/vegetables', vegetables);



const port = 3000;

app.listen(port, () => {
    console.log(`Listning on ${port}...`);
});
