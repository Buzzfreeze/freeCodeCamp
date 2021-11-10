---
id: 612e89562043183c86df287c
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

Browser สามารถเพิ่มค่าเริ่มต้นของ margin และ padding ให้เฉพาะกับ element บางตัว
เพื่อให้แน่ใจว่าเปียโนนี้จะแสดงผลได้ตามที่ตั้งใจ คุณจำเป็นต้อง reset box model.

จงเพิ่ม `html` rule selector ให้กับไฟล์ CSS, 
และจงกำหนดให้ `box-sizing` property มีค่าเป็น `border-box`

# --hints--

คุณควรมี `html` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('html'));
```

Your `html` selector should have the `box-sizing` property set to `border-box`.

```js
assert(new __helpers.CSSHelp(document).getStyle('html')?.boxSizing === 'border-box');
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

--fcc-editable-region--
```
