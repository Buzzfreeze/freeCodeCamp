---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

บางครั้ง คุณต้องการสร้าง string ที่มีรูปแบบ [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) หากใช้ concatenation operator (`+`)คุณจะสามารถแทรกตัวแปรตั้งแต่หนึ่งตัวขึ้นไปลงไปใน string ที่คุณกำลังสร้างได้

ตัวอย่าง:

```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` ควรมีค่า string เป็น `Hello, our name is freeCodeCamp, how are you?`

# --instructions--

จงสร้างตัวแปร `myName` เป็น string ที่มีค่าเป็นชื่อของคุณ และสร้างตัวแปร `myStr` โดยนำ `myName` มาวางอยู่ระหว่าง string `My name is ` และ ` and I am well!`


# --hints--

`myName`ควรกำหนดเป็น string ที่มีความยาวอย่างน้อย 3 ตัวอักษร

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

คุณควรใช้ `+` operators 2 ตัว ในการสร้าง `myStr` ที่มี `myName` อยู่ภายใน

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
var myName;
var myStr;
```

# --solutions--

```js
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```
