---
id: 587d781c367417b2b2512ac4
title: Set the font-size of Paragraph Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJ36Cr'
forumTopicId: 301068
dashedName: set-the-font-size-of-paragraph-text
---

# --description--

`font-size` property ใน CSS ไม่ได้ถูกจำกัดแค่ที่ headings, มันสามารถถูกใช้กับ element ใดก็ได้ที่เก็บตัวอักษรไว้อยู่

# --instructions--

จงเปลี่ยนค่าของ `font-size` property ของพารากราฟ ให้มีค่าเป็น 16px เพื่อทำให้มันมองเห็นได้ง่ายขึ้น

# --hints--

`p` tag ควรมี`font-size` ขนาด 16 pixels

```js
assert($('p').css('font-size') == '16px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 10px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
