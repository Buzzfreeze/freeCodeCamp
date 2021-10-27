---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

`componentDidMount()` method เป็น method ที่ดีที่สุดที่จะสามารถแนบ event listener ที่คุณต้องการเพิ่มเพื่อฟังก์ชันเฉพาะ 
React นั้นมีระบบ event สังเคราะห์ที่ล้อมรอบระบบ event ดั้งเดิมที่แสดงผลในเบราว์เซอร์ สิ่งนี้หมายถึงระบบ event สังเคราะห์มีการทำงานที่เหมือนกันทุกประการโดยที่ไม่ต้องคำนึงถึงเบราว์เซอร์ของ user แม้ว่า ระบบ event ดั้งเดิมจะทำงานแตกต่างกันไปในแต่ละเบราว์เซอร์ก็ตาม

คุณได้ลองใช้ตัวจัดการ event สังเคราะห์มาบ้างแล้ว เช่น `onClick()` ระบบ event สังเคราะห์ของ React ใช้งานได้ยอดเยี่ยมสำหรับการโต้ตอบส่วนมากบน DOM element ที่คุณจะต้องจัดการ อย่างไรก็ตาม หากคุณต้องการที่จะแนบตัวจัดการ event ไปกับ document หรือ window objects คุณต้องทำสิ่งเหล่านี้โดยตรง

# --instructions--

แนบ event listener ใน `componentDidMount()` method สำหรับ `keydown` event และทำให้ event นี้ไปทำให้ callback `handleKeyPress()` ทำงาน คุณสามารถใช้ `document.addEventListener()` ซึ่งรับ event (ในเครื่องหมายคำพูด) เป็น argument แรก และ callback เป็น argument ที่สอง แนวทางปฏิบัติที่ดีสำหรับการใช้ lifecycle method เพื่อล้างข้อมูล React component ก่อนที่จะถูกถอนและทำลาย การนำ event listener ออกเป็นตัวอย่างนึงของการดำเนินการล้างข้อมูลดังกล่าว

# --hints--

`MyComponent` ควรต้องแสดงผลเป็น `div` element ที่ครอบ `h1` tag

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

`keydown` listener ควรจะต้องถูกแนบไปกับ document ใน `componentDidMount`

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

`keydown` listener จะต้องถูกลบจาก document ใน `componentWillUnmount`


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

เมื่อติดตั้ง component แล้ว การกด `enter` จะต้องเป็นการอัปเดตสถานะของมัน และ `h1` tag ที่แสดงผล

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
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
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
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
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
