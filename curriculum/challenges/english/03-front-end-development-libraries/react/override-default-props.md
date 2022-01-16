---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

การที่เราตั้งค่า default props นั้นมีประโยชน์มากๆใน React 
และวิธีการทำให้ React ใช้ค่าอื่นแทน default props ก็คือการส่งค่าตาม prop ตัวนั้นเข้าไปให้กับ component

# --instructions--

ตอนนี้ component `ShoppingCart` จะมี child component เป็น `Items` ซึ่ง component `Items` นี้มีการตั้งค่าของ default prop ที่ชื่อว่า `quantity` เป็น `0` 
เราจะเปลี่ยนค่าของ prop `quantity` ได้โดยการส่งค่า `10` ไปให้ `quantity`

**Note:** ถ้ายังจำได้ syntax ในการเพิ่ม prop ให้กับ component เหมือนกับ syntax ของ HTML attribute แต่ในบททดสอบนี้ `quantity` เป็นตัวเลขจำนวนเต็ม เราจึงต้องไม่ครอบค่านั้นด้วยเครื่องหมายคำพูด แต่ต้องครอบด้วยปีกกา เช่น `{100}` 
syntax นี้จะบอกให้ JSX อ่านค่าในปีกกานี้เป็น JavaScript ซึ่งถ้าเราใส่เป็นเครื่องหมายคำพูด JSX จะนึกว่าค่าที่เราให้ไปนี้เป็น string

# --hints--

component `ShoppingCart` จะต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

component `Items` จะต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

`Items` ต้องมีค่าของ prop เป็น `{ quantity: 10 }` ตามค่าที่ส่งมาจาก `ShoppingCart`

```js
(getUserInput) =>
  assert(
    (function () {
      const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
      return (
        mockedComponent.find('Items').props().quantity == 10 &&
        getUserInput('index')
          .replace(/ /g, '')
          .includes('<Itemsquantity={10}/>')
      );
    })()
  );
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
    return <Items />
    { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
  }
};
```

# --solutions--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
    return <Items quantity = {10} />
    { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
  }
};
```
