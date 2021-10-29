---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
forumTopicId: 301394
dashedName: give-sibling-elements-a-unique-key-attribute
---

# --description--

แบบทดสอบล่าสุดแสดงให้เห็นว่าว `map` method ถูกใช้เพื่อเรนเดอร์ element จำนวนหนึ่งแบบไดนามิกตามข้อมูลที่ user ป้อน อย่างไรก็ตามมีชิ้นส่วนสำคัญที่ขาดหายไปจากตัวอย่างนั้น เมื่อคุณสร้าง array ของ element แต่ละรายการต้องมี `key` attribute ที่ตั้งค่าเป็นค่าที่ไม่ซ้ำกัน React ใช้คีย์เหล่านี้เพื่อติดตามว่ารายการใดถูกเพิ่ม เปลี่ยนแปลง หรือลบออก ซึ่งช่วยให้กระบวนการเรนเดอร์ใหม่มีประสิทธิภาพมากขึ้นเมื่อมีการแก้ไขรายการไม่ว่าในทางใด

**Note:** คีย์ต้องไม่ซ้ำกันระหว่าง element พี่น้องเท่านั้น ไม่จำเป็นต้องเป็นคีย์เฉพาะแบบ global ในแอปพลิเคชันของคุณ

# --instructions--

Code editor มี array ที่มี front end frameworks บางอันและ stateless functional component ชื่อ `Frameworks()` `Frameworks()` จำเป็นต้อง map array กับ unordered list เช่นเดียวกับแบบทดสอบที่ผ่านมา เขียน callback `map` ให้เสร็จเพื่อ return `li` element สำหรับแต่ละเฟรมเวิร์กใน `frontEndFrameworks` array แล้วตรวจสอบให้แน่ใจว่าได้กำหนด `key` attribute ให้กับ `li` แต่ละรายการ โดยตั้งค่าเป็นค่าที่ไม่ซ้ำกัน `li` element เหล่านั้นควรมีข้อความจาก `frontEndFrameworks` ด้วย

โดยปกติ คุณต้องการทำให้คีย์เป็นสิ่งที่ระบุ element ที่กำลังถูกเรนเดอร์โดยไม่ซ้ำกัน วิธีสุดท้ายคืออาจใช้ array index แต่โดยทั่วไปแล้ว คุณควรพยายามใช้ชื่อเฉพาะที่ไม่ซ้ำกัน

# --hints--

`Frameworks` component ควรมีและเรนเดอร์ในหน้าเพจ

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1
);
```

`Frameworks` ควรเรนเดอร์ `h1` element

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
```

`Frameworks` ควรเรนเดอร์ `ul` element.

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
```

`ul` tag ควรเรนเดอร์ 6 child `li` element

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('ul').children().length ===
    6 &&
    Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .childAt(0)
      .name() === 'li' &&
    Enzyme.mount(React.createElement(Frameworks)).find('li').length === 6
);
```

แต่ละ `li` element ควรมี `key` arttibute ที่ไม่ซ้ำกัน

```js
assert(
  (() => {
    const ul = Enzyme.mount(React.createElement(Frameworks)).find('ul');
    const keys = new Set([
      ul.childAt(0).key(),
      ul.childAt(1).key(),
      ul.childAt(2).key(),
      ul.childAt(3).key(),
      ul.childAt(4).key(),
      ul.childAt(5).key()
    ]);
    return keys.size === 6;
  })()
);
```

แต่ละ `li` elem ควรมีข้อความจาก `frontEndFrameworks`

```js
assert(
  (() => {
    const li = Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .children();
    return [...Array(5)].every((_, i) =>
      frontEndFrameworks.includes(li.at(i).text())
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Frameworks />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

# --solutions--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```
