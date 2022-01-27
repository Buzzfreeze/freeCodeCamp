---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cMbvNAG"
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

เราจะใช้ property `order` เพื่อบอก CSS ให้เรียงลำดับของ item ใน container

ตามค่าเริ่มต้น การแสดง item ในหน้าเว็บจะเรียงตามลำดับที่เขียนอยู่ในโค้ด ถ้าเขียนไว้ด้านบนก็จะอยู่ก่อน ถ้าเขียนไว้ด้านล่างก็จะอยู่ทีหลัง
แต่ property นี้จะรับค่าเป็นตัวเลข (เลขติดลบก็ได้) และจะทำการเรียง item ตามเลขนั้น

# --instructions--

ให้เพิ่ม CSS property `order` ให้กับทั้ง `#box-1` และ `#box-2`
และกำหนดให้ `#box-1` มีค่าเป็น `2` และ `#box-2` มีค่าเป็น `1`

# --hints--

`#box-1` ต้องมีค่าของ property `order` เป็น `2`

```js
assert($("#box-1").css("order") == "2");
```

`#box-2` ต้องมีค่าของ property `order` เป็น `1`

```js
assert($("#box-2").css("order") == "1");
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
