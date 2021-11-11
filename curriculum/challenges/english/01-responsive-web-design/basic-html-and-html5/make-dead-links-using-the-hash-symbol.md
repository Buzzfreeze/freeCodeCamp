---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

บางครั้ง คุณก็ต้องการที่จะเพิ่ม `a` elements ให้กับเว็บไซต์ของคุณก่อนที่จะรู้ว่ามันจะลิงค์ไปที่ไหน

การทำแบบนี้มีประโยชน์อีกอย่างหนึ่งตอนคุณกำลังจะเปลี่ยนพฤติกรรมของลิงค์โดยใช้ `JavaScript` ซึ่งที่เราจะเรียนในภายหลัง

# --instructions--

ค่าปัจจุบันของ `href` attribute นั้นได้ลิงค์ไปที่ `https://www.freecatphotoapp.com`"
จงแทนที่ค่าของ `href` attribute ด้วย `#` เพื่อสร้าง dead link

ยกตัวอย่างเช่น: `href="#"`

# --hints--

`a` element ควรมี dead link อันหนึ่งที่มีค่า `href` attribute เป็น "#"

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
