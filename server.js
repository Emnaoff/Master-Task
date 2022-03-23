const express = require('express');
const connectDb = require('./config/connectDb');
const fileUpload = require('express-fileupload');

require ('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoute = require('./routes/auth');
const calendarRoute = require('./routes/calendar');
const memberRoute = require('./routes/member');




const app = express();
app.use(bodyParser.json());
connectDb();
const port= process.env.PORT || 5000;

app.use(express.json()); 
app.use(cors());
app.use(fileUpload());


app.use('/',authRoute);
app.use('/calendar',calendarRoute);
app.use('/members',memberRoute);

//My file Upload code
app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/src/Components/DashOwner/DashWork/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });




app.listen(port, (err) => 
err ? console.error(err) : console.log(`Our server is listnening to the port ${port}`))  