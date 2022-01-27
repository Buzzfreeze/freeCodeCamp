---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: "https://scrimba.com/c/cGJDQug"
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

ตอนนี้เราจะเห็นว่า เบราว์เซอร์ใช้ CSS จากคลาส `pink-text` แทน CSS ของ `body` element ไปแล้ว

ในแบบทดสอบที่แล้วเราได้พิสูจน์ได้ว่าคลาสสามารถเขียนทับ (override) CSS ของ `body` element ได้
ดังนั้น คำถามชวนคิดข้อต่อไปคือ มีอะไรที่เราสามารถทำเพื่อเขียนทับ class `pink-text` ของเราได้บ้าง?

# --instructions--

ให้สร้างคลาส CSS อันใหม่ที่ชื่อ `blue-text` ที่จะกำหนดค่าของ `color` เป็น `blue`
โดยต้องประกาศคลาส `blue-text` นี้ไว้ใต้คลาส `pink-text`
และ `h1` ต้องมีทั้งคลาส `blue-text` และ `pink-text` และมาดูกันว่าใครจะชนะ

เราสามารถทำให้ element มีคลาสหลายตัวได้โดยการเว้นวรรคระหว่างคลาส แบบนี้:

```html
class="class1 class2"
```

**Note:** ลำดับของคลาสใน HTML element จะไม่มีผลกับการแสดงผล

แต่สิ่งที่มีผลคือ ลำดับในการประกาศ `class` ใน `<style>`
โดยคลาสที่ประกาศอันที่สองจะมีความสำคัญกว่าอันแรก
และเนื่องจากเราประกาศ `.blue-text` ทีหลัง จะทำให้คลาสนี้เขียนทับ attribute ของ `.pink-text`

# --hints--

ใน `h1` element ต้องมีคลาสชื่อ `pink-text`

```js
assert($("h1").hasClass("pink-text"));
```

ใน `h1` element ต้องมีคลาสชื่อ `blue-text`

```js
assert($("h1").hasClass("blue-text"));
```

`h1` ต้องมีทั้งคลาส `blue-text` และ `pink-text`

```js
assert($(".pink-text").hasClass("blue-text"));
```

`h1` element ต้องมี `color` เป็น `blue`

```js
assert($("h1").css("color") === "rgb(0, 0, 255)");
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
</style>
<h1 class="pink-text">Hello World!</h1>
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
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
