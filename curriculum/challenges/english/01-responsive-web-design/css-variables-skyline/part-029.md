---
id: 5d822fd413a79914d39e98e5
title: Part 29
challengeType: 0
dashedName: part-29
---

# --description--

คุณต้องการให้พื้นหน้าของ buildings container อยู่ตรงที่ด้านบนของพื้นหลังของ buildings element
จงกำหนดให้มันมี `width` และ `height` มีค่า `100%`
จงกำหนดค่าของ `position` ให้เป็น `absolute` และค่าของ `top` เป็น `0`
สิ่งนี้จะทำให้มันมีขนาดเดียวกับ body และจงย้ายจุดเริ่มต้นของมันไปที่มุมซ้ายบน

# --hints--

คุณควรใช้`.foreground-buildings` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.foreground-buildings'));
```

You should give the `.foreground-buildings` element a `width` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.foreground-buildings')?.width, '100%');
```

You should give the `.foreground-buildings` element a `height` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.foreground-buildings')?.height, '100%');
```

You should give the `.foreground-buildings` element a `position` of `absolute`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.foreground-buildings')?.position, 'absolute');
```

You should give the `.foreground-buildings` element a `top` of `0`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.foreground-buildings')?.top, '0px');
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

    <div class="foreground-buildings"></div>
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
--fcc-editable-region--

--fcc-editable-region--

```

