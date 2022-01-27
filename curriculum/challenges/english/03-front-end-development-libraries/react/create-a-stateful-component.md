---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

หนึ่งในเรื่องที่สำคัญที่สุดใน React คือ `state` 


`state` คือสิ่งที่เก็บข้อมูลที่แอปของคุณต้องใช้ ซึ่งจะเปลี่ยนไปได้เรื่อยๆ 
คุณต้องเขียนแอพให้เปลี่ยนไปตามการเปลี่ยนแปลง state และถ้าจำเป็นก็ต้องเปลี่ยนการแสดงผลด้วย
React ได้สร้างวิธีการจัดการ state ของเว็บแอปยุคใหม่ที่ดีมากๆ

เราจะสร้าง state ใน React component ได้โดยการประกาศ property `state` ใน `constructor` ของ class component
ซึ่งจะทำให้ component มี `state` เมื่อถูกสร้างขึ้น 
และ `state` ต้องเป็น `object` ของ JavaScript 

ลองดูตัวอย่าง:

```jsx
this.state = {

}
```

เราจะเข้าถึง `state` ได้ตลอดตราบใดที่ยังมี component นั้นอยู่  
เราจะเปลี่ยนค่า `state`, ดึง `state` ไปแสดงผล, หรือส่ง `state` เป็น props ไปยัง child component ก็ได้

เราจะเขียน `state` ให้ซับซ้อนหรือเรียบง่ายก็ได้ ขึ้นอยู่กับการใช้งาน 
แต่การจะใช้ `state` แบบนี้ คุณต้องสร้าง class component ที่ extend มาจาก `React.Component` เท่านั้น

# --instructions--

มี component ใน code editor ที่พยายามจะแสดงค่าของ property `name` จาก `state` อยู่ แต่ตอนนี้ `state` ยังไม่ได้ถูกสร้างไว้

ให้สร้าง `state` ใน `constructor` และระบุใส่ชื่อของคุณใน property `name`

# --hints--

ต้องมี `StatefulComponent` และต้องเรนเดอร์ได้ด้วย

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

`StatefulComponent` ต้องเรนเดอร์ `div` และ `h1`

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

state ของ `StatefulComponent` ต้องมี property ชื่อ `name` ที่มีค่าเป็น string

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

property `name` ใน state ของ `StatefulComponent` จะต้องถูกเอามาแสดงใน `h1`

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
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
