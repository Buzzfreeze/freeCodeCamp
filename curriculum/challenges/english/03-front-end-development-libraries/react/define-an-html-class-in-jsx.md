---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

ตอนนี้พอคุณได้เขียน JSX มาหน่อยนึงแล้ว คุณอาจนึกว่า เอ๊ะ ก็ไม่เห็นต่างจาก HTML เลยหนิ

ในตอนนี้คุณอาจเห็นว่า HTML กับ JSX เหมือนกันเป๊ะ

แต่ความแตกต่างที่สำคัญอย่างหนึ่งใน JSX คือคุณไม่สามารถใช้คำว่า `class` เพื่อกำหนดคลาสแบบ HTML ได้อีกต่อไป ที่เป็นแบบนี้เพราะว่า `class` นั้นเป็นคำสงวนใน JavaScript ดังนั้น JSX จึงใช้เป็นคำว่า `className` แทน

อันที่จริงหลักการตั้งชื่อสำหรับ HTML attribute และการอ้างอิง event ทั้งหมดใน JSX จะเป็น camelCase ตัวอย่างเช่น click event ใน JSX คือ `onClick` แทนที่จะเป็น `onclick` ในทำนองเดียวกัน `onchange` ก็จะกลายเป็น `onChange` ถึงแม้จะมีความแตกต่างแค่เล็กน้อย แต่ก็เป็นสิ่งสำคัญที่ต้องจำให้ได้ในการที่จะเรียนรู้ต่อไป

# --instructions--

ให้เพิ่มคลาส `myDiv` ใน `div` ที่ให้ไว้ในโค้ด JSX

# --hints--

`JSX` ต้องเก็บข้อมูลของ `div` element

```js
assert.strictEqual(JSX.type, 'div');
```

`div` นี้ต้องมีคลาสเป็น `myDiv`

```js
assert.strictEqual(JSX.props.className, 'myDiv');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
