import { getAllData, insertData } from '../../../lib/database/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await getAllData();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone } = req.body;
      await insertData(name, email, phone);
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default function handler(req, res){
  res.status(200).json({name: 'Jhon cina'})
}
