---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

ฟังก์ชัน `mapDispatchToProps()` จะใช้เพื่อให้ React component ของคุณเรียกใช้ action creator บางตัวได้ เพื่อให้ส่ง action ไปยัง Redux store ได้ 
ฟังก์ชันนี้จะมีครงสร้างคล้ายกับฟังก์ชัน `mapStateToProps()` ที่คุณเขียนในแบบทดสอบที่แล้ว โดยจะคืนค่าเป็น object ที่เก็บ action ใน property ที่กำหนด ซึ่งจะกลายเป็น `props` ของ component 
property ของ object นี้จะไม่ได้เก็บค่าส่วนหนึ่งของ `state` แล้ว แต่จะเก็บฟังก์ชันที่เรียกใช้ `dispatch` กับ action creator และข้อมูล action ที่เกี่ยวข้องแทน
คุณจะเข้าถึง `dispatch` นี้ได้ เพราะว่า `dispatch` ตัวนี้จะถูกส่งเป็นพารามิเตอร์ไปยัง `mapDispatchToProps()` 
เหมือนกับตอนที่ส่ง `state` ไปยัง `mapStateToProps()` 
React Redux จะใช้ method `store.dispatch()` ของ Redux ไปเรียกใช้ `mapDispatchToProps()` ที่เรากำลังจะเขียน
ซึ่งจะเหมือนกับการที่ React Redux ไปเรียกใช้ `store.subscribe()` ไป map `state` ให้ component

เช่น ถ้าคุณมี action creator `loginUser()` ที่รับค่า `username` เป็นข้อมูลของ action แล้ว object ที่ `mapDispatchToProps()` คืนค่าออกมาสำหรับ `loginUser()` จะมีหน้าตาแบบนี้:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions—

code editor มี action creator ชื่อ `addMessage()` 
ให้เขียนฟังก์ชัน `mapDispatchToProps()` ที่รับ `dispatch` เป็น argument จากนั้นให้คืนค่าเป็น object ออกมา โดยที่ object นั้นต้องมี property ชื่อ `submitNewMessage` ที่เป็นฟังก์ชัน dispatch 
ซึ่งจะนำพารามิเตอร์ที่รับเข้ามาไปใช้ในการ dispatch `addMessage()`

ถ้าลองทำแล้วไม่เข้าใจ ให้พยายามสร้างฟังก์ชัน `mapDispatchToProps()` โดยให้ object ที่คืนค่าออกมามีหน้าตาคล้ายกับในตัวอย่าง แต่เปลี่ยน action creator ที่เรียกใช้

# --hints--

`addMessage` คืนค่าเป็น object ที่มี key เป็น `type` และ `message`

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

`mapDispatchToProps` ต้องเป็นฟังก์ชัน

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` ต้องคืนค่าออกมาเป็น object 

```js
assert(typeof mapDispatchToProps() === 'object');
```

การ dispatch `addMessage` โดยใช้ `submitNewMessage` ใน `mapDispatchToProps` ต้องส่งข้อความที่รับเข้ามาไปยังฟังก์ชัน dispatch

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
