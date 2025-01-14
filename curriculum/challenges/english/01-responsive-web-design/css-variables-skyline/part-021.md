---
id: 5d822fd413a79914d39e98dd
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

ฉันไม่ชอบที่ buildings มันอยู่ห่างกันแบบแปลกๆ จงทำให้มันเข้ามาชิดกันมายิ่งขึ้นด้วยการเพิ่ม `div` elements เปล่า 2 อันที่ด้านบนของ `background-buildings` element
และอีก 2 หรือมากกว่านั้นที่ด้านล่างของมัน แล้วก็เพิ่มอีกอันระหว่าง `.bb3` และ `.bb4`
พวกมันถูกเพิ่มเข้ามาเหมือนกัน evenly-spaced elements ระหว่าง container ซึ่งช่วยทำให้ building ขยับเข้ามาอยู่ตรงกลางมากขึ้น

# --hints--

คุณควรเพิ่ม 2 `div` element ก่อน `.bb1` element.

```js
const bBuildings = document.querySelector('.background-buildings')?.children;
assert(![...bBuildings?.[0]?.classList]?.includes('bb1'));
assert(![...bBuildings?.[1]?.classList]?.includes('bb1'));
```

You should add one new `div` element between the `.bb3` and `.bb4` element.

```js
assert(document.querySelector('.bb3')?.nextElementSibling === document.querySelector('.bb4')?.previousElementSibling);
```

You should add two new `div` elements after the `.bb4` element.

```js
const bb4 = document.querySelector('.bb4');
assert.exists(bb4?.nextElementSibling);
assert.exists(bb4?.nextElementSibling?.nextElementSibling);
```

You should add 5 new `div` elements.

```js
assert.equal(document.querySelectorAll('div')?.length, 14);
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
--fcc-editable-region--
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div class="bb4"></div>
    </div>
--fcc-editable-region--
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
  --building-color1: #aa80ff;
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
}

.bb3 {
  width: 10%;
  height: 55%;
}

.bb4 {
  width: 11%;
  height: 58%;
}
    
```

