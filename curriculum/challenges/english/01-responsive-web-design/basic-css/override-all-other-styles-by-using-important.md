---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

เย้! เราพึ่งพิสูจน์ได้ว่า inline style จะเขียนทับ CSS declarations ทั้งหมดใน `style` element.

แต่รอก่อน มีอีกวิธีที่จะทำการเขียนทับCSS
มันเป็นวิธีที่มีพลังมากที่คุณ
แต่ก่อนที่เราจะทำมัน เรามาพูดเกี่ยวกับเหตุผลที่คุณต้องการที่จะเขียนทับ CSS ของคุณ

ในหลาย ๆ สถานการณ์ คุณจะได้ใช้  CSS libraries
พวกมันอาจจะบังเอิญเขียนทับ CSS ของคุณเอง ดังนั้นเมื่อคุณต้องการที่จะมั่นใจจริง ๆ ว่า element ของคุณมี CSS ของมันเองแล้ว, คุณสามารถใช้ `!important`

กลับมาที่ `pink-text` class declaration
จงไว้ว่า `pink-text` class นั้นถูกเขียนทับโดย subsequent class declarations, id declarations, และ inline styles.

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

Your `h1` element should have the class `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Your `h1` element should have the `id` of `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Your `h1` element should have the inline style of `color: white`.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

Your `pink-text` class declaration should have the `!important` keyword to override all other declarations.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Your `h1` element should be pink.

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
