const fs = require('fs');
const path = require('path');
const filePath = './src/components';

const jsFiles = async (callback) => {
    let aggregateString = '';
    await fs.promises.readdir(filePath, { recursive: true }).then((directories, err) => {
        if (err) {
            console.error('Could not list the directory.', err);
            process.exit(1);
        }

        directories.map(async (directory) => {
            await fs.promises.readdir(`${filePath}/${directory}`, { recursive: true }).then((files, er) => {
                if (er) {
                    console.error('Could not list the directory.', er);
                    process.exit(1);
                }

                files.map(async (file) => {
                    if (path.extname(file) === '.js') {
                        await fs.promises.readFile(`${filePath}/${directory}/${file}`, { encoding: 'utf8' }).then((codeString, e) => {
                            if (e) {
                                console.error('Could not read the file.', e);
                                process.exit(1);
                            }

                            aggregateString += codeString;
                            callback(aggregateString);
                        });
                    }
                });
            });
        });

        // callback(aggregateString);
    });
};

jsFiles((aggregateString) => {
    const buff = new Uint8Array(Buffer.from(aggregateString));

    fs.writeFile('./dist/code.js', buff, (err) => {
        if (err) {
            console.error('Could not write the file.', err);
            process.exit(1);
        }

        console.log('Wrote code.js');
    });
    console.log('callback');
});