### R2Northstar Updater

![example workflow](https://github.com/adamtheadmin/R2Northstar-Updater/actions/workflows/test.yml/badge.svg)

This is a launcher and installer for R2Northstar. Upon launch, it will check the R2 Releases for a new version and install it if your installation is out of date.

It will work with the following versions of titanfall 2:
    
- Steam Version
- Origin Version
- EA App Version

This will create a file called VERSION inside your Titanfall 2 directory with the installed version for comparison against the github releases.

Streaming is leveraged to provision the files as quickly as possible.

### Usage

Just download the latest version at the [releases](https://github.com/adamtheadmin/R2Northstar-Updater/releases) page. You must have a legit version of Titanfall 2 installed.
The EXE file does not need to be in the same directory as your Titanfall 2 installation.

### Building from source
- `npm i -g typescript ts-node`
- `npm i`
- `npm i -g pkg`
- `npm run buildexe`

### Contributing

If you have any improvements to add, please submit a PR, and they might get added to the next version. 

### Licence

Copyright 2022 ADAM FOWLER

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
