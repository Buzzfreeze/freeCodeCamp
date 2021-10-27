---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

คุณอาจจำได้ว่าใช้ ReactDOM API ในแบบทดสอบก่อนหน้านี้เพื่อแสดง JSX elements ไปยัง DOM ขั้นตอนการเรนเดอร์ React components จะดูคล้ายกันมาก แบบทดสอบที่ผ่านมาสองสามข้อมุ่งเน้นไปที่ components และ composition ดังนั้นการเรนเดอร์ในแบบทดสอบนี้จึงทำให้ในเบื้องหลัง อย่างไรก็ตามไม่มีโค้ดใด React ที่คุณเขียนจะเรนเดอร์ไปยัง DOM โดยไม่ต้องเรียกใช้ ReactDOM API

นี่คือการทบทวน syntax: `ReactDOM.render(componentToRender, targetNode)` argument แรกคือ React component ที่คุณต้องการเรนเดอร์ argument ที่สองคือ DOM node ที่คุณต้องการเรนเดอร์ component นั้นภายใน

React components จะถูกส่งต่อไปยัง `ReactDOM.render()` ซึ่งแตกต่างจากองค์ประกอบ JSX เล็กน้อยจาก JSX elements คุณต้องส่งชื่อของ element ที่คุณต้องการเรนเดอร์ อย่างไรก็ตามสำหรับ React components คุณต้องใช้ syntax เดียวกันราวกับว่าคุณกำลังเรนเดอร์ component ที่ซ้อนกัน เช่น `ReactDOM.render(<ComponentToRender />, targetNode)` คุณใช้ syntax นี้สำหรับทั้ง ES6 class components และ functional components

# --instructions--

ทั้ง`Fruits` and `Vegetables` components ถูกกำหนดไว้สำหรับคุณไว้ก่อนแล้วเบื้องหลัง เรนเดอร์ components ทั้งสองเป็น children ของ 'TypesOfFood' component จากนั้นเรนเดอร์ 'TypesOfFood' ไปยัง DOM มี `div` ที่มี `id='challenge-node'` ให้คุณใช้งาน

# --hints--

`TypesOfFood` component ควร return `div` element เดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`TypesOfFood` component ควรเรนเดอร์ `Fruits` component ต่อหลังจาก `h1` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

`TypesOfFood` component ควรเรนเดอร์ `Vegetables` component ต่อหลังจาก `Fruits`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

`TypesOfFood` component ควรเรนเดอร์ไปยัง DOM ภายใน `div` ที่มี id `challenge-node`

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
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
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
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```
