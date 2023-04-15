# 📓 Scrawl - Git backed Notes

---

Heavily inspired by Obsidian and Notion.

### Why?

Note taking is something everyone does, but most note taking applications:

- Do not have revision history
- Do not allow you to go back to a specific point in time
- And most importantly: Have your data stored on a Cloud that you don't have access to or control over.

What is the best solution to revision history? Well, it's **Git**, the battle tested change logging software, and what's the best place to store your Git Repository? Any Git Provider like GitHub or even a self hosted service if you want.

Scrawl combines the best of great note taking experiences with the ability to store them locally as well, view changelogs and back them up to the cloud using a Git Repository.

### Architecture

Scrawl will be a desktop application, where you can select a specific directory to be your workspace, this workspace will contain all the files that form your notes.

Scrawl will be Markdown based with one additional file to store information about the note document like the icon, banner image, title and comments from the author.

The structure could look like this to allow for nesting of notes and folders under each other:

```
workspace
├── workspace.metadata.json
├── where-are-we-in-this-universe
│   ├── index.md
│   └── metadata.json
└── are-we-alone
    ├── index.md
    ├── metadata.json
    ├── definitely-not
    │   ├── index.md
    │   ├── metadata.json
    │   └── proofs
    │       ├── index.md
    │       ├── image.png
    │       ├── video.mov
    │       └── metadata.json
    └── definitely-yes
        ├── index.md
        └── metdata.json
```

The app will parse the files and automatically generate a UI for you to use.

### Using with Git

The directory you choose to be your workspace will automatically be converted into a Git Repository.
It will be periodically committed and pushed to a your repository's remote.

All these configurations can be done via the app as well.

Whenever you reopen the app, it automatically takes a pull from your GitHub repository to ensure changes to your workspace from any other device are synced.

### Tech Stack

Scrawl will use:

- Electron for the desktop app
- React for the frontend
- A base Node.js process that runs inside the Electron shell which will expose APIs to take care of git and file system related operations.

### Core features scope

- Selecting a directory as a repository
- Being able to use or set a Git Remote and default branch
- Being able to view all documents on the left on opening the workspace
- Being able to edit and auto save changes via IPC and FS communication APIs exposed by the Electron Wrapper.
- Being able to view a changelog of the workspace as well as a changelog of a note file and revert to that point in time.
