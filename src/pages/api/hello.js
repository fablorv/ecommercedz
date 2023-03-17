import { getAllData, insertData } from '../lib/database/db';

export default async function handlerone(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await getAllData();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'erro number one ' });
    }
  }
  else if (req.method === 'POST') {
  	console.log(req)
    try {
      const { name, email, phone } = req.body;
      await insertData(name, email, phone);
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error number two and idk why this is so complicated' });
    }
  }else   res.status(200).json({name: 'Jhon cina'})

}




