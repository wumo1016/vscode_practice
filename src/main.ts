import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

interface FunctionNode {
  name: string
  start: {
    line: number
    column: number
    index: number
  }
  end: {
    line: number
    column: number
    index: number
  }
}

/**
 * @Author: wyb
 * @Descripttion:
 * @param {number} index 光标所在的索引
 * @param {string} code
 */
export function getFunctionCode(
  index: number,
  code: string
): FunctionNode | undefined {
  let functionNode
  const ast = parse(code)
  traverse(ast, {
    FunctionDeclaration(path) {
      const node = path.node
      const start = node.loc?.start
      const end = node.loc?.end
      if (index >= node.start! && index <= node.end!) {
        functionNode = {
          name: node.id?.name as string,
          start,
          end
        }
      }
    }
  })
  return functionNode
}
