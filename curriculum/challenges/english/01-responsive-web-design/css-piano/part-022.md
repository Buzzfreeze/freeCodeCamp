---
id: 612eb4893b63c75bb9251ddf
title: Part 22
challengeType: 0
dashedName: part-22
---

# --description--

จงเริ่มตกแต่ง logo โดยการสร้าง `.logo` selector
จงกำหนดให้ `width` มีค่าเป็น `200px`, `position` มีค่าเป็น  `absolute` และ `top` มีค่าเป็น  `23px`.

# --hints--

คุณควรมี 1 `.logo` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.logo'));
```

Your `.logo` selector should have a `width` property set to `200px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.logo')?.width === '200px');
```

Your `.logo` selector should have a `position` property set to `absolute`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.logo')?.position === 'absolute');
```

Your `.logo` selector should have a `top` property set to `23px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.logo')?.top === '23px');
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

.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}

--fcc-editable-region--

--fcc-editable-region--
```
