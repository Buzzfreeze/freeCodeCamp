---
id: 5d822fd413a79914d39e98f0
title: Part 40
challengeType: 0
dashedName: part-40
---

# --description--

Gradient ใน CSS เป็นทางหนึ่งที่จะเปลี่ยนสีโดยให้ระยะห่างของ element
พวกมันจะถูกเพิ่มให้กับ `background` property และมี syntaxหน้าตาแบบนี้:

```css
gradient-type(
  color1,
  color2
);
```

ในตัวอย่างนั้น `color1` จะเป็นสีที่ด้านบน ส่วน `color2` เป้นสีที่ด้านล่าง
และมันจะค่อยๆ เปลี่ยนไปเป็นอีกสีหนึ่งระหว่างนั้น
ใน `.bb1a`, จงเพิ่ม gradient ประเภท `linear-gradient` ให้กับ `background` property โดยกำหนดสีแรกเป็น `--building-color1` และ `--window-color1` เป็นสีที่สอง

# --hints--

คุณควรเพิ่ม `background` ให้กับ `.bb1a`

```js
assert(new __helpers.CSSHelp(document).getStyle('.bb1a')?.background);
```

You should give the `background` a `linear-gradient`.

```js
assert.include(new __helpers.CSSHelp(document).getStyle('.bb1a')?.background, 'linear-gradient');
```

You should give the `background` a `linear-gradient` starting from `--building-color1`.

```js
assert.include(new __helpers.CSSHelp(document).getStyle('.bb1a')?.getPropVal('background', true), 'linear-gradient(var(--building-color1');
```

You should give the `background` a `linear-gradient` ending at `--window-color1`.

```js
assert.include(new __helpers.CSSHelp(document).getStyle('.bb1a')?.getPropVal('background', true), 'linear-gradient(var(--building-color1),var(--window-color1))');
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

    <div class="foreground-buildings">
      <div></div>
      <div></div>
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>
```

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
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

.background-buildings, .foreground-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
}

/* BACKGROUND BUILDINGS - "bb" stands for "background building" */
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
  background-color: var(--building-color1);
}
--fcc-editable-region--
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

/* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
.fb1 {
  width: 10%;
  height: 60%;
  background-color: var(--building-color4);
}

.fb2 {
  width: 10%;
  height: 40%;
  background-color: var(--building-color3);
}

.fb3 {
  width: 10%;
  height: 35%;
  background-color: var(--building-color1);
}

.fb4 {
  width: 8%;
  height: 45%;
  background-color: var(--building-color1);
  position: relative;
  left: 10%;
}

.fb5 {
  width: 10%;
  height: 33%;
  background-color: var(--building-color2);
  position: relative;
  right: 10%;
}

.fb6 {
  width: 9%;
  height: 38%;
  background-color: var(--building-color3);
}
    
```

