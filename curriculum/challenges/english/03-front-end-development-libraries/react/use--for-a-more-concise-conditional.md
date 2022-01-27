---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

คำสั่ง `if/else` ใช้ได้ในแบบทดสอบที่แล้ว แต่ก็มีวิธีที่สั้นกว่าอยู่ด้วย 

ลองนึกภาพว่าคุณต้องตรวจสอบหลายเงื่อนไขใน component ตัวหนึ่ง และคุณแสดง element ต่างกันตามเงื่อนไขเหล่านี้ ถ้าคุณเขียน `else if` หลายๆตัวแค่เพื่อแสดงผล UI ที่ต่างกันแค่เล็กน้อย คุณจะต้องเขียนโค้ดเดิมซ้ำๆ ซึ่งจะทำให้โอกาสผิดพลาดสูงขึ้น 
แทนที่จะเขียนแบบนั้น คุณจะใช้ logical operator `&&` แทนได้ เพื่อให้การตรวจสอบเงื่อนไขสั้นลง 
เราจะใช้วิธีนี้ถ้าเราจะเช็คว่าถ้าเงื่อนไขเป็น `true` ให้แสดงผล element

ลองดูตัวอย่างข้างล่าง:

```jsx
{condition && <p>markup</p>}
```

ตามตัวอย่างด้านบน ถ้า `condition` เป็น `true` จะคืนค่า `<p>markup</p>` ออกมา แต่ถ้าเงื่อนไขเป็น `false` ก็จะไม่คืนค่าออกมา 

คุณเขียนเงี่อนไขนี้ได้โดยตรงใน JSX และสามารถเชื่อมเงื่อนไขหลายๆตัวได้โดยใช้ `&&` ต่อหลังเงื่อนไข  
วิธีนี้จะช่วยให้คุณจัดการ logic ที่ซับซ้อนได้ใน method `render()` โดยไม่ต้องเขียนโค้ดซ้ำหลายครั้ง

# --instructions--

มาลองเปลี่ยนแบบทดสอบที่แล้วกัน โดยให้ `h1` เรนเดอร์เมื่อ `display` เป็น `true` แต่คราวนี้เราจะใช้ `&&` แทนคำสั่ง `if/else`

# --hints--

ต้องมี `MyComponent` และต้องเรนเดอร์ได้

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

เมื่อ `display` ถูกมีค่าเป็น `true` ให้เรนเดอร์ `div`, `button` และ `h1`

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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
  );
};
```

เมื่อ `display` ถูกมีค่าเป็น `false` ให้เรนเดอร์แค่ `div`และ `button`

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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

method render ต้องใช้ `&&` เพื่อเช็คเงื่อนไขของ `this.state.display`

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
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
    this.setState(state => ({
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
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // แก้ไขโค้ดใต้บรรทัดนี้
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
