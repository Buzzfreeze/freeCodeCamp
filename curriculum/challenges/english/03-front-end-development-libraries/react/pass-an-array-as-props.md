---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

แบบทดสอบที่ผ่านมาแสดงให้เห็นวิธีการส่งผ่านข้อมูลจาก parent component ไปยัง child component เป็น `props` หรือ properties ในแบบทดสอบนี้จะเราจะดูว่า array สามารถส่งผ่านเป็น `props` ได้อย่างไร ในการส่งผ่าน array ไปยัง JSX element จะต้องถือเป็น JavaScript และใส่วงเล็บปีกกา

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

child component จะสามารถเข้าถึง array property `colors` คุณสามารถใช้ Array methods เช่น `join()`เพื่อเข้าถึง property 
`const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` ซึ่งจะรวมรายการ`colors` array ทั้งหมดลงใน string ที่คั่นด้วย comma และสร้าง: `<p>green, blue, red</p>` ต่อมาเราจะเรียนรู้เกี่ยวกับ method ทั่วไปอื่น ๆ ในการเรนเดอร์ array ของข้อมูลใน React

# --instructions--

มี `List` และ `ToDo` component ใน code editor เมื่อเรนเดอร์ `List` แต่ละรายการจาก`ToDo` component ให้ส่งผ่าน `tasks` property ที่กำหนดให้กับ array ของ to-do tasks เช่น `["walk dog", "workout"]` จากนั้นข้าถึง `tasks` array นี้ใน `List` component โดยแสดงค่าภายใน `p` element ใช้ `join(", ")` เพื่อแสดง `props.tasks`array ใน `p` element เป็นรายการที่คั่นด้วย comma ส่วนของ list วันนี้ควรมีอย่างน้อย 2 tasks และของพรุ่งนี้ควรมีอย่างน้อย 3 tasks

# --hints--

`ToDo` component ควร return `div` ชั้นนอกสุด 1 อัน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

Child ลำดับที่ 3 ของ `ToDo` component ควรเป็นรายการของ `List` component

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

Child ลำดับที่ 5 ของ `ToDo` component ควรเป็นรายการของ `List` component

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

รายการทั้ง 2 ของ `List` component ควรมี property ชื่อว่า `tasks` และ `tasks` ควรเป็น array

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

`List` component แรกแสดงถึง tasks สำหรับวันนี้ที่ควรมีอย่างน้อย 2 รายการ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

`List` component ที่สองแสดงถึง tasks สำหรับวันพรุ่งนี้ที่ควรมีอย่างน้อย 3 รายการ

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

`List` component ควรเรนเดอร์ค่าจาก `tasks` prop ใน `p` tag

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
