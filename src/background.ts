import { app, BrowserWindow, Menu, ipcMain } from 'electron'

// 等待Electron应用就绪后创建BrowserWindow窗口
app.whenReady().then(async () => {
    let  mainWindowId = null; // 主窗口ID
    const win = await new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false, // 隐藏窗口边框
        icon:"favicon.ico", // 设置窗口图标--无效??
        title: "天气", // 设置窗口标题
        // 配置窗口的WebPreferences选项，用于控制渲染进程的行为
        webPreferences: {
            nodeIntegration: true, // 启用Node.js集成
            contextIsolation: false, // 禁用上下文隔离
            webSecurity: false, // 禁用web安全策略
            sandbox: false, // 禁用沙箱
        }
    })

    // 打开开发者工具
    // win.webContents.openDevTools()

    // 菜单操作start
        // 创建一个菜单--内有主进程向渲染进程发送消息的示例
        const menuTemplate = [
            {
                label: '文件',
                submenu: [
                    {
                        label: '退出',
                        click: () => {
                            app.quit()
                        }
                    }
                ]
            }, {
                label: '编辑角色',
                submenu: [
                    {
                        label: '复制',
                        role: 'copy'
                    },
                    {
                        label: '粘贴',
                        role: 'paste'
                    }, {
                        type: 'separator'
                    }, {
                        label: '全选',
                        role: 'selectall'
                    }
                ]
            }, {
                label: '视图',
                submenu: [
                    {
                        label: '刷新',
                        role: 'reload'
                    }, {
                        label: '强制刷新',
                        role: 'forcereload'
                    }, {
                        label: '开发者工具',
                        role: 'toggledevtools'
                    }
                ]
            }, {
                label: '类型',
                submenu: [
                    {
                        label: '类型2',
                        type: 'checkbox',
                    }, {
                        label: '类型2',
                        type: 'checkbox',
                    }, {
                        label: '类型3',
                        type: 'checkbox',
                    },{
                        type: 'separator'
                    },{
                        label: '单选1',
                        type: 'radio',
                    },{
                        label: '单选2',
                        type: 'radio',
                    },{
                        label: '单选3',
                        type: 'radio',
                    }
                ]
            },{
                label: '其它',
                submenu: [
                    {
                        label: '打开',
                        accelerate: 'CmdOrCtrl+O',
                        click: () => {
                            console.log('打开')
                        }
                    }
                ]
            }, {
                label: '通信',
                click: () => {
                    BrowserWindow.getFocusedWindow()?.webContents.send('mtr', '主进程发送消息')
                }
            }
        ]
        const menu = Menu.buildFromTemplate(menuTemplate)
        Menu.setApplicationMenu(menu)
    // 菜单操作end

    // 根据命令行参数加载URL或本地文件
    if (process.argv[2]) {
        win.loadURL(process.argv[2]) //开发环境
    } else {
        win.loadFile('index.html') //生产环境
    }

    mainWindowId = win.id
    
    // 通信测试start

        // 异步通信
        ipcMain.on('rtm', (event, data) => {
            console.log(data)
            event.sender.send('mtr', '后台收到消息')
        })

        // 同步通信
        ipcMain.on('rtm_sync', (event, data) => {
            console.log(data)
            event.returnValue = '后台收到消息2'
        })

    // 通信测试end

    // 新建窗口
    ipcMain.on('new_win', (event, data) => {
        const new_win = new BrowserWindow({
            width: 400,
            height: 400,
            parent: BrowserWindow.fromId(mainWindowId)!, // 设置父窗口
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: true,
            }
        })
        new_win.loadFile('list.html')  //新窗口显示不出内容？
    })
})
