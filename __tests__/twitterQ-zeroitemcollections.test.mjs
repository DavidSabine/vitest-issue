import { describe, expect, test } from 'vitest'

// Original Q at https://twitter.com/mlntdrv/status/1750935348429930817

// When you test collections you start with 0 items, then 1. This forces you 
// to write a conditional. Then you test for 2, so you now change the if to 
// a loop.
// But if you start with 1 and then 2, you end up at the loop again, but 
// without the test for 0. Is this test needed then?

const cocoToFetch = (request = null) => {
	switch(request) {
		case `mail`: return [Array.from({ length: Math.floor(Math.random) * 10}, () => ({}))]
		case `shoes`: return [{}, {}]
		case `toy`: return [{}]
		default: return []
	}
}

describe(`Coco's behaviours`, () => {
	test(`Coco can fetch stuff`, () => {
		expect(cocoToFetch()).toBeTypeOf(`object`)
		expect(Array.isArray(cocoToFetch())).toBe(true)
	})
	test(`Coco can fetch a toy`, () => {
		expect(cocoToFetch(`toy`).length).toEqual(1)
	})
	test(`Coco can fetch shoes`, () => {
		expect(cocoToFetch(`shoes`).length).toEqual(2)
	})
	test(`Coco can fetch the mail`, () => {
		expect(cocoToFetch(`mail`).length).toBeGreaterThanOrEqual(0)
	})
})