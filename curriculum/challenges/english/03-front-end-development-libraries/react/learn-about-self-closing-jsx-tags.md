---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
forumTopicId: 301396
dashedName: learn-about-self-closing-jsx-tags
---

# --description--

ตอนนี้เราเห็นแล้วว่า JSX ต่างจาก HTML ในการใช้ `className` กับ `class` เพื่อกำหนดคลาส HTML
อีกความแตกต่างที่สำคัญของ JSX กับ HTML คือแท็กที่ปิดในตัว (self-closing tag)

ใน HTML แท็กเกือบทั้งหมดจะมีทั้งแท็กเปิดและปิด: `<div></div>`; แท็กปิดจะต้องมีเครื่องหมาย `\` ก่อนชื่อแท็กที่คุณกำลังปิด แต่ใน HTML จะมีแท็กพิเศษที่เรียกว่า "แท็กที่ปิดในตัว" หรือแท็กที่ไม่ต้องใช้ทั้งแท็กเปิดและแท็กปิด

ตัวอย่างเช่น แท็กตัวแบ่งบรรทัดสามารถเขียนเป็น `<br>` หรือ `<br />` ก็ได้ แต่ไม่ควรเขียนเป็น `<br></br>` เพราะว่าในนี้จะไม่มีโค้ดอะไรอยู่เลย

แต่ JSX จะมีหลักการที่ต่างกันเล็กน้อย ซึ่ง JSX element ทุกตัวจะเขียนเป็นแท็กที่ปิดในตัวได้ และ element ทุกตัวที่ถูกเปิดจะต้องถูกปิด  
เช่น แท็กตัวแบ่งบรรทัดจะต้องเขียนเป็น `<br />` เท่านั้น JSX ถึงจะถือว่าเขียนถูกต้องและ transpile ได้ 
แต่ `<div>` จะเขียนเป็น `<div />` หรือ `<div></div>` ก็ได้ 
ความแตกต่างคือ ถ้าใช้ `<div />` เราจะเพิ่มอะไรลงในนี้ไม่ได้เลย คุณจะได้เห็นประโยชน์ของ syntax นี้เมื่อทำการเรนเดอร์ React component ในแบบทดสอบต่อๆไป

# --instructions—

ให้แก้ไขข้อผิดพลาดใน code editor เพื่อให้เป็น JSX ที่ถูกต้อง และ transpile ได้
โดยห้ามแก้ไขเนื้อหาอื่นที่ไม่ได้ผิด และต้องปิดแท็กถ้าจำเป็นเท่านั้น

# --hints--

`JSX` ต้องเก็บข้อมูลของ `div` element

```js
assert.strictEqual(JSX.type, 'div');
```

`div` ต้องมี tag `br` 

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

`div` ต้องมี tag `hr` 

```js
assert(Enzyme.shallow(JSX).find('hr').length === 1);
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
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
</div>
);
```
