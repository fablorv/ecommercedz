import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = new sqlite3.Database('./data.db', (err) => {
	    if (err) {
		console.error("Erro opening database " + err.message);
	    } else {

		db.run('CREATE TABLE mytable(\
		    id INTEGER PRIMARY KEY,\
		    name TEXT NOT NULL,\
		    email TEXT NOT NULL,\
		    phone INTEGER\
		    item TEXT NOT NULL,\
		    user TEXT NOT NULL,\
		)', (err) => {
		    if (err) {
		        console.log("Table already exists.");
		    }else console.log('table created? ')

		});
	    }
	});
	// now i need to figure out how each user have his own data nd i dont need to write multiple data for same user but instead update it 
export async function getAllData() {
  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database,
  });
  const data = await db.all('SELECT * FROM mytable');
  await db.close();
  return data;
}
export async function insertData(name, email, phone) {
  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database,
  });
  await db.run('INSERT INTO mytable (name, email, phone) VALUES (?, ?, ?)', name, email, phone);
  await db.close();
}
export async function insertpuchases(item, user) {
  const db = await open({
    filename: './data.db',
    driver: sqlite3.Database,
  });
    console.log("this is from database", item, user)
  await db.run('INSERT INTO mytable (name, email) VALUES (?, ?)', item, user);
  await db.close();
}
