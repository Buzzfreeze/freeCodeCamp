---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

คำสั่ง `@while` เป็นตัวเลือกที่มีฟังก์ชันการทำงานคล้ายกับ JavaScript `while` loop มันสร้างกฎ CSS จนกว่าจะตรงตามเงื่อนไข

แบบทดสอบ `@for` ได้ยกตัวอย่างเพื่อสร้างระบบกริดอย่างง่าย นอกจากนี้ยังสามารถทำงานกับ `@while`

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

ขั้นแรกกำหนดตัวแปร `$x` และตั้งค่าเป็น 1 จากนั้นใช้คำสั่ง `@while` เพื่อสร้างระบบกริด *ในขณะที่* `$x` น้อยกว่า 13 หลังจากตั้งค่ากฎ CSS สำหรับ `width`แล้ว `$x` จะเพิ่มขึ้นทีละ 1 เพื่อหลีกเลี่ยงลูปอนันต์

# --instructions--

ใช้ `@while` เพื่อสร้างชุดของคลาสที่มี `font-sizes` ที่ต่างกัน

มันควรมี 5 คลาสแตกต่างกันไป ตั้งแต่ `text-1` ถึง `text-5` จากนั้นตั้งค่า `font-sizes` เป็น `15px` คูณด้วยหมายเลข index ปัจจุบัน และระวังไม่เกิดลูปที่ไม่มีที่สิ้นสุด!

# --hints--

โค้ดของคุณควรใช้คำสั่ง `@while`

```js
assert(code.match(/@while /g));
```

โค้ดของคุณควรใช้ตัวแปร index ที่เริ่มต้นที่ index ของ 1

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

โค้ดของคุณควรเพิ่มค่าของตัวแปร counter

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

คลาส `.text-1` ของคุณควรมี `font-size` ที่ `15px`

```js
assert($('.text-1').css('font-size') == '15px');
```

คลาส `.text-2` ของคุณควรมี `font-size` ที่ `30px`

```js
assert($('.text-2').css('font-size') == '30px');
```

คลาส `.text-3` ของคุณควรมี `font-size` ที่ `45px`

```js
assert($('.text-3').css('font-size') == '45px');
```

คลาส `.text-4` ของคุณควรมี `font-size` ที่ `60px`

```js
assert($('.text-4').css('font-size') == '60px');
```

คลาส `.text-5` ของคุณควรมี `font-size` ที่ `75px`

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
