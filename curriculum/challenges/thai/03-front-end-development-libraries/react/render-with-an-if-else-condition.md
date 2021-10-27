---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

การประยุกต์ใช้งานอื่นๆ ของการใช้ JavaScript เพื่อควบคุมมุมมองที่เรนเดอร์ของคุณคือการผูก elements ที่ถูกเรนเดอร์กับเงื่อนไข เมื่อเงื่อนไขเป็นจริงจะเรนเดอร์มุมมองหนึ่ง เมื่อมันผิดก็เป็นมุมมองที่ต่างออกไป คุณสามารถทำได้โดยใช้คำสั่ง `if/else` มาตรฐานในเมธอด `render()` ของ React component

# --instructions--

MyComponent มี `boolean` ใน state ของมัน ซึ่งจะติดตามว่าคุณต้องการแสดง element บางอย่างใน UI หรือไม่ โดยมี `button` ที่จะคอยสลับ state ของค่านี้ ตอนนี้มันจะเรนเดอร์ UI เดิมทุกครั้ง ให้เขียน`render()` method ใหม่ด้วยคำสั่ง `if/else` เพื่อที่ว่าถ้า `display` เป็น `true` คุณจะreturn ค่ามาร์กอัปปัจจุบัน หรือไม่ก็ให้ return มาร์กอัปโดยไม่มี `h1` element เมื่อเป็น `false`

**Note:** คุณต้องเขียน `if/else` ให้ผ่าน test การใช้ ternary operator จะทำให้ test ไม่ผ่านในแบบทดสอบนี้

# --hints--

`MyComponent` ควรมีและเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

เมื่อ `display` ถูกตั้งค่าเป็น `true` จะต้องเรนเดอร์ `div`, `button` และ `h1`

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

ใน render method ควรใช้คำสั่ง `if/else` เพื่อตรวจสอบเงื่อนไขของ `this.state.display`

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
    // Change code below this line

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
    // Change code below this line
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
