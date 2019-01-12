#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
};

// Text, chalk definitions
const data = {
    name: chalk.white('Goran Gligorin'),
    handle: chalk.greenBright.bold('gligoran'),
    work: chalk.white('Frontend Software Engineer at D.Labs'),
    twitter: chalk.redBright('https://twitter.com/gligoran'),
    github: chalk.redBright('https://github.com/gligoran'),
    linkedin: chalk.redBright('https://linkedin.com/in/gorangligorin'),
    web: chalk.redBright('https://www.gorangligorin.com'),
    npx: chalk.white('npx gligoran'),
    labelWork: chalk.white.bold('      Work:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const heading = `${data.name} ▵  ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = [heading, '', working, githubing, linkedining, webing, twittering, '', carding].join('\n');

console.log(chalk.green(boxen(output, options)));
