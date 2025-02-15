// scripts/create-my-app-dts.js
const fs = require('fs');
const filePath = './my-app.d.ts';
const fileContent = `/// <reference types="nativewind/types" />`;

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Created ${filePath}`);
} else {
  console.log(`${filePath} already exists`);
}
