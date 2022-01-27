---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/c8EkncB"
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

คุณสามารถใช้ `a` (_anchor_) element เพื่อลิงก์ไปยังหน้าเว็บอื่นได้

ในการใช้ `a` element เราต้องระบุด้วยว่าจะให้ลิงก์ไปที่ไหน โดยใช้ `href` attribute

ลองดูตัวอย่าง:

```html
<a href="https://www.careervio.com">this links to careervio.com</a>
```

ถ้าใส้โค้ดด้านบนไปในเว็บของคุณ browser ของคุณจะแสดงข้อความที่เขียนว่า `this links to careervio.com` ซึ่งเป็นลิงก์ที่คุณสามารถคลิกได้
และลิงก์นั้นจะพาคุณไปยังเว็บ `https://www.careervio.com`

# --instructions--

ให้สร้าง `a` element ที่ลิงก์ไปยัง `https://www.freecatphotoapp.com` และมี "cat photos" เป็นข้อความข้างใน element นั้น

# --hints--

`a` element ต้องมีข้อความข้างในเป็นคำว่า `cat photos`

```js
assert(/cat photos/gi.test($("a").text()));
```

`a` element ของคุณต้องลิงก์ไปยัง `https://www.freecatphotoapp.com`

```js
assert(
  /^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($("a").attr("href"))
);
```

`a` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
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
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <a href="https://www.freecatphotoapp.com">cat photos</a>
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
