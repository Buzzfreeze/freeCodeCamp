---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

หนึ่งในรูปร่างที่เป็นที่นิยมมากที่สุดในโลกคือรูปหัวใจ และในแบบฝึกให้นี้จะให้คุรสร้างมันขึ้นมาจาก CSS เพียว ๆ
แต่ก่อนอื่น คุณต้องเข้าใจ `::before` และ `::after` pseudo-elements
pseudo-element พวกนี้ถูกใช้เพื่อเพิ่มบางอย่างก่อนหรือหลัง element ที่เลือกได้
ข้างล่างเป็นตัวอย่างของการใช้ `::before` pseudo-element เพื่อเพิ่มรูปสี่เหลี่ยมให้กับ elementที่มีคลาสชื่อว่า `heart`:

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

เพื่อทำให้ `::before` และ `::after` pseudo-elements ทำงานได้อย่างปกติ
พวกมันมักจะมี `content` property ที่ถูกกำหนดไว้แล้วโดย property นี้มักถูกใช้เพื่อเพิ่มสิ่งที่เหมือนเป้นรูปภาพหรือข้อความให้กับ element ที่เลือกไว้
เมื่อ`::before` และ `::after` pseudo-elements ถูกใช้เพื่อสร้างรูปร่าง `content` property ก็ยังเป็นสิ่งที่จำเป็นอยู่ แต่เราจะกำหนดให้มันเป็น string เปล่า
ที่ตัอย่างด้านบน, element ที่มีคลาสเป็น `heart` จะมี `::before` pseudo-element อันหนึ่งที่สร้างสี่เหลี่ยมสีเหลืองที่มีความสูงและความกว้างเท่ากับ `50px` และ `70px` ตามลำดับ,
สี่เหลี่ยมนี้จะมีมุมมน ๆ จากการที่มันถึงกำหนดให้มี `border-radius` ที่ 25% และตำแหน่งของมันจะอยู่ที่ `5px` จากทางด้านซ้ายและ `50px` เหนือด้านบนของ element

# --instructions--

จงเปลี่ยน element บนจอให้เป็นหัวใจ
ใน `heart::after` selector, จงเปลี่ยน `background-color` ให้เป็น `pink` และมี `border-radius` เป็น 50%

ถัดไป จงชี้ไปที่ element ที่มีคลาสชื่อ `heart` และเติม `transform` property
จงใช้ `rotate()` function ที่มีค่าเป็น -45 degrees

สุดท้ายนี้, ภายใน `heart::before` selector, จงกำหนดให้ `content` property ของมันเป็น string เปล่า

# --hints--

`background-color` property ของ `heart::after` selector ควรเป็น `pink`

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

The `border-radius` of the `heart::after` selector should be 50%.

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

The `transform` property for the `heart` class should use a `rotate()` function set to -45 degrees.

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

The `content` of the `heart::before` selector should be an empty string.

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
