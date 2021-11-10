---
id: 5d822fd413a79914d39e98d2
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

จงเก็บ  `div` ที่มีคลาสเป็น `bb1` ใน background buildings container
จงกำหนดให้มันมี `width` เป้น `10%` และ `height` เป็น `70%`
"bb" นั้นมาจากคำว่า "background building" และนี่จะเป็น building ของคุณ

# --hints--

คุณควรสร้าง `div` element อันใหม่ขึ้นมา 1 อัน

```js
assert.equal(document.querySelectorAll('div').length, 2);
```

You should give the new `div` a class of `bb1`.

```js
assert.exists(document.querySelector('div.bb1'));
```

You should use a `.bb1` class selector to style the element.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.bb1'));
```

You should give the `.bb1` element a `width` of `10%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1')?.width, '10%');
```

You should give the `.bb1` element a `height` of `70%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.bb1')?.height, '70%');
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
    <div class="background-buildings"></div>
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
}
    
```

