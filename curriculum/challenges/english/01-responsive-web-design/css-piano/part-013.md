---
id: 612e96fc87fe8e44f69f7ec5
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

ถึงเวล่ที่จะตกแต่งคีย์เปียโนแล้ว
ภายใต้ `#piano` rule, จงหา `.keys` ด้วย `class` selector
จงกำหนดให้ rule อันใหม่มี `background-color` property เท่ากับ `#040404`, `width` property เท่ากับ `949px` และ `height` property เท่ากับ `180px`

# --hints--

คุณควรมี 1 `.keys` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys'));
```

Your `.keys` selector should have a `background-color` property set to `#040404`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.backgroundColor === 'rgb(4, 4, 4)');
```

Your `.keys` selector should have the `width` property set to `949px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.width === '949px');
```

Your `.keys` selector should have a `height` property set to `180px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.keys')?.height === '180px');
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
}

--fcc-editable-region--

--fcc-editable-region--
```
