---
id: 5d822fd413a79914d39e98d6
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

ตอนนี้ คุณได้สร้างบอกอย่างที่เหมือนจะเป็น building ได้แล้ว
เรามาสร้างตัวแปรแรกกันเถอะ
การประกาศตัวแปรจะเริ่มต้นด้วย two dashes (`-`) และจะถูกตั้งชื่อและกำหนดค่าแบบนี้: `--variable-name: value;`
ใน `.bb1` class, จงสร้างตัวแปรตัวหนึ่งชื่อ `--building-color1` และจงกำหนดให้มันมีค่า `#999`

# --hints--

คุรควรสร้างตัวแปรขึ้นมาใหม่ชื่อ `--building-color1`

```js
assert(new __helpers.CSSHelp(document).isPropertyUsed('--building-color1'));
```

You should define the `--building-color1` variable within `.bb1`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color1'));
```

You should give `--building-color1` a value of `#999`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color1').trim(),'#999');
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
--fcc-editable-region--
.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
--fcc-editable-region--
.bb1a {
  width: 70%;
  height: 10%;
}

.bb1b {
  width: 80%;
  height: 10%;
}

.bb1c {
  width: 90%;
  height: 10%;
}

.bb1d {
  width: 100%;
  height: 70%;
}
    
```
