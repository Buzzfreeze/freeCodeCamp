---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

หนึ่งในหัวข้อที่สำคัญที่สุดใน React คือ `state' ซึ่งประกอบด้วยข้อมูลใดๆ ที่แอปพลิเคชันของคุณต้องทราบ ซึ่งสามารถเปลี่ยนแปลงได้เมื่อเวลาผ่านไป คุณต้องการให้แอปของคุณตอบสนองต่อการเปลี่ยนแปลง state และแสดงเป็น UI ที่อัปเดตเมื่อจำเป็น React นำเสนอโซลูชันที่ดีสำหรับการจัดการ state ของเว็บแอปพลิเคชันสมัยใหม่

คุณสร้าง state ใน React component โดยการประกาศ `state` property ใน component classใน `constructor` สิ่งนี้เริ่มต้น component ด้วย `state` เมื่อถูกสร้างขึ้น ต้องตั้งค่า `state` property เป็น `object` ของ JavaScript ประกาศตามโค้ดข้างล่างนี้:

```jsx
this.state = {

}
```

คุณสามารถเข้าถึง `state` object ได้ตลอดอายุของ component ของคุณ คุณสามารถอัปเดต  แสดงผลใน UI ของคุณ และส่งผ่านเป็น props ไปยัง child component ต่างๆ  `state` object อาจซับซ้อนหรือเรียบง่ายขึ้นอยู่กับความต้องการของคุณ โปรดทราบว่าคุณต้องสร้าง class componentโดยขยาย `React.Component` เพื่อสร้าง `state` เช่นนี้

# --instructions--

มี component ใน code editor ที่พยายามแสดง `name` property จาก `state` ของมัน อย่างไรก็ตาม ไม่มี `state` ที่กำหนดไว้ เริ่มต้น component ด้วย `state` ใน `constructor` และกำหนดชื่อให้กับ `name` property

# --hints--

`StatefulComponent` ควรมีอยู่และเรนเดอร์ด้วย

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return mockedComponent.find('StatefulComponent').length === 1;
  })()
);
```

`StatefulComponent` ควรเรนเดอร์ `div` และ `h1` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

State ของ `StatefulComponent` ควรจะเริ่มต้นด้วย `name` property ที่มีค่าเป็น string

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' && typeof initialState.name === 'string'
    );
  })()
);
```

property `name`ใน state ของ `StatefulComponent` ควรจะต้องเรนเดอร์ใน `h1` element

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return mockedComponent.find('h1').text() === initialState.name;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```
