const test = require('ava');
const sinon = require('sinon');

const output = `
   ╭──────────────────────────────────────────────────────╮
   │                                                      │
   │                                                      │
   │                       gligoran                       │
   │                 a.k.a. goran gligorin                │
   │                                                      │
   │       work:  frontend software engineer at d.labs    │
   │        web:  https://www.gorangligorin.com           │
   │        npm:  https://npmjs.com/~gligoran             │
   │     github:  https://github.com/gligoran             │
   │   linkedin:  https://linkedin.com/in/gorangligorin   │
   │    twitter:  https://twitter.com/gligoran            │
   │                                                      │
   │       card:  npx gligoran                            │
   │                                                      │
   │                                                      │
   ╰──────────────────────────────────────────────────────╯
`;

test.beforeEach(() => {
    console.log = sinon.spy();
});

test('bar', async t => {
    require('./card');

    const arg = console.log.args
        && console.log.args[0]
        && console.log.args[0][0];

    t.is(arg, output);
});
