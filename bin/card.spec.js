import { afterEach, beforeEach, describe, expect, mock, test } from 'bun:test';
import { stripVTControlCharacters } from 'node:util';

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

describe('card', () => {
  const originalLog = console.log;
  let logSpy;

  beforeEach(() => {
    logSpy = mock(() => {});
    console.log = logSpy;
  });

  afterEach(() => {
    console.log = originalLog;
  });

  test('renders correctly', async () => {
    await import('./card.js');

    const actual = stripVTControlCharacters(logSpy.mock.calls[0][0]);

    expect(actual).toBe(expected);
  });
});
