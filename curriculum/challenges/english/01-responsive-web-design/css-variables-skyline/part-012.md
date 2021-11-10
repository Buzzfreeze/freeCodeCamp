---
id: 5d822fd413a79914d39e98d4
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

จงกำหนดให้แต่ละส่วนของ building มี`width` และ `height` properties ตามค่าเหล่านี้: `70%` และ`10%` ให้กับ `.bb1a`, `80%` และ `10%` ให้กับ `.bb1b`, `90%` และ`10%` ให้กับ `.bb1c`, `100%` และ `70%` ให้กับ `.bb1d`
จงจำไว้ว่า percentage เหล่านี้จะสัมพัทธ์กับ parent และจำไว้ว่า heights จะมีค่าไปถึง 100% - ตามความสูงของ container.

# --hints--

คุณควรใช้ class selector อันหนึ่งเพื่อปรับแต่ง `.bb1a`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1a'));
```

You should give `.bb1a` a `width` of `70%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1a')?.width, '70%');
```

You should give `.bb1a` a `height` of `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1a')?.height, '10%');
```

You should use a class selector to style `.bb1b`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1b'));
```

You should give `.bb1b` a `width` of `80%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1b')?.width, '80%');
```

You should give `.bb1b` a `height` of `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1b')?.height, '10%');
```

You should use a class selector to style `.bb1c`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1c'));
```

You should give `.bb1c` a `width` of `90%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1c')?.width, '90%');
```

You should give `.bb1c` a `height` of `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1c')?.height, '10%');
```

You should use a class selector to style `.bb1d`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1d'));
```

You should give `.bb1d` a `width` of `100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1d')?.width, '100%');
```

You should give `.bb1d` a `height` of `70%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1d')?.height, '70%');
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
}
--fcc-editable-region--

--fcc-editable-region--

```

