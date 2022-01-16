---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

ฟีเจอร์หนึ่งของ Sass ที่แตกต่างจาก CSS คือจะมีการใช้ตัวแปร ซึ่งจะประกาศและเก็บข้อมูลได้เหมือนกับ JavaScript

ใน JavaScript เราจะสร้างตัวแปรโดยใช้ `let` และ `const` แต่ใน Sass ตัวแปรจะขึ้นต้นด้วย `$` ตามด้วยชื่อของตัวแปรนั้น

ลองดูตัวอย่างด้านล่าง:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

ตัวอย่างการใช้ตัวแปร:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

ตัวอย่างหนึ่งในการใช้งานตัวแปรคือเมื่อต้องการให้ element ชุดหนึ่งมีสีเดียวกัน ถ้าเราอยากเปลี่ยนสีเราก็แค่ไปเปลี่ยนที่ตัวแปร แล้ว element ทุกตัวก็จะเปลี่ยนสีตามเลย

# --instructions--

ให้สร้างตัวแปร `$text-color` ที่มีค่าเป็น `red` แล้วเปลี่ยนค่า property `color` ของ `.blog-post` และ `h2` ไปใช้ตัวแปร `$text-color`

# --hints--

ต้องมีตัวแปร Sass ที่ชื่อ `$text-color` และมีค่าเป็น `red`

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

ต้องใช้ตัวแปร `$text-color` เป็นค่าของ `color` ใน `.blog-post` และ `h2` 

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

element `.blog-post` ต้องจะมี `color` เป็น `red`

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

element `h2` ต้องจะมี `color` เป็น `red`

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
