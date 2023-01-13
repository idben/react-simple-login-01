# 簡單的登入登出範例

## 主要學習功能
1. 使用了 useContext 做為登入記錄管理；
2. 使用了 useReducer 做為登入狀態管理；
3. 使用了 react-router-dom 做為 clinet 端的分頁管理。

## Server 端
1. 為了將學習範圍限縮在主要學習功能上，主機端以 JSON 檔做為資料來源，因此並無連結到真實的資料庫，這個部份請再額外加上。
2. 為了方便學習，主機端只提供了 login 一支 api，所以也沒有使用 router 管理。

## Clinet 端
1. index 中，BrowserRouter 是分頁的管理用容器，在它底下的子節點就會有分頁的功能。
2. index 中，AuthContextProvider 是自製的 login 記錄管理，在它底下的子節點就可以取用登入所記錄的資料。
3. context/AuthContext.js 中，除了提供 AuthContextProvider 外，還提供了 AuthContext，可以取用使用者資料。判斷 session 是否有登入資料的地方是也是在這支。
4. context/AuthReducer.js 中，管理了登入登出動作狀態，除了回傳狀態外，寫入及刪除 session 資料也是在這裡。
5. 除了 session 外，也可以因應需求使用各種儲存的方式，像是 localStorage 等。

## 使用
1. 開啟終端機或命令提示字元，進入 server 資料夾，先安裝。
```
npm install
```
2. 開啟另一個終端機或命令提示字元，進入 client 資料夾，先安裝。
```
npm install
```
3. 回到 server 視窗，啟動 server 程式。
```
npm start
```
3. 回到 client 視窗，啟動 server 程式。
```
npm start
```
4. 由瀏覽器視窗中操作 login/logout 動作。