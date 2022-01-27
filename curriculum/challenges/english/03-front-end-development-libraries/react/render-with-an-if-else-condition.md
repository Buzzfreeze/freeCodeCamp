---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

การใช้ JavaScript อีกแบบหนึ่งคือ การใช้เพื่อควบคุมสิ่งที่จะเรนเดอร์ออกมา โดยใช้เงื่อนไข
ถ้าเงื่อนไขเป็น `true` จะเรนเดอร์ออกมาแบบหนึ่ง ถ้าเป็น `false` ก็เป็นอีกแบบหนึ่ง 
วิธีนี้จะใช้แค่คำสั่ง `if/else` แบบปกติใน method `render()` ของ React component

# --instructions--

MyComponent เก็บค่า `boolean` ใน property `display` ของ state 
ค่านี้จะใช้เพื่อดูว่าต้องแสดง element ไหนใน UI โดยจะมี `button` ที่ใช้เปลี่ยนค่านี้ใน state 
ในตอนนี้ component จะเรนเดอร์ UI เดิมทุกครั้ง 

ให้เขียน method `render()` ใหม่โดยใช้ `if/else` โดยถ้า `display` เป็น `true` คุณจะแสดง JSX ตัวปัจจุบัน แต่ถ้าเป็น `false` ให้แสดง JSX ที่ไม่มี `h1`

**Note:** ในแบบทดสอบนี้คุณต้องเขียน `if/else` แบบเต็ม เพื่อให้ test ผ่าน การใช้ ternary operator จะทำให้ test ไม่ผ่าน
(Ternary Operator คือ syntax นี้ `condition? true: false`)

# --hints--

ต้องมี `MyComponent` และต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

เมื่อ `display` ถูกมีค่าเป็น `true` จะต้องเรนเดอร์ `div`, `button` และ `h1`

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 2 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 1
  );
};
```

เมื่อ `display` ถูกตั้งค่าเป็น `false` จะต้องเรนเดอร์แค่ `div` และ `button`

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 0
  );
};
```

ใน method render ต้องใช้คำสั่ง `if/else` เพื่อตรวจสอบเงื่อนไขของ `this.state.display`

```js
(getUserInput) =>
  assert(
    getUserInput('index').includes('if') &&
      getUserInput('index').includes('else')
  );
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```
