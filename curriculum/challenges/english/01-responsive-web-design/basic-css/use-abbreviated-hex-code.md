---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: "https://scrimba.com/c/cRkpKAm"
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

หลายคนจะรู้สึกตกใจกับจำนวนสีที่มากกว่า 16 ล้านสี
และการจำ hex code ที่ยาวถึง 6 หลักก็อาจจะยาก
แต่ก็โชคดีที่เราสามารถย่อรหัส hex code ได้

เช่น hex code ของสีแดงคือ `#FF0000` ซึ่งเราสามารถย่อให้เป็น `#F00` ได้
รูปย่อของรหัส hex code จะให้หลักแรกแทนสีแดง หลักที่สองแทนสีเขียว และหลักที่สามแทนสีน้ำเงิน

ซึ่งจะทำให้สร้างสีได้ทั้งหมดประมาณ 4000 สี แต่เบราว์เซอร์ก็จะอ่านค่านี้และแปลงค่าให้ จึงทำให้ `#FF0000` และ `#F00` เป็นสีเดียวกัน

# --instructions--

ให้ลองใช้ hex code แบบย่อเพื่อเปลี่ยนสี element ให้ถูกต้อง

<table class='table table-striped'><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

`h1` ที่มีข้อความเป็น `I am red!` ต้องมี `color` เป็นสีแดง

```js
assert($(".red-text").css("color") === "rgb(255, 0, 0)");
```

ต้องใช้ `hex code #FF0000` แทนคำว่า `red`

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

`h1` ที่มีข้อความเป็น `I am green!` ต้องมี `color` เป็นสีเขียว

```js
assert($(".green-text").css("color") === "rgb(0, 255, 0)");
```

ต้องใช้ `hex code #00FF00` แทนคำว่า `green`

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

`h1` ที่มีข้อความเป็น `I am cyan!` ต้องมี `color` เป็นสี cyan

```js
assert($(".cyan-text").css("color") === "rgb(0, 255, 255)");
```

ต้องใช้ `hex code #00FFFF` แทนคำว่า `cyan`

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

`h1` ที่มีข้อความเป็น `I am fuchsia!` ต้องมี `color` เป็นสี fuchsia

```js
assert($(".fuchsia-text").css("color") === "rgb(255, 0, 255)");
```

ต้องใช้ `hex code #FF00FF` แทนคำว่า `fuchsia`

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #f00;
  }
  .fuchsia-text {
    color: #f0f;
  }
  .cyan-text {
    color: #0ff;
  }
  .green-text {
    color: #0f0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
