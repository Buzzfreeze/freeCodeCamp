---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

มันมี shortcut สำหรับการกำหนด flex property หลาย ๆ อันในครั้งเดียว
`flex-grow`, `flex-shrink`, และ `flex-basis` properties สามารถถูกกำหนดค่าพร้อมกันทั้งหมดได้ด้วย `flex` property

ยกตัวอย่างเช่น, `flex: 1 0 10px;` จะกำหนดค่าให้ item มี `flex-grow: 1;`, `flex-shrink: 0;`, และ `flex-basis: 10px;`

ค่าเริ่มต้นของ property คือ `flex: 0 1 auto;`

# --instructions--

จงเพิ่ม CSS property `flex` ให้กับทั้ง `#box-1` และ `#box-2`
จงกำหนดให้ `#box-1` มี `flex-grow` เท่ากับ `2`, `flex-shrink` เท่ากับ `2`,และ `flex-basis` เท่ากับ `150px`
จงกำหนดให้ `#box-2` มี `flex-grow` เท่ากับ `1`, `flex-shrink` เท่ากับ `1`,และ `flex-basis` เท่ากับ `150px`

ค่าเหล่านี้จะทำให้ `#box-1` ขยายจนมีขนาดเป็นสองเท่าของ `#box-2` เมื่อ container มีขนาดมากกว่า 300px และหดลงด้วยอัตราที่มากกว่า `#box-2` อยู่สองเท่าเมื่อ container มีขนาดเล็กกว่าา 300px
300px เป็นขนาดรวมของค่า `flex-basis`ของทั้ง 2 กล่อง

# --hints--

`#box-1` element ควรมี `flex` property ทีถูกกำหนดค่าให้เท่ากับ `2 2 150px`

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

The `#box-2` element should have the `flex` property set to a value of `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

Your code should use the `flex` property for `#box-1` and `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
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
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
