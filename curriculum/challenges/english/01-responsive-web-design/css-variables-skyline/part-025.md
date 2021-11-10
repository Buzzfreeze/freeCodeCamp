---
id: 5d822fd413a79914d39e98e1
title: Part 25
challengeType: 0
dashedName: part-25
---

# --description--

สิ่งนั้นก็ใช้ fallback value เหมือนกันหรอ? ตอนนี้ฉันมองเห็นปัญหาของมันแล้ว! 
ตัวแปรที่คุณประกาศไว้ใน `.bb1` ไม่ได้ถูกใช้กับ elements พี่น้องอย่าง `.bb2` และ `.bb3` 
นั้นเป็นการทำงานของCSS เพราะเหตุนี้ ตัวแปรเลยมันถูกประกาศใน `:root` selector
นี่เป็น selector ที่มีลำดับสูงที่สุดใน CSS 
การใส่ตัวแปรของคุณไว้ในนั้น จะทำให้มันสามารถถูกเรียกใช้ได้จากทุกที่
จงเพิ่ม Add the `:root` selector ไว้ที่ด้านบนของ stylesheet และจงย้ายการประกาศตัวแปรทุกอันไปไว้ในนั้น

# --hints--

คุณควรประกาศ `:root` selector ไว้ที่ด้านบนของ stylesheet

```js
assert.exists(new __helpers.CSSHelp(document).getStyle(':root'));
```

You should define `--building-color1` with a value of `#aa80ff` in the `:root` selector.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(':root')?.getPropertyValue('--building-color1')?.trim(), '#aa80ff');
```

You should define `--building-color2` with a value of `#66cc99` in the `:root` selector.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(':root')?.getPropertyValue('--building-color2')?.trim(), '#66cc99');
```

You should define `--building-color3` with a value of `#cc6699` in the `:root` selector.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle(':root')?.getPropertyValue('--building-color3')?.trim(), '#cc6699');
```

You should remove the custom property variables from `.bb1`.

```js
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color1'));
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color2'));
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('.bb1')?.getPropertyValue('--building-color3'));
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
--fcc-editable-region--

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
  --building-color2: #66cc99;
  --building-color3: #cc6699;
}
--fcc-editable-region--
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
  background-color: var(--building-color2, green);
}

.bb3 {
  width: 10%;
  height: 55%;
  background-color: var(--building-color3, pink);
}

.bb4 {
  width: 11%;
  height: 58%;
}
    
```

