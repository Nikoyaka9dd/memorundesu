const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 250,
    x: 1000,
    y: 50, // 画面右上に表示させたい。
    frame: false,        
    transparent: true,     
    vibrancy: 'hud',       
    visualEffectState: 'active',
    hasShadow: false,
    // type: 'panel', // 最前面に表示されてしまうのでやめた
    skipTaskbar: true, //ついでにDockに表示されないようにもしておく     
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  win.setAlwaysOnTop(false);
  win.setLevel('desktop');
  //別のデスクトップに移動してもついてくるようにする
  win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: false});

  //フルスクリーン禁止
  win.setFullScreenable(false);
}

app.whenReady().then(createWindow);

//ウィンドウが閉じられたら終了する。
app.on('window-all-closed', () => {
  app.quit();
});
