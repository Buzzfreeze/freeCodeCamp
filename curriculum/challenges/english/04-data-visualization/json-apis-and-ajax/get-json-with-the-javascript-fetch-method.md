---
id: 5ccfad82bb2dc6c965a848e5
title: Get JSON with the JavaScript fetch method
challengeType: 6
forumTopicId: 301501
dashedName: get-json-with-the-javascript-fetch-method
---

# --description--

วิธีที่จะ request external data คือเรียกใช้ JavaScript `fetch()` method ซึ่งมันจะมีค่าเท่ากับ `XMLHttpRequest`แต่ syntax ง่ายกว่า

การใช้ GET request to `/json/cats.json`

```js

fetch('/json/cats.json')
	.then(response => response.json())
	.then(data => {
		document.getElementById('message').innerHTML = JSON.stringify(data);
	})

```

หลังจากที่ดู code
บรรทัดแรกจะทำการ request ดังนั้น `fetch(URL)` เหมือนกับ `GET` request ให้กับ specific URL โดนที่ method นี้จะ returns Promise

หลังจาก Promise ถูก returned ถ้า request สำเร็จ จากนั้น `then` method จะถูก executed เพื่อเปลี่ยนไปเป็น JSON format

`then` method สามารถ returns Promise ให้กับค่าที่อยู่ถัดจาก `then` method argument ลำดับที่สองของ `then` เป็นมีค่าเป็น JSON object 

ให้เลือก element ที่จะใช้รับค่า data โดยใช้ `document.getElementById()` จากนั้นแปลง HTML code ของ element โดย insert string ที่สร้างมาจาก JSON object ที่ได้จากการ return request

# --instructions--

ให้สร้างและส่ง `GET` request ใน freeCodeCamp Cat Photo API โดยใช้ `fetch` method แทน `XMLHttpRequest`.

# --hints--

ครใช้ `GET` request กับ `fetch`

```js
assert(code.match(/fetch\s*\(\s*('|")\/json\/cats\.json\1\s*\)/g));
```

ควรใช้ `then` เพื่อเปลี่ยน response ให้ JSON

```js
assert(
  code.match(
    /\.then\s*\(\s*\(?(?<var>\w+)\)?\s*=>\s*\k<var>\s*\.json\s*\(\s*\)\s*\)/g
  )
);
```

ควรใช้ `then` เพื่อเปลี่ยน data เป็น JSON 

```js
assert(__helpers.removeWhiteSpace(code).match(/\.then\(\(?\w+\)?=>{[^}]*}\)/g));
```

ควรใช้ element กับ id `message` และเปลี่ยน inner HTML ไปเป็น string ของ JSON data

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
