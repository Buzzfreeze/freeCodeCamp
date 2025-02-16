---
id: 5d822fd413a79914d39e98d8
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

จงใช้ตัวแปรเดียวกันกับ `background-color` ของ `.bb1b`, `.bb1c`, และ `.bb1d` class เพื่อลงสีให้กับ building ที่เหลือ

# --hints--

`background-color` ของ `bb1b` element ควรถูกกำหนดไว้

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1b')?.backgroundColor)
```

You should use `var(--building-color1)` to set the `background-color` of the `.bb1b` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1b')?.backgroundColor.trim(), 'var(--building-color1)');
```

The `background-color` of the `bb1c` element should be set.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1c')?.backgroundColor)
```

You should use `var(--building-color1)` to set the `background-color` of the `.bb1c` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1c')?.backgroundColor.trim(), 'var(--building-color1)');
```

The `background-color` of the `bb1d` element should be set.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1d')?.backgroundColor)
```

You should use `var(--building-color1)` to set the `background-color` of the `.bb1d` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1d')?.backgroundColor.trim(), 'var(--building-color1)');
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
  --building-color1: #999;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}
--fcc-editable-region--
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
--fcc-editable-region--

```
