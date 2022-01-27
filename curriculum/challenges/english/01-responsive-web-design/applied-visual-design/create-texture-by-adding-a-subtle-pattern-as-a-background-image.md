---
id: 587d78a5367417b2b2512ad8
title: Create Texture by Adding a Subtle Pattern as a Background Image
challengeType: 0
videoUrl: "https://scrimba.com/c/cQdwJC8"
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

วิธีหนึ่งที่จะเพิ่ม texture และความน่าสนใจให้กับพื้นหลัง และทำให้พื้นหลังดูโดดเด่นขึ้น ก็คือการเพิ่มแพทเทิร์นจางๆเข้ามา

หัวใจหลักของการเพิ่มภาพพื้นหลังคือความสมดุล เพราะคุณไม่ได้ต้องการให้พื้นหลังเด่นเกินไป

property `background` รองรับฟังก์ชัน `url()` ที่จะรับค่า URL ของ texture หรือ pattern มาเป็นพื้นหลังของ element
โดยการระบุลิงก์จะต้องครอบด้วยเครื่องหมายคำพูด และใส่ลิงก์ไว้ในวงเล็บอีกทีหนึ่ง

# --instructions--

ให้กำหนด `background` ของทั้งหน้าโดยใช้ `body` selector และใช้ภาพพื้นหลังตาม url นี้: `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`

# --hints--

ต้องตั้งค่า property `background` ของ `body` element โดยใช้ `url()` และใช้ URL ที่กำหนดให้

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
