---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

จากตัวอย่างที่ผ่านมาเราจะสามารรับ data จาก external resource ได้ และเราสามารถส่ง data ไปให้ external resource ได้เช่นกันเหมือนกับ resource supports AJAX requests 

JavaScript's `XMLHttpRequest` method iใช้เพื่อ post data ไปที่ server
ดังตัวอย่างด้านล่าง

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

 `open` method จะเรื่มต้น request `POST` เพื่อให้ URL ของ external resource และใช้ `true` Boolean เพื่อทำให้เป็น asynchronous โดย `setRequestHeader` method จะใช้กำหนดค่าให้กับ HTTP request ทีประกอบด้วย information เกี่ยวกับ sender และ request Iซึ่งจะถูกเรียกใช้หลัง `open` method แต่ก่อน `send` method parameters 2 ตัว เป็นเป็นชื้อส่วนหัว header และค่าที่กำหยดให้กับส่วน body ของส่วนหัว จากนั้น `onreadystatechange` event listener จะเปลี่ยน state ของ request โดยที่ `readyState` ของ `4` หมายถึงดำเนินการเสร็จแล้วและ`status` ของ`201` หมายถึง request สำเร็จ โดยที่ document ของ HTML สามารถอัพเดทได้ สุดท้าย `send` method จะส่ง request ไปกับค่าของ `body` ที่มี `userName` key ถูกกำหนดจาก user ใน `input` 

# --instructions--

สร้าง `POST` request ให้กับ API endpoint จากนั้นพิมพ์ชื่อของงคุณใน input และคลิก `Send Message`
AJAX function ควนจะถูกแทนที่ด้วย `Reply from Server will be here.` พร้อมกับ data จาก server
Format จะแสดงข้อความเป็นชื่อของคุฯพร้อมกับ text ` loves cats`.

# --hints--

ควรสร้าง`XMLHttpRequest` ขึ้นมาใหม่

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

ควรใช้ `open` method เพื่อเริ่ม `POST` request ให้กับ server

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

ควรใช้ `setRequestHeader` 

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

ควรจะมี `onreadystatechange` event เพื่อกำหนดให้กับ function

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

ควรมี element ใน class `message` และเปลี่ยน `textContent` ไปเป็น `userName loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

ควรใช้ `send` method

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line


      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```
