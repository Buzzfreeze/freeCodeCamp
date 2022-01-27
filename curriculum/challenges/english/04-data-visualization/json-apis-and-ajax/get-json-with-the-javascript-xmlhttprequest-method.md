---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

เราสามารถส่ง request เพื่อดึงข้อมูลจากแหล่งข้อมูลภายนอกได้โดยการใช้ API

API หรือ Application Programming Interface เป็นเครื่องมือที่ คอมพิวเตอร์ใช้เพื่อสื่อสารระหว่างกัน 
เราจะเรียนรู้วิธีการอัปเดท HTML ตามข้อมูลที่เราได้รับมาจาก API โดยเราจะดึงข้อมูลจาก API โดยใช้วิธีที่เรียกว่า AJAX

API ส่วนใหญ่จะส่งข้อมูลมาในรูปแบบ JSON (JavaScript Object Notation)

syntax ของ JSON จะคล้ายกับ JavaScript object literal 
โดย JSON มีจะมีชื่อของ property และค่าของ property นั้น อยู่ในวงเล็บปีกกา `{ }`

เราจะเรียก property และค่าของ property นั้นว่า "key-value pairs" (โดย key หมายถึงชื่อของ property และ value หมายถึงค่าของ property นั้น)

API จะส่ง JSON มาเป็น `bytes` และแอปของเราจะรับค่ามาเป็น `string` 
โดย string นี้จะถูกแปลงเป็น JavaScript object ได้ แต่เราจะต้องมาแปลงค่าเองโดยใช้ method `JSON.parse` 
method นี้จะอ่านค่าของ string และแปลงค่าให้เป็น JavaScript object 

คุณสามารถส่ง request ไปหา Cat Photo API ของเรา
ได้โดยใช้โค้ดตัวอย่างด้านล่างนี้

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

จากโค้ดด้านบนจะเห็นว่า object `XMLHttpRequest` มี property และ method หลายตัวที่ใช้ในการรับ-ส่งข้อมูล
object `XMLHttpRequest` นี้ถูกสร้างขึ้นและเก็บลงในตัวแปร `req` 
จากนั้นใช้ method `open` เพิ่อเตรียมส่ง request 
`open` รับ argument แรกเป็นวิธีในการส่ง request โดยในตัวอย่างนี้เป็นการขอข้อมูลจาก API ดังนั้นประเภทของ request จึงเป็น `GET` 
argument ตัวที่สองคือ URL ของ API ที่จะส่ง request ไปหา 
argument ตัวที่สามรับค่า Boolean โดยถ้าเป็น `true` จะเป็นการส่ง request แบบ asynchronous
ส่วน method `send` มีไว้เพื่อส่ง request 
และสุดท้าย `onload` event handler จะรับข้อมูลที่ API ส่งกลับมา และใช้ method `JSON.stringify` เพื่อเปลี่ยน JavaScript object ไปเป็น string และแสดง string นั้นเป็นข้อความใน element `message`

# --instructions--

ให้สร้างและส่ง `GET` request ไปยัง Cat Photo API เมื่อคลิกที่ปุ่ม `Get Message` 
ฟังก์ชัน AJAX ที่คุณเขียนจะต้องเปลี่ยนข้อความ `The message will go here` เป็น JSON ที่ได้รับกลับมาจาก API

# --hints--

โค้ดที่เขียนต้องสร้าง `XMLHttpRequest` ตัวใหม่

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

ต้องใช้ method `open` เพื่อเตรียมส่ง `GET` request ให้กับ Cat Photo API ของเรา

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

ต้องใช้ method `send` เพื่อส่ง request

```js
assert(code.match(/\.send\(\s*\)/g));
```

ต้องมี `onload` event handler ที่เก็บค่าของฟังก์ชันที่จะทำงานเมื่อได้รับข้อมูลกลับมา

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

ต้องใช้ method `JSON.parse` เพื่อเปลี่ยน `responseText` ที่ได้รับกลับมาให้เป็น object

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

ต้องมี element ที่มี class เป็น `message` และต้องเปลี่ยน inner HTML ของ element นี้เป็นไปเป็น string ของข้อมูล JSON ที่ได้รับกลับมาจาก API

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
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

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      };
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

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
