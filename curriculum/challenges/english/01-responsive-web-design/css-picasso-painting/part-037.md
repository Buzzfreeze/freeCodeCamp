---
id: 60b69a66b6ddb80858c5159b
title: Part 37
challengeType: 0
dashedName: part-37
---

# --description--

ถึงเวลาที่จะลองใช้ FontAwesome icon บางตัวแล้ว

`i` element ถูกใช้เพื่อเป็น idiomatic text, หรือข้อความที่แยกออกมาจากเนื้อหาที่เป็นตัวอักษรทั่วไป
สิ่งนี้สามารถทำให้เป็น _italic_, เช่น ศัพท์วิทยาศาสตร์ หรือเป็น icons ที่มาจาก FontAwesome.

ภายใน `white-paper` element, จงเพิ่ม 4 `i` elements
จงกำหนดให้พวกมันทั้งหมดมี `class` ชื่อ `fas fa-music`

class พิเศษอันนี้คือวิธีที่ FontAwesome จะรู้ว่าให้โหลด icon ตัวไหน
`fas` บ่งบอกถึงประเภทของ icons (FontAwesome Solid, here), ขณะที่ `fa-music` จะเลือก icon เฉพาะเป็นตัว ๆ ไป

# --hints--

คุณควรมี 4 `i` elements ภายใน `#white-paper` element.

```js
assert(document.querySelectorAll('#white-paper > i')?.length === 4);
```

All of your `i` elements should have the `class` set to `fas fa-music`.

```js
const icons = document.querySelectorAll('#white-paper > i');
for (const icon of icons) {
  assert(icon.classList?.contains('fas'));
  assert(icon.classList?.contains('fa-music'));
};
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
        <div class="characters">
          <div id="offwhite-character">
            <div id="white-hat"></div>
            <div id="black-mask">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
            </div>
            <div id="gray-instrument">
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
            </div>
            <div id="tan-table"></div>
          </div>
          <div id="black-character">
            <div id="black-hat"></div>
            <div id="gray-mask">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
            </div>
            <div id="white-paper">
              --fcc-editable-region--

              --fcc-editable-region--
            </div>
          </div>
        </div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

#offwhite-character {
  width: 300px;
  height: 550px;
  background-color: GhostWhite;
  position: absolute;
  top: 20%;
  left: 17.5%;
}

#white-hat {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 120px 140px 180px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: GhostWhite;
  border-left-color: transparent;
  position: absolute;
  top: -140px;
  left: 0;
}

#black-mask {
  width: 100%;
  height: 50px;
  background-color: rgb(45, 31, 19);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#gray-instrument {
  width: 15%;
  height: 40%;
  background-color: rgb(167, 162, 117);
  position: absolute;
  top: 50px;
  left: 125px;
  z-index: 1;
}

.black-dot {
  width: 10px;
  height: 10px;
  background-color: rgb(45, 31, 19);
  display: block;
  margin: auto;
  margin-top: 65%;
}

#tan-table {
  width: 450px;
  height: 140px;
  background-color: #D2691E;
  position: absolute;
  top: 275px;
  left: 15px;
  z-index: 1;
}
```
