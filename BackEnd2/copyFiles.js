const fs = require('fs');
const path = require('path');

// Retrieve command-line arguments for source and target directories
const [sourceDir, targetDir] = process.argv.slice(2);

// Ensure both directories are provided
if (!sourceDir || !targetDir) {
  console.error('Please provide source and target directories.');
  process.exit(1);
}

// Read the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading the source directory:', err);
    return;
  }


  const filteredFiles = files.filter(file => file.endsWith('.txt') || file.endsWith('.jpg'));

  // Copy each file to the target directory
  filteredFiles.forEach(file => {
    const sourceFilePath = path.join(sourceDir, file);
    const targetFilePath = path.join(targetDir, file);

    fs.copyFile(sourceFilePath, targetFilePath, (err) => {
      if (err) {
        console.error(`Error copying file ${file}:`, err);
      } else {
        console.log(`File ${file} copied to target directory.`);
      }
    });
  });
});