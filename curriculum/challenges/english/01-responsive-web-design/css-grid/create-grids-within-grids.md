---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

การเปลี่ยน element ให้เป็นกริดจะมีผลกับพฤติกรรมของ child element เท่านั้น
ดังนั้นถ้าคุณเปลี่ยน child element ให้เป็นกริด คุณจะได้กริดที่มีกริดอยู่ภายใน

การที่เรากำหนด property `display` และ `grid-template-columns` ของ element ที่มีคลาสเป็น `item3` ก็จะเป็นการสร้างกริดไว้ในกริดแล้ว

# --instructions--

ให้ใช้ `display` และ `grid-template-columns` เพื่อเปลี่ยน element ที่มีคลาสเป็น `item3` ให้เป็นกริด โดยในกริดนี้จะมีคอลัมน์ภายใน 2 คอลัมน์ ซึ่งคอลัมน์แรกจะมีความกว้างเป็น `auto` และคอลัมน์ที่สองจะมีความกว้างเป็น `1fr`

# --hints--

คลาส `item3` ต้องมีค่าของ property `grid-template-columns` เป็น `auto` และ `1fr`

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

คลาส `item3` ต้องมีค่าของ property `display` เป็น `grid`.

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
      "advert header"
      "advert content"
      "advert footer";
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
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
