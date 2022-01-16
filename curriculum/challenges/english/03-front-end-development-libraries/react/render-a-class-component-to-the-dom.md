---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

คุณคงจำการใช้ ReactDOM API ในแบบทดสอบก่อนหน้านี้เพื่อเรนเดอร์ JSX elements ไปยัง DOM ได้
ซึ่งการเรนเดอร์ React component จะคล้ายๆกันเลย 
ในแบบทดสอบที่ผ่านมาเราได้เน้นเรื่อง component และการรวม component ไปแล้ว ในแบบทดสอบนี้เราเลยเขียนโค้ดส่วนนี้ให้แล้ว แต่เราจะซ่อนโค้ดส่วนนี้ไว้
ตอนนี้คุณจะเห็นว่าโค้ด React ที่คุณเขียนจะยังไม่เรนเดอร์ไปยัง DOM ถ้าไม่เรียกใช้ ReactDOM API

ลองทบทวน syntax ของ
`ReactDOM.render(componentToRender, targetNode)` กันอีกรอบ:
argument แรกจะรับ React component ที่คุณต้องการเรนเดอร์ 
argument ที่สองจะรับ DOM node ที่คุณต้องการเรนเดอร์ component นั้น

วิธีส่ง React component ไปให้ `ReactDOM.render()` จะต่างจากการส่ง JSX เล็กน้อย
ตอนใช้ JSX element คุณต้องส่งชื่อของ element ที่คุณต้องการเรนเดอร์ไป แต่พอใช้ React component จะต้องเปลี่ยนไปใช้ syntax เหมือนกับที่ตอนเรนเดอร์ component ซ้อนกันแทน เช่น `ReactDOM.render(<ComponentToRender />, targetNode)` 
ไม่ว่าจะใช้ class component หรือ functional component ก็จะต้องใช้ syntax นี้

# --instructions--

เราได้เขียน component `Fruits` และ `Vegetables` ไว้ให้แล้วแต่ไม่แสดงโค้ดให้คุณเห็น 
ให้ใส่ component ทั้งสองตัวเป็น children ของ `TypesOfFood` จากนั้นให้เรนเดอร์ `TypesOfFood` ไปยัง DOM ที่เป็น `div` ที่มี `id='challenge-node'` (เราเพิ่ม `div` ตัวนี้ไว้ให้แล้วเหมือนกัน)

# --hints--

component `TypesOfFood` ต้องคืนค่าเป็น `div` ตัวเดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

component `TypesOfFood` ต้องมี `Fruits` ใต้ `h1`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

component `TypesOfFood` ต้องมี `Vegetables` ใต้ `Fruits`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

component `TypesOfFood` ต้องเรนเดอร์ไปยัง DOM ใน `div` ที่มี id เป็น `challenge-node`

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};
```

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

        {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
      </div>
    );
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}
          <Fruits />
           <Vegetables />
         {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
      </div>
    );
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
