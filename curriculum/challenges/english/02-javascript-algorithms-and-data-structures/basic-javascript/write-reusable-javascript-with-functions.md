---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

ใน JavaScript เราสามารถแบ่งโค้ดของเราออกเป็นส่วนๆ เพื่อใช้ซ้ำได้ โค้ดที่เรียกใช้ซ้ำได้นั้นเรียกว่า <dfn>function</dfn>

ดูตัวอย่างของ function ได้ตามด้านล่างนี้

```js
function functionName() {
  console.log("Hello World");
}
```

คุณสามารถเรียกใช้หรือ <dfn>invoke</dfn> function นี้ได้ โดยการระบุชื่อของฟังก์ชันตามด้วยวงเล็บ เช่น `functionName();`
ทุกครั้งที่เรียกใช้ function นี้ก็จะมีการพิมพ์ข้อความ `Hello World` ออกมาบนหน้า console ซึ่งโค้ดทั้งหมดที่อยู่ในวงเล็บปีกกาจะทำงานทุกครั้งที่มีการเรียกใช้ฟังก์ชัน

# --instructions--

<ol>
  <li>
    จงสร้างฟังก์ชันชื่อ <code>reusableFunction</code> ที่จะพิมพ์ string คำว่า <code>Hi World</code> ออกมาที่หน้า console
  </li>
  <li>
    เรียกใช้ฟังก์ชัน
  </li>
</ol>

# --hints--

`reusableFunction` ต้องเป็นฟังก์ชัน

```js
assert(typeof reusableFunction === 'function');
```

ถ้าเรียกใช้ `reusableFunction` ต้องแสดง string เป็นคำว่า `Hi World` บนหน้า console

```js
assert(testConsole());
```

คุณต้องเรียกใช้ `reusableFunction` หลังจากสร้างฟังก์ชันแล้ว

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(code).replace(/reusableFunction\(\)\{/g, '');
assert(/reusableFunction\(\)/.test(codeWithoutFunction));
```

# --seed--

## --after-user-code--

```js

function testConsole() {
  var logOutput = "";
  var originalConsole = console;
  var nativeLog = console.log;
  var hiWorldWasLogged = false;
  console.log = function (message) {
    if(message === 'Hi World')  {
      console.warn(message)
      hiWorldWasLogged = true;
    }
    if(message && message.trim) logOutput = message.trim();
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
  reusableFunction();
  console.log = nativeLog;
  return hiWorldWasLogged;
}

```

## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
