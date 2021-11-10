---
id: 5d822fd413a79914d39e98db
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

จงกำหนดให้ building อันใหม่มีค่า `width` และ `height` properties เป้น: `10%` และ `50%` สำหรับ `.bb2`, `10%` และ `55%` สำหรับ `.bb3`, `11%` และ `58%` สำหรับ `.bb4`
คุณจะใช้ได้ใช้ percent based units ทุกแบบและ flexbox บางแบบในโปรเจคนี้ และทำหมดนี้จะเป็นการทำ responsive ที่สมบูรณ์แบบ

# --hints--

คุณควรกำหนดให้`.bb2` มีค่า `width` เท่ากับ `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb2')?.width, '10%');
```

You should give `.bb2` a `height` of `50%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb2')?.height, '50%');
```

You should give `.bb3` a `width` of `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb3')?.width, '10%');
```

You should give `.bb3` a `height` of `55%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb3')?.height, '55%');
```

You should give `.bb4` a `width` of `11%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb4')?.width, '11%');
```

You should give `.bb4` a `height` of `58%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb4')?.height, '58%');
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
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div class="bb4"></div>
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

--fcc-editable-region--

--fcc-editable-region--

```
