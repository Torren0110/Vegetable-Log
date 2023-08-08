const express = require('express');
const cors = require("cors");
const vegetables = require("./routes/vegetables");
const app = express();


app.use(cors());
app.use('/api/vegetables', vegetables);



const port = 3000;

app.listen(port, () => {
    console.log(`Listning on ${port}...`);
});
