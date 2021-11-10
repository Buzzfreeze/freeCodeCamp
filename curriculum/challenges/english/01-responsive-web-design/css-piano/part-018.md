---
id: 612ea4c4993aba52ab4aa32e
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

ตอนนี้ถึงเวลาที่จะใช้ pseudo-selector ที่คุณได้เตรียมไว้ก่อนหน้านี้แล้ว
จงเพิ่ม `.key.black--key::after` selector อันใหม่เพื่อที่จะสร้างคีย์สีดำ
นี่จะช่วยหา element ที่มีคลาส `key black--key`, และเลือก pseudo-element ที่ต่อจาก element อันนี้ใน HTML

ใน selector อันใหม่ จงกำหนดให้ `background-color` มีค่าเป็น `#1d1e22`
และจงกำหนดให้ `content` property มีค่าเป็น `""`
สิ่งนี้จะทำให้ pseudo-elements ว่างเปล่า

`content` property ถูกใช้เพื่อกำหนดหรือเขียนทับ content ของelement
โยค่าเริ่มต้นแล้ว  psuedo-elements ที่ถูกสร้างโดย `::before` และ `::after` pseudo-selector จะว่างเปล่า
และ element เหล่านี้จะไม่ถูกแสดงผลที่หน้าเว็บไชต์
การกำหนดให้ `content` property กลายเป็น string เปล่า `""` จะรับรองได้ว่า element จะถูกแสดงผลในหน้าเว็บไซต์ตอนที่ยังคงว่างเปล่าอยู่

ถ้าคุรต้องการที่จะทดลองมัน จงลองเอา`background-color` property ออกแล้วกำหนดค่าที่แตกต่างกันให้ `content` property, ยกตัวอย่างเช่น `"♥"`
จงอย่าลืมที่จะ undo การเปลี่ยนแปลงนี้เมื่อคุณ test อะไรของคุณเสร็จเรียบร้อยแล้ว

# --hints--

คุณควรมี 1 `.key.black--key::after` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key.black--key::after'));
```

Your `.key.black--key::after` selector should have a `background-color` property set to `#1d1e22`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key.black--key::after')?.backgroundColor === 'rgb(29, 30, 34)');
```

Your `.key.black--key::after` selector should have a `content` property set to `""`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key.black--key::after')?.content === '""');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Responsive Web Design Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div id="piano">
      <div class="keys">
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}

--fcc-editable-region--

--fcc-editable-region--
```
