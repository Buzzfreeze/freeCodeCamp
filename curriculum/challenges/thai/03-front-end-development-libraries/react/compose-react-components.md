---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
forumTopicId: 301381
dashedName: compose-react-components
---

# --description--

เนื่องจากแบบทดสอบจะใช้องค์ประกอบที่ซับซ้อนมากขึ้นกับ React components และ JSX จึงมีประเด็นที่ควรทราบ การเรนเดอร์ ES6 style class components ภายใน component อื่นๆ ไม่ได้แตกต่างจากการเรนเดอร์ component ธรรมดาที่คุณได้เคยใช้มาแล้วในแบบทดสอบก่อนหน้านี้ คุณสามารถเรนเดอร์ JSX element, stateless functional components, แลพ ES6 class components ภายใน component อื่นๆได้

# --instructions--

ใน code editor นั้น `TypesOfFood` component ได้เรนเดอร์ component ที่เรียกว่า `Vegetables` เรียบร้อยแล้ว และยังมี `Fruits` component จากแบบทดสอบที่ผ่านมาอีกด้วย

ให้นำ 2 component นี้ไปอยู่ใน `Fruits` อย่างแรกคือ `NonCitrus` และจากนั้น `Citrus` component ทั้งสองนี้ได้ถูกเตรียมไว้ให้คุณในเบื้องหลังแล้ว ต่อไปให้นำ `Fruits` class component ไปไว้ใน `TypesOfFood` component ใต้ header `h1` และเหนือ `Vegetables` ผลลัพธ์ที่ได้ควรเป็นชุดของ component ที่ซ้อนกัน ซึ่งใช้ประเภทของ component 2 อย่างที่ต่างกัน

# --hints--

`TypesOfFood` component ควรจะต้อง return `div` element 1 element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`TypesOfFood` component ควรจะต้อง return `Fruits` component

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

`Fruits` component ควรจะต้อง return `NonCitrus` component และ `Citrus` component

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

`TypesOfFood` component ควรจะต้อง return `Vegetables` component ใต้ `Fruits` component

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
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
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
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```
