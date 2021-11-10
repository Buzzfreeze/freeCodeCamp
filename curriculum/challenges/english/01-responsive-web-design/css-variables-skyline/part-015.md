---
id: 5d822fd413a79914d39e98d7
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

เพื่อที่จะใช้ตัวแปรตัวหนึ่ง จงใส่ชื่อตัวแปรใน parentheses ที่มี `var`อยู่ข้างหน้าแบบนี้: `var(--variable-name)`
จงเพิ่มค่าตัวแปรของคุณให้มีค่า `background-color` property เป็นของ `.bb1a` class
ค่าอะไรก็ตามที่คุณใส่เข้าไปจะถูกนำไปใช้ใน property อะไรก็ตามที่คุณได้มีการใช้ตัวแปรนั้น
ในกรณีนี้ ตัวแปรของคุณจะมีค่า `#999` ดังนั้น `#999` จะถูกใช้เป็นค่าของ `background-color` property ทุก ๆ อัน

# --hints--

`background-color` ของ `bb1a` element ควรถูกกำหนดไว้

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1a')?.backgroundColor)
```

You should use `var(--building-color1)` to set the `background-color` of the `.bb1a` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1a')?.backgroundColor.trim(), 'var(--building-color1)');
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
--fcc-editable-region--
.bb1a {
  width: 70%;
  height: 10%;
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
    
```
