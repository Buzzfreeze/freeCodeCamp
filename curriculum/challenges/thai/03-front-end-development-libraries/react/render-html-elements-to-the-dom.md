---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

ถึงตอนนี้คุณได้เรียนรู้แล้วว่า JSX เป็นเครื่องมือที่สะดวกในการเขียน HTML ที่อ่านได้ภายใน JavaScript และด้วย React เราสามารถเรนเดอร์ JSX นี้โดยตรงไปยัง HTML DOM โดยใช้ API การเรนเดอร์ของ React ที่รู้จักกันในชื่อ ReactDOM

ReactDOM นำเสนอ method ง่ายๆ ในการเรนเดอร์ React elements ไปยัง DOM ซึ่งเขียนได้ดังนี้: `ReactDOM.render(componentToRender, targetNode)` โดยที่ argument แรกคือ React element หรือ component ที่คุณต้องการเรนเดอร์ และ argument ที่สองคือ DOM node ที่คุณต้องการเรนเดอร์ component ไป

อย่างที่คุณคาดไว้จะต้องเรียกใช้ `ReactDOM.render()` หลังจากการประกาศ JSX element แล้ว เช่นเดียวกับที่คุณต้องประกาศตัวแปรก่อนใช้งานพวกมัน

# --instructions—

code editor มี JSX component อย่างง่าย ให้ใช้ `ReactDOM.render()` method เพื่อเรนเดอร์ component นี้ไปยังหน้าเพจ คุณสามารถส่งผ่าน JSX elements ที่กำหนดไว้โดยตรงให้เป็น argument แรก และใช้ `document.getElementById()` เพื่อเลือก DOM node เพื่อเรนเดอร์พวกมันไปยัง node นั้น มี `div` ที่มี `id='challenge-node'` ให้คุณใช้งาน ตรวจสอบให้แน่ใจว่าคุณไม่ได้เปลี่ยนค่าคงที่ `JSX` constant

# --hints--

constant `JSX` ควรจะ return `div` element เดียว

```js
assert(JSX.type === 'div');
```

`div` นั้นควรมี `h1` tag เป็น element แรก

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` นั้นควรมี `p` tag เป็น element ที่สอง

```js
assert(JSX.props.children[1].type === 'p');
```

JSX elemen ที่มีให้ควรเรนเดอร์ไปยัง DOM node ด้วย id `challenge-node`

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
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
