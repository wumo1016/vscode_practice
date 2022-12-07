import { expect, test } from 'vitest'
import { getFunctionCode } from '../main'

test('init', () => {
  const code = `
  function test(){
    console.log(123)
  }
  function test1(){
    console.log(123)
  }
  `
  const index = 10
  const node = getFunctionCode(index, code)
  // console.log(node)
  expect(node).toEqual({
    name: 'test',
    start: {
      line: 2,
      column: 2,
      index: 3
    },
    end: {
      line: 4,
      column: 3,
      index: 44
    }
  })
})
