---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cMdkytL"
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

ในบางครั้ง คุณก็ต้องเพิ่ม `a` element ลงในเว็บ โดยที่ยังไม่รู้ว่าจะลิงก์ไปที่ไหน

วิธีนี้จะมีประโยชน์ถ้าเราใช้ `JavaScript` (ที่เราจะเรียนในภายหลัง) เพื่อเปลี่ยนการทำงานของลิงก์

# --instructions--

ตอนนี้ attribute `href` ลิงก์ไปที่ "`https://www.freecatphotoapp.com`" อยู่
ให้เปลี่ยนค่าของ attribute `href` เป็น `#` เพื่อสร้าง dead link

เช่น: `href="#"`

# --hints--

`a` element ต้องเป็น dead link โดยมีค่าของ `href` attribute เป็น "#"

```js
assert($("a").attr("href") === "#");
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>
    Click here to view more
    <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.
  </p>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
</main>
```
