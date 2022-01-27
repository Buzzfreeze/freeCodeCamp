---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass มีฟีเจอร์ที่เรียกว่า `extend` ซึ่งทำให้ยืม CSS จาก element หนึ่ง และ เอาไปใช้ใน element อื่นได้ง่ายๆ

ยกตัวอย่างเช่น CSS ข้างล่างที่ใช้กับ class `.panel` ซึ่งกำหนดค่าของ `background-color`, `height` และ `border` ไว้

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

ถ้าคุณอยากสร้าง panel ใหม่ที่ชื่อ `.big-panel` โดยให้มี property พื้นฐานเหมือนกับ `.panel` แต่มี `width` และ `font-size` เพิ่มมา คุณจะคัดลอก CSS ของ `.panel` มาใช้ก็ได้ แต่วิธีนี้จะทำให้เรามีโค้ดตัวเดิมซ้ำๆ ถ้าเราอยากได้ panel แบบอื่นเพิ่มอีก

คำสั่ง `extend` เป็นวิธีง่ายๆที่เราจะดึง CSS ตัวอื่นมาใช้ซ้ำ แล้วก็ยังสามารถเติมแต่งลงไปเพิ่มได้อีกด้วย:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

`.big-panel` จะมี property ต่างๆ เหมือนกับ `.panel` แต่จะมี property ใหม่ที่เพิ่มมาด้วย

# --instructions--

ให้สร้าง class `.info-important` ที่ `extend` มาจาก `.info` แล้วเพิ่ม property `background-color` โดยให้มีค่าเป็น `magenta`

# --hints--

class `info-important` ต้องมี `background-color` เป็น `magenta`

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

class `info-important` ต้องใช้ `@extend` เพื่อใช้ style ของ class `info`

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
