---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

`repeating-linear-gradient()` function นั้นคล้ายกับ `linear-gradient()` โดยมีความต่างหลัก ๆ คือมันจะทำการใช้ gradient pattern ที่ระบุไว้ซ้ำ ๆ
`repeating-linear-gradient()` จะรับค่าหลาย ๆ ค่า แต่เพื่อความง่าย คุณสามารถใช้แค่ค่ามุมและค่า color stop ในแบบฝึกหัดนี้

ค่ามุมจะเป็นทิศทางของ gradient
Color stop เป้นเหมือนกับความกว้างที่จะบอกตำแหน่งที่การเปลี่ยนผ่านจะเกิดขึ้นและจะถูกกำหนดเป็นเปอร์เซ็นหรือค่าของ pixel

ในตัวอย่างนี้จะสาธิตในcode editor, gradient จะเริ่มต้นด้วยสี `yellow` ที่ 0 pixel โดยจะผสมกับสีที่สอง `blue` ที่ 40 pixel ห่างจากจุดเริ่มต้น
เนื่องจากสีถัดไปก็อยู่แค่ที่ 40 pixels, gradient จะเปลี่ยนไปเป็นสีที่สาม `green` ทันทีโดยมันจะไปผสมกับสีที่สี่ `red` ตรง 80 pixel ที่ห่างจากจุดเริ่มต้นของ gradient

สำหรับตัวอย่างนี้, คุณควรจะคำนึงถึง color stops เป็นคู่ ๆ ในตำแหน่งที่ทั้งสองจะผสมกัน

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

ถ้าทุก ๆ ค่าของ 2 color stop เป็นสีเดียวกัน, การผสมสีจะมองไม่เห็นเพราะมันเกิดขึ้นระหว่างสีเดียวกัน ซึ่งถ้าตามด้วย hard transition ไปที่สีถัดไปคุณจะได้แทบขึ้นมา

# --instructions--

จงสร้างแถบสีโดยการเปลี่ยนค่า `repeating-linear-gradient()` เพื่อใช้มุม gradient เท่ากับ  `45deg`
และกำหนดให้ color stops ของสองสีแรกเป็น `yellow`, และ color stop ของอีกสองสีถัดมาเป็น `black`

# --hints--

มุมของ`repeating-linear-gradient()` ควรเป็น 45deg.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

The angle of the `repeating-linear-gradient()` should no longer be 90deg

```js
assert(!code.match(/90deg/gi));
```

The color stop at 0 pixels should be `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

One color stop at 40 pixels should be `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

The second color stop at 40 pixels should be `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

The last color stop at 80 pixels should be `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
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
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
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
