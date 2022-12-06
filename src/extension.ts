import * as vscode from 'vscode'
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('vscode-test.helloWorld', () => {
    vscode.window.showInformationMessage('执行啦')

    // 删除字符
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const code = `
		function test(){
			console.log(123)
		}
		`;
		const ast = parse(code)
    console.log(ast)

    editor.edit((editBuilder) => {
      editBuilder.delete(
        new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 9))
      )
    })
  })
}

export function deactivate() {}
