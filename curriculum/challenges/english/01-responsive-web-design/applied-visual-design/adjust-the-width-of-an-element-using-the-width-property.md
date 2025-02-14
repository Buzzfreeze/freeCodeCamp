---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: "https://scrimba.com/c/cvVLPtN"
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

ใน CSS คุณจะระบุความกว้างของ element ได้ โดยใช้ property `width`

เราสามารถระบุค่าเป็น relative length (เช่น `em`) หรือเป็น absolute length (เช่น `px`) หรือเป็นเปอร์เซ็นของ parent element ก็ได้

ลองดูตัวอย่างการกำหนดความกว้างของรูปภาพให้เป็น 220px:

```css
img {
  width: 220px;
}
```

# --instructions--

ให้เพิ่ม property `width` ให้กับคลาส `fullCard` โดยกำหนดให้เป็นค่าแบบ absolute โดยมีค่าเป็น `245px`

# --hints--

property `width` ของ `fullCard` ต้องมีค่าเป็น 245 pixel โดยใช้ `fullCard` class selector

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $(".fullCard").css("maxWidth") === "none"
);
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
      <p>
        Google was founded by Larry Page and Sergey Brin while they were Ph.D.
        students at Stanford University.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      >
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
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
      <p>
        Google was founded by Larry Page and Sergey Brin while they were Ph.D.
        students at Stanford University.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      >
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```
