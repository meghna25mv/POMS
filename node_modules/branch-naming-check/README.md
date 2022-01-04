# branch-naming-check
Enforce naming conventions on git branches

`branch-naming-check` is a tool that checks whether or not the current branch of a git project match a certain name pattern (specified as a regular expression). This tool is primarily used as a git hook to enforce teams naming conventions.

## Install

```
npm install --save-dev @innocells/branch-naming-check
```

## Usage
```
branch-naming-check <regex> <example-name>
```

- `<regex>` is a required parameter. Example: `(feature|release|hotfix)/\\d+/(JIRA-\\d+_)?[a-z-]+`

- `<example-name>` is an optional parameter that gives an example of the format. Example: `feature/123/JIRA-456_abcd`

As a git hook using [Husky](https://github.com/typicode/husky) (recommended) add a `precommit` (or `prepush`) script to your project's `package.json` file:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "branch-naming-check '(feature|release|hotfix)/\\d+/(JIRA-\\d+_)?[a-z-]+' 'feature/123/JIRA-456_abcd'",
    }
  },
  "devDependencies": {
    "husky": "^0.14.3"
  }
}
```
