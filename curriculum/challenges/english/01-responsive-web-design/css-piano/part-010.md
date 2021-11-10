---
id: 612e89d254fe5d3df7d6693d
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

หลังจากที่คุณได้ reset `html` box model, คุณต้องส่งมันไปที่ element ที่อยู่ในนั้นด้วย
เพื่อทำเช่นนี้ คุณสามารถกำหนดให้ `box-sizing` property มีค่าเป็น `inherit`, ซึ่งจะบอกให้ element ที่เล็งไว้ใช้ค่าเดียวกันกับ parent element

คุณยังต้องหา pseudo-elements, ซึ่งเป็น keyword พิเศษที่จะวติดตาม selector หนึ่ง
pseudo-elements 2 อันที่จะกำลังจะใช้คือ  `::before` และ `::after` pseudo-elements

`::before` selector จะสร้าง pseudo-element อันหนึ่งซึ่งจะเป็น child อันแรกของ element ที่ถูกเลือก
ในขณะที่, `::after` selector จะสร้าง pseudo-element อีกอันซึ่งจะเป็น child อันสุดท้ายของ element ที่ถูกเลือก
pseudo-element เหล่านี้มักถูกใช้เพื่อสร้าง content สร้างการตกแต่ง ซึ่งคุณจะได้เห็นในโปรเจคนี้ทหลัง

สำหรับตอนนี้, จงสร้าง CSS selector อันหนึ่งที่จะติดตาม element ทั้งหมดที่มี `*`
และจงเพิ่ม pseudo-element ที่มี `::before` และ `::after`
จงกำหนดให้ `box-sizing` property มีค่าเป็น `inherit`

# --hints--

คุรควรมี `*, ::before, ::after` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('*, ::before, ::after'));
```

Your `*, ::before, ::after` selector should have the `box-sizing` property set to `inherit`.

```js
assert(new __helpers.CSSHelp(document).getStyle('*, ::before, ::after')?.boxSizing === 'inherit');
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
--fcc-editable-region--
html {
  box-sizing: border-box;
}
--fcc-editable-region--
```
