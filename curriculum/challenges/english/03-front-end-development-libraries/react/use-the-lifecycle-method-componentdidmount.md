---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

คนเขียนเว็บส่วนใหญ่จะต้องเรียกใช้ API เพื่อดึงข้อมูล ถ้าคุณใช้ React คุณต้องรู้ว่าจะต้องเรียก API จากที่ไหน

ถ้าใช้ React วิธีที่ดีที่สุดในการเรียก API (หรือเรียกข้อมูลจากเซิร์ฟเวอร์ด้วยวิธีอื่น) คือต้องเรียกจาก lifecycle method ชื่อ `componentDidMount()` 

method นี้จะถูกเรียกใช้หลังจากที่ component เชื่อมต่อกับ DOM แล้ว
การใช้ `setState()` ใน method นี้จะทำให้ component ของคุณเรนเดอร์ใหม่อีกครั้ง 
ถ้าเรียกใช้ API ใน method นี้ และเก็บค่าที่ API ส่งมาให้ลงใน state จะทำให้ UI อัปเดททันทีเมื่อ API ส่งค่ากลับมา

# --instructions--

ใน `componentDidMount()` เราได้เขียนการเรียกใช้ API แบบปลอมๆเอาไว้ให้แล้ว 
ซึ่งจะทำการเก็บค่าลง state เมื่อเวลาผ่านไป 2.5 วินาที เพื่อจำลองการดึงข้อมูลจากเซิร์ฟเวอร์ 
ตัวอย่างนี้ดึงข้อมูลจำนวน user ที่ใช้งานอยู่ทั้งหมดบนเว็บไซต์ 

ใน method `render` ให้แสดงค่าของ `activeUsers` ใน `h1` หลังข้อความ `Active Users:` และลองดูว่าเกิดอะไรขึ้นในหน้าเว็บ และให้ลองเปลี่ยนค่าของ timeout ดู จะใด้เห็นว่าเกิดอะไรขึ้น

# --hints--

`MyComponent` ต้องเรนเดอร์ `div` ที่ครอบแท็ก `h1` อยู่

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

ต้องอัปเดต state ของ component โดยใช้ฟังก์ชัน setTimeout ใน `componentDidMount`

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

ในแท็ก `h1` ต้องแสดงค่าของ `activeUsers` โดยดึงค่ามาจาก state ของ `MyComponent`

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
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}
        <h1>Active Users: </h1>
        {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
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
