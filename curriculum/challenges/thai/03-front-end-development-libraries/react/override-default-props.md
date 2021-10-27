---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
forumTopicId: 301399
dashedName: override-default-props
---

# --description--

ความสามารถในการตั้งค่า props เริ่มต้นเป็นคุณสมบัติที่มีประโยชน์ใน React วิธีการตั้งค่า props เริ่มต้นคือการตั้งค่า prop สำหรับ component

# --instructions--

ตอนนี้คอมโพเนนต์ "ShoppingCart" เรนเดอร์ในส่วนของ child component ชื่อว่า `Items` ซึ่ง `Items` component นี้มี prop เริ่มต้นชื่อว่า `quantity` ที่ตั้งค่าเป็นจำนวนเต็ม `0` คุณสามารถแทนที่ prop เริ่มต้นโดยส่งค่า `10` ให้  `quantity`

**Note:** โปรดจำไว้ว่า syntax ในการเพิ่ม prop ให้กัย component จะคล้ายกับวิธีที่คุณเพิ่ม HTML attribute อย่างไรก็ตามเนื่องจากค่าของ `quantity` เป็นจำนวนเต็ม ค่านั้นจะไม่อยู่ในเครื่องหมายคำพูด แต่ควรอยู่ในวงเล็บปีกกา ตัวอย่างเช่น `{100}` Syntax นี้บอกให้ JSX ตีความค่าภายในเครื่องหมายปีกกาโดยตรงเป็น JavaScript

# --hints--

component `ShoppingCart` จะต้องเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

component `Items` จะต้องเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

`Items` component ควรมี prop เป็น `{ quantity: 10 }` ที่ถูกส่งต่อมาจาก `ShoppingCart` component

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
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
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
    { /* Change code below this line */ }
    return <Items quantity = {10} />
    { /* Change code above this line */ }
  }
};
```
