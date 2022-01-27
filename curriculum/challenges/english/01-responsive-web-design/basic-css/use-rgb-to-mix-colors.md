---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: "https://scrimba.com/c/cm24JU6"
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

คุณสามารถผสมสีที่เป็น RGB ตามค่าของแต่สีที่ระบุได้ เหมือนกับ hex code เลย

# --instructions--

ให้เปลี่ยน hex code ใน `style` element เป็นค่า RGB ที่ถูกต้อง

<table class='table table-striped'><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

`h1` ที่มีข้อความว่า `I am red!` ต้องมี `color` เป็นสีแดง

```js
assert($(".red-text").css("color") === "rgb(255, 0, 0)");
```

ต้องใช้ `rgb` สำหรับสีแดง

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

`h1` ที่มีข้อความว่า `I am orchid!` ต้องมี `color` เป็นสี orchid

```js
assert($(".orchid-text").css("color") === "rgb(218, 112, 214)");
```

ต้องใช้ `rgb` สำหรับสี orchid

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

`h1` ที่มีข้อความว่า `I am blue!` ต้องมี `color` เป็นสีน้ำเงิน

```js
assert($(".blue-text").css("color") === "rgb(0, 0, 255)");
```

ต้องใช้ `rgb` สำหรับสีน้ำเงิน

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

`h1` ที่มีข้อความว่า `I am sienna!` ต้องมี `color` เป็นสี sienna

```js
assert($(".sienna-text").css("color") === "rgb(160, 82, 45)");
```

ต้องใช้ `rgb` สำหรับสี sienna

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
    color: rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
