---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--


Component เป็นแกนหลักของ React เพราะทุกอย่างใน React เป็น component และตอนนี้คุณจะได้เรียนรู้วิธีการสร้าง component แล้ว

เราจะสร้าง React component ได้สองวิธี 
วิธีแรกคือการใช้ฟังก์ชัน JavaScript 
การสร้าง component ด้วยวิธีนี้จะทำให้ component เป็น *stateless functional component* (เราจะอธิบายเรื่อง state ในแบบทดสอบถัดๆไป) ตอนนี้ให้มองว่า stateless component เป็น component ที่สามารถรับข้อมูลและเรนเดอร์ข้อมูลนั้นได้ แต่ไม่สามารถจัดการหรือติดตามการเปลี่ยนแปลงของข้อมูลนั้นได้ (เราจะพูดถึงวิธีที่สองในการสร้าง React component ในแบบทดสอบหน้า)

ในการสร้าง component ด้วยฟังก์ชัน คุณแค่เขียนฟังก์ชัน JavaScript ที่คืนค่าเป็น JSX หรือ `null` สิ่งสำคัญอีกอย่างที่ต้องรู้คือ คุณต้องตั้งชื่อ functional component โดยขึ้นต้นด้วยตัวพิมพ์ใหญ่ 
ด้านล่างเป็นตัวอย่างของ stateless functional component ที่กำหนดคลาส HTML ใน JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

หลังจากได้รับการ transpile แล้ว `<div>` จะมี CSS class เป็น `customClass`

เนื่องจาก JSX component จะใช้แทน HTML คุณจึงรวม component หลายๆตัวเข้าด้วยกันเพื่อสร้างหน้า HTML ที่ซับซ้อนยิ่งขึ้นได้ 
นี่เป็นหนึ่งในข้อได้เปรียบที่สำคัญของโครงสร้าง component ของ React ซึ่งช่วยให้คุณสร้าง UI จาก component หลายๆตัวที่อยู่คนละที่กันได้ ทำให้ง่ายต่อการสร้างและปรับปรุงส่วน UI ที่ซับซ้อน

# --instructions--

ใน code editor มีฟังก์ชันที่เรียกว่า `MyComponent` เขียนฟังก์ชันนี้ให้เสร็จ โดยการคืนค่าเป็น `div` element ตัวเดียวที่มีข้อความอะไรก็ได้อยู่ภายใน

**Note:** ข้อความที่ใส่ไปจะถือเป็น child ของ `div` element ดังนั้นจะใช้ `div` ที่เป็นแท็กที่ปิดในตัวไม่ได้

# --hints--

`MyComponent` ต้องคืนค่าเป็น JSX

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` ต้องคืนค่าเป็น `div` element เดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` ต้องมีข้อความอะไรก็ได้อยู่ข้างใน

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // แก้ไขโค้ดใต้บรรทัดนี้



  // แก้ไขโค้ดเหนือบรรทัดนี้
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // แก้ไขโค้ดใต้บรรทัดนี้
  return (
    <div>
      Demo Solution
    </div>
  );
  // แก้ไขโค้ดเหนือบรรทัดนี้
}
```
