/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-21 21:07:16
 */
import { ExtensionContext, window } from 'vscode'
import { Sidebar } from './sidebar'

export function activate(context: ExtensionContext) {
  const sidebar = new Sidebar('Chinese-List', context)
  window.registerTreeDataProvider(sidebar.id, sidebar)
}

export function deactivate() {}
