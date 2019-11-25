const fs = require('fs');

fs.readdir('./src/components', { recursive: true }, (err, directories) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    let aggregateString = '';

    directories.map(directory => {
        [...directory].map((letter, index) => {
            if (letter === letter.toUpperCase() && index != 0) {
                const subOne = directory.substring(0, index).toLowerCase();
                const subTwo = directory.substring(index, directory.length).toLowerCase();
                aggregateString += `window.customElements.define('${subOne}-${subTwo}', ${directory});\n`
            }
        });
    });

    const buff = new Uint8Array(Buffer.from(aggregateString));
    fs.writeFile('./dist/define.js', buff, (err) => {
        if (err) throw err;
        console.log('Wrote define.js');
    });
});