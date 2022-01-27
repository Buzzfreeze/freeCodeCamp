---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: "https://scrimba.com/c/cK89PhP"
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

เรามาทบทวนกันหน่อย

hex code จะใช้เลขฐาน 16 ทั้งหมด 6 หลักเพื่อเป็นตัวแทนของสี
โดยเลขสองตัวแรกจะเป็นค่าของสีแดง (R), สองตัวถัดมาเป็นสีเขียว (G), และสองตัวสุดท้ายเป็นสีฟ้า (B)

จากสีหลักแค่สามสีนี้ (แดง, เขียว และน้ำเงิน) เราสามารถสร้างสีได้ถึง 16 ล้านสี!

เช่น สีส้ม จะเกิดจากการผสมสีแดง ใส่สีเขียวลงไปนิดหน่อย และไม่ใส่สีน้ำเงินเลย
ซึ่งใน hex code จะถูกแปลงให้เป็น `#FFA500`

`0` เป็นค่าที่ต่ำที่สุดใน hex code และหมายถึงการที่ไม่มีสีนั้นเลย

`F` เป็นค่าที่สูงที่สุดใน hex code และหมายถึงให้ความสว่างสูงสุดของสีนั้น

การผสมสีของ hex code เป็นการผสมสีของแสง ซึ่งจะต่างจากการผสมสีแบบปกติที่เราคุ้นเคย อย่างเช่นสีน้ำ หรือสีน้ำมัน ที่ยิ่งเราผสมสีมาก สีที่ได้ก็จะยิ่งเข้ม ไปจนถึงดำเลย
แต่การผสมสีของแสง ยิ่งเราให้สีมาก สีจะยิ่งสว่าง ไปจนถึงขาวเลย

# --instructions--

ให้เปลี่ยนชื่อของสีใน `style` element เป็น hex code โดยดูข้อมูลได้จากตารางด้านล่าง

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

`h1` ที่มีข้อความว่า `I am red!` ต้องมี `color` เป็นสีแดง

```js
assert($(".red-text").css("color") === "rgb(255, 0, 0)");
```

ต้องใช้ `hex code` แทนคำว่า `red`

```js
assert(
  code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi)
);
```

`h1` ที่มีข้อความว่า `I am green!` ต้องมี `color` เป็นสีเขียว

```js
assert($(".green-text").css("color") === "rgb(0, 255, 0)");
```

ต้องใช้ `hex code` แทนคำว่า `green`

```js
assert(
  code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi)
);
```

`h1` ที่มีข้อความว่า `I am dodgerblue!` ต้องมี `color` เป็นสี dodger blue

```js
assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)");
```

ต้องใช้ `hex code` แทนคำว่า `dodgerblue`

```js
assert(
  code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi)
);
```

`h1` ที่มีข้อความว่า `I am orange!` ต้องมี `color` เป็นสีส้ม

```js
assert($(".orange-text").css("color") === "rgb(255, 165, 0)");
```

ต้องใช้ `hex code` แทนคำว่า `orange`

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
