---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

จอคอมพิวเตอร์และจอของอุปกรณ์อื่น ๆ สร้างสีต่างๆได้ด้วยการรวมแสงสีแดง สีเขียว และสีน้ำเงินเข้าด้วยกัน
ในทฤษฎีสีสมัยใหม่ เราเรียกการรวมสีแบบนี้ว่า RGB additive color model
โดยสีแดง(R), เขียว (G), และน้ำเงิน (B) จะเรียกว่าสีปฐมภูมิ การผสมสีปฐมภูมิสองสีเข้าด้วยกันจะสร้างสีทุติยภูมิ (secondary) คือสี cyan (G + B), magenta (R + B) และเหลือง (R + G)
คุณจะเห็นสีพวกนี้ในแบบฝึกหัด Complementary Color ไปแล้ว

สีทุติยภูมิที่เกิดขึ้นนี้ จะถือเป็นคู่ตรงข้ามของสีที่ไม่ได้เป็นส่วนหนึ่งของสีที่ทำให้เกิดสีนี้ งงใช่มั้ย?
ยกตัวอย่างเช่น magenta เกิดขึ้นจากสีแดงและน้ำเงิน และเป็นสีคู่ตรงข้ามของสีเขียว

สีตติยภูมิ (tertiary) เป็นผลจากการผสมสีปฐมภูมิสีหนึ่งกับสีทุติยภูมิที่อยู่ข้าง ๆ กัน
ยกตัวอย่างเช่น ภายใน RGB color model การผสมสีแดง (primary) และเหลือง (secondary) จะทำให้เกิดสีส้ม (tertiary)
สีตติยภูมิ จะเพิ่มอีก 6 สีเข้าไปในวงล้อสี ทำให้ตอนนี้ในวงล้อสีจะมีสีทั้งหมด 12 สีแล้ว

วิธีในการเลือกสีที่เข้ากันมมีหลายวิธีมาก
ตัวอย่างหนึ่งในการเลือกสีในระดับตติยภูมิ คือการใช้ split-complementary color
โดยวิธีนี้จะเริ่มจาก ให้เราเลือกสีหลักหนึ่งสี และจับคู่กับอีกสองสีที่อยู่ข้างๆสีคู่ตรงข้าม
จะทำให้เราได้สีทั้งหมดสามสี ที่ถ้านำมาใช้ร่วมกันจะทำให้เกิดคอนทราสต์ที่ชัดเจน แต่จะน้อยกว่าการใช้สีคู่ตรงข้ามตรง ๆ

ลองดูตัวอย่างสีที่เลือกจากการใช้ split-complementary color:

<table class='table table-striped'><thead><tr><th>Color</th><th>Hex Code</th></tr></thead><thead></thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>raspberry</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

ให้เปลี่ยน property `background-color` ของคลาส `orange`, `cyan`, และ `raspberry` ให้เป็นสีตามชื่อของคลาส
โดยคุณต้องใช้ hex code ไม่ใช่ชื่อสีโดยตรง

# --hints--

`div` ที่มีคลาสเป็น `orange` ต้องมี `background-color` เป็นสีส้ม

```js
assert($(".orange").css("background-color") == "rgb(255, 127, 0)");
```

`div` ที่มีคลาสเป็น `cyan` ต้องมี `background-color` เป็นสี cyan

```js
assert($(".cyan").css("background-color") == "rgb(0, 255, 255)");
```

`div` ที่มีคลาสเป็น `raspberry` ต้องมี `background-color` เป็นสี raspberry

```js
assert($(".raspberry").css("background-color") == "rgb(255, 0, 127)");
```

ค่า `background-color` ทั้งหมด ต้องใช้เป็น hex code ไม่ใช่ชื่อสีตรงๆ

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #ffffff;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #ffffff;
  }

  .orange {
    background-color: #ff7f00;
  }

  .cyan {
    background-color: #00ffff;
  }

  .raspberry {
    background-color: #ff007f;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
