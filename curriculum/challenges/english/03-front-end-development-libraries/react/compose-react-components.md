---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

พอเราได้ใช้ React component และ JSX ที่ซับซ้อนขึ้นมาขนาดนี้แล้ว
ก็มีอีกอย่างนึงที่เราควรรู้ไว้คือ คุณจะเรนเดอร์ class component แบบ ES6 ไว้ใน component ตัวอื่นได้เหมือนกับการเรนเดอร์ component แบบปกติที่เราทำมาเลย 
เราจะเรนเดอร์ JSX element, stateless functional component, และ ES6 class component ไว้ใน component ไหนก็ได้

# --instructions--

ลองดูใน code editor ตอนนี้มี component `TypesOfFood` ที่เรนเดอร์ component `Vegetables` อยู่แล้ว และก็ยังมี component `Fruits` จากแบบทดสอบที่แล้วด้วย

ให้เพิ่ม component `NonCitrus` และ `Citrus` ไว้ใน component `Fruits` (เราได้เขียน component สองตัวนี้ไว้ให้แล้ว แต่ไม่ได้แสดงโค้ดให้คุณเห็น) 
ต่อไปให้นำ component `Fruits` ไปไว้ใน component `TypesOfFood` ใต้ header `h1` และเหนือ `Vegetables` 
ซึ่งจะทำให้ได้ component ที่ซ้อนกันอยู่เป็น component คนละประเภทกัน

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

component `TypesOfFood` ต้องมี component `Fruits` อยู่ภายใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

component `Fruits` ต้องมี component `NonCitrus` และ `Citrus` อยู่ภายใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return (
      mockedComponent.find('Fruits').children().find('NonCitrus').length ===
        1 &&
      mockedComponent.find('Fruits').children().find('Citrus').length === 1
    );
  })()
);
```

component `TypesOfFood` ต้องมี component `Vegetables` อยู่ใต้ `Fruits` 

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

# --seed--

## --before-user-code--

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
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
     }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        <Vegetables />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <NonCitrus />
        <Citrus />
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
          <Fruits />
          { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
          <Vegetables />
        </div>
      );
    }
};
```
