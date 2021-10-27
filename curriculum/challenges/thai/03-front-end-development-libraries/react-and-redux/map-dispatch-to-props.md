---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

ฟังก์ชัน `mapDispatchToProps()` ใช้เพื่อจัดเตรียม action creator เฉพาะให้กับ React component ของคุณ เพื่อให้สามารถปล่อย action ต่างๆ กับ Redux store ได้ มันมีโครงสร้างคล้ายกับฟังก์ชัน `mapStateToProps()` ที่คุณเขียนในแบบทดสอบที่แล้ว มัน return object ที่ map ส่ง action ไปยังชื่อต่างๆ ซึ่งกลายเป็น component `props` อย่างไรก็ตามแทนที่จะส่งคืนชิ้นส่วนของ `state` แต่ละ property จะ return ฟังก์ชันที่เรียกใช้ `dispatch` กับ action creator และข้อมูล action ที่เกี่ยวข้อง คุณมีสิทธิ์เข้าถึง `dispatch` นี้ เพราะมันส่งผ่านไปยัง `mapDispatchToProps()` เป็นพารามิเตอร์เมื่อคุณกำหนดฟังก์ชัน เช่นเดียวกับที่คุณส่ง `state` ไปยัง `mapStateToProps()` ในเบื้องหลังนั้น React Redux ใช้ `store.dispatch()` ของ Redux เพื่อดำเนินการจัดส่งเหล่านี้ด้วย `mapDispatchToProps()` ซึ่งคล้ายกับการใช้ `store.subscribe()` สำหรับ component ที่จับคู่กับ `state`

ตัวอย่างเช่น คุณมี `loginUser()` action creator ที่ใช้ `username` เป็น action payload โดยที่ object ที่ return จาก `mapDispatchToProps()` สำหรับ action creator นี้จะมีลักษณะดังนี้:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions—

code editor มี action creator ที่เรียกว่า `addMessage()` ให้เขียนฟังก์ชัน `mapDispatchToProps()` ที่ใช้ `dispatch` เป็น argument จากนั้น return object และ objectนั้นควรมี property `submitNewMessage` ที่ตั้งค่าเป็นฟังก์ชัน dispatch ซึ่งจะนำพารามิเตอร์สำหรับข้อความใหม่มาเพิ่มเมื่อ dispatch `addMessage()`

# --hints--

`addMessage` ควร return object ด้วย key `type` และ `message`

```js
assert(
  (function () {
    const addMessageTest = addMessage();
    return (
      addMessageTest.hasOwnProperty('type') &&
      addMessageTest.hasOwnProperty('message')
    );
  })()
);
```

`mapDispatchToProps` ควรเป็นฟังก์ชัน

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` ควร return object 

```js
assert(typeof mapDispatchToProps() === 'object');
```

การส่ง `addMessage` กับ `submitNewMessage` จาก `mapDispatchToProps` ควร return ข้อความไปยัง dispatch function

```js
assert(
  (function () {
    let testAction;
    const dispatch = (fn) => {
      testAction = fn;
    };
    let dispatchFn = mapDispatchToProps(dispatch);
    dispatchFn.submitNewMessage('__TEST__MESSAGE__');
    return (
      testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'
    );
  })()
);
```

# --seed--

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```
