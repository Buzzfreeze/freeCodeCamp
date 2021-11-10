---
id: 612ec0490ae8626e9adf82e4
title: Part 31
challengeType: 0
dashedName: part-31
---

# --description--

คุณอาจจะสังเกตได้แล้วว่าคีย์เปียโนมันเละเทะเมื่อหน้าต่าของ browser มีขนาดต่ำกว่า `768px`
จงกำหนดให้ `overflow` เป็น `hidden` ใน `.keys` selector อันแรกเพื่อจัดการกับปัญหานี้
property อันนี้จะช่วยซ่อน element อะไรก็ตามที่เกินออกจากค่า `width` ที่ถูกกำหนดไว้ของ `.keys`

# --hints--

`.keys` selector อันเดิมของคุณควรมี `overflow` property เป็น `hidden`

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.overflow === 'hidden');
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
      <img class="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
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
  position: relative;
  border-radius: 10px;
}

--fcc-editable-region--
.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}
--fcc-editable-region--

.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
  border-radius: 0 0 3px 3px;
}

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
  border-radius: 0 0 3px 3px;
}

.logo {
  width: 200px;
  position: absolute;
  top: 23px;
}

@media (max-width: 768px) {
  #piano {
    width: 335px;
  }

  .keys {
    width: 318px;
  }

  .logo {
    width: 150px;
  }
}
```
