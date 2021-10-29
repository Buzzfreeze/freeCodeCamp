---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

<dfn>Partials</dfn> ใน Sass คือไฟล์แยกที่มีบางส่วนของโค้ด CSS ที่ถูกนำเข้าแล้วใช้ในไฟล์ Sass อื่นๆ มันเป็นวิธีที่ดีในการรวมกลุ่มของโค้ดที่เหมือนกันในอยู่ใน module เดียวเพื่อความเป็นระเบียบ

การตั้งชื่อสำหรับ partial เริ่มตด้วยตัว underscore (`_`) ซึ่งบอกให้ Sass รู้ว่ามันเป็น CSS ส่วนเล็กๆ และจะไม่แปลงไปเป็นไฟล์ CSS และ ไฟล์ Sass มีนามสกุลเป็น `.scss` ในการดึงโค้ดใน partial มาใช้ใน ไฟล์ Sass อื่นๆ ให้ใช้คำสั่ง `@import`

ตัวอย่างเช่น ถ้า mixin ของคุณทุกตัวถูกเซฟเป็น partial ชื่อว่า "\_mixins.scss" และต้องการใช้มันในไฟล์ "main.scss" ข้างล่างนี้คือตัวอย่างการใช้งานพวกมันในไฟล์หลัก

```scss
@import 'mixins'
```

โปรดทราบว่า ไม่ต้องพิมพ์ underscore และ นามสกุลไฟล์ ในการใช้คำสั่ง `import` Sass จะเข้าใจได้เองว่ามันคือ partial เมื่อ partial ถูกนำเข้าไปยังไฟล์แล้ว เราสามารถใช้ตัวแปร mixin และโค้ดอื่นๆ ทั้งหมดได้

# --instructions--

เขียนคำสั่ง `@import` เพื่อนำเข้า partial ชื่อ `_variables.scss` ไปใช้ในไฟล์ main.scss

# --hints--

โค้ดของคุณควรใช้คำสั่ง `@import` และไม่ควรใส่ underscore และนามสกุลไฟล์ ในการเขียนโค้ด


```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- The main.scss file -->
```

# --solutions--

```html
@import 'variables'
```
