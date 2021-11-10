---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

ึุณสามารถเก็บลิงค์ไว้ใน text elements อันอื่น ๆ

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

เรามันค่อย ๆ ดูตัวอย่างนี้กันดีกว่า Normal text จะถูกเก็บไว้ใน `p` element:

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

The `a` element should link to "`https://www.freecatphotoapp.com`".

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

Your `a` element should have the anchor text of `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

You should create a new `p` element. There should be at least 3 total `p` tags in your HTML code.

```js
assert($('p') && $('p').length > 2);
```

Your `a` element should be nested within your new `p` element.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

Your `p` element should have the text `View more ` (with a space after it).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

Your `a` element should <em>not</em> have the text `View more`.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Each of your `p` elements should have a closing tag.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
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
