---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

ึุคุณสามารถเก็บลิงค์ไว้ใน text elements อันอื่น ๆ ได้

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

เรามาค่อย ๆ ดูตัวอย่างนี้กันดีกว่า 
Normal text จะถูกเก็บไว้ใน `p` element:

```html
<p> Here's a ... for you to follow. </p>
```

ถัดมาคือ *anchor* element `<a>` (ซึ่งจำเป็นตัวมีแท็กปิด `</a>`):  

```html
<a> ... </a>
```

`target` เป็น anchor tag attribute ที่จะระบุตำแหน่งที่จะเปิดลิงค์
ค่า `_blank` เป็นการบอกให้เปิดลิงค์ในแท็บใหม่
`href` เป็น anchor tag attribute ที่จะเก็บ URL address ของลิงค์นั้นไว้:  

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

ข้อความ `link to www.freecodecamp.org` ที่อยู่ใน `a` element นั้นถูกเรียกว่า <dfn>anchor text</dfn> และจะแสดงลิงค์ที่ให้คลิก:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

output สุดท้ายของตัวอย่างจะมีหน้าตาประมาณนี้:  

Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.

# --instructions--

จงเก็บ `a` element ไว้ใน `p` element อันใหม่
ห้ามสร้าง anchor tag อันใหม่
พารากราฟอันใหม่ควรจะมีข้อความที่เขียนว่า `View more cat photos`, โดย `cat photos` จะเป็นลิงค์และส่วนที่เหลือก็เป็นข้อความปกติ

# --hints--

คุณควรมีแค่ `a` element 1 อัน

```js
assert(
  $('a').length  === 1 
);
```

`a` element ควรลิงค์ไปที่ "`https://www.freecatphotoapp.com`"

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

 `a` element ควรมี anchor text เป็น `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

คุรควรสร้าง `p` element ใหม่มา 1 อัน โดยตอนนี้ ควรมี `p` tag อย่างน้อยสามอันใน HTML code ของคุณ

```js
assert($('p') && $('p').length > 2);
```

`a` element ควรถูกใส่ไว้ใน `p` element อันใหม่

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

`p` element ควรมีข้อความที่เขียนว่า `View more ` (พร้อมกับช่องไฟข้างหลังมัน).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

`a` element <em>ไม่ควร</em> มีข้อความที่เขียนว่า `View more`.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

 `p` element แต่ละอันของคุณควรจะมีแท็กปิด

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

`a` element แต่ละอันของคุณควรมีแท็กปิด

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

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
