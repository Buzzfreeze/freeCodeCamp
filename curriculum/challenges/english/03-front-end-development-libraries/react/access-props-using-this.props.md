---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

แบบทดสอบหลายบทที่ผ่านมาได้มีเนื้อหาครอบคลุมพื้นฐานในการส่งผ่าน props ต่างๆ ให้กับ child component แต่ถ้า child component ที่คุณส่งผ่าน props นั้นเป็น ES6 class component แทนที่จะเป็น stateless functional component หละ? ES6 class component ใช้รูปแบบที่แตกต่างกันเล็กน้อยในการเข้าถึง props ต่างๆ

เมื่อใดก็ตามที่คุณอ้างถึง class component ภายในตัวมันเอง คุณสามารถใช้คีย์เวิร์ด `this` 
เพื่อที่จะเข้าถึง props ภายใน class component คุณเพียงแค่เพิ่มคำว่า `this` ข้างหน้าโค้ดที่คุณใช้เข้าถึง ตัวอย่างเช่น ถ้า ES6 class component มี prop ชื่อว่า `data` คุณจะต้องเขียนโค้ดว่า `{this.props.data}` ใน JSX

# --instructions--

แสดง instance ของ `ReturnTempPassword` component ใน parent component `ResetPassword` แล้วให้เพิ่ม prop `tempPassword` แก่ `ReturnTempPassword`
และกำหนดค่าของ string ที่มีความยาวอย่างน้อย 8 ตัวอักษร ให้เข้าถึง `tempPassword` prop ภายใน `strong` tag ที่อยู่ภายใน `ReturnTempPassword` อีกที เพื่อให้มั่นใจว่า user จะเห็นรหัสผ่านชั่วคราวได้

# --hints--

`ResetPassword` component ควรจะ return `div` element เดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Child ตำแหน่งที่ 4 ของ `ResetPassword` ควรจะต้องเป็น `ReturnTempPassword` component

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

`ReturnTempPassword` component ควรจะต้องมี prop ที่เรียกว่า `tempPassword`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.find('ReturnTempPassword').props().tempPassword;
  })()
);
```

`tempPassword` prop ของ `ReturnTempPassword` ควรที่จะมีค่าเท่ากับ string ของตัวอักษร 8 ตัว

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

`ReturnTempPassword` component ควรที่จะแสดงรหัสผ่านที่คุณสร้างขึ้นเป็น `tempPassword` prop ภายใน `strong` tags

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
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* Change code above this line */ }
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
          { /* Change code below this line */ }

          { /* Change code above this line */ }
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
          { /* Change code below this line */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* Change code above this line */ }
        </div>
    );
  }
};
```
