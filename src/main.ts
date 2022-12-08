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
    },
    ArrowFunctionExpression(rawPath) {
      function getName() {
        return Object.keys(rawPath?.parentPath?.getBindingIdentifiers())[0]
      }
      const path = rawPath.parentPath.parentPath
      // 是否是声明
      if (path?.isVariableDeclaration) {
        const node = path.node
        const start = node.loc?.start
        const end = node.loc?.end
        if (index >= node.start! && index <= node.end!) {
          functionNode = {
            name: getName(),
            start,
            end
          }
        }
      }
    },
    FunctionExpression(rawPath) {
      function getName() {
        return Object.keys(rawPath?.parentPath?.getBindingIdentifiers())[0]
      }
      const path = rawPath.parentPath.parentPath
      // 是否是声明
      if (path?.isVariableDeclaration) {
        const node = path.node
        const start = node.loc?.start
        const end = node.loc?.end
        if (index >= node.start! && index <= node.end!) {
          functionNode = {
            name: getName(),
            start,
            end
          }
        }
      }
    }
  })
  return functionNode
}
