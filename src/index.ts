import fs from "fs";
import path from "path";

export function checkNvmrc(directory: string): boolean {
  const nvmrcPath = path.join(directory, ".nvmrc");

  if (fs.existsSync(nvmrcPath)) {
    return true;
  }

  const subDirectories = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(directory, dirent.name));

  return subDirectories.some((subDir) => checkNvmrc(subDir));
}
