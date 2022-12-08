## [安装脚手架](https://www.npmjs.com/package/generator-code)

`npm install -g yo generator-code`

## 创建项目

`yo code`

## 安装

- `@babel/parser`:
- `@babel/traverse`: 遍历生成抽象语法树

## 发布

- 安装 vsce `npm i -g vsce`
- e4egzmjy4oqpazigy7vsutgzbzr3sjrkubn5dehqdxxwkpf5gmga
- 打包
  - `vsce package`: 打包
  - `vsce package --yarn`: 打包 需要先将 node_modules 删除 使用 yarn 安装一下, 再执行
- 直接发布
  - `vsce publish --yarn`: 直接发布 package.json 文件中需要 `"publisher": "[用户名]"` 这个配置

## 其他

- `vscode.window.showInformationMessage('[message]');`: message 为提示信息
- `vscode.commands.registerCommand`: 注册命令, 与 package.json 的 activationEvents 对应\
- `new vscode.Range([start], [end])`: 包含结尾
- `new vscode.Position([row], [column])`: 行和列都从 0 开始
