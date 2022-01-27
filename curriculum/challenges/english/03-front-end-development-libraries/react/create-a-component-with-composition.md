---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

ตอนนี้เรามาดูว่าเราจะสามารถประกอบ React component หลายๆตัวเข้าด้วยกันได้อย่างไร  
ลองคิดดูว่าถ้าคุณกำลังทำแอปและได้สร้าง component 3 ตัวคือ: `Navbar`, `Dashboard`, และ `Footer`

ในการรวม component นี้เข้าด้วยกัน เราจะสร้าง *parent* component ชื่อ `App` ที่มี component 3 ตัวนี้เป็น *children*  
ซึ่งวิธีการคือการเขียนแท็ก HTML ที่มีชื่อของแท็กเป็นชื่อของ children component นั้นไว้ใน parent  
เช่น ใน method `render` นี้ เราจะเขียนเป็น:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

เมื่อ React เห็นแท็ก HTML ที่ไปเรียก component อื่น (component ที่อยู่ใน `< />`) React จะเรนเดอร์ข้อมูลของ component นั้นในตำแหน่งที่เราวางแท็กนั้นไว้  
ตัวอย่างนี้จะแสดงให้เราเห็นความเป็น parent/child ของ `App` กับ `Navbar`, `Dashboard`, และ `Footer`

# --instructions--

ใน code editor มี component สั้นๆที่ชื่อ `ChildComponent` และ class component ที่ชื่อ `ParentComponent`  
ให้นำ `ChildComponent` ไปไว้ใน `ParentComponent` และอย่าลืมปิดแท็กของ `ChildComponent` ด้วย `\`

**Note:** เราจะเห็นว่า `ChildComponent` ถูกสร้างด้วย arrow function ของ ES6 และการใช้วิธีนี้ก็เป็นเรื่องปกติใน React  
แต่ถ้าคุณยังไม่รู้จักกับ arrow function ให้ลองไปดูที่บทเรียนเรื่อง JavaScript เพื่อทำความเข้าใจส่วนนี้ก่อน

# --hints--

React component ต้องคืนค่าเป็น `div` element ตัวเดียว

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

Component นี้ต้องคืนค่าออกมาเป็น `div` ที่มี element 2 ตัวซ้อนอยู่ข้างใน

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

Component นี้ต้องคืนค่าออกมาโดยมี `ChildComponent` เป็น child ตัวที่สอง

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
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }


        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
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
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <ChildComponent />
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```
