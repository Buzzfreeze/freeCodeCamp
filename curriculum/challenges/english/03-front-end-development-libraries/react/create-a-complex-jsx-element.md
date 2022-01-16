---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

แบบทดสอบที่แล้วเป็นการใช้ JSX แบบง่ายๆ แต่เราก็ใช้ JSX สร้าง HTML ที่ซับซ้อนกว่านั้นได้ด้วย

สิ่งสำคัญอย่างหนึ่งที่ต้องรู้ในการเขียน JSX ซ้อนกันก็คือ ในการคืนค่าทุกครั้งจะต้องคืนค่าเป็น component เดียวเท่านั้น

ซึ่ง parent element ตัวที่คืนค่าออกมานี้ จะต้องครอบ element ที่ซ้อนอยู่ข้างในทั้งหมด

เช่น ถ้าเราเขียน JSX element หลายๆตัวไว้โดยที่ไม่มี parent element ครอบ โค้ดที่เราเขียนไปจะไม่ถูก transpile

ลองดูตัวอย่างด้านล่าง:

**JSX ในรูปแบบที่ถูกต้อง:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**JSX ในรูปแบบที่ผิด:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

ให้ใช้ `const` สร้างตัวแปร `JSX` ซึ่งจะเก็บ `div` ที่เป็น parent element และใน parent element นี้จะต้องมี child element ตามลำดับดังนี้:

`h1`, `p`, และ unordered list (`ul`) ที่มี `li` 3 ตัว 
คุณจะใส่ข้อความอะไรก็ได้ใน element แต่ละอันที่เพิ่มมา

**Note:** เวลาเราสร้าง element หลายๆตัวแบบนี้ เราจะใช้วงเล็บครอบ element ทั้งหมดได้ (แต่จะทำหรือไม่ก็ได้) 
แล้วก็จะเห็นว่าแบบทดสอบนี้ใช้ `div` ครอบ child element ทุกอันไว้ใน parent element เดียว ถ้าคุณลบ `div` ออก JSX ก็จะไม่สามารถ transpile ได้ ให้จำเรื่องนี้ไว้ให้ดีๆ เพราะต้องนำไปใช้เวลาที่จะต้องคืนค่าเป็น JSX element ใน React component

# --hints--

`JSX` จะต้องเก็บ `div` element

```js
assert(JSX.type === 'div');
```

`div` นี้ต้องมี `h1` เป็น element แรก

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` นี้ต้องมี `p` เป็น element ที่สอง

```js
assert(JSX.props.children[1].type === 'p');
```

`div` นี้ต้องมี `ul` เป็น element ที่สาม

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` ต้องมี `li` 3 อันอยู่ข้างใน

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
