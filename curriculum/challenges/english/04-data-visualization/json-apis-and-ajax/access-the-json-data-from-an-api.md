---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

จากโทย์ล่าสุด เราจะเห็นวิธีการ get JSON data จาก freeCodeCamp Cat Photo API.

เพื่อเข้าใจ JSON format ให้ทำความเข้าใจ notation JavaScript ก่อน

<blockquote>[ ] -> Square brackets แสดง array<br>{ } -> Curly brackets แสดง object<br>" " -> Double quotes แสดง string เครื่องหมายเหล่านี้ใช้สำหรับ key names ใน JSON</blockquote>

structure ของ data เป็น API ที่ returns ค่าที่สำคัญเพราะมันมีอิทธิพลต่อการดึงค่าที่คุณต้องการ

click ปุ่ม `Get Message` เพื่อ load  freeCodeCamp Cat Photo API JSON ไปเป็น HTML

ในลักษณะแรหและสุดท้าย เราจะเห็นว่า JSON data มี square brackets `[ ]` หมายความว่า data แสดงเป็นแบบ array หาก JSON data มี curly `{` bracket แสดงว่าเป็น object 
เราจะสังเกตุเห็นว่ามันมี 3 objects โดยที่ JSON data มี array ของ 3 objects และแต่ละ object จะมีข้อมูลของรูปภาพของแมว

objects ประกอบไปด้วย "key-value pairs" ที่แบ่งแยกด้วย comma จากตัวอย่างของรูปแมว object แรกจะเป็น `"id":0` โดยมี `id`  เป็น และค่า `0` เป็น corresponding value เหมือนกับค่า keys สำหรับ `imageLink`, `altText`, และ `codeNames` object ของรูปแมวแต่บะรูปจะมี keys ที่เหมือนกันแต่มี corresponding value ที่ต่างกัน

ส่วนที่น่าสนใจคือ "key-value pair" ใน object คือ `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]` โดย`codeNames` เป็น key ที่มีค่าเป็น array ของ strings 3 ค่า 

อย่าลืมวิธีการ access data ใน arrays และ objects โดยที่ Arrays ขะใช้ bracket notation เพื่อ access specific index ของแต่ละ item ส่วน Objects สามารถใช้ได้ทั้ง bracket หรือ dot notation เพื่อเข้าถึงค่าของ property เช่น จะ prints the `altText` property แรกของรูปแมว ให้ใช้ตัวอย่างดังข้างล่าง

```js
console.log(json[0].altText);
```

console จะแสดง string `A white cat wearing a green helmet shaped melon on its head.`.

# --instructions--

สำหรับแมวที่มี `id` เป็น 2 ให้แสดงค่าออกทาง console โดยแสดงค่าลำดับที่สองของ `codeNames` array
ควรใช้ bracket และ dot notation กับ object (saved variable `json`) เพื่อเข้าถึงค่า

# --hints--

ควรใช้ bracket และ dot notation เพื่อเข้าถึง code name และ print `Loki` ออกมาทาง console

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line

        // Add your code above this line
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
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
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
