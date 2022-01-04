#!/usr/bin/env node

const { currentBranchName } = require("./lib/git-utils");

if (!process.argv[2]) {
  console.error("Usage: branch-naming-check <regexp> <example-branch-name>");
  process.exitCode = 1;
  return;
}

currentBranchName().then(branchName => {
  let validBranchNameRegExp;
  try {
    validBranchNameRegExp = new RegExp(process.argv[2], "g");
  } catch (error) {
    console.error(error.message + "\n");
    process.exitCode = 1;
    return;
  }

  if (validBranchNameRegExp.test(branchName)) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.error(
      `Current Git branch name: "${branchName}" is not valid. \n\n` +
        `Please use the following format for the branch name: ${process.argv[3] ? process.argv[3] : validBranchNameRegExp.toString()}\n\n`
    );
  }
});
