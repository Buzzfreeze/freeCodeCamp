---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

เมื่อคุณกำหนดสถานะเริ่มต้นของ component แล้ว คุณสามารถแสดงส่วนใดของมันก็ได้ใน UI ที่ถูกเรนเดอร์ หาก component เป็นแบบ stateful ก็จะสามารถเข้าถึงข้อมูลใน `state` ใน `render()` method ได้เสมอ คุณสามารถเข้าถึงข้อมูลด้วย `this.state`

หากคุณต้องการเข้าถึงค่า state ภายใน `return` ของ render method คุณต้องใส่ค่าไว้ในวงเล็บปีกกา

`state` เป็นหนึ่งในคุณสมบัติที่ทรงพลังที่สุดของ components ใน React ช่วยให้คุณติดตามข้อมูลสำคัญในแอปของคุณและเรนเดอร์ UI เพื่อตอบสนองต่อการเปลี่ยนแปลงในข้อมูลนี้ หากข้อมูลของคุณเปลี่ยนแปลง UI ของคุณจะเปลี่ยนไป React ใช้สิ่งที่เรียกว่า Virtual DOM เพื่อติดตามการเปลี่ยนแปลงในเบื้องหลัง เมื่อข้อมูล state อัปเดต จะเกิดการเรนเดอร์ components อีกครั้งโดยใช้ข้อมูลนั้น ซึ่งรวมถึง child components ที่ได้รับข้อมูลเป็น props แม้ว่า React จะอัปเดต DOM จริง แต่เฉพาะเมื่อจำเป็นเท่านั้น ซึ่งหมายความว่าคุณไม่ต้องกังวลกับการเปลี่ยน DOM คุณเพียงแค่ประกาศว่า UI ควรมีลักษณะอย่างไร

โปรดทราบว่าหากคุณกำหนดให้ component เป็นแบบ stateful ก็จะไม่มี component อื่นใดที่ทราบ `state` ของมัน ซึ่ง `state` ของมันจะถูกห่อหุ้มไว้อย่างสมบูรณ์ หรือเฉพาะกับ component นั้น เว้นแต่คุณจะส่งข้อมูล state ไปยัง child component เป็น `props` แนวคิดเรื่อง `state` ที่ห่อหุ้มไว้นี้มีความสำคัญมาก เนื่องจากมันช่วยให้คุณสามารถเขียน logic บางอย่าง จากนั้นจึงบรรจุ logic นั้นและแยกไว้ในที่เดียวในโค้ดของคุณ

# --instructions--

ใน code editor มี `MyComponent` เป็น component แบบ stateful กำหนดแท็ก `h1` ใน render method ของ component ซึ่งเรนเดอร์ค่าของ `name` จาก state ของ component

**Note:** `h1` ควรเรนเดอร์ค่าจาก `state` ที่เดียวเท่านั้น ใน JSX นั้นโค้ดใดก็ตามที่คุณเขียนไว้ในวงเล็บปีกกา `{ }` จะถือว่าเป็น JavaScript ดังนั้นเพื่อจะเข้าถึงค่าจาก `state` เพียงแค่นำโค้ดอ้างอิงไปใส่ไว้ในวงเล็บปีกกา

# --hints--

`MyComponent` ควรมี key `name` ที่มีค่าเป็น `freeCodeCamp` อยู่ใน state ของมัน

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` ควรเรนเดอร์ `h1` header อยู่ภายใน `div` หนึ่ง

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

`h1` ที่ถูกเรนเดอร์ควรมีแค่ข้อความที่ถูกเรนเดอร์จาก component's state

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
