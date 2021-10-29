---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
forumTopicId: 301402
dashedName: pass-props-to-a-stateless-functional-component
---

# --description--

แบบทดสอบก่อนหน้านี้ครอบคลุมเกี่ยวกับการสร้างและเขียน JSX elements, functional components, และ ES6 style class components โดยส่วนใหญ่ใน React ด้วยพื้นฐานนี้ถึงเวลาที่จะดูคุณลักษณะอื่นที่พบบ่อยมากใน React: **props** ใน React คุณสามารถส่ง props หรือ properties ไปยัง child components ได้ สมมติว่าคุณมี `App` component ซึ่งเรนเดอร์ child component ชื่อ `Welcome` ซึ่งเป็น stateless functional component คุณสามารถส่ง `Welcome` กับ `user` property โดยการเขียนโค้ดว่า:

```jsx
<App>
  <Welcome user='Mark' />
</App>
```

คุณใช้ **HTML attributes ที่กำหนดเอง** ที่คุณสร้างขึ้นและรองรับโดย React เพื่อส่งผ่านไปยัง component ในกรณีนี้ property `user` ที่สร้างขึ้นจะถูกส่งไปยัง component `Welcome` เนื่องจาก `Welcome` เป็น stateless functional component จึงสามารถเข้าถึงค่านี้ได้ดังนี้:

You use **custom HTML attributes** created by you and supported by React to be passed to the component. In this case, the created property `user` is passed to the component `Welcome`. Since `Welcome` is a stateless functional component, it has access to this value like so:

```jsx
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

เป็นเรื่องปกติที่จะเรียกค่านี้ว่า `props` และเมื่อต้องจัดการกับ stateless functional components โดยทั่วไปถือว่ามันเป็น argument ของฟังก์ชันที่ return JSX คุณสามารถเข้าถึงค่าของ argument ในตัวของฟังก์ชันได้ และด้วย class components คุณจะเห็นว่าสิ่งนี้แตกต่างออกไปเล็กน้อย

# --instructions--

มี `Calendar` and `CurrentDate` components ใน code editor เมื่อทำการเรนเดอร์ `CurrentDate` จาก `Calendar` component ให้ส่งผ่าน property ของ `date` ที่กำหนดให้กับวันที่ปัจจุบันจาก object `Date` ของ JavaScript จากนั้นเข้าถึง `prop` นี้ใน `CurrentDate` component โดยแสดงค่าภายในแท็ก `p` โปรดทราบว่าสำหรับค่า `prop` ที่จะประมวลผลเป็น JavaScript จะต้องอยู่ในวงเล็บปีกกา เช่น `date={Date()}`

# --hints--

`Calendar` component ควร return `div` element อันเดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().type() === 'div';
  })()
);
```

child ลำดับที่ 2 ของ `Calendar` component ควรจะเป็น `CurrentDate` component 

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).name() === 'CurrentDate';
  })()
);
```

`CurrentDate` component ควรมี prop ชื่อ `date`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    return mockedComponent.children().childAt(1).props().date;
  })()
);
```

`date` prop ของ `CurrentDate` ควรมี string ที่เป็นข้อความอยู่

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Calendar));
    const prop = mockedComponent.children().childAt(1).props().date;
    return typeof prop === 'string' && prop.length > 0;
  })()
);
```

`date` prop ควรถูกสร้างโดยการเรียกใช้งาน `Date()`

```js
assert(/<CurrentDatedate={Date\(\)}\/>/.test(__helpers.removeWhiteSpace(code)));
```

`CurrentDate` component ควรเรนเดอร์ค่าจาก `date` prop ลงใน `p` tag

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
      { /* Change code below this line */ }
      <p>The current date is: </p>
      { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <CurrentDate />
        { /* Change code above this line */ }
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
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
