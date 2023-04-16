import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";

import "electron-reload";

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			preload: path.resolve(__dirname, "./preload.js"),
		},
	});
	win.setMenu(null);
	win.loadURL(
		isDev
			? "http://localhost:3000"
			: path.resolve(__dirname, "../../frontend/dist/index.html")
	);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
