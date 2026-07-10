const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'constants', 'index.js');
let content = fs.readFileSync(filePath, 'utf8');

const startIndex = content.indexOf('export const myProjects = [');
const endIndex = content.indexOf('export const calculateSizes');

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find boundaries');
    process.exit(1);
}

let before = content.substring(0, startIndex);
let middle = content.substring(startIndex, endIndex);
let after = content.substring(endIndex);

let counter = 1;
middle = middle.replace(/title:\s*['"](.*?)['"]/g, (match, p1) => {
    let cleanTitle = p1.replace(/^\d+\.\s*/, '');
    let newTitle = `${counter}. ${cleanTitle}`;
    counter++;
    return `title: '${newTitle}'`;
});

fs.writeFileSync(filePath, before + middle + after, 'utf8');
console.log('Done replacing titles in myProjects. Total projects:', counter - 1);
