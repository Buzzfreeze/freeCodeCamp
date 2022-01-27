---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Parameter</dfn> คือตัวแปรที่ทำหน้าที่รับค่าที่เราส่งไปให้ฟังก์ชันเมื่อมีการเรียกใช้ฟังก์ชัน โดยทั่วไปแล้วในการสร้างฟังก์ชันจะกำหนด parameter ตั้งแต่หนึ่งตัวขึ้นไป ส่วนค่าจริงๆ ที่ป้อนหรือส่งเขาไปในฟังก์ชันเมื่อมีการเรียกใช้ฟังก์ชัน จะเรียกว่า <dfn>argument</dfn>


ตัวอย่างด้านล่างจะเป็นฟัง์ชันที่มี 2 parameter คือ `param1` และ `param2`

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

จากนั้นเราสามารถเรียกใช้ `testFun` ได้แบบนี้ `testFun("Hello", "World");`  
เราได้ส่ง string argument เข้าไป 2 ตัว คือ `Hello` กับ `World` โดยภายในฟังก์ชัน ค่าของ `param1` จะเป็น string ที่มีค่าเป็น `Hello` และค่าของ `param2` จะเท่ากับ จะเป็น string ที่มีค่าเป็น `World`

**หมายเหตุ** คุณสามารถเรียกใช้ `testFun` ด้วย argument อื่นก็ได้ และ parameter ก็จะรับค่าจาก argument ใหม่นั้นเข้าไปใช้งาน

# --instructions--

<ol>
  <li>จงสร้างฟังก์ชันชื่อ <code>functionWithArgs</code> ที่รับ argument 2 ตัว และแสดงผลรวมของ argument ทั้งสองตัวนี้ที่หน้า console</li>
  <li>จงเรียกใช้ฟังก์ชัน โดยส่งเลข 2 ตัวเข้าไปเป็น argument </li >
</ol>

# --hints--

`functionWithArgs` ต้องเป็น function 


```js
assert(typeof functionWithArgs === 'function');
```

การเรียกใช้ `functionWithArgs(1,2)` ควรได้ผลลัพธ์เท่ากับ `3`

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

การเรียกใช้ `functionWithArgs(7,9)` ควรได้ผลลัพธ์เท่ากับ `16`


```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

คุณต้องเรียกใช้ `functionWithArgs` พร้อมกับส่งตัวเลขสองตัวเข้าไปในฟังก์ชันด้วย หลังจากที่คุณสร้างฟังก์ชันแล้ว


```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    code.replace(/\s/g, '')
  )
);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        if(message) logOutput = JSON.stringify(message).trim();
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```
