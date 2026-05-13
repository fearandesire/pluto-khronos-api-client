import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';

test('built package exports the generated OpenAPI client surface', async () => {
  const require = createRequire(import.meta.url);
  const client = require(
    path.resolve('/home/runner/work/pluto-khronos-api-client/pluto-khronos-api-client/dist/index.js'),
  );

  assert.ok(client.OpenAPI);
});
