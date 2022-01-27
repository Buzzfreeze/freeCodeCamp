---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: "https://scrimba.com/c/cPpz4fr"
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

หนึ่งในรูปทรงที่เป็นที่นิยมมากที่สุดในโลกคือรูปหัวใจ

เราจะให้คุณลองสร้างรูปหัวใจโดยใช้ CSS เพียว ๆ เลย
แต่ก่อนอื่น คุณต้องเข้าใจ pseudo-element `::before` และ `::after` ก่อน

โดย `::before` จะใช้เพิ่ม pseudo-element เป็น child ตัวแรกของ element ที่เลือก
และ `::after` จะใช้เพิ่ม pseudo-element เป็น child ตัวสุดท้ายของ element ที่เลือก

ข้างล่างเป็นตัวอย่างของการใช้ pseudo-element `::before` เพื่อเพิ่มรูปสี่เหลี่ยมให้กับ element ที่มีคลาสเป็น `heart`:

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

เพื่อให้ `::before` และ `::after` ทำงานได้อย่างปกติ
เราต้องกำหนด property `content` ด้วย
property นี้มักถูกใช้เพื่อ เพิ่ม/แทรก รูปภาพหรือข้อความให้กับ element ที่เลือก
เมื่อเราใช้ `::before` หรือ `::after` เพื่อสร้างรูปทรง เราก็ยังจำเป็นที่จะต้องระบุ property `content` แต่เราจะกำหนดให้เป็น string เปล่า

ในตัวอย่างด้านบน element ที่มีคลาสเป็น `heart` จะมี `::before` pseudo-element อันหนึ่ง ที่สร้างสี่เหลี่ยมสีเหลือง ที่มีความสูงและความกว้างเท่ากับ `50px` และ `70px` ตามลำดับ
สี่เหลี่ยมนี้จะมีมุมมน ๆ จากการที่มี `border-radius` เป็น 25% และตำแหน่งของสี่เหลี่ยมนี้จะอยู่ที่ `5px` จากทางด้านซ้าย และอยู่เหนือด้านบนของ element ไป `50px`

# --instructions--

ให้เปลี่ยน element บนจอให้เป็นหัวใจ
ใน `heart::after` selector ให้เปลี่ยน `background-color` ให้เป็น `pink` และให้ `border-radius` เป็น 50%

ถัดไป ให้ใช้ class selector เลือกคลาส `heart` และระบุค่าใน property `transform` โดยให้ใช้ฟังก์ชัน `rotate()` โดยระบุค่าเป็น -45 องศา

สุดท้าย ภายใน `heart::before` selector ให้กำหนดให้ property `content` เป็น string เปล่า

# --hints--

property `background-color` ของ `heart::after` selector ต้องมีค่าเป็น `pink`

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(/({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter));
```

property `border-radius` ของ `heart::after` selector ต้องมีค่าเป็น 50%

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

property `transform` ของคลาส `heart` ต้องใช้ฟังก์ชัน `rotate()` โดยกำหนดค่าเป็น -45 องศา

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`content` ของ `heart::before` selector ต้องเป็น string เปล่า

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```
