---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

ตอนนี้เรามาดูว่าเราจะสามารถประกอบ React component หลายๆ component ด้วยกันได้อย่างไร ลองคิดดูว่าถ้าคุณกำลังทำแอปและได้สร้าง 3 component: `Navbar`, Dashboard, และ `Footer`

เพื่อประกอบรวม component เหล่านี้ด้วยกัน คุณต้องสร้าง `App` component ที่เป็น *parent* ที่เรนเดอร์ ทุกๆ 3 component ข้างต้นนี้เป็น *children* ในการเรนเดอร์ child component ใน React component นั้นคุณจะต้องรวมชื่อ component ที่เขียนเป็น HTML tag ที่กำหนดเองใน JSX ตัวอย่างเช่น ใน `render' method คุณสามารถเขียน:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

เมื่อ React พบ HTML tag ที่กำหนดเองที่อ้างอิงถึง component อื่น (ชื่อ component ที่อยู่ใน `< />` ดังเช่นตัวอย่างข้างบน) มันจะเรนเดอร์ markup สำหรับ component นั้นที่อยู่ในตำแหน่งของ tag นั้น สิ่งนี้จะแสดงให้เห็นถึงความสัมพันธ์ของ parent/child ระหว่าง `App` component กับ `Navbar`, `Dashboard`, และ `Footer`

# --instructions--

ใน code editor มี component ที่ทำงานอย่างง่ายชื่อ `ChildComponent` และ class component ชื่อ `ParentComponent` ประกอบรวมทั้งสองเข้าด้วยกันโดยการเรนเดอร์ `ChildComponent` ภายใน `ParentComponent` และอย่าลืมปิด `ChildComponent` tag ด้วย `\`

**Note:** `ChildComponent` ถูกกำหนดด้วย ES6 arrow function เพราะนี่เป็นวิธีปฏิบัติทั่วไปเมื่อใช้ React อย่างไรก็ตาม โปรดทราบว่านี่เป็นเพียงฟังก์ชัน หากคุณไม่คุ้นเคยกับ arrow function syntax โปรดศึกษาที่ส่วน JavaScript เพิ่มเติม

# --hints--

React component ควรจะ return `div` element เดียว

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

Component นี้ควรจะต้อง return 2 element ที่ซ้อนอยู่ภายใน

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

Component นี้ควรจะต้อง return `ChildComponent` เป็น child ที่สอง

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
