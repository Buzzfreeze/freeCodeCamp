---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

จอคอมพิวเตอร์และจอของอุปกรณ์อื่น ๆ สร้างสีที่ต่างกันโดยการรวมแสงสีแดง เขียว และน้ำเงินเข้าด้วยกัน
สิ่งนี้เรียกว่า RGB additive color model ในทฤษฎีสีสมัยใหม่
แดง(R), เขียว (G), และฟน้ำเงิน (B) นั้นถูกเรียกว่าสีปฐมภูมิ การผสมสีปฐมภูมิสองสีเข้าด้วยกันจะสร้างสีทุติยภูมิโดยมีสี cyan (G + B), magenta (R + B) และเหลือง (R + G)
คุณสามารถเห็นสีพวกนี้ในแบบฝึกหัด Complementary Colors 
สีทุติยภูมิพวกนี้เป็นคู่ตรงข้ามของสีปฐมภูมิที่ไม่ได้ถูกนำมาผสมให้เกิดมัน และอยู่ตรงข้ามกับสีปฐมภูมินั้นบนวงล้อสี
ยกตัวอย่างเช่น, magenta เกิดขึ้นจากสีแดงและน้ำเงิน และเป็นสีคู่ตรงข้ามของสีเขียว

สีตติยภูมิเป็นผลจากการผสมสีปฐมภูมิสีหนึ่งกับสีทุติยภูมิที่อยู่ข้าง ๆ กัน
ยกตัวอย่างเช่น ภายใน RGB color model, แดง (primary) และเหลือง (secondary) จะทำให้เกิดสีส้ม (tertiary)
ซึ่งมันจะเพิ่มอีก 6 สีเข้าไปในวงล้อสีอย่างง่าย จนตอนนี้มีสีอยู่บนนั้น 12 สีแล้ว

มันมีหลากหลายวิธีสำหรับการเลือกใช้สีที่แตกต่างกันซึ่งจะทำให้เกิดคู่สีที่เข้ากันในการออกแบบ
ตัวอย่างหนึ่งที่สามารถใช้สีตติยภูมินั้นถูกเรียกว่าsplit-complementary color scheme
scheme นี้จะเริ่มจาก base color หนึ่งและก้จับคู่มันกับอีกสองสีที่อยู่ข้าง ๆ สีคู่ตรงข้ามของมัน
สามสีนี้จะทำให้เกิด visual contrast ในการออกแบบสูงมาก แต่น้อยกว่าการใช้สีคู่ตรงข้ามตรง ๆ

นี่คือตัวอย่างของสามสีที่เกิดจากกันใช้ split-complement scheme:

<table class='table table-striped'><thead><tr><th>Color</th><th>Hex Code</th></tr></thead><thead></thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>raspberry</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

จงเปลี่ยน `background-color` property ของ `orange`, `cyan`, และ `raspberry` classes ให้มีค่าตามชื่อคลาสของมัน
จงเช็คให้มั่นใจว่าคุณได้ใช้ hex codes ไม่ใช่ชื่อสี

# --hints--

`div` element ภายในคลาส `orange` ควรมี `background-color` เป็นสีส้ม

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

The `div` element with class `cyan` should have a `background-color` of cyan.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

The `div` element with class `raspberry` should have a `background-color` of raspberry.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

All `background-color` values for the color classes should be hex codes and not color names.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
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
