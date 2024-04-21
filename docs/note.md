## 新建项目

```sh
npm install -g yo generator-code
yo code
```

## 调试插件

- 按快捷键 F5
- 点击编辑器左下方的 Run Extension
- 在新打开的窗口里调试插件

## vscode

- window
  - commands
    - registerCommand(name, cb): 注册命令
      - name: 命令 id
      - cb: 命令回调
  - showInformationMessage(msg): 显示提示消息
    - msg: 消息内容
  - registerTreeDataProvider(id, ins): 注册树视图
    - id: 视图 id
    - ins: 视图实例

## context

- subscriptions
  - push: 添加命令
