---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: "https://scrimba.com/c/c6bmQh2"
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

ฟังก์ชัน `repeating-linear-gradient()` นั้นจะคล้ายกับ `linear-gradient()` โดยมีความต่างหลักๆ คือ ฟังก์ชันนี้จะใช้ gradient pattern ที่ระบุไว้ซ้ำๆ
`repeating-linear-gradient()` จะรับค่าได้หลายแบบ แต่เพื่อความง่าย ในแบบฝึกหัดนี้เราจะให้คุณใช้แค่ค่ามุมและค่า color stop

ค่ามุมจะเป็นทิศทางของ gradient
ส่วน Color stop เป็นระยะที่จะเกิดการเปลี่ยนผ่านขึ้น และจะถูกกำหนดเป็นเปอร์เซ็นหรือ pixel

ลองดูตัวอย่างใน code editor

gradient จะเริ่มต้นด้วยสี `yellow` ที่ 0 pixel โดยจะผสมกับสีที่สอง `blue` ที่ระยะ 40 pixel จากจุดเริ่มต้น
และจะเห็นว่าสีที่สาม (`green`) ก็มีค่าเป็น 40 pixel สีน้ำเงินและเขียวเลยไม่ผสมกัน แต่จะเป็นการเปลี่ยนสีทันที
และสีเขียวก็จะไปผสมกับสี `red` ที่ 80 pixel (ระยะห่างจากจุดเริ่มต้นของ gradient)

ในตัวอย่างนี้ คุณจะมองภาพได้ง่ายขึ้นถ้ามอง color stop เป็นคู่ ๆ ในตำแหน่งที่สีทั้งสองจะผสมกัน:

```css
0px [yellow -- สีผสม -- blue] 40px [green -- สีผสม -- red] 80px
```

ถ้า color stop 2 ตัวเป็นสีเดียวกัน คุณจะไม่เห็นการผสมสี เพราะว่าเป็นการผสมสีเดียวกัน
และถ้า color stop ตัวถัดไปเป็นสีอื่น และอยู่ใกล้มากๆ คุณจะได้แถบสีขึ้นมา

# --instructions--

ให้สร้างแถบสีโดยการเปลี่ยนค่าของ `repeating-linear-gradient()`
โดยใช้มุม gradient เป็น `45deg`
และกำหนดให้ color stop ของสองสีแรกเป็น `yellow`, และ color stop ของอีกสองสีถัดมาเป็น `black`

# --hints--

มุมของ `repeating-linear-gradient()` ต้องเป็น 45deg

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

มุมของ `repeating-linear-gradient()` ไม่ควรจะเป็น 90deg แล้ว

```js
assert(!code.match(/90deg/gi));
```

color stop ที่ 0 pixel ต้องเป็นสี `yellow`

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

color stop ที่ 40 pixel ต้องเป็นสี `yellow`

```js
assert(code.match(/yellow\s+?40px/gi));
```

color stop อันที่สองที่ 40 pixel ต้องเป็นสี `black`

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

color stop อันสุดท้ายที่ 80 pixel ต้องเป็นสี `black`

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
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
    margin: 50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
