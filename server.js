import './dotenv';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import * as people from './repo/people';


app.post('/person', async (req, res) => {
    let person = await people.addPerson(req.body);
    res.json(person);
})

app.listen(1337, () => console.log('server is running on port 1337'));