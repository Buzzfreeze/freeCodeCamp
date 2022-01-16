---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
forumTopicId: 301394
dashedName: give-sibling-elements-a-unique-key-attribute
---

# --description--

ในแบบทดสอบแล้วเราจะเห็นว่า เราใช้ method `map` เพื่อเรนเดอร์ element แบบไดนามิกตามข้อมูลที่ user ป้อนเข้ามาได้
แต่มีเรื่องสำคัญอีกเรื่องหนึ่งที่เราไม่ได้บอกคุณ คือเมื่อคุณสร้าง array ของ element แต่ละรายการต้องมี attribute `key` เป็นค่าที่ไม่ซ้ำกัน 
React จะใช้ใช้คีย์นี้เพื่อติดตามว่ารายการไหนถูกเพิ่ม เปลี่ยนแปลง หรือลบออก ซึ่งช่วยให้การเรนเดอร์ใหม่มีประสิทธิภาพมากขึ้น เวลาที่มีการแก้ไขรายการที่แสดงผล

**Note:** คีย์ต้องไม่ซ้ำกันแค่ในขอบเขตของ parent เดียวกันเท่านั้น ไม่จำเป็นต้องเป็นคีย์ที่ไม่ซ้ำกับใครเลยทั้งแอป

# --instructions--

ใน code editor มี array ของ string ชื่อ `frontEndFrameworks` และ stateless functional component ชื่อ `Frameworks()` 
ฟังก์ชัน `Frameworks()` จำเป็นต้อง map array กับ unordered list (`ul`)เหมือนแบบทดสอบที่แล้ว 
ให้เขียน callback ของ `map` ให้เสร็จ เพื่อให้ `renderFrameworks` เก็บค่ารายการของ `li` ที่ได้ค่ามาจาก string แต่ละตัวใน array `frontEndFrameworks` 
แล้วอย่าลืมว่าต้องกำหนด attribute `key` ให้กับ `li` แต่ละรายการ โดยตั้งค่าเป็นค่าที่ไม่ซ้ำกัน และ `li` พวกนี้ต้องแสดง string ของ `frontEndFrameworks` ด้วย

โดยปกติ เราจะตั้งชื่อ `key` เป็นชื่อที่ระบุถึง element นั้นได้ โดยไม่ซ้ำกัน แต่ถ้านึกไม่ออกจะใช้เป็น index ของ array ก็ได้ แต่ก็ควรใช้ชื่อเฉพาะที่ทำให้ระบุได้ว่าเป็น element ตัวไหนมากกว่า

# --hints--

ต้องมี component `Frameworks` และต้องเรนเดอร์ได้

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1
);
```

`Frameworks` ต้องมี `h1` อยู่ข้างใน

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
```

`Frameworks` ต้องมี `ul` อยู่ข้างใน

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
```

แท็ก `ul` ต้องมี `li` 6 ตัวเป็น child อยู่ข้างใน

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

`li` แต่ละตัวต้องมี arttibute `key` ไม่ซ้ำกัน

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

`li` แต่ละตัวจะต้องดึง string มาจาก `frontEndFrameworks`

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
  const renderFrameworks = null; // แก้โค้ดบรรทัดนี้
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
