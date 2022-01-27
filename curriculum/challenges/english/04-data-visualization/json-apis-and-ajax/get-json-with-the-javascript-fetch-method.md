---
id: 5ccfad82bb2dc6c965a848e5
title: Get JSON with the JavaScript fetch method
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

มีอีกวิธีที่เราจะใช้เพื่อส่ง request ไปดึงข้อมูลจากภายนอกได้ คือเรียกใช้ method `fetch()` ของ JavaScript ซึ่งจะทำงานเหมือนกับ `XMLHttpRequest` แต่ syntax จะง่ายกว่า

ตัวอย่างการส่ง GET request ไปยัง `/json/cats.json`

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```

ลองดูรายละเอียดของโค้ดตัวอย่างนี้ทีละส่วน

ในบรรทัดแรกจะเป็นการสร้าง request การ `fetch(URL)` ก็จะส่ง `GET` request ไปยัง URL ที่เราระบุ และ method นี้จะคืนค่ากลับมาเป็น Promise

เมื่อได้ Promise มาแล้ว ถ้า request สำเร็จ จากนั้น method `then` จะทำงาน เพื่อเปลี่ยนข้อความที่ได้รับกลับมา (response) ไปเป็น JSON 

จากนั้น method `then` ก็จะคืนค่ากลับมาเป็น Promise เหมือนกัน ทำให้ method `then` ตัวต่อไปทำงาน โดย argument ของ `then` ตัวที่สองนี้จะเป็น JSON object แล้ว

สุดท้ายจะเป็นการเลือก element ที่จะแสดงข้อมูล โดยใช้ `document.getElementById()` 
จากนั้นจะเปลี่ยน HTML ของ element ที่เลือก โดยการเพิ่ม string ที่แปลงมาจาก JSON object ที่ได้จากการการส่ง request ลงไป

# --instructions--

ให้สร้างและส่ง `GET` request ไปยัง Cat Photo API โดยใช้ method `fetch` แทน `XMLHttpRequest`

# --hints--

ต้องส่ง `GET` request โดยใช้ method `fetch`

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

ต้องใช้ `then` เพื่อเปลี่ยน response ให้เป็น JSON

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

ต้องใช้ `then` ในการรับข้อมูลที่เปลี่ยนเป็น JSON จาก `then` ตัวก่อนหน้า

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

ต้องดึง element ที่มี id เป็น `message` มา และเปลี่ยน inner HTML ของ elemtn นั้นไปเป็น string ที่แปลงมาจากข้อมูล JSON ที่ได้รับมา

```js
assert(
  __helpers.removeWhiteSpace(code).match(
    /document\.getElementById\(('|")message\1\)\.innerHTML=JSON\.stringify\(?\w+\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
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
<p id="message" class="box">
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
    document.getElementById('getMessage').onclick= () => {
      fetch('/json/cats.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById('message').innerHTML=JSON.stringify(data);
        })
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
<p id="message" class="box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
