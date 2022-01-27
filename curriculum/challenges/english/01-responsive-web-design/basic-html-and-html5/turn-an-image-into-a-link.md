---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

เราสามารถเปลี่ยน element ให้กลายเป็นลิงค์ได้ด้วย!
โดยเราต้องซ้อน element นั้นไว้ใน `a` element

ลองดูตัวอย่างการซ้อนรูปไว้ใน `a` element:

```html
<a href="#"
  ><img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="Three kittens running towards the camera."
/></a>
```

ให้ทำให้ลิงก์นี้เป็น dead link โดยการทำให้ `href` ของ `a` element มีค่าเป็น `#` ด้วย

# --instructions--

ให้ซ้อน image element ที่มีอยู่ ไปไว้ใน `a` (_anchor_) element

เมื่อคุณทำเสร็จแล้ว
ให้ลองเอาเมาส์ของคุณไปชี้ที่รูปน้องแมว คุณจะเห็นว่าเมาส์ของคุณเปลี่ยนเป็นรูปมือแล้ว
ซึ่งแปลว่าตอนนี้รูปน้องแมวได้กลายเป็นลิงก์แล้ว!

# --hints--

`img` element ต้องซ้อนอยู่ใน `a` element

```js
assert($('a').children('img').length > 0);
```

`a` element ต้องเป็น dead link ที่มี `href` attribute เป็น `#`

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

`a` element ทุกตัวต้องมีแท็กปิด

```js
assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot,
    hairball run catnip eat the grass sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur
    catnip scratched.
  </p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot,
    hairball run catnip eat the grass sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur
    catnip scratched.
  </p>
</main>
```
