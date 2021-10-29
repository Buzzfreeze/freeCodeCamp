---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React ยังมีตัวเลือกในการตั้งค่า props เริ่มต้นอีกด้วย คุณสามารถกำหนด props เริ่มต้นให้กับ component เป็น property บน component เองได้ และ React จะกำหนด prop เริ่มต้นหากจำเป็น วิธีนี้ช่วยให้คุณระบุได้ว่าค่า prop ควรเป็นเท่าใดหากไม่มีการระบุค่าไว้อย่างชัดเจน ตัวอย่างเช่น หากคุณประกาศ `MyComponent.defaultProps = { location: 'San Francisco' }` แสดงว่าคุณได้กำหนดตำแหน่ง prop ที่ตั้งค่าเป็น string `San Francisco` เว้นแต่คุณจะระบุเป็นอย่างอื่น React จะกำหนด props เริ่มต้นหาก props ไม่ได้ถูกกำหนดไว้ แต่ถ้าคุณส่งค่า `null` เป็นค่าสำหรับ prop ค่านั้นจะยังคงเป็น `null`

# --instructions--

code editor ได้แสดง `ShoppingCart` component ให้กำหนด props เริ่มต้นใน component นี้ซึ่งระบุ prop `items` ด้วยค่า `0`

# --hints--

`ShoppingCart` component ควรเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

`ShoppingCart` component ควรมี prop เริ่มต้นเป็น `{ items: 0 }`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    mockedComponent.setProps({ items: undefined });
    return mockedComponent.find('ShoppingCart').props().items === 0;
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
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
```

# --solutions--

```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
}
```
