---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

เนื้อหาของแบบทดสอบที่ผ่านๆมาได้สอนพื้นฐานในการส่ง props ให้กับ child component ไปแล้ว  
แต่ถ้า child component ที่คุณส่ง props ไปนั้นเป็น ES6 class component แทนที่จะเป็น stateless functional component ล่ะ?  
ES6 class component จะเข้าถึง props ต่างออกไปเล็กน้อย

เวลาเราจะเรียกใช้ข้อมูลของ class component ภายในตัวเอง เราจะใช้คีย์เวิร์ด `this`  
ในการเข้าถึง props ภายใน class component เราแค่เพิ่มคำว่า `this` ข้างหน้าโค้ดที่ใช้เข้าถึง เช่น ถ้า ES6 class component มี prop ชื่อ `data` ก็จะต้องเขียนโค้ดเป็น `{this.props.data}` ใน JSX

# --instructions--

ให้เรนเดอร์ component `ReturnTempPassword` ใน parent component `ResetPassword` แล้วระบุ prop `tempPassword` ให้กับ `ReturnTempPassword` โดยกำหนดค่าเป็น string ที่มีความยาวอย่างน้อย 8 ตัวอักษร  
จากนั้นให้อ่านค่าของ prop `tempPassword` แล้วนำมาแสดงในแท็ก `strong` ที่อยู่ภายใน `ReturnTempPassword` อีกที เพื่อให้ user เห็นค่าของ `tempPassword` ที่เราตั้งไว้

# --hints--

component `ResetPassword` ต้องคืนค่ามาเป็น `div` ตัวเดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.children().type() === 'div';
  })()
);
```

child ตัวที่ 4 ใน `ResetPassword` ต้องเป็น `ReturnTempPassword`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return (
      mockedComponent.children().childAt(3).name() === 'ReturnTempPassword'
    );
  })()
);
```

`ReturnTempPassword` ต้องรับ prop ที่ชื่อ `tempPassword`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.find('ReturnTempPassword').props().tempPassword;
  })()
);
```

prop `tempPassword` ของ `ReturnTempPassword` ต้องเป็น string ที่มีความยาวอย่างน้อย 8 ตัวอักษร

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    const temp = mockedComponent.find('ReturnTempPassword').props()
      .tempPassword;
    return typeof temp === 'string' && temp.length >= 8;
  })()
);
```

`ReturnTempPassword` ต้องแสดงค่าของ prop `tempPassword` ไว้ในแท็ก `strong`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('ReturnTempPassword').props().tempPassword
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ResetPassword />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

          { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        </div>
    );
  }
};
```
