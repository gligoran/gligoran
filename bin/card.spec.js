import test from 'ava';
import sinon from 'sinon';
import stripAnsi from 'strip-ansi';

const expected = `
   ╭──────────────────────────────────────────────────────╮
   │                                                      │
   │                                                      │
   │                       gligoran                       │
   │                 a.k.a. goran gligorin                │
   │                                                      │
   │       work:  senior web engineer at d.labs           │
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

test('renders correctly', async (t) => {
  await import('./card.js');

  const actual = stripAnsi(console.log?.args?.[0]?.[0]);

  t.is(actual, expected);
});
