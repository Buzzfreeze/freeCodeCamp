---
id: 5a24c314108439a4d403616d
title: Use PropTypes to Define the Props You Expect
challengeType: 6
forumTopicId: 301419
dashedName: use-proptypes-to-define-the-props-you-expect
---

# --description--

React ให้คุณสมบัติการตรวจสอบ type ที่มีประโยชน์เพื่อตรวจสอบว่า components ได้รับ props type ที่ถูกต้องหรือไม่ ตัวอย่างเช่น แอปพลิเคชันของคุณทำการเรียก API เพื่อดึงข้อมูลที่คุณคาดว่าจะอยู่ใน array จากนั้นจึงส่งผ่านไปยัง component ในฐานะ prop คุณสามารถตั้งค่า `propTypes` บน component ของคุณเพื่อให้ข้อมูลเป็น type  `array` ซึ่งจะส่งคำเตือนที่เป็นประโยชน์เมื่อข้อมูลเป็น type อื่น

ถือเป็นแนวทางปฏิบัติที่ดีที่สุดในการตั้งค่า `propTypes` เมื่อคุณทราบ type ของ prop ก่อนแล้ว คุณสามารถกำหนดคุณสมบัติ `propTypes` สำหรับ component ในลักษณะเดียวกับที่คุณกำหนด `defaultProps` การทำเช่นนี้จะตรวจสอบว่า props ของคีย์ที่กำหนดมีอยู่ใน type ที่กำหนด ข้างล่างนี้คือตัวอย่าง หากต้องการ type  `function` สำหรับ prop ที่เรียกว่า `handleClick`:

```js
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

ในตัวอย่างข้างต้น ส่วนของ `PropTypes.func` จะตรวจสอบว่า `handleClick` เป็นฟังก์ชัน การเพิ่ม `isRequired` เป็นการบอก React ว่า `handleClick` เป็น property ที่จำเป็นสำหรับ component นั้น คุณจะเห็นคำเตือนหากไม่มี prop นั้น สังเกตด้วยว่า `func` แทน `function` ในบรรดา type ดั้งเดิมทั้ง 7  type ของ JavaScript นั้น `function` และ `boolean` (เขียนเป็น `bool`) เป็นเพียงสอง type ที่ใช้การสะกดคำที่ไม่เหมือนปกติ นอกจาก type ดั้งเดิมแล้วยังมี type อื่นๆ อีกด้วย คุณสามารถตรวจสอบว่า prop เป็น React element ได้ที่[เอกสารประกอบ](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)สำหรับตัวเลือกทั้งหมด

**Note:** ตั้งแต่ React v15.5.0 `PropTypes` จะถูกนำเข้าโดยอิสระจาก React ดังเช่น: `import PropTypes จาก 'prop-types';`

# --instructions--

ให้กำหนด `propTypes` สำหรับ `Items` component ที่ต้องการ `quantity` เป็น prop และตรวจสอบว่าเป็น type `number`

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

`Items` component ควรเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart));
    return mockedComponent.find('Items').length === 1;
  })()
);
```

`Items` component ควรมี `propTypes` ในการตรวจสอบเพื่อให้แน่ใจว่าต้องให้ค่าของ `quantity` เป็น number

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

// Change code below this line

// Change code above this line

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

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

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
