---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
forumTopicId: 301396
dashedName: learn-about-self-closing-jsx-tags
---

# --description--

จนถึงตอนนี้คุณได้เห็นแล้วว่า JSX แตกต่างจาก HTML อย่างไรด้วยการใช้ `className` กับ `class` เพื่อกำหนดคลาส HTML
อีกวิธีสำคัญที่ JSX แตกต่างจาก HTML คือแนวคิดของแท็กปิดตัวเอง (self-closing tag)

ใน HTML แท็กเกือบทั้งหมดมีทั้งแท็กเปิดและปิด: `<div></div>`; แท็กปิดมักจะมีเครื่องหมาย `\`ก่อนชื่อแท็กที่คุณกำลังปิด อย่างไรก็ตามมีตัวอย่างพิเศษใน HTML ที่เรียกว่า “self-closing tags” หรือแท็กที่ไม่ต้องการทั้งแท็กเปิดและแท็กปิดก่อนที่แท็กอื่นจะสามารถเริ่มต้นได้

ตัวอย่างเช่น แท็กตัวแบ่งบรรทัดสามารถเขียนเป็น `<br>` หรือ `<br />` ได้ แต่ไม่ควรเขียนเป็น `<br></br>` เนื่องจากไม่มีเนื้อหาใดๆ ในนั้น

หลักการจะแตกต่างกันเล็กน้อยใน JSX ซึ่ง JSX element ใดๆ สามารถเขียนได้ด้วยแท็กปิดตัวเอง และทุกองค์ประกอบต้องปิด ตัวอย่างเช่น แท็กตัวแบ่งบรรทัดต้องเขียนเป็น `<br />` เสมอ เพื่อที่จะเป็น JSX ที่ถูกต้องทำให้สามารถ transpile ได้ ในทางกลับกัน `<div>` สามารถเขียนเป็น `<div />` หรือ `<div></div>` ได้ ความแตกต่างคือใน syntax เวอร์ชันแรกไม่มีทางที่จะเพิ่มสิ่งใดใน `<div />` คุณจะเห็นในแบบทดสอบอื่นๆ ภายหลังว่า syntax นี้มีประโยชน์เมื่อทำการเรนเดอร์ React component

# --instructions—

แก้ไขข้อผิดพลาดใน code editor เพื่อให้เป็น JSX ที่ถูกต้อง และ transpile ได้สำเร็จ ตรวจสอบให้แน่ใจว่าคุณไม่ได้เปลี่ยนแปลงเนื้อหาใดๆ คุณต้องปิดแท็กเมื่อจำเป็นเท่านั้น

# --hints--

constant `JSX` ควร return `div` element

```js
assert.strictEqual(JSX.type, 'div');
```

`div` ควรมี `br` tag

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

`div` ควรมี `hr` tag

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
