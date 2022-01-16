---
id: 5a24c314108439a4d403614a
title: Moving Forward From Here
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

คุณเรียนเรื่อง React และ Redux จบแล้ว เย้!
แต่มีอีกอย่างหนึ่งที่คุณต้องรู้ก่อนที่จะไปเรียนเรื่องอื่นต่อ 
ปกติคุณจะไม่ได้เขียน React ใน code editor แบบนี้ แบบทดสอบนี้จะทำให้คุณเห็นภาพว่า syntax จริงๆจะเป็ฯอย่างไรถ้าใช้ npm และเขียน React ในเครื่องของคุณเอง 
โค้ดจะคล้ายๆกัน แต่จะต่างเรื่องการใช้คำสั่ง `import` (ในแบบทดสอบที่ผ่านมาๆเราทำการ import พวกนี้ให้คุณ โดยที่คุณไม่รู้ตัว) 
คุณจะได้เรียนเรื่อง npm ในบทเรียน "การจัดการแพ็คเกจด้วย npm"

สุดท้าย การเขียนโค้ด React และ Redux จำเป็นต้องมีการกำหนดค่าบางอย่างเอง ซึ่งมันอาจจะยากหน่อย แต่ถ้าอยากลองเล่นในเครื่องตัวเอง ให้ลองใช้ <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="nofollow">Create React App</a> ที่จะทำการกำหนดค่าให้แล้ว แค่ลงแล้วก็โค้ดเล่นได้เลย

หรือถ้าจะใช้ CodePen ก็ให้เปิดใช้งาน Babel เป็น JavaScript Preprocessor และเพิ่ม React และ ReactDOM เป็น external JavaScript resources แล้วไปโค้ดบนไหนก็ได้เหมือนกัน

# --instructions--

ให้ log ข้อความ `'Now I know React and Redux!'` ไปบน console

# --hints--

ข้อความ `Now I know React and Redux!` ต้องถูก log ไปบน console

```js
(getUserInput) =>
  assert(
    /console\s*\.\s*log\s*\(\s*('|"|`)Now I know React and Redux!\1\s*\)/.test(
      getUserInput('index')
    )
  );
```

# --seed--

## --seed-contents--

```jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```jsx
console.log('Now I know React and Redux!');
```
