import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
	getRepoRemote: (path: string) => ipcRenderer.invoke("get-repo-remote", path),
	getWorkspaceMetadata: (path: string) =>
		ipcRenderer.invoke("get-workspace-metadata", path),
	saveFile: (path: string, contents: string) =>
		ipcRenderer.invoke("save-file", path, contents),
	saveFileMetadata: (path: string, metadata: Record<string, string>) =>
		ipcRenderer.invoke("save-file-metadata", path, metadata),
});
