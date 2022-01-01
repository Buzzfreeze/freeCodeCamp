---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

คุณสามารถระบุความกว้างของ element โดยใช้ `width` property ใน CSS
ค่าของมันสามารถระบุได้ทั้งโดยหน่วย relative length (เช่น `em`), หน่วย absolute length (เช่น `px`), หรือเป็นเปอร์เซ็นของ parent element ของมัน
นี่คือตัวอย่างในการเปลี่ยนความกว้างของภาพให้เป็น 220px:

```css
img {
  width: 220px;
}
```

# --instructions--

จงเพิ่ม `width` property ให้กับ entire card แและกำหนดให้มันเป็น absolute value ที่มีค่า 245px
จงใช้`fullCard` class เพื่อเลือก element

# --hints--

โค้ดของคุณควรเปลี่ยน `width` property ของ card ให้มีค่า 245 pixel โดยการใช้ `fullCard` class selector

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(fullCard && /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) && $('.fullCard').css('maxWidth') === 'none');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
