---
id: 5d822fd413a79914d39e98d9
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

ฉันไม่ค่อยชอบสีนั้นซักเท่าไหร่
จงเปลี่ยนค่าในตัวแปรของคุณจาก `#999` เป็น `#aa80ff` เมื่อทำแบบนี้ คุณจะเห็นได้ว่าสีที่พึ่งเปลี่ยนนั้นถูกใช้กับส่วนที่ที่มีการใช้ตัวแปรนี้
สิ่งนี้คือประโยชน์หลัก ๆ ของการใช้ตัวแปร โดยเราสามารถจะเปลี่ยนค่าหลาย ๆ ค่าใน stylesheet โดยการเปลี่ยนเพียงค่า ๆ เดียวของตัวแปร

# --hints--

คุณสามารถเปลี่ยนค่าตัวแปรของ `--building-color1` property จาก `#999` เป็น `#aa80ff`

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color1').trim(),'#aa80ff');
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
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
  </body>
</html>
```

```css
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
}

.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
--fcc-editable-region--
  --building-color1: #999;
--fcc-editable-region--
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

```

