---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

เราเชื่อมตัวแปรกับ string โดยใช้เครื่องหมาย `+=` ได้ เหมือนกับตอนที่เราสร้าง string โดยการนำ string หลายๆ ตัวมาต่อกัน


ตัวอย่าง:

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

ตัวแปร `ourStr` จะมีค่าเป็น `freeCodeCamp is awesome!`

# --instructions--

จงกำหนดตัวแปร `someAdjective` เป็น string ที่มีความยาวอย่างน้อย 3 ตัวอักษร และเชื่อมกับตัวแปร `myStr` โดยใช้เครื่องหมาย `+=`

# --hints--

ตัวแปร `someAdjective` ต้องเป็น string ที่มีความยาวอย่างน้อย 3 ตัวอักษร

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

คุณต้องเชื่อมตัวแปร `someAdjective` กับตัวแปร `myStr` โดยใช้เครื่องหมาย `+=`

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
// แก้โค้ดใต้บรรทัดนี้

var someAdjective;
var myStr = "Learning to code is ";
```

# --solutions--

```js
var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```
