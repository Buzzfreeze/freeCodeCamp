---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

ใน JavaScript เมื่อเครื่องหมาย `+` ถูกใช้กับค่า `String` จะมีการเรียก <dfn>concatenation</dfn> operator คุณสามารถสร้าง string ใหม่จาก string อื่นๆ โดยการ <dfn>concatenating</dfn> string เข้าด้วยกัน

**Example**

```js
'My name is Alan,' + ' I concatenate.'
```

**หมายเหตุ:** โปรดระวัง spaces (การเว้นวรรค) เนื่องจาก Concatenation จะไม่เพิ่มเว้นวรรคระหว่าง string ที่ต่อกัน ดังนั้น คุณจะต้องเพิ่มเอง

ตัวอย่าง:

```js
var ourStr = "I come first. " + "I come second.";
```

string `I come first. I come second.` จะแสดงในหน้า console

# --instructions--

จงสร้าง `myStr` จาก string `This is the start.` และ `This is the end.` โดยใช้ `+` operator อย่าลืมเพิ่ม space ระหว่าง string ทั้งสองด้วย

# --hints--

`myStr` ควรมีค่า string `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

คุณควรใช้ `+` operator ในการสร้าง `myStr`

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` ควรสร้างโดยใช้คีย์เวิร์ด `var` 

```js
assert(/var\s+myStr/.test(code));
```

คุณควรกำหนดผลลัพธ์ให้กับตัวแปร `myStr` 

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
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "This is the start. " + "This is the end.";
```
