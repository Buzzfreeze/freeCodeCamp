---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

`flex-basis` property (ปรับขนาด width) จะระบุขนาดเริ่มต้นของ item ก่อนที่ CSS จะปรับเปลี่ยนมันด้วย `flex-shrink` หรือ `flex-grow`

หน่วยที่ถูกใช้โดย `flex-basis` property จะเหมือนกับ size properties (`px`, `em`, `%`, etc.) ตัวอื่น ๆ
ค่าขนาดของ item ที่เป็น `auto` จะขึ้นกับเนื้อหาของมัน

# --instructions--

จงกำหนดขนาดเริ่มต้นของกล่องที่ใช้ `flex-basis`
จงเพิ่ม CSS property `flex-basis` ให้กับทั้ง `#box-1` และ `#box-2`
จงกำหนดให้ `#box-1` มีค่าเป็น `10em` และให้ `#box-2` มีค่าเป็น `20em`

# --hints--

`#box-1` element ควรมี `flex-basis` property.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

The `#box-1` element should have a `flex-basis` value of `10em`.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

The `#box-2` element should have the `flex-basis` property.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

The `#box-2` element should have a `flex-basis` value of `20em`.

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
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
    height: 200px;
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
