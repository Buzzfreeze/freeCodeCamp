---
id: 5a24c314108439a4d403616b
title: Use Default Props
challengeType: 6
forumTopicId: 301418
dashedName: use-default-props
---

# --description--

React ให้เราตั้งค่า default props ได้ด้วย 
โดย default props คือค่าที่จะเอามาใช้ถ้าเราไม่ได้ระบุ prop นั้นให้ตอนนำ component มาใช้  
เช่น ถ้าคุณประกาศ `MyComponent.defaultProps = { location: 'San Francisco' }` โค้ดด้านบนแปลว่า ถ้าคุณไม่ได้ส่งค่า prop ที่ชื่อ `location` ไปให้กับ component ตัว `MyComponent` ก็จะมีค่าของ prop ที่ชื่อ `location` เป็น `San Francisco`  
React จะใช้ default props ถ้าเราไม่ได้ส่งค่า prop เข้าไป แต่ถ้าเราส่ง `null` เข้าไป ค่าของ props นั้นจะเป็น `null` แทน

# --instructions--

code editor จะมี component ชื่อ `ShoppingCart` อยู่ 

ให้คุณกำหนดค่าของ default props ให้กับ component นี้ โดยให้ property ชื่อ `items` มีค่าเป็น `0`

# --hints--

ต้องเรนเดอร์ `ShoppingCart` ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

`ShoppingCart` ต้องมี default props เป็น `{ items: 0 }`

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
// แก้ไขโค้ดใต้บรรทัดนี้
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

// แก้ไขโค้ดใต้บรรทัดนี้
ShoppingCart.defaultProps = {
  items: 0
}
```
