---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

แบบทดสอบที่ผ่านมานั้นได้แสดงให้เห็นว่าคำสั่ง `@for`ใช้ค่าเริ่มต้นและค่าสิ้นสุดเพื่อวนลูปซ้ำจำนวนหนึ่งอย่างไร Sass ยังมีคำสั่ง `@each` ที่ทำการลูปซ้ำตามจำนวนรายหรือ map ในการวนซ้ำแต่ละครั้ง ตัวแปรถูกกำหนดให้เป็นค่าปัจจุบันจากรายการหรือ map

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

สำหรับ map นั้นมี syntax ที่แตกต่างไปเล็กหน่อย ดังนี้:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

โปรดจำไว้ว่าตัวแปร `$key` ต้องได้อ้างอิงถึง key ใน map ไม่อย่างนั้น CSS ที่ประมวลผลแล้วจะมี `color1`, `color2`... ข้างใน โค้ดทั้งสองข้างบนถูกเปลี่ยนไปเป็น CSS ดังข้างล่าง:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

ให้เขียนคำสั่ง `@each` ที่วนไปในลิสต์ `blue, black, red` และกำหนดตัวแปรแต่ละตัวไปใน คลาส `.color-bg` ที่ในส่วน `color` เปลี่ยนไปในแต่ละรายการ คลาสแต่ละคลาสจะต้องตั้งค่า `background-color` ไปตามสีข้างต้น

# --hints--

โค้ดของคุณควรใช้คำสั่ง `@each`

```js
assert(code.match(/@each /g));
```

คลาส `.blue-bg` ของคุณควรมี `background-color` เป็นสี blue

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

คลาส `.black-bg` ของคุณควรมี `background-color` เป็นสี black

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

คลาส `.red-bg` ของคุณควรมี `background-color` เป็นสี red

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
