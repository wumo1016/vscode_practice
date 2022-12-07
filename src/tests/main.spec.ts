import { describe, expect, it } from 'vitest'
import { getFunctionCode } from '../main'
describe('测试ts文件', () => {
  it('函数声明', () => {
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
        column: 4,
        index: 5
      },
      end: {
        line: 4,
        column: 5,
        index: 50
      }
    })
  })

  it.only('箭头函数', () => {
    const code = `
    const test = () => {
      console.log(123)
    }
    const test1 = () => {
      console.log(123)
    }
    `
    const index = 50
    const node = getFunctionCode(index, code)
    expect(node).toEqual({
      name: 'test',
      start: {
        line: 2,
        column: 4,
        index: 5
      },
      end: {
        line: 4,
        column: 5,
        index: 54
      }
    })
  })
})
