---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

ฟีเจอร์หนึ่งของ Sass ที่แตกต่างจาก CSS คือมันมีการใช้ตัวแปร ซึ่งถูกประกาศและตั้งค่าให้เก็บข้อมูลคล้าย JavaScript

ใน JavaScript ตัวแปรถูกกำหนดให้ใช้คีย์เวิร์ด `let` และ `const` ใน Sass ตัวแปรจะเริ่มด้วย `$` ตามด้วยชื่อของตัวแปรนั้น

ข้างล่างนี้คือตัวอย่างบางส่วน:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

และนำตัวแปรมาใช้โดย:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

ตัวอย่างในการใช้งานตัวแปรคือเมื่อต้องการ element จำนวนหนึ่งมีสีเดียวกัน หากมีการเปลี่ยนสีขึ้น เพียงแค่การแก้ไขที่ตัวแปรเพียงที่เดียวก็สามารถเปลี่ยนได้แล้ว

# --instructions--

ให้สร้างตัวแปร `$text-color` และให้ตั้งแค่เป็น `red` แล้วเปลี่ยนค่าของ property `color` ให้กับ `.blog-post` และ `h2` ไปเป็นตัวแปร `$text-color`

# --hints--

โค้ดของคุณควรมีตัวแปร Sass ที่ประกาศชื่อว่า `$text-color` และมีค่าเป็น `red`

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

โค้ดของคุณควรใช้ตัวแปร `$text-color` ในการเปลี่ยน `color` ให้กับ `.blog-post` และ `h2` 

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

`.blog-post` element ของคุณควรจะมี `color` เป็นสีแดง

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

`h2` element ของคุณควรจะมี `color` เป็นสีแดง

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
