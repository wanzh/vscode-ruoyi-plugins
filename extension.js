const vscode = require('vscode')

module.exports.activate = function activate(context) {
  const provider2 = vscode.languages.registerCompletionItemProvider(
    'vue',
    {
      provideCompletionItems(document, position) {
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character)
        if (linePrefix.endsWith('this.')) {
          return [
            new vscode.CompletionItem(
              '$modal',
              vscode.CompletionItemKind.Class
            ),
            new vscode.CompletionItem('$tab', vscode.CompletionItemKind.Class),
            new vscode.CompletionItem('$auth', vscode.CompletionItemKind.Class),
            new vscode.CompletionItem(
              '$cache',
              vscode.CompletionItemKind.Class
            ),
            new vscode.CompletionItem(
              '$download',
              vscode.CompletionItemKind.Class
            ),
          ]
        }
        if (linePrefix.endsWith('this.$tab.')) {
          return [
            new vscode.CompletionItem(
              'openPage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'updatePage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'closeOpenPage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'refreshPage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'closeAllPage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'closeLeftPage()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'closeRightPage()',
              vscode.CompletionItemKind.Method
            ),
          ]
        }

        if (linePrefix.endsWith('this.$modal.')) {
          return [
            new vscode.CompletionItem(
              'msg()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'msgError()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'msgSuccess()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'msgWarning()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'alert()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'alertError()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'alertSuccess()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'alertWarning()',
              vscode.CompletionItemKind.Method
            ),

            new vscode.CompletionItem(
              'notify()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'notifyError()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'notifySuccess()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'notifyWarning()',
              vscode.CompletionItemKind.Method
            ),

            new vscode.CompletionItem(
              'confirm()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'loading()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'closeLoading()',
              vscode.CompletionItemKind.Method
            ),
          ]
        }
        if (linePrefix.endsWith('this.$auth.')) {
          return [
            new vscode.CompletionItem(
              'hasPermi()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'hasPermiOr()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'hasPermiAnd()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'hasRole()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'hasRoleOr()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'hasRoleAnd()',
              vscode.CompletionItemKind.Method
            ),
          ]
        }
        if (linePrefix.endsWith('this.$cache.')) {
          return [
            new vscode.CompletionItem(
              'local.set()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'local.setJSON()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'session.set()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'session.setJSON()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'local.remove()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'session.remove()',
              vscode.CompletionItemKind.Method
            ),
          ]
        }
        if (linePrefix.endsWith('this.$cache.')) {
          return [
            new vscode.CompletionItem(
              'zip()',
              vscode.CompletionItemKind.Method
            ),
            new vscode.CompletionItem(
              'saveAs()',
              vscode.CompletionItemKind.Method
            ),
          ]
        }
        return undefined
      },
    },
    '.'
  )

  context.subscriptions.push(provider2)
}
