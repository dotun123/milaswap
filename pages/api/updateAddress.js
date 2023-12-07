// pages/api/updateAddress.js
import { readJSONFile, writeJSONFile } from '../../lib/jsonUtils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { address } = req.body;

    // Read existing addresses
    const storedAddresses = readJSONFile();

    // Check if the address is not already stored and store it
    if (address && !storedAddresses.includes(address)) {
      const newAddresses = [...storedAddresses, address];

      // Write the updated addresses to the file
      writeJSONFile(newAddresses);

      res.status(200).json({ success: true, addresses: newAddresses });
    } else {
      res.status(400).json({ success: false, message: 'Address already exists.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}