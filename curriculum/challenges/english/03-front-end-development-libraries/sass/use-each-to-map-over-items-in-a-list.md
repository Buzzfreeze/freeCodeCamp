---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

จากแบบทดสอบที่ผ่านมา เราได้เห็นแล้วว่าคำสั่ง `@for` ใช้ค่าเริ่มต้นและค่าสิ้นสุดเพื่อบอกว่าลูปจะทำงานกี่รอบ
แต่ไม่ใช่แค่นั้น Sass ก็มีคำสั่ง `@each` ด้วย ซึ่งจะทำการลูปซ้ำตามจำนวน list หรือ map 
ในการวนซ้ำแต่ละครั้ง ตัวแปรถูกกำหนดให้เป็นค่าปัจจุบันจาก list หรือ map

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

ตัวอย่างด้านบนเป็นการใช้ list แต่ถ้าจะใช้ map จะมี syntax ที่ต่างไปเล็กหน่อย:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

ในการใช้ map ตัวแปร `$key` จะจำเป็นต้องมีเพื่ออ้างอิง key ใน map ไม่อย่างนั้น CSS ที่ประมวลผลแล้วจะมีค่าของ `color` เป็น `color1`, `color2` ฯลฯ แทน 

ตัวอย่างทั้งสองตัวจะกลายเป็น CSS แบบเดียวกันตามด้านล่าง:

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

ให้เขียนคำสั่ง `@each` ที่วนอ่าน list `blue, black, red` และให้ใช้ค่าที่อ่านได้มาสร้างเป็น class `.color-bg` (`color` ในที่นี้จะเปลี่ยนไปตามค่าของตัวแปรที่อ่านได้) 
และ class ที่สร้างมาจะต้องกำหนดค่าของ `background-color` ให้เป็นค่าที่อ่านได้

# --hints--

ต้องใช้คำสั่ง `@each` ในโค้ด

```js
assert(code.match(/@each /g));
```

class `.blue-bg` ต้องมี `background-color` เป็น `blue`

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

class `.black-bg` ต้องมี `background-color` เป็น `black`

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

class `.red-bg` ต้องมี `background-color` เป็น `red`

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
