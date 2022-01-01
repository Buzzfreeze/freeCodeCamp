---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

การเปลี่ยน element ตัวหนึ่งให้เป็น grid จะมีผลกับ behavior ของ direct descendants ของมันเท่านั้น
ดังนั้นการเปลี่ยน direct descendant อันหนึ่งให้เป็นกริด คุณจะได้กริดที่มีกริดอยู่ภายใน

ยกตัวอย่างเช่น การที่เรากำหนด `display` และ `grid-template-columns` properties ของ element ที่มี `item3` class ตัวหนึ่ง, คุณจะสร้างกริดอันหนึ่งไว้ในกริดของคุณ

# --instructions--

จงเปลี่ยน element ที่มี `item3` class ให้เป็นกริดอันหนึ่งที่มี 2 คอลัมน์โดยแต่ละคอลัมน์จะมีความกว้างเป็น `auto` และ `1fr` โดยการใช้ `display` และ `grid-template-columns`

# --hints--

`item3` class ควรมี `grid-template-columns` property อันหนึ่งที่มีค่าเป็น `auto` และ `1fr`

```js
assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi));
```

class `item3` ควรมี `display` property มี value เป็น `grid`.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      'advert header'
      'advert content'
      'advert footer';
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */

    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>
  .item3 {
    grid-template-columns: auto 1fr;
    display: grid;
  }
</style>
```
