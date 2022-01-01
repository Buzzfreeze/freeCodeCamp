---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

สีมีคุณสมบัติหลากหลายรวมถึง hue, saturation (ความอิ่มตัว), และ lightness (ความสว่าง)
CSS3 ได้มีการเพิ่ม `hsl()` property เข้ามาให้เป็นอีกหนึ่งวิธีที่ใช้เลือกสีโดยการใช้คุณสมบัติพวกนี้โดยตรง

**Hue** เป็นสิ่งที่คนเราคิดว่าเป็น 'color' ถ้าคุณจินตนาการถึง spectrum ของ colors ที่เริ่มจากสีแดงที่อยู่ทางซ้าย เคลื่อนผ่านสีเขียวที่อยู่ตรงกลางไปที่สีฟ้าที่อยู่ด้านขวา
hue คือตำแหน่งที่ color จะตรงกับเส้นนั้น
ใน `hsl()`, hue ได้ใช้แนวคิดของวงล้อสีแทนที่จะเป็น spectrum ซึ่งมุมของสีบนวงกลมจะเป็นค่าตั้งแต่ 0 ถึง 360

**Saturation** เป็นปริมาณของสีเทาใน color
สีที่อิ่มตัวเต็มที่จะไม่มีสีเทาในนั้น และสีที่ไม่อิ่มตัวก็เกือบจะเป็นสีเทาไปเลย
ค่าของมันถูกกำหนดตามค่าเปอร์เซ็นโดย 100% เป็นค่าของสีที่อิ่มต่ำเต็มที่

**Lightness** เป็นปริมาณของสีขาวและสีดำใน color
เปอร์เซ็นของมันจะเริ่มตั้งแต่ 0% (สีดำ) ไปถึง 100% (สีขาว), โดย 50% คือสีปกติ

นี่คือตัวอย่างเล็กน้อยของการใช้ `hsl()` ที่เป็นสีที่อิ่มตัวเต็มที่กับมีค่าความสว่างปกติ:

<table class='table table-striped'><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

จงเปลี่ยน `background-color` ของแต่ละ `div` element โดยอิงจากชื่อของ class (`green`, `cyan`, หรือ `blue`) โดยใช้ `hsl()`
ทั้งสามสีควรจะเป็นสีที่อิ่มตัวและมีความสว่างปกติ

# --hints--

โค้ดของคุณควรใช้ `hsl()` property เพื่อประกาศค่าของสีเป็น `green`.

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

โค้ดของคุณควรใช้ `hsl()` property เพื่อประกาศค่าของสีเป็น `cyan`.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

โค้ดของคุณควรใช้ `hsl()` property เพื่อประกาศค่าของสีเป็น `blue`.

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

`div` element ที่มีคลาสชื่อว่า `green` ควรมี `background-color` เป็นสีเขียว

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

`div` element ที่มีคลาสชื่อว่า `cyan` ควรมี `background-color` เป็นสี cyan

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

`div` element ที่มีคลาสชื่อว่า `blue` ควรมี `background-color` เป็นสีน้ำเงิน

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #ffffff;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #ffffff;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color: hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
