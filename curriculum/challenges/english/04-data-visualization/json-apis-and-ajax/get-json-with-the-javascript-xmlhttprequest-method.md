---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

เราสามารถ request data จาก external source ได้โดยการใช้ APIs

APIs หรือ Application Programming Interfaces เป็นเครื่องมือที่ computers ใช้เพื่อสื่อสารระหว่างกัน 
เเราจะรียนรู้สิธีการ update HTML กับ data โดยใช้ APIs ที่เรียกว่า AJAX

web APIs จะส่ง data ในรูปแบบของ JSON (JavaScript Object Notation)

JSON syntax จะมีความคล้ายกับ JavaScript object literal notation โดยที่ JSON มี object properties และค่าที่อยู่ภายใน 
`{` ... `}`

properties และค่าจะอ้างถึง "key-value pairs"

JSON ที่ถูกส่งโดย APIs จะส่งเป็น `bytes`และ application จะรับมันเป็นค่า `string` ซึ่งสามารถถูกแปลงเป็น JavaScript objects ได้ แต่จะไม่ใช้ค่า default ของ JavaScript objects  ส่วน `JSON.parse` method จะแยกค่า string และโครงสร้างของ JavaScript object 

เราสามารถ request JSON ได้จาก freeCodeCamp's Cat Photo API 
โดยสามารถใชcodeข้างล่างนี้ได้

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

จาก code ด้านบนจะพบว่า JavaScript `XMLHttpRequest` object มีจำนวนของ properties และ methods ที่ใช้ transfer data
`XMLHttpRequest` object ถูกสร้างขึ้นและ save ค่าไว้ใน `req` variable จากนั้นใช้ `open` method ให้กับค่าเริ่มต้นของ request - เช่นการ request data จาก API เพื่อทำการ `GET` request argumentตัวที่สองคือ `open` ที่ URL ของ API ที่จะใช้เพื่อ request data  argumentตัวที่สามเป็นค่า Boolean โดยที่ `true` ใช้เป็น asynchronous request  ส่วน `send` method เอาไว้ใช้ส่งค่า request โดย `onload` event จะใช้แยก return data และ apply ใช้กับ `JSON.stringify` method เพื่อเปลี่ยน JavaScript object ไปเป็น string โดนที่ string จะเพิ่มไปใน message text.

# --instructions--

สร้างและส่ง `GET` request ให้กับ freeCodeCamp Cat Photo API จากนั้น click ที่ปุ่ม `Get Message` 
AJAX function จะส่งค่า `The message will go here` text กับ raw JSON output จาก API

# --hints--

ควรสร้าง `XMLHttpRequest` ขึ้นมาใหม่

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

ควรใช้ `open` method เพื่อเริ่มต้น `GET` request ให้กับ freeCodeCamp Cat Photo API.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

ควรใช้ `send` method เพื่อส่ง request

```js
assert(code.match(/\.send\(\s*\)/g));
```

ควรมี `onload` event เพื่อกำหนดค่าให้กับ function

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

ควรใช้ `JSON.parse` method เพื่อแยก `responseText`

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

ควรมี element ของ class `message`และเปลี่ยน inner HTML ไปเป็น string ของ JSON data.

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
