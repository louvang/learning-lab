#!/usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    throw new Error(err);
  }

  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.bold(filenames[index]));
    }
  }
});
