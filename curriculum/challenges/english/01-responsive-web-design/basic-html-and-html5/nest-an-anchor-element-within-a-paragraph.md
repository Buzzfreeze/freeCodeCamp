---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

คุณสามารถซ้อนลิงก์ไว้ใน element ที่เป็นข้อความได้ด้วย 

แบบนี้:

```html
<p>
  Here's a <a target="_blank" href="https://www.careervio.com"> link to www.careervio.com</a> for you to follow.
</p>
```

เรามาค่อย ๆ ดูตัวอย่างนี้กันดีกว่า
เราจะเริ่มจากใส่ข้อความไว้ใน `p` element ก่อน:

```html
<p>Here's a ... for you to follow.</p>
```

จากนั้นก็สร้าง _anchor_ element `<a>` (ซึ่งจำเป็นต้องมีแท็กปิด `</a>`):

```html
<a> ... </a>
```

`target` เป็น attribute ของแท็ก a ที่จะระบุตำแหน่งที่จะเปิดลิงก์
โดยค่า `_blank` เป็นการบอกให้เปิดลิงก์ในแท็บใหม่

`href` เป็น attribute ของแท็ก a ที่เป็น URL ของลิงก์นั้น:

```html
<a href="https://www.careervio.com" target="_blank"> ... </a>
```

ข้อความ `link to www.careervio.com` ที่อยู่ใน `a` element จะเรียกว่า <dfn>anchor text</dfn> ซึ่งจะเป็นลิงก์ที่คลิกได้:

```html
<a href=" ... " target="...">link to careervio.com</a>
```

ซึ่งถ้าเขียนโค้ดตามตัวอย่างด้านบน จะมีหน้าตาประมาณนี้:

Here's a <a href="https://www.careervio.com" target="_blank">link to www.careervio.com</a> for you to follow.

# --instructions--

ให้ซ้อน `a` element ไว้ใน `p` element อันใหม่
โดยไม่ต้องสร้างแท็ก a อันใหม่
พารากราฟอันใหม่ต้องจะมีข้อความที่เขียนว่า `View more cat photos` โดย `cat photos` จะเป็นลิงก์ และส่วนที่เหลือก็เป็นข้อความปกติ

# --hints--

ในเว็บของคุณต้องมี `a` element แค่หนึ่งตัว

```js
assert($('a').length === 1);
```

`a` element ต้องลิงก์ไปที่ "`https://www.freecatphotoapp.com`"

```js
assert($('a[href="https://www.freecatphotoapp.com"]').length === 1);
```

`a` element ต้องมี anchor text เป็น `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi),
);
```

ต้องสร้าง `p` element ใหม่มา 1 ตัว โดยตอนนี้ในโค้ด HTML ของคุณต้องมีแท็ก `p` อย่างน้อย 3 ตัว

```js
assert($('p') && $('p').length > 2);
```

`a` element ต้องอยู่ใน `p` element อันใหม่ที่เพิ่งสร้าง

```js
assert($('a[href="https://www.freecatphotoapp.com"]').parent().is('p'));
```

ใน `p` element ต้องมีข้อความ `View more ` (โดยมีเว้นวรรคหลังคำว่า more)

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi),
);
```

ต้อง<em>ไม่มี</em>คำว่า `View more` ใน `a` element 

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi),
);
```

`p` element ทุกตัวต้องมีแท็กปิด

```js
assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
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
  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

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
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

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
