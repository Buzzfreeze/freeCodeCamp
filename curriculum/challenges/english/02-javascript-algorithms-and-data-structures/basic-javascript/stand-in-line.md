---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

ในเชิงคอมพิวเตอร์ <dfn>queue</dfn> เป็นรูปแบบของ <dfn>โครงสร้างข้อมูล</dfn> ที่ข้อมูลภายในจะถูกเรียงตามลำดับ โดยข้อมูลใหม่จะถูกนำไปต่อท้าย queue และข้อมูลเก่าจะถูกดึงออกทางด้านหน้าของ queue

ให้เขียนฟังก์ชัน `nextInLine` ซึ่งรับค่า array (`arr`) และตัวเลข (`item`) เป็น argument

ให้ฟังก์ชันนี้ทำงานโดยนำตัวเลขต่อท้าย array และลบข้อมูลด้านหน้าสุด array ออก

และฟังก์ชัน `nextInLine` ต้องคืนค่าที่ถูกลบออกไปด้วย

# --hints--

การเรียกใช้ฟังก์ชัน `nextInLine([], 5)` ต้องคืนค่าออกมาเป็นตัวเลข

```js
assert.isNumber(nextInLine([], 5));
```

การเรียกใช้ฟังก์ชัน `nextInLine([], 1)` ต้องคืนค่า `1` ออกมา

```js
assert(nextInLine([], 1) === 1);
```

การเรียกใช้ฟังก์ชัน `nextInLine([2], 1)` ต้องคืนค่า `2` ออกมา

```js
assert(nextInLine([2], 1) === 2);
```

การเรียกใช้ฟังก์ชัน `nextInLine([5,6,7,8,9], 1)` ต้องคืนค่า `5` ออกมา

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

เมื่อเรียกใช้ฟังก์ชัน `nextInLine(testArr, 10)` แล้ว
`testArr[4]` ต้องมีค่าเป็น  `10`

```js
nextInLine(testArr, 10);
assert(testArr[4] === 10);
```

# --seed--

## --before-user-code--

```js
var logOutput = [];
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput.push(message);
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
testArr = [1,2,3,4,5];
(function() { return logOutput.join("\n");})();
```

## --seed-contents--

```js
function nextInLine(arr, item) {
  // แก้โค้ดใต้บรรทัดนี้เท่านั้น
  
  return item;
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  

}

// เตรียมข้อมูล
var testArr = [1,2,3,4,5];

// แสดงผล
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
var testArr = [ 1,2,3,4,5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
