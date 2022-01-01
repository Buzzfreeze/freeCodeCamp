---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

แบบฝึกหัดนี้จะพูดถึงการใช้ pseudo-classes คร่าว ๆ
pseudo-class เป็นคีย์เวิร์ดที่สามารถถูกเพิ่มให้กับ selector เพื่อที่จะเลือกสถานะเฉพาะของ element ได้

ยกตัวอย่างเช่น styling ของ anchor tag สามารถถูกเปลี่ยนเมื่อมันอยู่ใน hover state (เอาไปไปชี้) โดยการใช้ `:hover` pseudo-class selector
นี่เป็น CSS ที่ใช้เปลี่ยนสีของ anchor tag ให้เป็นสีแดงมันอยู่ใน hover state:

```css
a:hover {
  color: red;
}
```

# --instructions--

code editor มี CSS rule ที่จะ stype `a` tags ทุกตัวให้มีสีดำ
จงเพิ่ม rule อันหนึ่งที่จะทำให้เมื่อผู้ใช้มา hovers ที่ `a` tag, `color` จะกลายเป็นน้ำเงิน

# --hints--

anchor tag `color` ควรจะเป็นสีดำ และจงเพิ่ม CSS rules ให้กับ `:hover` state เท่านั้น

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

The anchor tag ควรมี `color` เป็นสีฟ้าตอน hover

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi,
  ),
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
