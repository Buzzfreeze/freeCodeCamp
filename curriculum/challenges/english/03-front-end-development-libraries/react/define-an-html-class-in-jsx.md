---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

เมื่อคุณเริ่มคุ้นเคยกับการเขียน JSX แล้ว คุณอาจสงสัยว่ามันแตกต่างจาก HTML อย่างไร

จนถึงตอนนี้ ดูเหมือนว่า HTML และ JSX จะเหมือนกันทุกประการ

ความแตกต่างที่สำคัญอย่างหนึ่งใน JSX คือคุณไม่สามารถใช้คำว่า `class` เพื่อกำหนดคลาส HTML ได้อีกต่อไป ทั้งนี้เป็นเพราะ `class` เป็นคำสงวนใน JavaScript ดังนั้น JSX จึงใช้ `className` แทน

อันที่จริงหลักการตั้งชื่อสำหรับ HTML attribute และการอ้างอิง event ทั้งหมดใน JSX จะเป็น camelCase ตัวอย่างเช่น click event ใน JSX คือ `onClick` แทนที่จะเป็น `onclick` ในทำนองเดียวกัน `onchange` จะกลายเป็น `onChange` แม้ว่าสิ่งนี้จะมีความแตกต่างเพียงเล็กน้อย แต่ก็เป็นสิ่งสำคัญที่ต้องคำนึงถึงการเรียนรู้ต่อๆ ไป

# --instructions--

ใช้คลาสของ `myDiv` กับ `div` ที่ให้ไว้ในโค้ด JSX
Apply a class of `myDiv` to the `div` provided in the JSX code.

# --hints--

constant `JSX` ควรจะ return `div` element

```js
assert.strictEqual(JSX.type, 'div');
```

`div` ดังกล่าวควรมี class ว่า `myDiv`

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
