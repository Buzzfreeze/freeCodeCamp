---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

`font-size` property นั้นถูกใช้เพื่อระบุขนาดของตัวอักษรให้กับ element ที่ใช้ property นี้
rule นี้สามารถถูกใช้กับ element หลาย ๆ อันเพื่อสร้าง visual consistency ของตัวอักษรในหน้าเว็บได้
ในแบบฝึกหัดนี้ คุณจะได้กำหนดค่าของ  `h1` ถึง `h6` tags เพื่อให้บาลานซ์กับขนาดของ heading 

# --instructions--

  <p>In the <code>style</code> tags, set the <code>font-size</code> of the:</p>

  <ul>
    <li><code>h1</code> tag to 68px.</li>
    <li><code>h2</code> tag to 52px.</li>
    <li><code>h3</code> tag to 40px.</li>
    <li><code>h4</code> tag to 32px.</li>
    <li><code>h5</code> tag to 21px.</li>
    <li><code>h6</code> tag to 14px.</li>
  </ul>

# --hints--

คุณควรกำหนดให้ `font-size` property ของ `h1` tag มีค่า 68 pixel

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

คุณควรกำหนดให้ `font-size` property ของ `h2` tag มีค่า 52 pixels.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

คุณควรกำหนดให้  `font-size` property ของ `h3` tag มี 40 pixels.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

คุณควรกำหนดให้  `font-size` property ของ `h4` tag มีค่า 32 pixels.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

คุณควรกำหนดให้  `font-size` property ของ `h5` tag มีค่า 21 pixels.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

คุณควรกำหนดให้ `font-size` property ของ `h6` tag มีค่า 14 pixels.

```js
 const fontSizeOfh6 = new __helpers.CSSHelp(document).getStyle('h6')?.getPropertyValue('font-size');
 assert(fontSizeOfh6 === '14px');
```

# --seed--

## --seed-contents--

```html
<style>






</style>
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
