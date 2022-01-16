---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React เป็น open source library ที่จัดการด้านการแสดงผล ซึ่งถูกพัฒนาโดย Facebook 
React เป็นเครื่องมือในการสร้าง User Interface (UI) ที่ดีมากๆตัวหนึ่งในเว็บยุคใหม่

React ใช้ syntax ที่เป็นส่วนขยายของ JavaScript ที่เรียกว่า JSX ที่ทำให้เขียน HTML ลงไปใน JavaScript ได้โดยตรง 
การเขียน HTML ลงใน JavaScript ได้โดยตรงแบบนี้มีโปรโยชน์มากๆ 
ทั้งการใช้ศักยภาพของ JavaScript ใน HTML และช่วยให้โค้ดอ่านง่าย 
ถ้ามองผ่านๆ JSX ก็จะคล้ายกับ HTML ที่เราได้เรียนกันไปแล้ว แต่จริงๆแล้วจะความแตกต่างที่สำคัญอยู่ ซึ่งเราจะสอนในแบบทดสอบต่อๆไป

เนื่องจาก JSX ใช้ syntax ที่เป็นส่วนขยายของ JavaScript คุณจึงสามารถเขียน JavaScript ลงไปใน JSX ได้โดยตรง คุณแค่ต้องใส่โค้ดของ JavaScript ไว้ในวงเล็บปีกกา: `{ 'this is suitable as JavaScript code' }` ให้จำวิธีนี้ไว้เพราะเราจะเอาไปใช้ในแบบทดสอบถัดๆไป

แต่จริงๆแล้ว JSX ก็ยังไม่ใช่ JavaScript การใช้ JSX จึงจำเป็นต้องแปลงเป็น JavaScript โดยใช้ Transpiler ที่เป็นที่นิยมมากที่ชื่อ [Babel](https://babeljs.io/) (Transpiler เป็นเครื่องมีอที่ช่วยในการเปลี่ยนภาษาที่ไม่ใช่ Javascript เช่น JSX, ES6 ให้เป็น Javascript เพื่อให้สามารถใช้งานได้กับเบราว์เซอร์ ทุกรุ่น)
เพื่อความสะดวก เราจึงได้ลง Trasnpiler ไว้ในแบบทดสอบนี้ให้แล้ว 
ถ้าคุณบังเอิญเขียน JSX ผิด syntax คุณจะเห็นว่า test ตัวแรกในแบบทดสอบจะไม่ผ่าน

เราอยากให้คุณรู้ไว้ด้วยว่าแบบทดสอบของเราจะเรียกใช้ `ReactDOM.render(JSX, document.getElementById('root'))` อยู่ข้างหลัง
การเรียกใช้ฟังก์ชันนี้จะนำ JSX ของคุณไปใส่ใน DOM ของ React จากนั้น React จะทำการเทียบ DOM ตัวใหม่กับตัวเก่า และทำการอัปเดทเฉพาะส่วนที่เปลี่ยนแปลงไป
การที่ React ทำงานแบบนี้ทำให้ React ทำงานได้เร็วกว่าเว็บแบบปกติ

# --instructions--

ลองดูโค้ดในหน้าต่างด้านขวา ตอนนี้เราใช้ JSX เพื่อสร้าง `div` element และเก็บลงในตัวแปรที่เป็นค่าคงที่ชื่อ `JSX` 
ให้เปลี่ยน `div` เป็น `h1` และเพิ่มข้อความ `Hello JSX!` เข้าไปข้างใน

# --hints--

ค่าคงที่ `JSX` จะต้องเก็บ `h1` element

```js
assert(JSX.type === 'h1');
```

`h1` ต้องมีข้อความ `Hello JSX!` อยู่ข้างใน

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
