---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: "https://scrimba.com/c/cyLJ7c3"
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

ตัวเลือกถัดไปของ property `position` คือ `absolute`
ซึ่งจะเป็นการยึด element ในตำแหน่งที่อิงจาก parent element หรือ element ที่ครอบอยู่
โดย position แบบ `absolute` จะไม่เหมือนกับ `relative`
เพราะว่าการใช้ `absolute` จะทำให้ element หลุดออกจาก normal flow ของหน้าเว็บ และ element อื่นที่อยู่รอบๆก็จะมีพฤติกรรมเหมือนกับว่าไม่มี element นี้อยู่
และจะใช้ CSS offset property (`top` หรือ `bottom` และ `left` หรือ `right`) เพื่อเปลี่ยนตำแหน่งของ element

อย่างหนึ่งที่ควรจำไว้ในการใช้ position แบบ absolute
ก็คือ
ตำแหน่งของ element แบบ absolute จะอ้างอิงจาก parent ที่ถูกตั้งค่า position ไว้ (ปกติ parent จะใช้เป็น `position: relative;`) ซึ่งถ้าดู parent ชั้นที่ใกล้ที่สุดแล้วไม่เจอ position ก็จะทำการหาต่อไปเรื่อยๆ จนสุดท้ายถ้าไม่เจอจริงๆ ก็จะใช้ `body` เป็นตำแหน่งอ้างอิงแทน

# --instructions--

ให้ยึด `#searchbar` ไว้มุมบนซ้ายของ ของ parent ที่เป็น `section`  
ซึ่งจะทำได้โดยการกำหนด `position` เป็น `absolute`
และกำหนดให้ `top` และ `right` เป็น 50 pixel

# --hints--

`#searchbar` ต้องมี `position` เป็น `absolute`

```js
assert($("#searchbar").css("position") == "absolute");
```

`#searchbar` ต้องมีค่าของ property `top` เป็น 50 pixel

```js
assert($("#searchbar").css("top") == "50px");
```

`#searchbar` ต้องมีค่าของ property `right` เป็น 50 pixel

```js
assert($("#searchbar").css("right") == "50px");
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
      <input type="search" id="search" name="search" />
      <input type="submit" name="submit" value="Go!" />
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
      <input type="search" id="search" name="search" />
      <input type="submit" name="submit" value="Go!" />
    </form>
  </section>
</body>
```
