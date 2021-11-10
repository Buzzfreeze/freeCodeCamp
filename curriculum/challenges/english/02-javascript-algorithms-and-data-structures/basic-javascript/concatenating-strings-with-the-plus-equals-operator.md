---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

# - นอกจากนี้เรายังสามารถใช้ `+=` operator เพื่อ <dfn>ต่อ/dfn> string กับตัวแปร string ที่มีอยู่ วิธีนี้จะมีประโยชน์มากในการแยก string ยาวๆ ออกเป็นหลายบรรทัด


**หมายเหตุ:** โปรดระวัง spaces (การเว้นวรรค) เนื่องจาก Concatenation จะไม่เพิ่มเว้นวรรคระหว่าง string ที่ต่อกัน ดังนั้น คุณจะต้องเพิ่มเอง

ตัวอย่าง:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` ตอนนี้ควรมีค่า string เป็น `I come first. I come second.`.

# --instructions--

จงสร้าง `myStr` โดยเชื่อม string 2 ตัวนี้เข้าด้วยกัน: `This is the first sentence.` และ `This is the second sentence.` ด้วย `+=` operator โดยให้ใช้ `+=` operator คล้ายกับที่แสดงในตัวอย่าง และอย่าลืมเว้นวรรคระหว่าง string ทั้งสอง เริ่มจากการกำหนด string แรกให้กับ "myStr" จากนั้นจึงเพิ่ม string ที่สอง


# --hints--

`myStr` ควรมีค่า string `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

คุณควรใช้ `+=` operator เพื่อสร้าง `myStr`

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
// Only change code below this line

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
