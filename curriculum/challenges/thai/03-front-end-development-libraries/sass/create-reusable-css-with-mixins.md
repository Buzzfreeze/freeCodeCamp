---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

ใน Sass <dfn>mixin</dfn> คือกลุ่มของการประกาศ CSS ที่สามารถนำมาใช้ซ้ำได้ตลอดทั้งสไตล์ชีต

ฟีเจอร์ของ CSS ที่ใหม่กว่าต้องใช้เวลาในการพัฒนาก่อนที่จะนำมาใช้โดยสมบูรณ์และพร้อมใช้งานในทุกเบราว์เซอร์ เมื่อมีการเพิ่มฟีเจอร์ในเบราว์เซอร์ กฎ CSS ที่ใช้ฟีเจอร์เหล่านี้อาจต้องมี vendor prefixes ลองดูโค้ดสำหรับ `box-shadow` ด้านล่าง:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

มันเป็นการพิมพ์ที่เยอะมากสำหรับการเขียนกฎเหล่านี้ใหม่ทุกครั้ง สำหรับ element ทุกตัวที่มี `box-shadow` หรือการที่จะเปลี่ยนค่าแต่ละค่าในการทดสอบเอฟเฟคอื่นๆ ซึ่ง Mixin นั้นเหมือนฟังก์ชันสำหรับ CSS ข้างล่างนี้คือตัวอย่างในการใช้ Mixin:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

โค้ดนั้นเริ่มด้วย `@mixin` ตามมาด้วยชื่อที่กำหนดเอง ตัวพารามิเตอร์ (`$x`, `$y`, `$blur` และ `$c` ในตัวอย่างด้านบน)เป็นทางเลือกที่มีก็ได้ไม่ดีก็ได้ ที่นี้เมื่อใดก็ตามที่ต้องการใช้กฎ `box-shadow` คุณสามารถใช้การเรียกใช้ mixin ในการเขียนโค้ดแค่บรรทัดเดียวแทนที่จะต้องพิมพ์ vendor prefix ทั้งหมดลงไป คุณสามารถเรียกใช้ mixin ด้วยคำสัง `@include` ดังนี้:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

ให้เขียน mixin สำหรับ `border-radius` และกำหนดพารามิเตอร์ `$radius` มันควรมี vendor prefixes ทั้งหมดจากตัวอย่างข้างต้น หลังจากนั้นใช้ `border-radius` mixin เพื่อกำหนดให้ `#awesome` element มี border radius ที่ `15px` 

# --hints--

โค้ดของคุณควรประกาศ mixin ชื่อว่า `border-radius` ที่มีพารามิเตอร์ชื่อ `$radius`

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

โค้ดของคุณควรมี `-webkit-border-radius` vendor prefix ที่ใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

โค้ดของคุณควรมี `-moz-border-radius` vendor prefix ที่ใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

โค้ดของคุณควรมี `-ms-border-radius` vendor prefix ที่ใช้พารามิเตอร์ `$radius`

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

โค้ดของคุณควรมีกฎ `border-radius` ทั่วไปใช้พารามิเตอร์ `$radius`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

โค้ดของคุณควรเรียกใช้ `border-radius mixin` โดยใช้คีย์เวิร์ด `@include` ให้ตั้งค่ามันเป็น `15px`

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
