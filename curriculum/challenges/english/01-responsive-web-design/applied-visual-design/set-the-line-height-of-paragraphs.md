---
id: 587d781d367417b2b2512ac5
title: Set the line-height of Paragraphs
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS มี `line-height` property เพื่อที่จะเปลี่ยนความสูงของแต่ละเส้นใน block ของข้อความ 
ตามชื่อของมัน มันจะเปลี่ยนปริมาณของช่องว่างในแนวตั้งที่แต่ละบรรทัดของข้อความความจะได้รับ

# --instructions--

จงเพิ่ม `line-height` property ให้กับ `p` tag และกำหนดให้มันมีค่า 25px

# --hints--

คุณควรกำหนดให้ `line-height` ของ `p` tag มีค่า 25 pixels

```js
assert($('p').css('line-height') == '25px');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
