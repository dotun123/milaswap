


// jsonUtils.js

const fs = require('fs');
const path = require('path');

const filePath = path.resolve('public/account.json');

export function readJSONFile() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
   
    return JSON.parse(data);
    
  } catch (error) {
    // Handle file read error, e.g., file doesn't exist
    console.error('Error reading JSON file:', error);
    return [];
  }
}

export function writeJSONFile(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('JSON file updated successfully.');
  } catch (error) {
    // Handle file write error
    console.error('Error writing to JSON file:', error);
  }
}