---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

คุรสามารถทำให้ element กลายเป็นลิงค์ได้โดยการเก็บมันไว้ใน `a` element

จงเก็บรูปของคุณไว้ใน `a` element
นี่คือตัวอย่าง:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

อย่างลืมที่จะใช้ `#` เป็น `href` property ของ `a` element เพื่อที่จะทำให้มันเป็น dead link

# --instructions--

จงวาง image element ที่มีไว้ใน `a` (*anchor*) element.

เมื่อคืนที่มาเสร็จแล้ว จง hover บนรูปของคุณด้วยลูกศร
normal pointer ของลูกศรคุณจะกลายเป็น link clicking pointer
และตอนนี้รูปก็เป็นลิงค์อันหนึ่งแล้ว

# --hints--

`img` element อันหนึ่งควรถูกใส่ไว้ใน `a` element.

```js
assert($('a').children('img').length > 0);
```

Your `a` element should be a dead link with a `href` attribute set to `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

Each of your `a` elements should have a closing tag.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
