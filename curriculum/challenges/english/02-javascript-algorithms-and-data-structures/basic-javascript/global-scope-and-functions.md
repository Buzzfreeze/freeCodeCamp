---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

ใน JavaScript <dfn>scope</dfn> หมายถึงขอบเขตการมองเห็นตัวแปร ตัวแปรที่กำหนดนอกบล็อกฟังก์ชันจะมีขอบเขต <dfn>Global</dfn> ซึ่งหมายความว่าสามารถพบเห็นได้ทุกที่ในโค้ด JavaScript ของคุณ

ตัวแปรที่ประกาศโดยไม่ใช้คีย์เวิร์ด `var` จะถูกสร้างขึ้นโดยอัตโนมัติในขอบเขต `global` ซึ่งทำให้เกิดผลลัพธ์ที่ไม่ได้ตั้งใจในส่วนอื่นๆ ในโค้ดของคุณ หรือเมื่อเรียกใช้ฟังก์ชันอีกครั้ง ดังนั้น คุณควรประกาศตัวแปรของคุณด้วย `var` เสมอ

# --instructions--

Using `var`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.

จงใช้ `var` ประกาศตัวแปร global ชื่อ `myGlobal` วางไว้ข้างนอกฟังก์ชัน และให้มีค่าเริ่มต้นเป็น `10`

ภายใน function `fun1` จงกำหนดค่า `5` ให้กับ `oopsGlobal` ***โดยไม่ใช้*** คีย์เวิร์ด `var`


# --hints--

`myGlobal` ควรถูกสร้าง

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` ควรมีค่า `10`

```js
assert(myGlobal === 10);
```

`myGlobal` ควรประกาศโดยใช้คีย์เวิร์ด `var`

```js
assert(/var\s+myGlobal/.test(code));
```

`oopsGlobal` ควรเป็นตัวแปร global และมีค่า `5`

```js
assert(typeof oopsGlobal != 'undefined' && oopsGlobal === 5);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
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
var oopsGlobal;
capture();
```

## --after-user-code--

```js
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

# --solutions--

```js
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
