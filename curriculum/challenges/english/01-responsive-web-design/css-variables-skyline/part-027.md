---
id: 5d822fd413a79914d39e98e3
title: Part 27
challengeType: 0
dashedName: part-27
---

# --description--

จงสร้างตัวแปรอีกตัวที่ชื่อ `--building-color4` และกำหนดให้มันมีค่า`#538cc6`
จงเช็คให้ดีว่ารอบนี้มันอยู่ใน`:root` selector 
หลังจากนั้น จงใช้มันเพื่อลงสี building สุดท้าย

# --hints--

คุณควรประกาศตัวแปรให้กับ property ใหม่โดยใช้ชื่อว่า `--building-color4`.

```js
assert.exists(new __helpers.CSSHelp(document).isPropertyUsed('--building-color4'));
```

You should give `--building-color4` a value of `#538cc6` in the `:root` selector.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(':root')?.getPropertyValue('--building-color4').trim(), '#538cc6');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />   
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
}

* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.background-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}

.bb2 {
  width: 10%;
  height: 50%;
  background-color: var(--building-color2);
}

.bb3 {
  width: 10%;
  height: 55%;
  background-color: var(--building-color3);
}

.bb4 {
  width: 11%;
  height: 58%;
}
--fcc-editable-region--

```

