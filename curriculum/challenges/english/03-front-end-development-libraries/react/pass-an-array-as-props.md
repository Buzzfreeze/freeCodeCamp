---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

แบบทดสอบที่ผ่านมาแสดงให้เห็นวิธีการส่งผ่านข้อมูลจาก parent component ไปยัง child component โดยใช้ `props` หรือ properties ในแบบทดสอบนี้จะเราจะดูว่าเราจะส่ง array ไปยัง `props` ได้อย่างไร 
ในการส่ง array ไปยัง JSX element เราจะต้องมองว่า array นั้นเป็น JavaScript และใส่วงเล็บปีกกาครอบ ลองดูตัวอย่าง:

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

ตอนนี้ child component จะเข้าถึง property `colors` ที่เป็น array ได้แล้ว
แล้วเราจะใช้ method ของ array เช่น `join()` ในตอนที่อ่านค่าของ property ได้ด้วย เช่น
`const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` 
โค้ดด้านบนจะรวม array `colors` ให้กลายเป็น string ตัวเดียวที่ชื่อสีแต่ละชื่อจะคั่นด้วย comma และจะคืนค่าเป็น: `<p>green, blue, red</p>`
เราจะเรียนเรื่อง method ทั่วไปอื่นๆในการแสดง array ของข้อมูลใน React ในภายหลัง

# --instructions--

เราได้สร้าง component `List` และ `ToDo` ใน code editor ให้แล้ว
เมื่อเรนเดอร์ `List` แต่ละตัวใน `ToDo` ให้ส่ง property `tasks` เข้าไปด้วย 
โดย property `tasks` นี้จะเป็น array ของ string เช่น `["walk dog", "workout"]`
จากนั้นให้อ่านค่าของ array `tasks` นี้ใน `List` แล้วเอาค่าไปใส่ใน `p` element โดยใช้ `join(", ")`

โดยมีเงื่อนไขของ array `tasks` ที่ส่งเข้าไปตามนี้

1. array ที่ส่งเข้าไปใน `List` ที่อยู่ใต้ `<h2>Today</h2>` ต้องมี string อย่างน้อยสองค่า
2. array ที่ส่งเข้าไปใน `List` ที่อยู่ใต้ `<h2>Tomorrow</h2>` ต้องมี string อย่างน้อยสามค่า

# --hints--

component `ToDo` ต้องคืนค่าเป็น `div` ตัวเดียวที่ครอบข้อมูลที่อยู่ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

child ตัวที่สามของ `ToDo` ต้องเป็น `List`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

child ตัวที่สามของ `ToDo` ต้องเป็น `List`

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

`List` ทั้งสองตัวใน `ToDo` ต้องรับ property `tasks` และ `tasks` ต้องเป็น array ของ string

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

`List` แรกต้องมีข้อมูลใน `tasks` อย่างน้อย 2 ตัว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

`List` ที่สองต้องมีข้อมูลใน `tasks` อย่างน้อย 3 ตัว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

`List` ต้องอ่านค่าจาก property `tasks` แล้วนำไปใส่ในแท็ก `p` โดยใช้ `.join(", ")`

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
  { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
  return <p>{}</p>
  { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
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
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
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
