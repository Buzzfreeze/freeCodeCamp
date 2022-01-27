---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: "https://scrimba.com/c/cakRGcm"
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

แบบฝึกหัดนี้จะพูดถึงการใช้ pseudo-class คร่าว ๆ

pseudo-class เป็นคีย์เวิร์ดที่ใช้กับ selector เพื่อที่จะเลือกสถานะของ element ที่ CSS นั้นจะมีผลได้

ยกตัวอย่างเช่น เราสามารถเปลี่ยน style ของแท็ก `a` เมื่อเอาเมาส์ไปชี้ได้ โดยการใช้ pseudo-class selector `:hover`

ลองดูตัวอย่างการเปลี่ยนสีของแท็ก `a` เมื่อเอาเมาส์ไปชี้:

```css
a:hover {
  color: red;
}
```

# --instructions--

ใน code editor มี CSS rule ที่ทำให้ตัวอักษรของแท็ก `a` เป็นสีดำ
ให้เพิ่ม rule ที่จะทำให้ `color` ของแท็ก `a` เปลี่ยนเป็น `blue` เมื่อเอาเมาส์ไปชี้

# --hints--

`color` ของแท็ก `a` ต้องยังคงเป็น `black` ให้เพิ่ม CSS rule ให้กับสำหรับ `:hover` เท่านั้น

```js
assert($("a").css("color") == "rgb(0, 0, 0)");
```

แท็ก `a` ต้องมี `color` เป็น `blue` ถ้าเอาเมาส์ไปชี้

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0, 0, 255, 1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
