import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';

test('built package exports the generated OpenAPI client surface', async () => {
  const require = createRequire(import.meta.url);
  const client = require(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist/index.js'));

  assert.ok(client.OpenAPI);
});
