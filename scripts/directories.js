const fs = require('fs');

if (!fs.existsSync('./dist')) {
    console.log('No Build Directory');
    console.log('Creating...');
    fs.mkdirSync('./dist');
}