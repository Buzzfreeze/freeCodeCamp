---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Parameters</dfn> คือตัวแปรที่ทำหน้าที่เหมือน placeholders (ข้อความในตัวยึด) ที่รับค่าที่เราจะป้อนเข้าไปให้กับฟังก์ชันเมื่อมีการเรียก เมื่อมีการสร้างฟังก์ชัน โดยทั่วไปจะกำหนด parameter ตั้งแต่หนึ่งตัวขึ้นไป ส่วนค่าจริงๆ ที่ป้อน (หรือ <dfn>"ส่ง"</dfn>) เข้าไปในฟังก์ชันเมื่อมีการเรียก เรียกว่า <dfn>arguments</dfn>


นี่คือ function ที่มี 2 parameter คือ `param1` และ `param2`

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

จากนั้นเราสามารถเรียก `testFun` ได้ดังนี้: `testFun("Hello", "World");` เราได้ส่ง string arguments 2 ตัว เข้าไป คือ `Hello` กับ `World` โดยภายในฟังก์ชัน ค่าของ `param1` จะเท่ากับ string `Hello` และค่าของ `param2` จะเท่ากับ string `World` 
หมายเหตุ คุณสามารถเรียก `testFun` ได้อีกครั้งด้วย argument ที่ต่างออกไป และ parameter ก็จะรับค่าจาก argument ใหม่นั้นเข้าไป

# --instructions--

# - <ol><li>จงสร้างฟังก์ชันชื่อ <code>functionWithArgs</code> ที่รับ argument 2 ตัว และแสดงผลรวมของ argument ทั้งสองตัวนั้นที่หน้า console</li><li>จงเรียกใช้ฟังก์ชัน โดยส่งเลข 2 ตัวเข้าไปเป็น argument </li ></ol>

# --hints--

`functionWithArgs` ควรเป็น function 


```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` ควรได้ผลลัพธ์ `3`

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` ควรได้ผลลัพธ์ `16`


```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

คุณควรเรียกใช้ `functionWithArgs` พร้อมกับส่งเลขสองตัวเข้าไปในฟังก์ชันหลังจากที่คุณสร้างฟังก์ชันแล้ว


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
