---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

ตัวเลือกถัดไปสำหรับ `position` property คือ `absolute`, ซึ่งจะยึด element ในตำแหน่งที่อิงจาก parent container ของมัน
ไม่เหมือนกับ `relative` position, `absolute` position จะทำให้ element ออกมาจาก normal flow ของ document เพื่อที่ item ที่อยู่รอบ ๆ จะไม่สนใจมัน
CSS offset properties (บนหรือล่าง และ ซ้ายหรือขวา) จะถูกใช้เพื่อปรับเปลี่ยนตำแหน่ง

ความแตกต่างหนึ่งที่สังเกตได้ยากของการกำหนดตำแหน่งแบบ absolute คือมันจะถูกยึดไว้กับ *positioned* ancestor ที่อยู่ใกล้มันที่สุด
ถ้าคุณลืมที่จะเพิ่ม position rule ให้กับ parent item (โดยปกติทำได้โดยใช้ `position: relative;`) browser จะพยายามหาต้นกำเนิดของมันและไล่ไปเรื่อย ๆ จนถึง `body` tag.

# --instructions--

จงยึด `#searchbar` element ไว้กับ top-right ของ `section` parent ของมันโดยการประกาศใช้ `position` เป็น `absolute`
จงกำหนดให้มันมี `top` และ `right` offsets เป็น 50 pixels each.

# --hints--

`#searchbar` element ควรมี `position` เป็น `absolute`

```js
assert($('#searchbar').css('position') == 'absolute');
```

คุณควรใช้ `top` CSS offset เท่ากับ 50 pixels กับ `#searchbar` element.

```js
assert($('#searchbar').css('top') == '50px');
```

คุณควรใช้ `right` CSS offset เท่ากับ 50 pixels กับ `#searchbar` element.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
