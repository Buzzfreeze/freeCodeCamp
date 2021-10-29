---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

ในบางครั้งนักพัฒนาเว็บส่วนใหญ่จำเป็นต้องเรียกจุดปลาย API เพื่อดึงข้อมูล หากคุณกำลังทำงานกับ React สิ่งสำคัญคือต้องรู้ว่าต้องทำการนี้ที่ไหน

แนวปฏิบัติที่ดีที่สุดเกี่ยวกับ React คือการเรียกใช้งาน API หรือการเรียกใช้งานใดๆ ไปยังเซิร์ฟเวอร์ของคุณใน lifecycle method `componentDidMount()` ซึ่ง method นี้ถูกเรียกใช้งานหลังจากติดตั้ง component กับ DOM การเรียกใช้งานใดๆ ของ `setState()` ในที่นี่จะสั่งในเรนเดอร์ component ของคุณอีกครั้ง เมื่อคุณเรียกใช้ API ใน method นี้ และตั้งค่า state ของคุณด้วยข้อมูลที่ API return มา มันจะสั่งอัปเดตโดยอัตโนมัติเมื่อคุณได้รับข้อมูลมา

# --instructions--

มีการเรียกใช้ API จำลองใน `componentDidMount()` มันตั้งค่า state หลังจาก 2.5 วินาทีเพื่อจำลองการเรียกใช้เซิร์ฟเวอร์เพื่อดึงข้อมูล ตัวอย่างนี้ขอ users ที่ใช้งานอยู่ทั้งหมดในปัจจุบันบนเว็บไซต์ ใน render method ให้เรนเดอร์ค่าของ `activeUsers` ใน `h1` หลังข้อความ `Active Users:` ลองดูว่าเกิดอะไรขึ้นในพรีวิว และอย่าลังเลที่จะเปลี่ยนระยะเวลา timeout เพื่อดูเอฟเฟกต์ต่างๆ

# --hints--

`MyComponent` ควรเรนเดอร `div` element ที่ครอบ `h1` tag

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

Component state ควรถูกอัปเดตด้วยระยะเวลา timeout function ใน `componentDidMount`

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

`h1` tag ควรเรนเดอร์ค่า `activeUsers` จาก state ของ `MyComponent`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
