import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('wyb.helloWorld', () => {
    vscode.window.showInformationMessage('wyb 执行啦!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
