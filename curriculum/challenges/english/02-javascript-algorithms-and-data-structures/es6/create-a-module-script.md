---
id: 5cddbfd622f1a59093ec611d
title: Create a Module Script
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

JavaScript เริ่มต้นด้วยบทบาทเล็กๆ บนเว็บ HTML แต่ทุกวันนี้มีขนาดใหญ่ขึ้นมาก และบางเว็บไซต์ก็สร้างด้วย JavaScript เกือบทั้งหมด อย่างไรก็ตาม เพื่อทำให้ JavaScript เป็นแบบโมดูลาร์, ดูเรียบร้อย และบำรุงรักษาได้ง่ายขึ้น ES6 จึงนำเสนอวิธีการแชร์โค้ดระหว่างไฟล์ JavaScript สิ่งนี้ทำให้สามารถส่งส่วนต่างๆ ของไฟล์ออกไปใช้ในไฟล์อื่นๆ ได้ และนำเข้าส่วนที่คุณต้องการมายังจุดที่ต้องการได้ ทั้งนี้เพื่อการใช้ประโยชน์จากฟังก์ชันนี้ คุณต้องสร้าง script ในเอกสาร HTML ของคุณด้วย `type` ของ `module` ดังตัวอย่าง:

```html
<script type="module" src="filename.js"></script>
```

script ที่ใช้ `module` type นี้สามารถใช้ฟีเจอร์ `import` และ `export` ที่คุณจะได้เรียนรู้ในแบบทดสอบอันใกล้นี้

# --instructions--

จงเพิ่ม script ให้กับเอกสาร HTML เป็น `module` type และกำหนดชื่อ source file เป็น `index.js`


# --hints--

คุณควรสร้าง `script` tag

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

`script` tag ของคุณควรมี attribute `type` ที่มีค่า `module`

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

`script` tag ของคุณควรมี `src` เป็น `index.js`

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
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
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
