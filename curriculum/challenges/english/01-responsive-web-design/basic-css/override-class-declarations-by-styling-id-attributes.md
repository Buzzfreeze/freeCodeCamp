---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: "https://scrimba.com/c/cRkpDhB"
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

พวกเราพึ่งพิสูจน์ไปว่า เบราว์เซอร์อ่าน CSS จากบนลงล่างตามลำดับของการประกาศ
แปลว่าถ้ามี property ที่ขัดแย้งกัน เบราว์เซอร์จะใช้ CSS ตัวที่ประกาศทีหลัง
จะเห็นว่า ถึงเราจะใส่ `blue-text` ก่อน `pink-text` ใน class attribute ของ `h1` เบราว์เซอร์ก็จะยังดูที่ลำดับของการประกาศ ไม่ใช่ลำดับของการเรียกใช้งานอยู่ดี

แต่ก็ยังไม่จบเพียงเท่านี้
ยังมีวิธีอื่นที่ทำให้เราสามารถเขียนทับ (override) CSS ได้อีก
คุณยังจำ id attribute ได้ไหม?

เรามาทำให้ตัวอักษรของ `h1` เป็นสีส้มโดยการ override คลาส `pink-text` และ `blue-text` กันเถอะ

ซึ่งเราจะทำใด้โดยการระบุ id ให้กับ `h1` element และทำการตกแต่ง id นั้นในแท็ก style

# --instructions--

ให้กำหนด id attribute ให้กับ `h1` element โดยให้มีค่าเป็น `orange-text`

ยังจำวิธีกำหนด id ได้ใช่ไหม:

```html
<h1 id="orange-text"></h1>
```

ไม่ต้องลบคลาส `blue-text` และ `pink-text` ของ `h1` element ออก

แล้วให้ประกาศ CSS ให้กับ id `orange-text` ใน `style` element
ซึ่งจะมีหน้าตาประมาณนี้:

```css
#brown-text {
  color: brown;
}
```

**Note:** ไม่ว่าคุณจะประกาศ CSS ของ id ไว้เหนือ หรือใต้คลาส `pink-text` ตัว `id` attribute ก็ยังจะมีความสำคัญกว่าอยู่ดี

# --hints--

`h1` element ต้องมีคลาส `pink-text`

```js
assert($("h1").hasClass("pink-text"));
```

`h1` element ต้องมีคลาส `blue-text`

```js
assert($("h1").hasClass("blue-text"));
```

`h1` element ต้องมี id เป็น `orange-text`

```js
assert($("h1").attr("id") === "orange-text");
```

ต้องมี `h1` element แค่ตัวเดียวเท่านั้น

```js
assert($("h1").length === 1);
```

ต้องมีการประกาศ CSS ของ id `orange-text`

```js
assert(code.match(/#orange-text\s*{/gi));
```

ต้องไม่ใช้ `style` attribute ใน `h1`

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` element ต้องมี `color` เป็น `orange`

```js
assert($("h1").css("color") === "rgb(255, 165, 0)");
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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```
