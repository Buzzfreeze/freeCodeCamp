---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

มีอีกวิธีหนึ่งในการเข้าถึง `state` ใน component ใน `render()` method ก่อนคำสั่ง `return` คุณสามารถเขียน JavaScript ได้โดยตรง ตัวอย่างเช่น คุณสามารถประกาศฟังก์ชัน เข้าถึงข้อมูลจาก `state` หรือ `props` แล้วคำนวณข้อมูลนี้ และอื่นๆ จากนั้นคุณสามารถกำหนดข้อมูลใดๆ ให้กับตัวแปร ซึ่งคุณสามารถเข้าถึงได้ในคำสั่ง `return`

# --instructions--

ใน`MyComponent` render method ให้กำหนด `const` ที่เรียกว่า `name` และตั้งค่าให้เท่ากับค่า  name ใน `state` ของ component เนื่องจากคุณสามารถเขียน JavaScript ได้โดยตรงในส่วนนี้ของโค้ด คุณไม่จำเป็นต้องเขียนโค้ดนี้ในวงเล็บปีกกา

ถัดไปในคำสั่ง return ให้เรนเดอร์ค่านี้ในแท็ก `h1` โดยใช้ตัวแปร `name` จำไว้ว่าคุณต้องใช้ JSX syntax (วงเล็บปีกกาสำหรับเขียน JavaScript) ในคำสั่ง return

# --hints--

`MyComponent` ควรมี key `name` ที่มีค่า `freeCodeCamp` อยู่ใน state ของมัน

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` ควรเรนเดอร์ `h1` header อยู่ภายใน `div` เดียว

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

`h1` tag ที่ถูกเรนเดอร์ควรอ้างอิงถึง `{name}`

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
```

`h1` header ที่ถูกเรนเดอร์ควรมีข้อความที่ถูกเรนเดอร์จาก component's state

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
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line

    // Change code above this line
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
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
