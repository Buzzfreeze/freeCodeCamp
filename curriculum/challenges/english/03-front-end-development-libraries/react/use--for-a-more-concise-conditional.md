---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

คำสั่ง `if/else` ได้ผลในแบบทดสอบที่ผ่านมาก แต่มีวิธีที่กระชับกว่าในการบรรลุผลลัพธ์แบบเดียวกัน ลองนึกภาพว่าคุณกำลังติดตามหลายเงื่อนไขใน component หนึ่ง และคุณต้องการให้ elements ที่แตกต่างกันนั้นเรนเดอร์ตามแต่ละเงื่อนไขเหล่านี้ หากคุณเขียนคำสั่ง `else if` จำนวนมากเพื่อ return  UI ที่แตกต่างกันเล็กน้อย คุณอาจเขียนโค้ดซ้ำๆ ซึ่งจะทำให้เกิดข้อผิดพลาดได้ คุณสามารถใช้ logical operator `&&` เพื่อดำเนินการตรรกะตามเงื่อนไขในลักษณะที่กระชับยิ่งขึ้นแทน สิ่งนี้เป็นไปได้เนื่องจากคุณต้องการตรวจสอบว่าเงื่อนไขเป็น `true` หรือไม่ และหากเป็น ให้ return มาร์กอัปบางส่วน ดูตัวอย่างข้างล่าง:

```jsx
{condition && <p>markup</p>}
```

หาก `condition` เป็น `true` มาร์กอัปจะถูก return แต่หากเงื่อนไขเป็น `false` การดำเนินการจะ return `false` ทันทีหลังจากประเมิน `condition` และไม่ return สิ่งใด คุณสามารถรวมคำสั่งเหล่านี้โดยตรงใน JSX และ string หลายเงื่อนไขเข้าด้วยกันโดยเขียน `&&` หลังแต่ละรายการ วิธีนี้ช่วยให้คุณจัดการกับตรรกะแบบมีเงื่อนไขที่ซับซ้อนมากขึ้นใน `render()` method โดยไม่ต้องเขียนโค้ดซ้ำหลายครั้ง

# --instructions--

มาลองแก้ไขตัวอย่างก่อนหน้านี้อีกครั้ง จะให้ `h1` จะเรนเดอร์ก็ต่อเมื่อ `display` เป็น `true` แต่ใช้ตัวดำเนินการตรรกะ `&&` แทนคำสั่ง `if/else`

# --hints--

`MyComponent` ควรมีอยู่และเรนเดอร์

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

เมื่อ `display` ถูกตั้งค่าเป็น `true` ให้เรนเดอร์ `div`, `button` และ `h1`

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

เมื่อ `display` ถูกตั้งค่าเป็น `false` ให้เรนเดอร์เพียงแค่ `div`และ `button`

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

render method ควรใช้ `&&` logical operator เพื่อเช็คเงื่อนไขของ `this.state.display`

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
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```
