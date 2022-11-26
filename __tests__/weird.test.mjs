import { expect, test, vi } from 'vitest'
import { join as joinPath } from 'node:path'

const helloWorld = () => {
return joinPath('hello', 'world')
}

test('Are you mocking me?', () => {
// note all the indents in this file are tabs
// change the indentation line 12 from tab to spaces
// test pass with spaces, test fails with tab
	vi.mock('node:path', () => {
return {
join: vi.fn().mockReturnValue('goodbye world')
}
})
expect(helloWorld()).toBe('goodbye world')
})
