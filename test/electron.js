import test from 'ava';
import { Application } from 'spectron';
const path = require('path')
const electronPath = require('electron')

test.beforeEach(async t => {
  t.context.app = new Application({
    path: electronPath,
    args: [path.join(__dirname, '..')]
  })

  await t.context.app.start()
})

test.afterEach.always(async t => {
  await t.context.app.stop();
});

test('runs', async t => {
  const app = t.context.app
  t.is(await app.client.getWindowCount(), 1)
})
