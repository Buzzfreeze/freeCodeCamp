---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React เป็นไลบรารีมุมมองโอเพ่นซอร์สที่สร้างและดูแลโดย Facebook เป็นเครื่องมือที่ยอดเยี่ยมในการแสดงผล User Interface (UI) ของเว็บแอปพลิเคชันสมัยใหม่

React ใช้ส่วนขยาย syntax ของ JavaScript ที่เรียกว่า JSX ที่ให้คุณเขียน HTML ได้โดยตรงภายใน JavaScript สิ่งนี้มีประโยชน์หลายประการ ช่วยให้คุณสามารถใช้ความสามารถในการโปรแกรมมิ่งเต็มรูปแบบของ JavaScript ภายใน HTML และช่วยให้โค้ดของคุณอ่านเข้าใจได้ง่าย โดยส่วนใหญ่ JSX จะคล้ายกับ HTML ที่คุณได้เรียนรู้ไปแล้ว อย่างไรก็ตาม มีข้อแตกต่างที่สำคัญบางประการที่จะที่จะอธิบายในแบบทดสอบต่างๆ ต่อไปนี้

ตัวอย่างเช่น เนื่องจาก JSX เป็นส่วนขยาย syntax ของ JavaScript คุณจึงสามารถเขียน JavaScript ได้โดยตรงภายใน JSX คุณเพียงแค่ใส่โค้ดที่คุณต้องการให้เป็น JavaScript ไว้ในวงเล็บปีกกา: `{ 'this is suitable as JavaScript code' }` ซึ่งวิธีการนี้จะถูกใช้ในแบบทดสอบต่อๆไป

อย่างไรก็ตาม เนื่องจาก JSX ไม่ใช่ JavaScript ที่ถูกต้อง จึงต้องคอมไพล์โค้ด JSX เป็น JavaScript Transpiler Babel เป็นเครื่องมือยอดนิยมสำหรับกระบวนการนี้ เพื่อความสะดวกของคุณ เราได้เพิ่มเบื้องหลังของความท้าทายเหล่านี้ไว้แล้ว หากคุณบังเอิญเขียน JSX ที่ไม่ถูกต้อง คุณจะเห็นว่าการทดสอบครั้งแรกในการท้าทายเหล่านี้ล้มเหลว

อย่างไรก็ตาม เนื่องจาก JSX ไม่ใช่ JavaScript ที่แท้จริง จึงต้องคอมไพล์โค้ด JSX เป็น JavaScript Transpiler Babel เป็นเครื่องมือยอดนิยมสำหรับกระบวนการนี้ เราได้เพิ่มเครื่องมือนี้เข้ามาเรียบร้อยแล้วในแบบทดสอบนี้เพื่อความสะดวกของคุณ หากคุณบังเอิญเขียน JSX ที่ไม่ถูกต้อง คุณจะเห็นว่าการ test ครั้งแรกในแบบทดสอบเหล่านี้ไม่ผ่าน

เป็นที่น่าสังเกตว่าแบบทดสอบนี้กำลังเรียกใช้งาน `ReactDOM.render(JSX, document.getElementById('root'))` การเรียกใช้ฟังก์ชันนี้เป็นการวาง JSX ของคุณลงในการแสดง DOM ที่มีน้ำหนักเบาของ React จากนั้น React จะใช้สแน็ปช็อตของ DOM ของตัวเองเพื่อเพิ่มประสิทธิภาพการอัปเดตเฉพาะบางส่วนของ DOM จริง

# --instructions--

โค้ดปัจจุบันใช้ JSX เพื่อกำหนด `div` element ให้กับค่าคงที่ `JSX` แทนที่ `div` ด้วย `h1` element และเพิ่มข้อความ `Hello JSX!` เข้าไปข้างใน

# --hints--

ค่าคงที่ `JSX` ควรจะต้อง return `h1` element

```js
assert(JSX.type === 'h1');
```

`h1` tag ควรจะต้องมีข้อความว่า `Hello JSX!`

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
