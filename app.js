const {app,BrowserWindow} =  require('electron');
const url = require('url');
const path = require('path');
const {ipcMain} = require('electron');
const {dialog} = require('electron');
const {systemPreferences} =  require('electron');
const fs = require('fs');

var pathFile;

app.on('before-quit', () => {
   console.log('Quitting ...');
}); 

let win;

async function createWindow () {
    win =  new BrowserWindow({
         width: 800,
         height: 600,
         title: 'Montecarlo Editor',
         center: true,
         minimizable:true,
         webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
         }
    });

    win.loadURL(
        url.format({
           pathname: path.join(__dirname,'index.html'),
           protocol: 'file',
           slashes:true
        })
    );

}


ipcMain.on('openFile', async (event, args) => {
   
    const choosenFolders = await dialog.showOpenDialog(win,null || {
        properties:['openFile']});
    pathFile = choosenFolders.filePaths[0];

    
    try{
    fs.readFile(pathFile,'utf8',(err, data) => {
       if(err){
          alert('An error ocurred while reading file'+err);
          return;
       }
      
       event.sender.send('filedata',data);

    });
}
catch(e){
    console.log("No file selected to open")
}

event.sender.send('pathFile',pathFile);

});

ipcMain.on('saveFile', async (event,args) => {
    
    var path  =  await dialog.showSaveDialog({
    filters: [
        {
            name: 'txt',
            extensions: ['txt', 'docx']
        }, ],  properties: [] });

    fs.writeFile(path.filePath,args,(err) => {
        if(err){
            console.log(err);
        }
    });

});


app.on('ready', createWindow);


