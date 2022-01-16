---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

ที่ๆดีที่สุดในการกระกาศ event listener คือใน method `componentDidMount()`
React มีระบบ event ของตัวเอง (synthetic event) ที่จะครอบ event แบบเดิมของเบราว์เซอร์อยู่
การที่ React ใช้ระบบ event ของตัวเองจะทำให้ไม่ว่า user จะใช้เบราว์เซอร์ตัวไหน event ก็จะทำงานเหมือนกัน 

คุณได้ลองใช้ event handler ของ React มาบ้างแล้ว เช่นตัว `onClick()`
ระบบ event ของ React เหมาะสำหรับการใช้จัดการ DOM element ส่วนใหญ่ 
แต่ถ้าคุณต้องการที่จะใช้ event handler กับ object อย่าง document หรือ window คุณต้องทำโดยตรง

# --instructions--

ใน method `componentDidMount()` ให้ใช้ event listener กับ event ชื่อ `keydown` โดยให้ไปเรียกใช้ `handleKeyPress()` 
คุณต้องใช้ `document.addEventListener()` ซึ่งจะรับ argument แรกเป็นชื่อของ event (เขียนชื่อ event ใน `""` หรือ `''`) และรับ argument ที่สองเป็น callback function 

แล้วใน `componentWillUnmount()` ให้ลบ event listener ตัวที่เราเพิ่มไปออก โดยส่ง argument แบบเดิมให้ `document.removeEventListener()`
คุณควรใช้ lifecycle method ตัวนี้เพื่อล้างข้อมูลของ React component ก่อนที่เราจะลบ component ออก 
การลบ event listener ออก ก็เป็นส่วนหนึ่งของการล้างข้อมูลของ React component

# --hints--

`MyComponent` ต้องเรนเดอร์ `div` ที่ครอบแท็ก `h1` อยู่

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

ต้องใช้ event listener `keydown` กับ document ใน `componentDidMount`

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

event listener `keydown` ต้องถูกลบออกจาก document ใน `componentWillUnmount`


```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

เมื่อนำ component ไปใช้ใน DOM แล้ว การกด `enter` จะต้องเป็นการอัปเดต state และจะต้องแสดงข้อมูลออกมาในแท็ก `h1` 

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
};
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // แก้ไขโค้ดใต้บรรทัดนี้
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // แก้ไขโค้ดเหนือบรรทัดนี้
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    document.addEventListener('keydown', this.handleKeyPress);
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  componentWillUnmount() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    document.removeEventListener('keydown', this.handleKeyPress);
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```
