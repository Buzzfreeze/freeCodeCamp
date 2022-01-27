---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

<dfn>scope</dfn> หมายถึงขอบเขตการมองเห็นตัวแปร โดยตัวแปรที่ถูกประกาศนอกฟังก์ชันจะมีขอบเขตในระดับ <dfn>Global</dfn> ซึ่งหมายความว่าสามารถเข้าถึงตัวแปรนี้ได้จากทุกที่ในโค้ด JavaScript ของคุณ

ถ้าประกาศตัวแปรโดยไม่ใช้คีย์เวิร์ด `var` ตัวแปรนั้นจะถูกสร้างขึ้นในขอบเขตระดับ `global` โดยอัตโนมัติ ซึ่งอาจส่งผลกระทบให้เกิดปัญหาในส่วนอื่นของโค้ดของคุณ หรือเกิดปัญหาเมื่อเรียกใช้ฟังก์ชันอีกครั้ง ดังนั้น คุณควรประกาศตัวแปรของคุณด้วย `var` เสมอ

# --instructions--

จงใช้ `var` ประกาศตัวแปรชื่อ `myGlobal` ในระดับ global โดยประกาศไว้นอกฟังก์ชัน และให้ตัวแปรนี้มีค่าเริ่มต้นเป็น `10`

ภายในฟังก์ชัน `fun1` จงกำหนดค่าให้ตัวแปร `oopsGlobal` มีค่าเป็น `5` ***โดยไม่ใช้*** คีย์เวิร์ด `var`


# --hints--

ต้องสร้างตัวแปร `myGlobal`

```js
assert(typeof myGlobal != 'undefined');
```

ตัวแปร `myGlobal` ต้องมีค่าเป็น `10`

```js
assert(myGlobal === 10);
```

ต้องประกาศตัวแปร `myGlobal` โดยใช้คีย์เวิร์ด `var`

```js
assert(/var\s+myGlobal/.test(code));
```

ตัวแปร `oopsGlobal` อยู่ในระดับ global และมีค่าเป็น `5`

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
// ประกาศตัวแปร myGlobal ใต้บรรทัดนี้


function fun1() {
  // กำหนดค่าตัวแปร oopsGlobal ให้เป็น 5 ที่นี่

}

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

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
