---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

คำสั่ง `@if` ใน Sass มีประโยชน์เพื่อการทดสอบในกรณีเฉพาะ มันทำงานเหมือนกับคำสั่ง `if` ใน JavaScript

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

และเหมือนกับใน JavaScript `@elese if` และ `@else` ใช้ทดสอบสำหรับเงื่อนไขที่มากกว่า:

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

# --instructions--

ให้สร้าง mixin ที่เรียกว่า `border-stroke` มีรับพารามิเตอร์ `$val` ซึ่ง mixin นั้นควรตรวจสอบเงื่อนไขดังต่อไปนี้โดยใช้ `@if`, `@else if`, และ `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

ถ้า `$val` ไม่ใช่ `light`, `medium`, หรือ `heavy` แล้ว border ควรมีค่าเป็น `none`

# --hints--

โค้ดของคุณควรประกาศ mixin ที่มีชื่อว่า `border-stroke` ที่มีพารามิเตอร์ชื่อว่า `$val`

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

Mixin ของคุณควรมีคำสั่ง `@if` เพื่อตรวจสอบว่า `@val` มีค่าเป็น `light` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `1px solid black`

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Mixin ของคุณควรมีคำสั่ง `@else if` เพื่อตรวจสอบว่า `@val` มีค่าเป็น `medium` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `3px solid black`

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Mixin ของคุณควรมีคำสั่ง `@else if` เพื่อตรวจสอบว่า `@val` มีค่าเป็น ` heavy ` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `6px solid black`

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Mixin ของคุณควรมีคำสั่ง `@else` เพื่อให้ตั้งค่า `border` เป็น `none`

```js
assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```
