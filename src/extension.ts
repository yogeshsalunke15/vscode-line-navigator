// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/** 
 * @author: Yogesh Salunke
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {

	const goToLine51 = vscode.commands.registerCommand('extension.goToLine51', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const lineNumber = 50; // Line numbers are 0-based, meaning starts from 0
			const position = editor.selection.active.with(lineNumber, 0);
			editor.selection = new vscode.Selection(position, position);
			editor.revealRange(new vscode.Range(position, position));
		}
	});

	const goToLine251 = vscode.commands.registerCommand('extension.goToLine251', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const lineNumber = 250;
			const position = editor.selection.active.with(lineNumber, 0);
			editor.selection = new vscode.Selection(position, position);
			editor.revealRange(new vscode.Range(position, position));
		}
	});

	context.subscriptions.push(goToLine51, goToLine251);

}

// This method is called when your extension is deactivated
export function deactivate() { }
