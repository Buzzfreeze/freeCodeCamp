---
id: 587d78a5367417b2b2512ad8
title: Create Texture by Adding a Subtle Pattern as a Background Image
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

วิธีหนึ่งที่จะเพิ่ม texture และความน่าสนใจให้กับพื้นหลัง และทำให้มันดูโดดเด่นขึ้นก็คือการเพิ่มแพทเทิร์นง่าย ๆ เข้ามา
หัวใจหลักของมันคือความบาลานซ์ เพราะคุณไม่ได้ต้องการให้พื้นหลังมันเด่นเกินไป
`background` property นั้นรองรับ `url()` function เพื่อลิงค์มันไปยังรูปภาพของ texture หรือ pattern ที่เลือกไว้
ที่อยู่ของลิงค์จะถูกเก็บระหว่าง quote 2 อันข้างในวงเล็บ

# --instructions--

จงกำหนดให้ `background` ของทั้งหน้าด้วย `body` selector โดยใช้ url ของ `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png`

# --hints--

`body` element ควรมี `background` property ที่กำหนดให้ `url()` มาพร้อมกับลิงค์ที่กำหนดให้

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
