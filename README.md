# multilanguage-app-ecare

## ⚙Installation

## Install dependencies:

```
npm install
```

Compile code to later copy them to platforms (Android / iOS):
```
ionic build
```

Add capacitor to existing ionic project
```
npx cap init
```

Create android platform (Native compilation code)
```
npx cap add android
```

Open app in android studio
```
npx cap open android
```

## Run app for debug
```
npm run api
```
```
ionic serve
```

## 💻 Funcionality "Multilanguage Service"
  

## 💻 Additional Information:
Files to take into account:
- tsconfig.json => Added the values "resolveJsonModule" and "esModuleInterop" to true to import Local JSON directly
- proxy.conf.json => "/ api" has been added to solve CORS issue, since the json-server "/ apis" of this project are working on localhost: 3000
- angular.json => Added "proxy.conf.json" in "serve"
- package.json => The "api" script has been created to start our local server from "apis" (npm run api)

  
