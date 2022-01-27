---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

ถึงตอนนี้เราได้เห็นแล้วว่า JSX ทำให้เราเขียน HTML ที่อ่านได้ง่ายไว้ใน JavaScript

React ทำให้เราเรนเดอร์ JSX นี้โดยตรงไปยัง HTML DOM ได้เลย โดยใช้ API ของ React ที่เรียกว่า ReactDOM

ReactDOM มี method ที่ทำให้เรนเดอร์ React element ไปยัง DOM ได้ง่ายแบบนี้:
`ReactDOM.render(componentToRender, targetNode)`  
โดยที่ argument แรกคือ React element หรือ component ที่คุณต้องการเรนเดอร์ และ argument ที่สองคือ DOM node ที่คุณต้องการใส่ component นั้นลงไป

คุณน่าจะรู้แล้วว่าเราต้องใช้ `ReactDOM.render()` หลังการประกาศ JSX element แล้ว เหมือนกับการที่เราต้องประกาศตัวแปรก่อนที่จะเอาตัวแปรไปใช้

# --instructions—

เราได้เขียน JSX component ไว้ใน code editor ให้แล้ว 

ให้ใช้ method `ReactDOM.render()` เพื่อเรนเดอร์ component นี้ไปยังหน้าเว็บ 
โดยให้ใช้ JSX element ที่มีให้ เป็น argument แรก และใช้ `document.getElementById()` เพื่อเลือก DOM node ที่จะเรนเดอร์ element นั้น

ตอนนี้เราได้สร้าง `div` ที่มี `id='challenge-node'` ให้แล้วด้วย ให้คุณเรนเดอร์ JSX element ที่มีให้ไปยัง element นี้
และห้ามแก้ข้อมูลใน `const JSX` ที่มีให้

# --hints--

`JSX` ต้องเก็บ `div` element อยู่

```js
assert(JSX.type === 'div');
```

`div` ที่มีให้ต้องมี `h1` เป็น element แรก

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` ที่มีให้ต้องมี `p` เป็น element ที่สอง

```js
assert(JSX.props.children[1].type === 'p');
```

ให้เรนเดอร์ JSX element ที่มีให้ไปยัง DOM node ที่มี id เป็น `challenge-node`

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
