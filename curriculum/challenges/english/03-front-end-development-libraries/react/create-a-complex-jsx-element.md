---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

แบบทดสอบก่อนหน้านี้เป็นตัวอย่างของ JSX แบบง่ายๆ แต่ JSX ยังสามารถแทน HTML ที่ซับซ้อนกว่าได้ด้วย

สิ่งสำคัญอย่างหนึ่งที่ต้องรู้เกี่ยวกับ JSX ที่ซ้อนกันคือต้อง return component เดียว

ใน parent element 1 อันนี้จะรวม element ที่ซ้อนกันระดับอื่นๆ ทั้งหมด

ตัวอย่างเช่น JSX element หลายตัวที่ถูกเขียนเพื่อให้เป็น child โดยที่ไม่มี parent element ครอบนั้นจะไม่ transpile

ดูตัวอย่างด้านล่าง:

**Valid JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Invalid JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

กำหนด constant `JSX` ใหม่ ที่เรนเดอร์ `div` ที่ประกอบไปด้วย element ต่างๆ ตามลำดับดังนี้:

`h1`, `p`, และ unordered list ที่มี 3 `li` คุณสามารถเพิ่มข้อความอะไรก็ได้ภายใน element แต่ละอัน

**Note:** เมื่อเรนดเดอร์หลายๆ element อย่างนี้ คุณสามารถรวบทุกอย่างไว้ในวงเล็บได้ แต่จะทำหรือไม่ก็ได้ไม่เคร่ง  นอกจากนี้โปรดสังเกตว่าแบบทดสอบนี้ใช้ `div` tag เพื่อรวบ child element ทุกอันไว้ภายใน parent element เดียว ถ้าคุณลบ `div` ออก JSX ก็จะไม่สามารถ transpile ได้อีกต่อไป จำในส่วนนี้ไว้ให้ดีๆ เพราะต้องนำไปใช้เมื่อคุณจะ return JSX element ใน React component

# --hints--

constant `JSX` ควรจะต้อง return `div` element

```js
assert(JSX.type === 'div');
```

`div` นี้ควรจะต้องมี `h1` tag เป็น element แรก

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` นี้ควรจะต้องมี `p` tag เป็น element ที่สอง

```js
assert(JSX.props.children[1].type === 'p');
```

`div` นี้ควรจะต้องมี `ul` tag เป็น element ที่สาม

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` ควรจะต้องมี 3 `li` element

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
