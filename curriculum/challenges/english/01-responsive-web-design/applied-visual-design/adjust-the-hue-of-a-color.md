---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: "https://scrimba.com/c/cPp38TZ"
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

สีมีคุณสมบัติหลายตัว เช่น hue, saturation (ความอิ่มตัว), และ lightness (ความสว่าง)

CSS3 ได้มีการเพิ่ม property `hsl()` เข้ามา ให้เป็นอีกหนึ่งวิธีที่ใช้เลือกสีโดยการใช้คุณสมบัติพวกนี้โดยตรง

**Hue** เป็นสิ่งที่คนส่วนใหญ่มองว่าเป็น 'สี'
ให้คุณจินตนาการถึงแถบสเปคตรัมของสี ที่เริ่มจากสีแดงที่อยู่ทางซ้าย สีเขียวที่อยู่ตรงกลาง สีฟ้าที่อยู่ด้านขวา
hue ก็คือตำแหน่งของสีบนแถบสเปคตรัมนั้น
ใน `hsl()` เราจะกำหนดค่าของ hue โดยอิงจากของวงล้อสี (ไม่ใช่แถบสเปคตรัมที่เรายกตัวอย่างมา) ซึ่งมุมของสีบนวงกลมจะเป็นค่าตั้งแต่ 0 ถึง 360

**Saturation** (ความอิ่มตัวของสี) เป็นปริมาณความเทาของสี
สีที่อิ่มตัวเต็มที่ (saturated) จะไม่มีสีเทาผสมอยู่ในนั้น และสีที่มีความอิ่มตัวต่ำ ก็จะมีสีที่เกือบจะเป็นสีเทา
ค่าของ saturation จะถูกกำหนดเป็นเปอร์เซ็นต์ โดย saturation ที่เป็น 100% หมายถึงสีที่มีความอิ่มตัวเต็มที่

**Lightness** (ความสว่างของสี) เป็นปริมาณของสีขาวและสีดำในสี
โดยจะมีค่าตั้งแต่ 0% (สีดำ) ไปจนถึง 100% (สีขาว) โดยสีปกติจะอยู่ที่ 50%

ลองดูตัวอย่างการใช้ `hsl()` เพื่อเลือกสีที่มีความอิ่มตัวเต็มที่ และมีความสว่างเป็นปกติ:

<table class='table table-striped'><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

ให้เปลี่ยน `background-color` ของ `div` แต่ละตัว โดยอิงจากชื่อคลาสของ `div` นั้น (`green`, `cyan`, หรือ `blue`) โดยใช้ `hsl()`

ทั้งสามสีต้องเป็นสีที่อิ่มตัว และมีความสว่างปกติ

# --hints--

โค้ดของคุณควรใช้ property `hsl()` กำหนดค่าของสี `green`

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

โค้ดของคุณควรใช้ property `hsl()` กำหนดค่าของสี `cyan`

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

โค้ดของคุณควรใช้ property `hsl()` กำหนดค่าของสี `blue`

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

`div` ที่มีคลาสเป็น `green` ต้องมี `background-color` เป็นสีเขียว

```js
assert($(".green").css("background-color") == "rgb(0, 255, 0)");
```

`div` ที่มีคลาสเป็น `cyan` ต้องมี `background-color` เป็นสี cyan

```js
assert($(".cyan").css("background-color") == "rgb(0, 255, 255)");
```

`div` ที่มีคลาสเป็น `blue` ต้องมี `background-color` เป็นสีน้ำเงิน

```js
assert($(".blue").css("background-color") == "rgb(0, 0, 255)");
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
