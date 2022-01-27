---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

คำสั่ง `@while` จะทำงานคล้ายกับ `while` loop ใน JavaScript ซึ่งจะทำงานไปจนกว่าจะถึงเงื่อนไขที่กำหนด

ในตัวอย่างของ `@for` ที่ได้เรียนไป เราได้เห็นการสร้าง grid แบบง่ายๆไปแล้ว 

เราสามารถใช้ `@while` เพื่อสร้าง grid แบบนั้นได้เหมือนกัน:

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

ขั้นตอนแรกจะสร้างตัวแปร `$x` และกำหนดค่าเป็น 1 จากนั้นจะใช้คำสั่ง `@while` เพื่อสร้าง grid ถ้า `$x` ยังน้อยกว่า 13 อยู่
หลังจากสร้าง CSS แล้ว `$x` จะเพิ่มขึ้นทีละ 1 เพื่อป้องกันการลูปไปเรื่อยๆไม่หยุด

# --instructions--

ให้ใช้ `@while` เพื่อสร้างชุดของ class ที่มี `font-sizes` ต่างๆกัน

ต้องได้ผลลัพธ์เป็น class ตั้งแต่ `text-1` ถึง `text-5` ที่มี `font-sizes` เป็น `15px` คูณด้วย index และระวังการลูปไปเรื่อยๆไม่หยุด!

# --hints--

ต้องใช้คำสั่ง `@while` ในโค้ด

```js
assert(code.match(/@while /g));
```

ต้องใช้ตัวแปร index ที่มีค่าเริ่มต้นเป็น 1

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

ต้องมีการเพิ่มค่าของ index ในการลูปทุกๆรอบด้วย

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

class `.text-1` ต้องมี `font-size` เป็น `15px`

```js
assert($('.text-1').css('font-size') == '15px');
```

class `.text-2` ต้องมี `font-size` เป็น `30px`

```js
assert($('.text-2').css('font-size') == '30px');
```

class `.text-3` ต้องมี `font-size` เป็น `45px`

```js
assert($('.text-3').css('font-size') == '45px');
```

class `.text-4` ต้องมี `font-size` เป็น `60px`

```js
assert($('.text-4').css('font-size') == '60px');
```

class `.text-5` ต้องมี `font-size` เป็น `75px`

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
