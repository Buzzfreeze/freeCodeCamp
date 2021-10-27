---
id: 5a24c314108439a4d403614a
title: Moving Forward From Here
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

ยินดีด้วย! คุณจบบทเรียนเกี่ยวกับ React และ Redux มีสิ่งสุดท้ายที่ควรค่าแก่การชี้ให้เห็นก่อนที่คุณจะไปต่อ โดยปกติแล้วคุณจะไม่เขียนแอป React ใน code editor แบบนี้ แบบทดสอบนี้จะทำให้คุณเห็นว่ารูปแบบ syntax เป็นอย่างไรหากคุณทำงานกับ npm และระบบไฟล์ในเครื่องของคุณเอง โค้ดควรมีลักษณะคล้ายกัน ยกเว้นการใช้คำสั่ง `import` (คือการดึง dependencies ทั้งหมดที่มีให้สำหรับคุณในแบบทดสอบต่างๆ) ในส่วน "การจัดการแพ็คเกจด้วย npm" จะอธิบายถึงรายละเอียดเพิ่มเติมเกี่ยวกับ npm

สุดท้าย การเขียนโค้ด React และ Redux จำเป็นต้องมีการกำหนดค่าบางอย่าง มันอาจจะยุ่งยากสักหน่อย หากคุณสนใจที่จะทดลองกับเครื่องของคุณเอง ลองใช้ลิงก์ <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="nofollow">Create React App</a> ที่มี config ต่างๆ ที่พร้อมให้ใช้งาน

หรือคุณสามารถเปิดใช้งาน Babel เป็น JavaScript Preprocessor ใน CodePen เพิ่ม React และ ReactDOM เป็นทรัพยากร JavaScript ภายนอก แล้วทำงานบนนั่นได้เช่นกัน

# --instructions--

บันทึก log ข้อความ `'Now I know React and Redux!'` ไปยัง console

# --hints--

ข้อความ `Now I know React and Redux!` ควรถูก log ไปยัง console

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

// Only change code below this line
```

# --solutions--

```jsx
console.log('Now I know React and Redux!');
```
