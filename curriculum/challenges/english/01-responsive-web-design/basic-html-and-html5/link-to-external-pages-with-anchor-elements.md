---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

คุณสามารถใช้  `a` (*anchor*) elements เพื่อลิงค์ไปที่ content ที่อยู่ข้างนอกหน้าเว็บไซต์ของคุณ

`a` elements ต้องการ web address ปลายทางที่ชื่อว่า `href` attribute
พวกมันก็ยังจำเป็นต้องมี anchor text
นี่คือตัวอย่าง :

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

หลังจากนั้น browser ของคุณจะแสดงข้อความที่เขียนว่า `this links to freecodecamp.org` ซึ่งเป็นลิงค์ที่คุณสามารถคลิกได้
และลิงค์นั้นจะพาคุณไปยังที่อยู่เว็บ `https://www.freecodecamp.org`

# --instructions--

จงสร้าง `a` element ที่ลิงค์ไปยัง `https://www.freecatphotoapp.com` และมี "cat photos" เป็น anchor text

# --hints--

`a` element ควรมี anchor text ที่เขียนว่า `cat photos`

```js
assert(/cat photos/gi.test($('a').text()));
```

You need an `a` element that links to `https://www.freecatphotoapp.com`

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

Your `a` element should have a closing tag.

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



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  
  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
