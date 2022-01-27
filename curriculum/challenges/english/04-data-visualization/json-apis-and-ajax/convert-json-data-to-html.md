---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 6
forumTopicId: 16807
dashedName: convert-json-data-to-html
---

# --description--

ตอนนี้คุณได้ข้อมูลมาจาก JSON API แล้ว ได้เวลาเอาไปแสดงบน HTML แล้วล่ะ

คุณจะใช้ method `forEach` เพื่อวนอ่านข้อมูลของ object รูปน้องแมว ที่อยู่ใน array ได้ 
พอคุณอ่าน object ทีละตัวได้แล้ว คุณก็จะเปลี่ยน HTML element ได้ด้วย

เริ่มจากการสร้างตัวแปร html โดยใช้ `let html = "";` ก่อน

จากนั้นวนอ่านข้อมูลของ JSON และเพื่ม HTML เข้าไปในตัวแปร โดยครอบชื่อของคีย์ไว้ในแท็ก `strong` ตามด้วยค่าของคีย์นั้น 
หลังจากวนอ่านข้อมูลเสร็จ ค่อยเอาข้อมูลมาแสดงผล

ถ้าลองเขียนตามเงื่อนไขด้านบน จะได้โค้ดแบบนี้:

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

**Note:** ในบททดสอบนี้ คุณต้องสร้าง HTML element ให้กับหน้าเว็บ ทำให้จะไม่สามารถใช้ `textContent` ได้ (เพราะว่า `textContent` จะไม่แปลงแท็กที่เราใส่เป็น HTML tag ให้) 
เราจึงให้ใช้ `innerHTML` แทน (จริงๆแล้วการใช้ `innerHTML` จะทำให้เว็บข้อเราเสี่ยงต่อการโจมตีแบบ cross-site scripting แต่เพื่อให้ง่ายต่อการเรียนรู้ ตอนนี้จึงให้ใช้วิธีนี้ไปก่อน)

# --instructions--

ให้ใช้ method `forEach` เพื่อวนอ่านข้อมูล JSON และสร้าง HTML element เพื่อแสดงค่า

ตัวอย่าง JSON:

```json
[
  {
    "id":0,
    "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
    "altText":"A white cat wearing a green helmet shaped melon on its head. ",
    "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"]
  }
]
```

# --hints--

ต้องเขียนโค้ดให้เก็บข้อมูลลงตัวแปรชื่อ `html` ก่อนนำไปแสดง

```js
assert(__helpers.removeWhiteSpace(code).match(/html(\+=|=html\+)/g))
```

ต้องใช้ method `forEach` ในการวนอ่านข้อมูล JSON ที่ได้จาก API

```js
assert(code.match(/json\.forEach/g));
```

ต้องครอบชื่อของคีย์ไว้ในแท็ก `strong`

```js
assert(code.match(/<strong>.+<\/strong>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // เขียนโค้ดใต้บรรทัดนี้


        // เขียนโค้ดเหนือบรรทัดนี้
        document.getElementsByClassName('message')[0].innerHTML = html;
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

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // เขียนโค้ดใต้บรรทัดนี้
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });
        // เขียนโค้ดเหนือบรรทัดนี้
        document.getElementsByClassName('message')[0].innerHTML = html;
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
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```
