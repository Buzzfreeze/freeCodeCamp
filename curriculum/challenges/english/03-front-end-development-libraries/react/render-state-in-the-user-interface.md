---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

เมื่อคุณสร้าง `state` เริ่มต้นของ component แล้ว คุณจะดึงไปแสดงใน UI ส่วนไหนก็ได้ที่ถูกเรนเดอร์ 
ถ้า component เป็นแบบ stateful ก็จะเข้าถึง `state` ใน method `render()` ได้เสมอ โดยจะเข้าถึงได้ด้วยการใช้ `this.state`

ถ้าต้องการเข้าถึง `state` ใน `return` ของ method `render()` จะต้องใส่ `state` ไว้ในวงเล็บปีกกา

`state` เป็นหนึ่งในฟีเจอร์ที่มีประโยชน์ที่สุดของ component ใน React 
เพราะว่า `state` ทำให้คุณเห็นการเปลี่ยนแปลงของข้อมูล และเปลี่ยน UI ได้ตามข้อมูลที่เปลี่ยนไป 
ถ้าข้อมูลเปลี่ยน UI ก็จะเปลี่ยน  
React ใช้สิ่งที่เรียกว่า Virtual DOM เพื่อตรวจจับการเปลี่ยนแปลงอยู่เบื้องหลัง 
เมื่อข้อมูล state เปลี่ยนไป component ก็จะเรนเดอร์ใหม่โดยใช้ข้อมูลนั้น ซึ่งรวมถึง child component ที่ได้รับข้อมูลเป็น props ด้วย

React จะอัปเดต DOM ให้ด้วย แต่จะอัปเดทเมื่อจำเป็นเท่านั้น 
ซึ่งหมายความว่าคุณไม่ต้องไปกังวลเรื่องการต้องกลับไปอัปเดท DOM คุณแค่ต้องบอก React ว่า UI ต้องแสดงผลอะไร

อีกอย่างที่ต้องรู้คือ ถ้า component เป็นแบบ stateful ก็จะไม่มี component อื่นที่รู้ `state` ของ component นี้ 
ซึ่ง `state` ของ component ตัวใดตัวหนึ่งจะเข้าถึงได้แค่ในขอบเขตของ component ตัวนั้น ยกเว้นว่าจะส่ง state เข้าไปใน child component ผ่าน `props`  
การที่ `state` มีขอบเขตแค่ใน component ตัวเองนี้สำคัญมาก เพราะว่าจะทำให้เราเขียน logic ที่จะเก็บอยู่แค่ใน component นี้แลเป็นอิสระจากส่วนอื่นของโค้ดได้

# --instructions--

ใน code editor มี `MyComponent` ซึ่งเป็น component แบบ stateful 

ใน method `render` ให้สร้างแท็ก `h1` โดยแสดงค่าของ `name` ที่อ่านมาจาก state ของ component ตัวนี้

**Note:** ใน `h1` ต้องมีแค่ค่าที่อ่านจาก `state` เท่านั้น  
ถ้ายังจำได้ ใน JSX นั้น โค้ดที่เขียนไว้ในวงเล็บปีกกา `{ }` จะถือว่าเป็น JavaScript ดังนั้นแค่เอา `state` ไปไว้ในวงเล็บปีกกาก็จะเข้าถึงค่าของ `state` ได้แล้ว

# --hints--

state ของ `MyComponent` ต้องมี key ชื่อ `name` ที่มีค่าเป็น `CareerVio`

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'CareerVio'
);
```

`MyComponent` ต้องเรนเดอร์ `h1` ไว้ใน `div`

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

`h1` ที่เรนเดอร์ออกมาต้องมีข้อมูลข้างในเป็นค่าที่อ่านจาก `state` เท่านั้น

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
      name: 'CareerVio'
    }
  }
  render() {
    return (
      <div>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }

        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
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
      name: 'CareerVio'
    }
  }
  render() {
    return (
      <div>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <h1>{this.state.name}</h1>
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```
