---
id: 5d822fd413a79914d39e98e4
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

พื้นหลังของ building ดูเหมือนจะดูดีขึ้นแล้ว
จงสร้าง  `div` อันใหม่ด้านล่าง `background-buildings` element และจงกำหนดให้มันมีคลาสชื่อว่า `foreground-buildings`
สิ่งนี้จะกลายเป็น container อีกอันของ building

# --hints--

คุณควรสร้าง`div` element อันใหม่ขึ้นมา 1 อัน

```js
assert.equal(document.querySelectorAll('div')?.length, 15);
```

The new `div` should come after the `div.background-buildings` element.

```js
assert.exists(document.querySelector('div.background-buildings + div'));
```

Your new `div` should have a class of `foreground-buildings`.

```js
assert.exists(document.querySelector('div.foreground-buildings'));
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
--fcc-editable-region--

--fcc-editable-region--
  </body>
</html>
```

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
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
  background-color: var(--building-color4);
}

```

