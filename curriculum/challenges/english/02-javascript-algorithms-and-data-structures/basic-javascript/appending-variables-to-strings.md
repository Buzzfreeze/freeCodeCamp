---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

เช่นเดียวกับการสร้าง string โดยการนำ string หลายบรรทัดมาต่อกัน เรายังสามารถต่อตัวแปรกับ string โดยใช้ plus equals (`+=`) operator


ตัวอย่าง:

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` ควรมีค่า `freeCodeCamp is awesome!`.

# --instructions--

จงกำหนด `someAdjective` เป็น string ที่มีความยาวอย่างน้อย 3 ตัวอักษร และต่อกับ `myStr` โดยใช้ `+=` operator

# --hints--

`someAdjective` ควรกำหนดค่าเป็น string ที่มีความยาวอย่างน้อย 3 ตัวอักษร

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

คุณควรต่อ `someAdjective` กับ `myStr` โดยใช้ `+=` operator

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
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
// Change code below this line

var someAdjective;
var myStr = "Learning to code is ";
```

# --solutions--

```js
var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```
