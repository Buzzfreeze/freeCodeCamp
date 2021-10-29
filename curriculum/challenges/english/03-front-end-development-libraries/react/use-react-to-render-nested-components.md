---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

แบบทดสอบที่ผ่านมาได้แสดงให้เห็นวิธีง่ายๆ ในการรวม components สองส่วน แต่มีหลายวิธีที่คุณสามารถรวม components ด้วย React ได้

การประกอบ Component เป็นหนึ่งในคุณสมบัติที่ทรงพลังของ React เมื่อคุณทำงานกับ React สิ่งสำคัญคือต้องเริ่มคิดเกี่ยวกับ user interface ของคุณในแง่ของ components ต่างๆ เช่น แอปในแบบทดสอบที่ผ่านมา คุณแบ่ง UI ของคุณออกเป็น building blocks พื้นฐาน และชิ้นส่วนเหล่านั้นจะกลายเป็น components ซึ่งจะช่วยแยกโค้ดที่รับผิดชอบในส่วน UI ออกจากโค้ดที่รับผิดชอบในการจัดการ logic ของแอปพลิเคชันของคุณ มันสามารถลดความซับซ้อนในการพัฒนาและบำรุงรักษาโปรเจคที่ซับซ้อนได้อย่างมาก

# --instructions--

มีสอง functional components ที่กำหนดไว้ใน code editor เรียกว่า `TypesOfFruit` และ `Fruits` ให้นำ `TypesOfFruit` component มาประกอบ หรือนำไป *ซ้อน* ภายใน `Fruits` component จากนั้นนำ `Fruits` component มาซ้อนไว้ใน `TypesOfFood` component ผลลัพธ์ที่ได้ควรเป็น child component ซ้อนอยู่ภายใน parent component ซึ่งซ้อนอยู่ภายใน parent component ของมันเอง!

# --hints--

`TypesOfFood` component ควร return `div` element เดียว

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

`TypesOfFood` component ควร return `Fruits` component

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

`Fruits` component ควร return `TypesOfFruit` component

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

`TypesOfFruit` component ควร return `h2` และ `ul` elements

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
