import { getAllData, insertData, insertpuchases } from '../lib/database/db';

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
    let data  = JSON.parse(req.body)
    if(Object.keys(data).length > 0){
      try {
        console.log('we get the user and the item', req.body)
        console.log(data, 'if this worked')
        insertpuchases(JSON.stringify(data.items), JSON.stringify(data.users))
        res.status(200).json({ message: 'Data inserted successfully' });
      } catch(error){
        console.log(error)
        console.log('we didnt get them');
        res.status(500).json({ message: 'error form the item body req one' })
      }
    }
    else if(false) {
      try {
        const { name, email, phone } = req.body;
        await insertData(name, email, phone);
        res.status(200).json({ message: 'Data inserted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error number two and idk why this is so complicated' });
      }
    }
  
  }else{
    res.status(200).json({name: 'Jhon cina'})
    console.log('we skipped everything')

  }

}




