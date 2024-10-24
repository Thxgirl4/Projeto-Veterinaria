import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))

import adminroute from './routes/admin.js';

app.use(adminroute)

app.listen('3000');