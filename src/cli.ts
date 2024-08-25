#!/usr/bin/env node

import { program } from "commander";
import { checkNvmrc } from "./index";

program
  .version("1.0.0")
  .description("Check if .nvmrc exists in a directory or its subdirectories")
  .argument("<directory>", "Directory to check")
  .action((directory: string) => {
    const result = checkNvmrc(directory);
    if (result) {
      console.log(".nvmrc file found");
      process.exit(0);
    } else {
      console.log(".nvmrc file not found");
      process.exit(1);
    }
  });

program.parse(process.argv);
