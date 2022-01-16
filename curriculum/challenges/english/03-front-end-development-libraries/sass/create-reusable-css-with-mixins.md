---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

ใน Sass เราจะมีสิ่งที่เรียกว่า <dfn>mixin</dfn> ซึ่งก็คือชุดของการประกาศ CSS ที่สามารถนำมาใช้ซ้ำได้ทั่ว style sheet

ปกติแล้วฟีเจอร์ใหม่ๆของ CSS จะยังใช้ได้ไม่สมบูรณ์ในเบราว์เซอร์ทุกตัว ถ้าเราจะใช้ฟีเจอร์ใหม่ของ CSS เราอาจจะต้องใช้คำนำหน้า property เพื่อให้ใช้กับเบราว์เซอร์ตัวที่ระบุได้
ลองดูโค้ดสำหรับ `box-shadow` ด้านล่าง:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

ถ้าเราต้องพิมพ์แบบนี้ทุกครั้งที่อยากให้ element มี `box-shadow` ก็คงเหนื่อยน่าดู หรือว่าถ้าเราต้องการเปลี่ยนค่าใน `box-shadow` เพื่อทดสอบก็คงเหนื่อยเหมือนกัน 
ซึ่ง Mixin จะเป็นเหมือนฟังก์ชันสำหรับ CSS ลองดูตัวอย่างด้านล่าง:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

เราประกาศ mixin ด้วยการใช้ `@mixin` ตามมาด้วยชื่อที่เรากำหนด 
และเราจะใส่พารามิเตอร์ (`$x`, `$y`, `$blur` และ `$c` ในตัวอย่างด้านบน) หรือไม่ใส่ก็ได้ 
คราวนี้ถ้าเราเกิดอยากใช้ `box-shadow` ขึ้นมา เราก็จะเรียกใช้ mixin ได้โดยเขียนโค้ดแค่บรรทัดเดียว แทนที่จะต้องพิมพ์คำนำหน้าทั้งหมดลงไป คุณสามารถเรียกใช้ mixin ด้วยคำสัง `@include` แบบนี้:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

ให้เขียน mixin สำหรับ `border-radius` ที่รับพารามิเตอร์ `$radius` และใน mixin นี้ต้องมีคำนำหน้าของ `border-radius` ทุกตัวตามเงื่อนไขด้านล่าง 
จากนั้นให้นำ mixin `border-radius` ใช้ใน `#awesome` element โดยกำหนดให้มี border radius เป็น `15px` 

# --hints--

ต้องประกาศ mixin ชื่อว่า `border-radius` รับพารามิเตอร์ชื่อ `$radius`

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

ต้องมี `-webkit-border-radius` ที่ใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

ต้องมี `-moz-border-radius` ที่ใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

ต้องมี `-ms-border-radius` ที่ใช้พารามิเตอร์ `$radius`

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

ต้องมี `border-radius` ที่ใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

ต้องเรียกใช้ `border-radius mixin` ใน `#awesome` โดยใช้คีย์เวิร์ด `@include` และส่งค่า `15px` เข้าไป

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
