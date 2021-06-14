CREATE TABLE Person (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT,
  lastname TEXT,
  username TEXT,
  password TEXT
);

INSERT INTO Person (id, firstname, lastname, username, password) VALUES (1, 'Lorenzo', 'Bruder', 'lb', 'secret'), (2, 'Leoni', 'Hoppe', 'lh', 'topSecret');

CREATE TABLE Hobby (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT
);

INSERT INTO Hobby (id, title) VALUES (1, 'Lesen'), (2, 'Fußball'), (3, 'Zocken'), (4, 'Musik machen'), (5, 'Reiten'), (6, 'Mit Freunden abhängen');

CREATE TABLE Person_Hobby (
  personId INTEGER,
  hobbyId INTEGER,
  FOREIGN KEY(personId) REFERENCES Person(id),
  FOREIGN KEY(hobbyId) REFERENCES Hobby(id)
);

INSERT INTO Person_Hobby (personId, hobbyId) VALUES (1, 1), (1, 3), (1,  6), (2, 4), (2, 5), (2, 6);