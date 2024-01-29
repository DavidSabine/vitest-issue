import { describe, expect, test, vi } from 'vitest'

// Original Q at https://twitter.com/mlntdrv/status/1750935348429930817

const cocoToFetch = (request = null, cargo = null) => {
	switch(request) {
		case `cookie`: return []
		case `shoes`: return [{}, {}]
		case `toy`: return [{}]
		case `mail`: return [`key`, {}]
		default: return []
	}
}


describe(`A collection please`, () => {
	test('A collection please', () => {
		expect(cocoToFetch()).toBeTypeOf(`object`)
		expect(Array.isArray(cocoToFetch())).toBe(true)
	})
	test(`Coco never brings me cookies`, () => {
		expect(cocoToFetch(`cookie`).length).toEqual(0)
	})
	test(`Coco brings 1 toy`, () => {
		expect(cocoToFetch(`toy`).length).toEqual(1)
	})
	test(`Coco brings me 2 shoes`, () => {
		expect(cocoToFetch(`shoes`).length).toEqual(2)
	})
	test(`Coco checks the mail`, () => {
		expect(cocoToFetch(`mail`).length).toBeGreaterThanOrEqual(1)
	})
})



// type NonEmptyArray<T> = [T, ...T[]];
// Example usage
// let myNonEmptyArray: NonEmptyArray<number> = [1, 2, 3];