---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

คำสั่ง `@if` ใน Sass จะใช้เพื่อตรวจสอบเงื่อนไข โดยจะทำงานเหมือนคำสั่ง `if` ใน JavaScript เลย

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

แล้วก็จะมี `@else if` และ `@else` ที่ใช้ทดสอบเงื่อนไขเพิ่มเติม เหมือนกับใน JavaScript เลย:

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

ให้สร้าง mixin ที่เรียกว่า `border-stroke` ที่รับพารามิเตอร์ `$val` ซึ่ง mixin นั้นต้องตรวจสอบเงื่อนไขตามด้านล่าง โดยใช้ `@if`, `@else if`, และ `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

ถ้า `$val` ไม่ใช่ `light`, `medium`, หรือ `heavy` แล้ว border ต้องมีค่าเป็น `none`

# --hints--

ต้องประกาศ mixin ที่มีชื่อว่า `border-stroke` ที่รับพารามิเตอร์ชื่อว่า `$val`

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

ต้องใช้คำสั่ง `@if` ใน mixin เพื่อตรวจสอบว่า `@val` มีค่าเป็น `light` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `1px solid black`

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ต้องใช้คำสั่ง `@else if` ใน mixin เพื่อตรวจสอบว่า `@val` มีค่าเป็น `medium` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `3px solid black`

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ต้องใช้คำสั่ง `@else if` ใน mixin เพื่อตรวจสอบว่า `@val` มีค่าเป็น ` heavy ` หรือไม่ ถ้าใช่ให้ตั้งค่า `border` เป็น `6px solid black`

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ต้องใช้คำสั่ง `@else` ใน mixin เพื่อให้ `border` เป็น `none`

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
