import * as vscode from 'vscode'
import path from 'path'

// 侧边栏菜单数据
const MENU_TREE_DATA = [
  {
    id: 'Arvinjun-General',
    name: '通用',
    commands: [
      {
        command: 'general.removeLog',
        hotKey: 'cmd+shift+d',
        title: 'remove console',
        icon: 'remove.svg'
      },
    ]
  },
];

/**
 * @description 重写侧边栏入口子节点
 */
export class SideBarEntryItem extends vscode.TreeItem {
  constructor(
    label: string,
    collapsibleState: vscode.TreeItemCollapsibleState,
    private hotKey?: string,
    private icon?: string,
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.hotKey}`; // 鼠标悬停时的提示
    this.description = this.hotKey ? `【快捷键: ${this.hotKey}】` : ''; // 节点描述
    // 节点图标
    this.iconPath = this.icon ? path.join(__dirname, "../../", "images", this.icon) : '';
  }
}


/**
 * @description 重写侧边栏入口
 */
export class SideBarEntry implements vscode.TreeDataProvider<SideBarEntryItem> {
  public id: string;
  public rootSideBars: SideBarEntryItem[] = [];
  public context?: vscode.ExtensionContext;

  constructor(id: string, context?: vscode.ExtensionContext, rootSideBars?: SideBarEntryItem[]) {
    this.id = id,
    this.context = context;
    this.rootSideBars = rootSideBars || [];
    this.context = context;
  }

  // 重写父类属性
  getTreeItem(element: SideBarEntryItem): vscode.TreeItem {
    return element;
  }

  // 重写父类方法
  getChildren(
    element?: SideBarEntryItem
  ): vscode.ProviderResult<SideBarEntryItem[]> {
    const commands = MENU_TREE_DATA?.find((view: { id: string; }) => view.id === this.id)?.commands;
    //子节点
    var childrenList: any = [];
    commands?.forEach((item: any, index: number) => {
      const children = new SideBarEntryItem(
        item.title,
        vscode.TreeItemCollapsibleState.None,
        item.hotKey,
        item.icon,
      );
      children.command = {
        command: item.command,
        title: '',
        arguments: [], //命令接收的参数
      };
      childrenList[index] = children;
    });
    return childrenList;
  }
}
