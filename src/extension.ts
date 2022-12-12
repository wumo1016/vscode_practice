import * as vscode from 'vscode'
import { getFunctionCode } from './main'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('wyb.helloWorld', () => {
    vscode.window.showInformationMessage('执行啦')

    // 删除字符
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const code = editor.document.getText()
    const index = editor.document.offsetAt(editor.selection.active)
    const functionNode = getFunctionCode(index, code)
    if (!functionNode) return
    const { start, end } = functionNode

    editor.edit((editBuilder) => {
      editBuilder.delete(
        new vscode.Range(
          new vscode.Position(start.line - 1, start.column),
          new vscode.Position(end.line - 1, end.column)
        )
      )
    })
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
