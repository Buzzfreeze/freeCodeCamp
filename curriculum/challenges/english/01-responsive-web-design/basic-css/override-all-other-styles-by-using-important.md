---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

เย้! เราพึ่งพิสูจน์ได้ว่า inline style จะเขียนทับ (overwrite) CSS declarations ทั้งหมดใน `style` element.

แต่รอก่อน มีอีกวิธีที่จะทำการเขียนทับ CSS
มันเป็นวิธีมีระดับความสำคัญสูงจนทำให้มันสามารถเขียนทับคำสั่งที่ถูกประกาศด้วยวิธีก่อนหน้าได้
แต่ก่อนที่เราจะทำมัน เรามาพูดเกี่ยวกับเหตุผลที่คุณต้องการที่จะเขียนทับ CSS ของคุณกันดีกว่า

ในหลาย ๆ สถานการณ์ คุณจะได้ใช้ CSS libraries
พวกมันอาจจะบังเอิญเขียนทับ CSS ของคุณ ดังนั้นเมื่อคุณต้องการที่ให้มั่นใจได้ว่า CSS ที่ได้เขียนไว้ให้กับ element ของคุณจะไม่ถูกเขียนทับ คุณสามารถใช้ `!important` กับมันได้

กลับมาที่ `pink-text` class declaration
จำไว้ว่า `pink-text` class นั้นถูกเขียนทับโดย subsequent class declarations, id declarations, และ inline styles ไปแล้ว

# --instructions--

เรามาเพิ่มคีย์เวิร์ด `!important` ให้กับ color declaration ของ pink-text element เพื่อทำให้มั่นใจ 100% ว่า `h1` element ของคุณจะเป็นสีชมพู

นี่คือตัวอย่างของวิธีการทำ:

```css
color: red !important;
```

# --hints--

`h1` element ควรมีคลาส `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` element ควรมีคลาสชื่อ `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

`h1` element ควรมี `id` เป็น `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` element ควรมี inline style เป็น `color: white`

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

`pink-text` class declaration ควรมีคีย์เวิร์ด `!important` เพื่อเขียนทับ declaration ตัวอื่น ๆ

```js
assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g));
```

`h1` element ควรมีสีขมพู

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
