const conn = new Mongo();
const db = conn.getDB('rsc');

let error = true;

let res = [
  db.recipes.drop(),
  db.recipes.insert({
    name: 'Pizza',
    description:
      'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
  }),
  db.recipes.insert({
    name: 'Lasagne',
    description:
      'Lasagne is a dish of Italian origin, consisting of a layer of thin unleavened bread dough, sometimes called a lasagna sheet, rolled into a long, cylindrical shape, then cooked in a variety of ways.',
  }),
];

printjson(res);
