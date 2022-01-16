---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

ที่ผ่านมาเราได้เรียนเรื่องการสร้างและเขียน JSX element, functional component, และ ES6 class component ใน React ไปแล้ว
พอเรามีพื้นฐานเรื่องพวกนี้แล้ว ก็ได้เวลาเรียนเรื่องต่อไปที่สำคัญใน React ซึ่งก็คือ **props** 
ใน React เราสามารถส่ง props (หรือ properties) ไปยัง child component ได้ด้วย
สมมติว่าเรามี component `App` ซึ่งเรนเดอร์ child component ชื่อ `Welcome` ที่เป็น stateless functional component 
เราจะส่ง property ชื่อ `user` ไปให้ `Welcome` ได้ตามโค้ดนี้:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

เราจะใช้ **HTML attribute ที่เราตั้งเอง** เพื่อส่งค่าผ่านไปยัง child component 
ในกรณีนี้ property ชื่อ `user` ที่เราสร้างขึ้นจะถูกส่งไปยัง `Welcome` แล้ว และเพราะว่า `Welcome` เป็น stateless functional component จึงสามารถเข้าถึงค่านี้ได้ตามวิธีนี้:


```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

ตามปกติแล้วทุกคนจะเรียกค่านี้ว่า `props` และเวลาที่เอาไปใช้กับ stateless functional component จะถือว่า `props` นี้เป็น argument ของฟังก์ชันที่คืนค่าออกมาเป็น JSX 
คุณสามารถเข้าถึงค่าของ argument ในฟังก์ชันได้ แต่ถ้าใช้ class component การใช้ค่านี้จะต่างออกไปเล็กน้อย

# --instructions--

เราได้เขียน component ชื่อ `Calendar` และ `CurrentDate` ใน code editor ให้แล้ว
เมื่อเรนเดอร์ `CurrentDate` ใน `Calendar` ให้ส่ง property ชื่อ `date` (ให้มีค่าเป็น `new Date()`) ไปยัง `CurrentDate` ด้วย
จากนั้นให้ `CurrentDate` อ่านค่าตัวนี้จาก `props` และเอาค่าไปใส่ในแท็ก `p` 
การส่ง JavaScript เข้าไปใน `props` จะต้องอยู่ในวงเล็บปีกกา เช่น `date={Date()}`

# --hints--

component `Calendar` ต้องคืนค่าออกมาเป็น `div` อันเดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

child ตัวที่สองของ `Calendar` ต้องเป็น `CurrentDate`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

`CurrentDate` ต้องรับ property ชื่อ `date`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).props().date;
  })()
);
```

property `date` ใน `CurrentDate` ต้องมีค่าเป็น string

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    const prop = mockedComponent.children().childAt(1).props().date;
    return typeof prop === 'string' && prop.length > 0;
  })()
);
```

ต้องส่งค่าเข้าไปใน property `date` โดยใช้ `Date()`

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

`CurrentDate` ต้องอ่านค่าจาก property `date` แล้วนำไปเขียนลงในแท็ก `p`

```js
let date = 'dummy date';
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(CurrentDate, { date })
    );
    return mockedComponent.find('p').html().includes(date);
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Calendar />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
      <p>The current date is: </p>
      { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <CurrentDate />
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
      <p>The current date is: {props.date}</p>
      { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <CurrentDate date={Date()} />
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```
