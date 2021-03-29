import express from 'express';
import personRouter from './person/index.mjs';
import serviceMjs from './person/service.mjs';

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use('/person', personRouter);

app.get('/ssr', async (req, res) => {
  const persons = await serviceMjs.getAll();
  res.render('person', { persons });
});

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
