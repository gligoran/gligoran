#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const data = {
  handle: chalk.hex('#FFCA59').bold('gligoran'),
  name: chalk.white.bold('goran gligorin'),

  labelWork: chalk.white('    work:'),
  work:
    chalk.white.bold('frontend software engineer at ') +
    chalk.hex('#5533FF').bold('d.labs'),

  labelWeb: chalk.hex('#ffc168')('     web:'),
  web: chalk.hex('#ffc168').bold('https://www.gorangligorin.com'),

  labelGithub: chalk.hex('#ff6c5f')('  github:'),
  github: chalk.hex('#ff6c5f').bold('https://github.com/gligoran'),

  labelNpm: chalk.hex('#ff4f81')('     npm:'),
  npm: chalk.hex('#ff4f81').bold('https://npmjs.com/~gligoran'),

  labelLinkedin: chalk.hex('8e43e7')('linkedin:'),
  linkedin: chalk.hex('8e43e7').bold('https://linkedin.com/in/gorangligorin'),

  labelTwitter: chalk.hex('#1da1f2')(' twitter:'),
  twitter: chalk.hex('#1da1f2').bold('https://twitter.com/gligoran'),

  labelCard: chalk.hex('#00FF41')('    card:'),
  card: chalk.hex('#00FF41').bold('npx gligoran'),
};

const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGithub}  ${data.github}`;
const npming = `${data.labelNpm}  ${data.npm}`;
const linkedining = `${data.labelLinkedin}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const carding = `${data.labelCard}  ${data.card}`;

const output = `
                    ${data.handle}
              a.k.a. ${data.name}
  
${working}
${webing}
${npming}
${githubing}
${linkedining}
${twittering}

${carding}
`;

console.log(chalk.hex('#FFCA59')(boxen(output, options)));
