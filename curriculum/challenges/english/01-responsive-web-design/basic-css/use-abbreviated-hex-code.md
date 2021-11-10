---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

หลายคนรู้สึกตกใจกับจำนวนสีที่มากกว่า 16 ล้านสี
และนี่มันยากที่จะจำรหัสสี
โชคดีที่เราสามารถย่อมันได้ 

ยกตัวอย่างเช่น, hex code ของสีแดงคือ `#FF0000` เราสามารถย่อให้มันเป็น `#F00` ได้
รูปย่อของกำหนดจะให้หลักหนึ่งแทนสีแดง หลักที่สองแทนสีเขียว และหลักที่สามแทนสีน้ำเงิน

มันจะช่วยลดจำนวนของสีที่เป็นไปได้ทั้งหมดไปอยู่ที่ประมาณ 4000 สี แต่ browsers จะยังแปลงให้ `#FF0000` และ `#F00` เป็นสีเดียวกัน

# --instructions--

เชิญลองใช้ hex code แบบย่อเพื่อลงสี element ให้ถูกต้อง

<table class='table table-striped'><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

`h1` element ที่มีข้อความว่า `I am red!` ควรมี `color` เป็นสีแดง

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

The abbreviated `hex code` for the color red should be used instead of the hex code `#FF0000`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

Your `h1` element with the text `I am green!` should be given the `color` green.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

The abbreviated `hex code` for the color green should be used instead of the hex code `#00FF00`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

Your `h1` element with the text `I am cyan!` should be given the `color` cyan.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

The abbreviated `hex code` for the color cyan should be used instead of the hex code `#00FFFF`.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

Your `h1` element with the text `I am fuchsia!` should be given the `color` fuchsia.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

The abbreviated `hex code` for the color fuchsia should be used instead of the hex code `#FF00FF`.

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
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
