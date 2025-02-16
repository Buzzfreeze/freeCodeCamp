---
id: 612e9d142affc44a453655db
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

ถึงเวลาที่จะตกแต่งพวกคีย์เปียโนแล้ว
จงสร้าง `class` selector สำหรับ `.key` element
จงกำหนดให้ `background-color` มีค่าเป็น `#ffffff`, `position` property มีค่าเป็น `relative`, `width` property มีค่าเป็น `41px`, และ `height` property มีค่าเป็น `175px`

# --hints--

คุณควรมี 1 `.key` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key'));
```

Your `.key` selector should have a `background-color` property set to `#ffffff`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.backgroundColor === 'rgb(255, 255, 255)');
```

Your `.key` selector should have the `position` property set to `relative`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.position === 'relative');
```

Your `.key` selector should have a `width` property set to `41px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.width === '41px');
```

Your `.key` selector should have a `height` property set to `175px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.key')?.height === '175px');
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

--fcc-editable-region--

--fcc-editable-region--
```
