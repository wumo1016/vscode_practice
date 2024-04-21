/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-21 21:31:50
 */
import { ExtensionContext, window, TreeDataProvider, TreeItem } from 'vscode'
import fs from 'fs'

// 左侧菜单
const MENU_TREE_DATA = [
  {
    label: '中文列表',
    command: 'test1'
  }
]

interface IObject {
  [key: string]: any
}

export class SidebarItem extends TreeItem {
  constructor(ctx: ExtensionContext, it: IObject) {
    super('')
    this.label = it.label
  }
}

export class Sidebar implements TreeDataProvider<SidebarItem> {
  constructor(public id: string, public context?: ExtensionContext) {
    this.id = id
    this.context = context

    // https://github.com/think2011/vscode-i18n-core/blob/master/editor/Annotation.ts

    window.onDidChangeActiveTextEditor(() => {
      const editor = window.activeTextEditor
      const document = editor?.document
      console.log(document?.getText())
      // const file: string = fs.readFileSync(document?.fileName!, 'utf-8')
      // console.log(file)
    })
  }
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {SidebarItem} element
   */
  getTreeItem(element: SidebarItem): TreeItem {
    return element
  }
  /**
   * @Author: wyb
   * @Descripttion:
   */
  async getChildren(element?: SidebarItem) {
    if (element) return []
    const childrenList = MENU_TREE_DATA.map(it => {
      const children = new SidebarItem(this.context!, it)
      children.command = {
        title: it.label,
        command: it.command
      }
      return children
    })
    return childrenList
  }
}
