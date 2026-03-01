export const result = await Bun.build({
  entrypoints: ['src/card.ts'],
  outdir: 'dist',
  target: 'node',
  format: 'esm',
  banner: '#!/usr/bin/env node',
  external: ['boxen', 'chalk'],
});

if (!result.success) {
  console.error('Build failed:');
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}
