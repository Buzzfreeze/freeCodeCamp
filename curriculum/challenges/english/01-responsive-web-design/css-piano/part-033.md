---
id: 612ec29c84b9a6718b1f5cec
title: Part 33
challengeType: 0
dashedName: part-33
---

# --description--

สำหรับ `@media` rule อันใหม่ จงกำหนดให้ `width` ของ`#piano` มีค่าเป็น `675px` และ `width` ของ `.keys` มีค่าเป็น `633px`.

หลังจากทำพวกนั้นแต่ ตอนนี้โปรเจคของคุณก็เสร็จสมบูรณ์แล้ว!

# --hints--

`@media` rule อันที่ 2 ควรมี `#piano` selector อันหนึ่ง

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 1199px) and (min-width: 769px)');
const piano = rules?.find(rule => rule.selectorText === '#piano');
assert(piano);
```

Your new `#piano` selector should have a `width` of `675px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 1199px) and (min-width: 769px)');
const piano = rules?.find(rule => rule.selectorText === '#piano');
assert(piano?.style.width === '675px');
```

Your second `@media` rule should have a `.keys` selector.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 1199px) and (min-width: 769px)');
const keys = rules?.find(rule => rule.selectorText === '.keys');
assert(keys);
```

Your new `.keys` selector should have a `width` of `633px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-width: 1199px) and (min-width: 769px)');
const keys = rules?.find(rule => rule.selectorText === '.keys');
assert(keys?.style.width === '633px');
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

.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
  overflow: hidden;
}

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

--fcc-editable-region--
@media (max-width: 1199px) and (min-width: 769px) {

}
--fcc-editable-region--
```
