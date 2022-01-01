---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

เพื่อรีวิว hex codes จะใช้เลขฐาน 16 มีเลข 6 ตัวเพื่อเป็นตัวแทนของสี
เลขทุก ๆ 2 ตัวจะแทนด้วยความประกอบของสีแดง (R), สีเขียว (G), และสีน้ำเงิน (B)

จากสีหลักสามสีนี้ (แดง, เขียว และน้ำเงิน), เราสามารถสร้างสีได้ถึง 16 ล้านสี!

ยกตัวอย่างเช่น สีส้มคือสีแดงผมผสมกับสีเขียวนิดหน่อยและไม่ใส่สีน้ำเงินเลย
ใน hex code, มันจะถูกแปลงให้เป็น `#FFA500`

`0` เป็นค่าที่ต่ำที่สุดใน hex code, และหมายถึงการที่ไม่มีสีนั้นเลย

`F` เป็นค่าที่สูงที่สุดใน hex code, และหมายถึงให้ความสว่างที่มากสุดที่เป็นไปได้

# --instructions--

จงแทนที่คำที่ใช้เรียกสีที่อยู่ใน `style` element ด้วย hex code ที่ถูกต้องของพวกมัน

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

`h1` element ที่มีข้อความว่า `I am red!` ควรมี `color` แดง

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

`hex code` สำหรับสีแดงควรถูกใช้แทนคำว่า `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

`h1` element ที่มีข้อความว่า `I am green!` ควรมี `color` เขียว

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

`hex code` สำหรับสีเขียวควรถูกใช้แทนคำว่า `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

`h1` element ที่มีข้อความว่า `I am dodgerblue!` ควรมี `color` dodgerblue

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

`hex code` สำหรับสี dodgerblue ควรถูกใช้แทนคำว่า `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

`h1` element ที่มีข้อความว่า `I am orange!` ควรมี `color` ส้ม

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

`hex code` สำหรับสีส้มควรถูกใช้แทนคำว่า `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #ff0000;
  }
  .green-text {
    color: #00ff00;
  }
  .dodger-blue-text {
    color: #1e90ff;
  }
  .orange-text {
    color: #ffa500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
