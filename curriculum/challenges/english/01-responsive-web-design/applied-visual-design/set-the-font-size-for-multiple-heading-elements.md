---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/cPpQNT3"
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

เราสามารถใช้ property `font-size` เพื่อระบุขนาดของตัวอักษรของ element ได้

เราสามารถใช้ property นี้เพื่อกำหนดความสม่ำเสมอของขนาดของตัวอักษรในหน้าเว็บของเราได้

ในแบบฝึกหัดนี้ คุณจะได้กำหนดขนาดของ `h1` ถึง `h6` เพื่อให้มีความสม่ำเสมอกัน

# --instructions--

  <p>ในแท็ก <code>style</code> ให้ใช้ <code>font-size</code> ตามนี้:</p>

  <ul>
    <li><code>h1</code> มีขนาดตัวอักษรเป็น 68px</li>
    <li><code>h2</code> มีขนาดตัวอักษรเป็น 52px</li>
    <li><code>h3</code> มีขนาดตัวอักษรเป็น 40px</li>
    <li><code>h4</code> มีขนาดตัวอักษรเป็น 32px</li>
    <li><code>h5</code> มีขนาดตัวอักษรเป็น 21px</li>
    <li><code>h6</code> มีขนาดตัวอักษรเป็น 14px</li>
  </ul>

# --hints--

property `font-size` ของแท็ก `h1` ต้องมีค่าเป็น 68 pixel

```js
const fontSizeOfh1 = new __helpers.CSSHelp(document)
  .getStyle("h1")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh1 === "68px");
```

property `font-size` ของแท็ก `h2` ต้องมีค่าเป็น 52 pixel

```js
const fontSizeOfh2 = new __helpers.CSSHelp(document)
  .getStyle("h2")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh2 === "52px");
```

property `font-size` ของแท็ก `h3` ต้องมีเป็น 40 pixel

```js
const fontSizeOfh3 = new __helpers.CSSHelp(document)
  .getStyle("h3")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh3 === "40px");
```

property `font-size` ของแท็ก `h4` ต้องมีค่าเป็น 32 pixel

```js
const fontSizeOfh4 = new __helpers.CSSHelp(document)
  .getStyle("h4")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh4 === "32px");
```

property `font-size` ของแท็ก `h5` ต้องมีค่าเป็น 21 pixel

```js
const fontSizeOfh5 = new __helpers.CSSHelp(document)
  .getStyle("h5")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh5 === "21px");
```

property `font-size` ของแท็ก `h6` ต้องมีค่าเป็น 14 pixel

```js
const fontSizeOfh6 = new __helpers.CSSHelp(document)
  .getStyle("h6")
  ?.getPropertyValue("font-size");
assert(fontSizeOfh6 === "14px");
```

# --seed--

## --seed-contents--

```html
<style></style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
  }
  h2 {
    font-size: 52px;
  }
  h3 {
    font-size: 40px;
  }
  h4 {
    font-size: 32px;
  }
  h5 {
    font-size: 21px;
  }
  h6 {
    font-size: 14px;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
