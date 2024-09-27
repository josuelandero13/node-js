const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch {
    console.log(pc.red(`Error al leer el directorio: ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.log(`Error al leer el archivo: ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "folder" : "file";
    const fileSize = stats.size;
    const fileModifiedDate = stats.mtime.toLocaleString();

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.toLocaleString().padStart(10)
    )} ${pc.yellow(fileModifiedDate)}`;
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
