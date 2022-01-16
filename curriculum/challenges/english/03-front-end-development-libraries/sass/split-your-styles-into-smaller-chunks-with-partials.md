---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

<dfn>Partial</dfn> ใน Sass คือไฟล์แยกที่มีโค้ด CSS อยู่ ซึ่งจะถูกเอาไปใช้ในไฟล์ Sass ไฟล์อื่น 
วิธีนี้เป็นวิธีที่ใช้จัดระเบียบไฟล์ได้ดี เพราะเป็นการรวมเอาโค้ดที่คล้ายๆกันไปไว้ใน module เดียวกัน

การตั้งชื่อสำหรับไฟล์ partial จะต้องขึ้นต้นด้วย underscore (`_`) ซึ่งเป็นการบอกให้ Sass รู้ว่าไม่ต้องแปลงไฟล์นี้ไปเป็น CSS และ partial จะต้องมีนามสกุลเป็น `.scss` ด้วย
เราจะใช้คำสั่ง `@import` ในการดึงโค้ดใน partial ไปใช้ใน Sass ไฟล์อื่น

ถ้า mixin ทุกตัวของคุณเก็บเป็น partial ที่ชื่อไฟล์เป็น "\_mixins.scss" และต้องการเอาไปใช้ในไฟล์ "main.scss" 
จะเอา partial นี้ไปใช้ในไฟล์หลักได้ตามตัวอย่างด้านล่าง

```scss
@import 'mixins'
```

จะเห็นว่าเราไม่ต้องใส่ underscore และ นามสกุลไฟล์ ในการใช้คำสั่ง `import` เพราะ Sass จะรู้เองว่าไฟล์เป็น partial 
เมื่อ partial ถูกนำเข้าไปในไฟล์แล้ว เราจะใช้ตัวแปร mixin และโค้ดอื่นๆ ได้ทั้งหมด

# --instructions--

ให้เขียนคำสั่ง `@import` เพื่อนำเข้า partial ชื่อ `_variables.scss` ไปใช้ในไฟล์ main.scss

# --hints--

ต้องใช้คำสั่ง `@import` ในโค้ด และไม่ต้องใส่ underscore และนามสกุลของไฟล์


```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- ไฟล์ที่เปิดอยู่นี้คือ main.scss -->
```

# --solutions--

```html
@import 'variables'
```
