---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass มีฟีเจอร์ที่เรียกว่า `extend` ซึ่งทำให้การยืมกฎ CSS จาก element หนึ่ง และ สร้างกฎนั้นๆ ใน element อื่นๆ เป็นเรื่องที่ง่าย

ยกตัวอย่างเช่น กฎ CSS ข้างล่างใช้ตกแต่งคลาส `.panel` ซึ่งมี `background-color`, `height` และ `border`

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

ตอนนี้คุณต้องการ panel ใหม่ชื่อ `.big-panel` มันมี property พื้นฐานเหมือนกับ `.panel` แต่มี `width` และ `font-size` เพิ่มมา คุณสามารถก็อปปี้กฎ CSS มาเริ่มต้นได้จาก `.panel` แต่มันจะทำให้เกิดโค้ดที่ซ้ำกันมากหากคุณต้องการ panel แบบอื่นๆ เพิ่มอีก คำสั่ง `extend` คือวิธีที่ง่ายในการนำกฎที่เขียนสำหรับ element ใดๆ มาใช้ซ้ำและสามารถเพิ่มเติมอีกได้ด้วย:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

`.big-panel` จะมี property ต่างๆ เหมือนกับ `.panel` นอกเหนือจาก สไตล์ใหม่ที่เพิ่มมา

# --instructions--

ให้สร้างคลาส `.info-important` ที่ขยายมากจาก `.info` แล้วเพิ่ม `background-color` เป็น magenta

# --hints--

คลาส `info-important` ของคุณควรมีค่า `background-color` เป็น `magenta`

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

คลาส `info-important` ของคุณควรใช้ `@extend` เพื่อรับสไตล์จากคลาส `info`

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
