---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

ค่า <dfn>String</dfn> ใน JavaScript อาจเขียนด้วย single หรือ double quotes แต่คุณต้องเริ่มต้นและลงท้ายด้วย quote ประเภทเดียวกัน โดย single และ double quotes จะทำงานเหมือนกันในภาษา JavaScript ซึ่งแตกต่างจากภาษาอื่นๆ


```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

เหตุผลที่คุณอาจต้องการใช้ quote (เครื่องหมายคำพูด) ประเภทนึงมากกว่าอีกประเภท คือ หากคุณต้องการใช้ทั้งคู่ใน string กรณีนี้อาจเกิดขึ้นได้ หากคุณต้องการแสดงการสนทนาเป็น string และมีบทสนทนาอยู่ใน quote การใช้งานอีกอย่างหนึ่งก็คือการใช้แท็ก `<a>` ที่มี attribute ต่างๆ ใน quote ทั้งหมดนี้อยู่ภายใน string

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

อย่างไรก็ตาม สิ่งนี้จะกลายเป็นปัญหา หากคุณจำเป็นต้องใช้ quote ที่อยู่นอกสุด มาแสดงภายใน string โปรดจำไว้ว่า string ต้องใช้ quote แบบเดียวกันที่จุดเริ่มต้นและจุดสิ้นสุด แต่ถ้าคุณมี quote เดียวกันนั้นอยู่ตรงกลาง string นั้นจะหยุดก่อนกำหนดและเกิดข้อผิดพลาดได้

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"';
```

ในที่นี้ `badStr` จะแสดง error ออกมา

ใน <dfn>goodStr</dfn> ด้านบน คุณสามารถใช้ quote ทั้ง 2 แบบ โดยใช้ backslash `\` เป็น escape character

# - **หมายเหตุ:** ไม่ควรสับสนระหว่าง backslash  `\` กับ forward slash `/` ทั้งคู่ไม่เหมือนกัน

# --instructions--

จงเปลี่ยน string ที่กำหนดให้เป็น string ที่มี single quotes ที่จุดเริ่มต้นและจุดสิ้นสุดจนจบ โดยไม่มี escape characters

ในตอนนี้ tag `<a>` ใน string ใช้เครื่องหมาย double quotes ทั้งหมด คุณจะต้องแก้ quotes ด้านนอกให้เป็น single quotes เพื่อจะได้ลบ escape characters ออกได้

# --hints--

คุณควรลบ backslashes (`\`) ออกทั้งหมด

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

คุณควรมี single quotes  2 ชุด `'` และ double quotes 4 ชุด (`"`) 

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --after-user-code--

```js
(function() { return "myStr = " + myStr; })();
```

## --seed-contents--

```js
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
