import test from 'ava'
import redis from '../lib/redis-lib'


test.before(async t => {
	t.context.server = await redis.startServer()
	t.context.client = await redis.startClient()
})

test.after(async t => {
	await t.context.server.close()
	await t.context.client.quit()
})

test('starts Redis server', t => {
	t.true(t.context.server.isRunning)
})

test.cb('connects to Redis server', t => {
	return t.context.client.on('ready', (err) => {
		if (err) return t.fail()
		else t.pass()
		t.end()
	})
})
