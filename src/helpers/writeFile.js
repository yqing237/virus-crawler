const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);
const createDirectoryAsync = promisify(fs.mkdir);
const colors = require('colors');

const writeFile = async (data, index) => {
    const directoryPath = `${process.env.PWD}/data`;
    if (!fs.existsSync(directoryPath)) {
        console.log(colors.yellow(`directory doesn't exist, creating folder ${directoryPath}`));
        await createDirectoryAsync(directoryPath, { recursive: true });
    }
    const filePath = `${directoryPath}/${index + 1}.json`;
    await writeFileAsync(filePath, data);
    console.log(colors.green(`file has been saved to ${filePath}`));
};

module.exports = { writeFile };