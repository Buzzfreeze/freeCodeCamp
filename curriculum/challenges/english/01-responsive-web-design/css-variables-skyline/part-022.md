---
id: 5d822fd413a79914d39e98de
title: Part 22
challengeType: 0
dashedName: part-22
---

# --description--

จงสร้างตัวแปรขึ้นมาใหม่ 1 ตัวโดยที่อันหนึ่งชื่อว่า `--building-color2` และกำหนดให้มันมีค่า `#66cc99`
หลังจากนั้น จงกำหนดให้มันเป็น `background-color` ของ `.bb2`.

# --hints--

คุณควรประกาศตัวแปรอันใหม่ property ว่า `--building-color2`.

```js
assert.exists(new __helpers.CSSHelp(document).isPropertyUsed('--building-color2'));
```

You should give `--building-color2` a value of `#66cc99`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color2').trim(), '#66cc99');
```

You should set the `background-color` of `.bb2`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb2')?.backgroundColor);
```

You should set the `background-color` using the `--building-color2` variable.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb2')?.backgroundColor.trim(), 'var(--building-color2)');
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
--fcc-editable-region--
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
--fcc-editable-region--
.bb3 {
  width: 10%;
  height: 55%;
}

.bb4 {
  width: 11%;
  height: 58%;
}
    
```
