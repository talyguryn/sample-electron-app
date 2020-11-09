# sample-electron-app

Sample electron app with automatic releases building and autoupdates

## Building releases

Take a look at [release](.github/workflows/release.yml) action. It is based on [samuelmeuli/action-electron-builder](https://github.com/samuelmeuli/action-electron-builder) action.

For a success release building make sure you have 
- Commit message starts with a tag name `v*.*.*`
- Commit tagged `v*.*.*`
