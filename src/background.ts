import { app, BrowserWindow } from 'electron'

// 等待Electron应用就绪后创建BrowserWindow窗口
app.whenReady().then(async () => {
    const win = await new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false, // 隐藏窗口边框
        icon:"favicon.ico", // 设置窗口图标--无效
        // 配置窗口的WebPreferences选项，用于控制渲染进程的行为
        webPreferences: {
            nodeIntegration: true, // 启用Node.js集成
            contextIsolation: false, // 禁用上下文隔离
            webSecurity: false, // 禁用web安全策略
        }
    })

    // 打开开发者工具
    // win.webContents.openDevTools()

    // 根据命令行参数加载URL或本地文件
    if (process.argv[2]) {
        win.loadURL(process.argv[2]) //开发环境
    } else {
        win.loadFile('index.html') //生产环境
    }
})
