# ElectronAppDemo

## Install electron

```
npm install --save-dev electron@latest
```

## Electron commands for _package.json_

### Run/Start electron in debug mode

```
"start:electron": "ng build --base-href ./ && electron ."
```

### Create electron package

```
"winpackage": "electron-packager . DemoApp --platform=win32 --arch=x64 --overwrite --app-version=1.0.0 --build-version=1.0.0 --win32metadata.ProductName=DemoApp --FileDescription=DemoApp --appname=demoapp --win32metadata.CompanyName=ng --app-copyright=ng --icon=eagle.ico"
```

### archive electron created package using _asar_

```
"archiveapp": "asar pack DemoApp-win32-x64/resources/app DemoApp-win32-x64/resources/app.asar"
```

References:

- https://github.com/electron/electron-packager

- https://www.electronjs.org/docs/latest/tutorial/quick-start

- https://icon-icons.com/icon/eagle/98734
