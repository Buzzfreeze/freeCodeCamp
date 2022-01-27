---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

คุณได้กำหนด `font-size` ของ heading ไปแล้วในแบบฝึกหัดที่ผ่านมา คราวนี้มาลองปรับ `font-weight` ดูบ้าง

`font-weight` เป็น property ที่ใช้กำหนดความหนา/บางของตัวอักษร

# --instructions--

<ul><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h1</code> ให้เป็น 800</li><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h2</code> ให้เป็น 600</li><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h3</code> ให้เป็น 500</li><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h4</code> ให้เป็น 400</li><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h5</code> ให้เป็น 300</li><li>ตั้งค่า <code>font-weight</code> ของแท็ก <code>h6</code> ให้เป็น 200</li></ul>

# --hints--

property `font-weight` ของแท็ก `h1` ต้องมีค่าเป็น 800

```js
assert($('h1').css('font-weight') == '800');
```

property `font-weight` ของแท็ก `h2` ต้องมีค่าเป็น 600

```js
assert($('h2').css('font-weight') == '600');
```

property `font-weight` ของแท็ก `h3` ต้องมีค่าเป็น 500

```js
assert($('h3').css('font-weight') == '500');
```

property `font-weight` ของแท็ก `h4` ต้องมีค่าเป็น 400

```js
assert($('h4').css('font-weight') == '400');
```

property `font-weight` ของแท็ก `h5` ต้องมีค่าเป็น 300

```js
assert($('h5').css('font-weight') == '300');
```

property `font-weight` ของแท็ก `h6` ต้องมีค่าเป็น 200

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
