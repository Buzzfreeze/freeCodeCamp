---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--


 Component เป็นแกนหลักของ React ทุกอย่างใน React เป็น component และคุณจะได้เรียนรู้วิธีการสร้างสิ่งนี้

มีสองวิธีในการสร้าง React component วิธีแรกคือการใช้ฟังก์ชัน JavaScript การกำหนด component ในลักษณะนี้จะสร้าง *stateless functional component* แนวคิดเกี่ยวกับ state ในแอปพลิเคชันถูกอธิบายในแบบทดสอบถัดๆ ไป ในตอนนี้ลองนึกถึง stateless component เป็น component ที่สามารถรับข้อมูลและเรนเดอร์ข้อมูลนั้นได้ แต่ไม่สามารถจัดการหรือติดตามการเปลี่ยนแปลงของข้อมูลนั้นได้ (เราจะพูดถึงวิธีที่สองในการสร้าง React component ในแบบทดสอบครั้งต่อไป)

ในการสร้าง component ด้วยฟังก์ชัน คุณเพียงแค่เขียนฟังก์ชัน JavaScript ที่ return JSX หรือ `null` สิ่งสำคัญอย่างหนึ่งที่ควรทราบคือ React กำหนดให้ชื่อฟังก์ชันของคุณขึ้นต้นด้วยอักษรตัวใหญ่ ต่อไปนี้คือตัวอย่างของ stateless functional component ที่กำหนดคลาส HTML ใน JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

หลังจากได้รับการ transpile แล้ว `<div>` จะมี CSS class เป็น `customClass`

เนื่องจาก JSX component แสดงถึง HTML คุณจึงสามารถรวมหลาย component เข้าด้วยกันเพื่อสร้างหน้า HTML ที่ซับซ้อนยิ่งขึ้นได้ นี่เป็นหนึ่งในข้อได้เปรียบที่สำคัญของสถาปัตยกรรม component ที่ React มีให้ มันช่วยให้คุณสามารถรวบรวม UI จาก component ที่แยกจากกันจำนวนมาก ทำให้ง่ายต่อการสร้างและบำรุงรักษาส่วน user interface ที่ซับซ้อน

# --instructions--

ใน code editor มีฟังก์ชันที่เรียกว่า `MyComponent` ทำฟังก์ชันนี้ให้สมบูรณ์เพื่อให้มันสามารถ return `div' element เดียวซึ่งมี string ข้อความบางส่วน

**Note:** ข้อความถือเป็น child "div" element ดังนั้น คุณจะไม่สามารถใช้แท็กปิดตัวมันเองได้

# --hints--

`MyComponent` ควรที่จะ return JSX

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` ควรที่จะ return `div` element เดียว

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` element ควรที่จะมี string ของข้อความ

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
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
