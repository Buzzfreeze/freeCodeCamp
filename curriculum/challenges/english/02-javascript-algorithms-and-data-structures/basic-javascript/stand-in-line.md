---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

ในวิทยาการคอมพิวเตอร์ <dfn>queue</dfn> เป็น <dfn>โครงสร้างข้อมูล</dfn> ที่เป็นนามธรรม ซึ่งรายการต่างๆ จะถูกจัดวางตามลำดับ โดยรายการใหม่จะเพิ่มที่ด้านหลังของ queue และรายการเก่าจะถูกลบออกจากด้านหน้าของ queue

เขียน function `nextInLine` ซึ่งรับค่า array (`arr`) และตัวเลข (`item`) เป็น argument

เพิ่มตัวเลขไปยังด้านท้ายของ array และลบรายการแรกของ array ออก

function `nextInLine` ควรส่งคืนค่าที่ถูกลบออกไป

# --hints--

`nextInLine([], 5)` ควรคืนค่าตัวเลข

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` ควรส่งคืนค่า `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` ควรส่งคืนค่า `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` ควรส่งคืนค่า `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

จากนั้น `nextInLine(testArr, 10)`, `testArr[4]` ควรส่งคืนค่า  `10`

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
  // Only change code below this line
  
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
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
