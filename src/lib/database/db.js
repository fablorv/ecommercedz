import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

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
