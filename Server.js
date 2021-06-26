  
projectData = {};
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('website'));
const port = 3000;
const server = app.listen(port,function listening() {
	console.log('port number'+port);
});
app.get('/all', sendData);
function sendData (request, response) {
  response.send(projectData);
};
app.post('/add', addInfo);
function addInfo(request, response) {
  projectData['date'] = request.body.date;
  projectData['temp'] = request.body.temp;
  projectData['content'] = request.body.content;
  response.send(projectData);
}
