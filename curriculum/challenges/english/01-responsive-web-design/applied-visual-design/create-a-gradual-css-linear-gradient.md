---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: "https://scrimba.com/c/cg4dpt9"
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

การใช้สีกับ HTML element นั้นไม่ได้ถูกจำกัดที่การใช้สีเรียบๆสีเดียว
CSS มีความสามารถในการไล่สีให้กับ element ได้ด้วย โดยเรียกว่า gradient
ซึ่งเราสามารถเข้าถึงได้จากฟังก์ชัน `linear-gradient()` ของ property `background`

ลองดูตัวอย่างการใช้ gradient:

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

argument อันแรกจะบอกทิศทางที่การไล่สีจะเริ่ม โดยเราสามารถบอกในหน่วยองศาได้ โดย `90deg` จะทำให้เกิด gradient ในแนวนอน (จากซ้ายไปขวา)
และ `45deg` จะทำให้เกิด gradient ในแนวทะแยง (จะล่างซ้ายไปบนขวา)
argument ตัวถัดๆไปจะระบุลำดับของสีที่ใช้ใน gradient

ลองดูตัวอย่าง:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

ให้ใช้ `linear-gradient()` กับ `background` ของ `div` element โดยกำหนดให้เริ่มจากทิศที่มีค่าเป็น 35 องศา และเปลี่ยนสีจากสี `#CCFFFF` ไปเป็นสี `#FFCCCC`

# --hints--

`div` ต้องมี `background` เป็น `linear-gradient` และมีทิศทางกับสีตามที่เราระบุให้

```js
assert(
  $("div")
    .css("background-image")
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
  }
</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
  }
</style>
<div></div>
```
