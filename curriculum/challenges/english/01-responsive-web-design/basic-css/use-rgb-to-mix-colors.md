---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

เช่นเดียวกับ hex code, คุณสามารถผสมสีที่เป็น RGB ได้โดยใช้ combination ของค่าที่ต่างกัน

# --instructions--

จงแทนที่ hex codes ใน `style` element ด้วยค่า RGB ที่ถูกต้อง

<table class='table table-striped'><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

`h1` element ที่มีข้อความว่า `I am red!` ควรมี `color` แดง

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

คุณควรใช้ `rgb` สำหรับสีแดง

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

`h1` element ที่มีข้อความว่า `I am orchid!` ควรมีสี `color` ดอกกล้วยไม้

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

คุณควรใช้ `rgb` สำหรับสีดอกกล้วยไม้

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

`h1` element ที่มีข้อความว่า `I am blue!` ควรมีสี `color` น้ำเงิน

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

คุณควรใช้`rgb` สำหรับสีน้ำเงิน

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

`h1` element ที่มีข้อความว่า `I am sienna!` ควรมีสี `color` sienna.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

คุณควรใช้ `rgb` สำหรับค่าสี sienna

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
