---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

ในตัวอย่างที่ผ่านๆมาก เราได้รับข้อมูลจากแหล่งข้อมูลภายนอกไปแล้ว 
คราวนี้เรามาลองส่งข้อมูลไปให้แหล่งข้อมูลภายนอกกันบ้างดีกว่า

method `XMLHttpRequest` ของ JavaScript ใช้เพื่อก็จะใช้เพื่อส่ง (post) ข้อมูลไปให้ server ได้

ลองดูตัวอย่าง:

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

 method `open` จะสร้าง `POST` request เพื่อส่งไปยัง URL ของแหล่งข้อมูลภายนอกที่เราระบุ และเราระบุ `true` ด้วยเพื่อทำให้การส่งข้อมูลครั้งนี้เป็นแบบ asynchronous 
 method `setRequestHeader` จะใช้เพื่อกำหนด header ของ HTTP request โดยในส่วนของ header นี้จะเป็นส่วนที่เก็บข้อมูลของผู้ส่ง และข้อมูลของตัว request เอง 
 การตั้งค่า header นี้ต้องเรียกใช้หลังจากที่เรียกใช้ method `open` แล้ว และต้องเรียกใช้ก่อนที่จะใช้ method `send` 
 parameter 2 ตัว ที่เราส่งไปให้ `setRequestHeader` นี้คือชื่อของ header (`Content-Type`) และข้อมูลใน header นั้น (`application/json; charset=UTF-8'`) 
 จากนั้น `onreadystatechange` event listener ใช้เพื่อจัดการการเปลี่ยนสถานะของ request โดยการที่ `readyState` มีค่าเป็น `4` แปลว่าการดำเนินการเสร็จแล้ว และการที่ `status` มีค่าเป็น `201` แปลว่า request ที่ส่งไปสำเร็จแล้ว
 สุดท้าย method `send` จะส่ง request ไปกับค่าของ `body` โดยมีคีย์ `userName` ที่มีค่ามาจาก `input` ของผู้ใช้

# --instructions--

ให้ส่ง `POST` request ไปยัง API endpoint เมื่อสร้างเสร็จให้พิมพ์ชื่อของคุณในกล่อง input และคลิก `Send Message`
เมื่อการส่ง request เสร็จสิ้น AJAX function ของคุณต้องเปลี่ยนข้อความ `Reply from Server will be here.` เป็นข้อมูลที่ได้จาก server
โดยข้อความที่แสดงต้องอยู่ในรูป `ชื่อของคุณ loves cats`
(ถ้าไม่สามารถแสดงผลข้อความที่ตรงกับที่เราระบุได้ ให้ลองดู response จาก server ใหม่ แล้วดูว่าจะใช้ส่วนไหนของ response มาสร้างข้อความนี้ได้บ้าง)

# --hints--

ต้องสร้าง `XMLHttpRequest` ตัวใหม่

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

ต้องใช้ method `open` เพื่อเตรียมการส่ง `POST` request ไปยัง server

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

ต้องใช้ method `setRequestHeader` 

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

ต้องมี `onreadystatechange` event handler โดยมีค่าเป็น function ที่ใช้จัดการสถานะของ request

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

ต้องมี element ที่มี class เป็น `message` และเปลี่ยน `textContent` ไปเป็น `ชื่อของคุณ loves cats`

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

ต้องใช้ method `send`

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
      // เขียนโค้ดใต้บรรทัดนี้


      // เขียนโค้ดเหนือบรรทัดนี้
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
      // เขียนโค้ดใต้บรรทัดนี้
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
      // เขียนโค้ดเหนือบรรทัดนี้
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
