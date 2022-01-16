---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

มีอีกวิธีในการเข้าถึง `state` ใน method `render()` ของ component 
โดยก่อนที่จะถึงคำสั่ง `return` คุณจะเขียน JavaScript ลงไปได้
เราจะประกาศฟังก์ชัน, อ่านค่าของ `state` หรือ `props`, ประมวลผลข้อมูล หรือทำอย่างอื่นก็ได้ 
แล้วเราค่อยเก็บข้อมูลลงตัวแปร หลังจากนั้นค่อยเอาตัวแปรนี้ไปใช้ใน `return`

# --instructions--

ใน method `render` ของ `MyComponent` ให้สร้าง `const` ชื่อ `name` และกำหนดค่าให้มีค่าเป็น name ของ `state`
เนื่องจากคุณสามารถเขียน JavaScript ได้โดยตรงในส่วนนี้ของโค้ด คุณไม่จำเป็นต้องเขียนโค้ดนี้ในวงเล็บปีกกา

ถัดไปในคำสั่ง return ให้เรนเดอร์ค่าของตัวแปร `name` นี้ในแท็ก `h1`
ถ้ายังจำได้ คุณต้องใช้ JSX syntax (ใช้วงเล็บปีกกาสำหรับเขียน JavaScript) ในคำสั่ง return

# --hints--

state ของ `MyComponent` ต้องมี key `name` ที่มีค่าเป็น `CareerVio`

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'CareerVio'
);
```

`MyComponent` ต้องเรนเดอร์ `h1` อยู่ใน `div`

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

แท็ก `h1` ที่เรนเดอร์ใช้ค่าของ `{name}`

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
```

`h1` ที่เรนเดอร์ต้องใช้ค่าจาก state ของ component

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
  assert(firstValue === '<div><h1>TestName</h1></div>');
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
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
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
    // แก้ไขโค้ดใต้บรรทัดนี้
    const name = this.state.name;
    // แก้ไขโค้ดเหนือบรรทัดนี้
    return (
      <div>
        { /* แก้ไขโค้ดใต้บรรทัดนี้ */ }
        <h1>{name}</h1>
        { /* แก้ไขโค้ดเหนือบรรทัดนี้ */ }
      </div>
    );
  }
};
```
