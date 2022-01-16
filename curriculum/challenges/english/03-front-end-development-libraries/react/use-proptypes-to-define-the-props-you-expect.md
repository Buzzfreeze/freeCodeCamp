---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
forumTopicId: 301419
dashedName: use-proptypes-to-define-the-props-you-expect
---

# --description--

React มีฟีเจอร์ที่ช่วยเราดูว่าประเภทของข้อมูลใน props ที่ส่งเข้ามาใน component ถูกต้องหรือไม่ 
เช่น แอปพลิเคชันของคุณทำการเรียก API เพื่อดึงข้อมูลที่คุณอยากได้เป็น array แล้วก็ส่งค่านั้นเข้ามาใน component โดยใช้ prop 
คุณสามารถตั้งค่า `propTypes` ใน component ของคุณเพื่อตรวจสอบว่าข้อมูลที่เข้ามาเป็น `array` หรือไม่ ซึ่งจะส่งคำเตือนออกมาเมื่อข้อมูลเป็นประเภทอื่น

การตั้งค่า `propTypes` ถ้ารู้ประเภทข้อมูลของ prop ล่วงหน้าถือว่าเป็นสิ่งที่ควรทำ 
คุณสามารถกำหนด property ของ `propTypes` ของ component ได้โดยใช้วิธีเดียวกับ `defaultProps` 
การตั้งค่า `propTypes` จะตรวจสอบว่า props ของคีย์ที่นั้นเป็นประเภทของข้อมูลที่ระบุหรือไม่
ตัวอย่างด้านล่างนี้จะเป็นกรณีที่เราต้องการให้ prop `handleClick` รับข้อมูลเป็น `function`:

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

ในตัวอย่างด้านบน `PropTypes.func` จะตรวจสอบว่า `handleClick` เป็นฟังก์ชันหรือไม่ ส่วนการเพิ่ม `isRequired` เป็นการบอก React ว่า `handleClick` เป็น property ที่จำเป็นสำหรับ component นั้น
คุณจะเห็นคำเตือนถ้าไม่ได้ระบุ prop นั้น 
แล้วคุุณอาจจะเห็นว่าเราใช้คำว่า `func` แทนคำว่า `function` ซึ่งในบรรดาประเภทข้อมูลพื้นฐานทั้ง 7 ประเภทของ JavaScript นั้น มีแค่ `function` และ `boolean` (เขียนเป็น `bool`) ที่เขียนโดยไม่ใช้ชื่อเต็ม
นอกจากประเภทข้อมูลพื้นฐานแล้ว ยังรองรับการตรวจสอบข้อมูลประเภทอื่นๆ อีกด้วย เช่น การตรวจสอบว่า prop เป็น React element หรือไม่
ลองอ่าน [เอกสารประกอบ](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) เพื่อดูว่ามีประเภทอะไรที่ใช้ได้บ้าง

**Note:** ตั้งแต่ React v15.5.0 เราต้อง import ตัว `PropTypes` แยกจากการ import React เช่น: `import PropTypes จาก 'prop-types';`

# --instructions--

ให้กำหนด `propTypes` สำหรับ component `Items` เพื่อให้จำเป็นต้องระบุ prop `quantity` และตรวจสอบว่าเป็นข้อมูลที่ส่งมาเป็น `number`

# --hints--

component `ShoppingCart` ต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('ShoppingCart').length === 1;
  })()
);
```

component `Items` ต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

`Items` ต้องใช้ `propTypes` เพื่อตรวจสอบว่าค่าของ `quantity` เป็น number จริงๆ

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('quantity:PropTypes.number.isRequired') &&
        noWhiteSpace.includes('Items.propTypes=')
      );
    })()
  );
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
  number: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<ShoppingCart />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// แก้ไขโค้ดใต้บรรทัดนี้

// แก้ไขโค้เหนือบรรทัดนี้

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```

# --solutions--

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// แก้ไขโค้ดใต้บรรทัดนี้
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// แก้ไขโค้เหนือบรรทัดนี้

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};
```
