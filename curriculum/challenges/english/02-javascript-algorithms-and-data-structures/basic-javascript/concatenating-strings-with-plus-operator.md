---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

ใน JavaScript เมื่อเครื่องหมาย `+` ถูกใช้ข้อมูลในรูปแบบ `string` จะเรียกว่าการ <dfn>concatenation</dfn> (เชื่อม)
คุณสามารถ <dfn>เชื่อม</dfn> string เข้าด้วยกันเพื่อสร้างเป็น string ใหม่ได้

**Example**

```js
'My name is Alan,' + ' I concatenate.'
```

**หมายเหตุ:** การเชื่อม string จะไม่เว้นวรรคระหว่าง string ที่ต่อกันให้ คุณจะต้องเพิ่มการเว้นวรรคระหว่าง string เอง

ตัวอย่าง:

```js
var ourStr = "I come first. " + "I come second.";
```

console จะแสดง string `I come first. I come second.`

# --instructions--

จงสร้างตัวแปร `myStr` จาก string `This is the start.` และ `This is the end.` โดยใช้เครื่องหมาย `+` อย่าลืมเว้นวรรคระหว่าง string ทั้งสองตัวด้วย

# --hints--

ตัวแปร `myStr` ต้องมีค่าเป็น string `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

คุณควรใช้เครื่องหมาย `+` ในการสร้างตัวแปร `myStr`

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

ต้องสร้างตัวแปร `myStr` โดยใช้คีย์เวิร์ด `var` 

```js
assert(/var\s+myStr/.test(code));
```

ต้องกำหนดค่าให้กับตัวแปร `myStr` 

```js
assert(/myStr\s*=/.test(code));
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
var myStr; // แก้โค้ดบรรทัดนี้
```

# --solutions--

```js
var myStr = "This is the start. " + "This is the end.";
```
