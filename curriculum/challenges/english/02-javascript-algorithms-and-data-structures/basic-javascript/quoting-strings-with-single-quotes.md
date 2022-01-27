---
id: 56533eb9ac21ba0edf2244b4
title: Quoting Strings with Single Quotes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

การกำหนดค่า <dfn>string</dfn> ใน JavaScript จะเขียนด้วยเครื่องหมาย single quote (`'`) หรือ double quote (`"`) ก็ได้ แต่คุณต้องเริ่มต้นและลงท้ายด้วยเครื่องหมายประเภทเดียวกัน  
โดยเครื่องหมาย single และ double quote จะทำงานเหมือนกันในภาษา JavaScript ซึ่งแตกต่างจากภาษาอื่นๆ


```js
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
```

คุณอาจเลือกใช้เครื่องหมาย quote แบบใดแบบหนึ่งถ้าคุณต้องการใช้เครื่องหมายอีกแบบใน string  
กรณีนี้อาจเกิดขึ้นได้ ถ้าคุณต้องการเก็บบทสนทนาเป็น string และมีบทสนทนาอยู่ในเครื่องหมาย quote อีกกรณีหนึ่งก็คือการใช้แท็ก `<a>` ที่มี attribute ที่อยู่ในเครื่องหมาย quote ใน string

```js
conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

แต่หากคุณจำเป็นต้องใช้เครื่องหมาย quote ที่อยู่ชั้นนอกสุด มาแสดงภายใน string จะเกิดปัญหาขึ้นทันที 
string จะต้องเปิดและปิดด้วย quote แบบเดียวกัน แต่ถ้าคุณมี quote เดียวกันนั้นอยู่ตรงกลาง string นั้นจะเกิดข้อผิดพลาดได้

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
badStr = 'Finn responds, "Let's go!"';
```

ในตัวอย่าง ตัวแปร `badStr` จะแสดง error ออกมา

ใน <dfn>goodStr</dfn> ด้านบน คุณสามารถใช้ quote ทั้ง 2 แบบ โดยใช้ backslash `\` เป็น escape character ได้

**หมายเหตุ:** ไม่ควรสับสนระหว่าง backslash  `\` กับ forward slash `/` ทั้งสองเครื่องหมายนี้เป็นคนละตัวกันและทำงานไม่เหมือนกัน

# --instructions--

จงเปลี่ยน string ที่กำหนดให้เป็น string ที่เปิดและปิดด้วย single quotes โดยไม่มี escape character

ในตอนนี้แท็ก `<a>` ใน string ใช้เครื่องหมาย double quotes ทั้งหมด คุณจะต้องแก้เครื่องหมาย quote ด้านนอกให้เป็น single quote เพื่อจะได้ลบ escape character ออกได้

# --hints--

คุณควรลบ backslash (`\`) ออกทั้งหมด

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

คุณควรมี single quotes 2 ตัว (`'`) และ double quotes 4 ตัว (`"`) 

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
