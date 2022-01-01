---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

เราสามารถใช้เครื่องหมาย `+=` เพื่อ <dfn>เชื่อม</dfn> string กับตัวแปร string ที่มีอยู่แล้วได้อีกด้วย 
ถ้ามี string ยาวๆ วิธีนี้จะช่วยให้แยก string นั้นออกเป็นหลายๆ บรรทัดได้


**หมายเหตุ:** การเชื่อม string จะไม่เว้นวรรคระหว่าง string ที่ต่อกันให้ คุณจะต้องเพิ่มการเว้นวรรคระหว่าง string เอง

ตัวอย่าง:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
```

ตัวแปร `ourStr` จะมีค่าเป็น `I come first. I come second.`.

# --instructions--

จงสร้างตัวแปร `myStr` โดยเชื่อม string 2 ตัวนี้เข้าด้วยกัน: `This is the first sentence.` และ `This is the second sentence.` โดยใช้เครื่องหมาย `+=` และให้ใช้ `+=` ด้วยวิธีเดียวกับที่แสดงในตัวอย่าง แล้วอย่าลืมเว้นวรรคระหว่าง string ทั้งสองตัวด้วย
ให้เริ่มจากการกำหนดค่า string แรกให้กับตัวแปร `myStr` ก่อน แล้วค่อยเชื่อม string ที่สองเข้าไป

# --hints--

ตัวแปร `myStr` ต้องมีค่าเป็น `This is the first sentence. This is the second sentence.`

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

ต้องใช้เครื่องหมาย `+=` ในการกำหนดค่าให้ตัวแปร `myStr`

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
// แก้โค้ดใต้บรรทัดนี้เท่านั้น

var myStr;
```

# --solutions--

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
