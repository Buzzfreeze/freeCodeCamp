---
id: 5cddbfd622f1a59093ec611d
title: Create a Module Script
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

ในตอนแรก JavaScript ถูกใช้แค่เล็กๆ น้อยๆ ในโลกที่เว็บนั้นใช้ HTML เป็นหลัก แต่ทุกวันนี้ JavaScript นั้นยิ่งใหญ่ขึ้นมาก และก็มีเว็บไซต์ที่ถูกสร้างด้วย JavaScript เกือบทั้งหมดด้วย 
ES6 ได้ช่วยทำให้ JavaScript นั้นมีความเป็นกลุ่มก้อน ดูเรียบร้อย และบำรุงรักษาได้ง่ายขึ้น  โดยการเพิ่มวิธีการแชร์โค้ดระหว่างไฟล์ JavaScript ซึ่งทำให้สามารถส่งแค่ส่วนหนึ่งของไฟล์ออกไปใช้ในไฟล์อื่นๆ ได้ และดึงแค่โค้ดส่วนที่ต้องการมาใช้ในจุดที่ต้องการได้ ถ้าจะใช้ฟีเจอร์นี้ เราต้องสร้าง script ในไฟล์ HTML ที่มี `type` เป็น `module` ตามตัวอย่าง:

```html
<script type="module" src="filename.js"></script>
```

script ที่ใช้ type เป็น `module` จะสามารถใช้ฟีเจอร์ `import` และ `export` ได้ ซึ่งคุณจะได้เรียนเรื่องนี้ในบทเรียนถัดไป

# --instructions--

จงเพิ่ม script ให้กับ HTML โดยมี type เป็น `module` และให้มี source file ชื่อ `index.js`


# --hints--

ต้องสร้าง tag `script` 

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

tag `script` ของคุณต้องมี `type` เป็น `module`

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

tag `script` ต้องมี `src` เป็น `index.js`

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น -->

    <!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
