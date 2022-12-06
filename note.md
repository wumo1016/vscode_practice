## [安装脚手架](https://www.npmjs.com/package/generator-code)

`npm install -g yo generator-code`

## 创建项目

`yo code`

## 安装

- `@babel/parser`:
- `@babel/traverse`: 遍历生成抽象语法树

## 其他

- `vscode.window.showInformationMessage('[message]');`: message 为提示信息
- `vscode.commands.registerCommand`: 注册命令, 与 package.json 的 activationEvents 对应\
- `new vscode.Range([start], [end])`: 包含结尾
- `new vscode.Position([row], [column])`: 行和列都从 0 开始
