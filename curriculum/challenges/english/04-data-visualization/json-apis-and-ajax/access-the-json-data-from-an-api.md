---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

ในแบบทดสอบที่แล้ว เราได้เห็นวิธีการดึงข้อมูล JSON จาก Cat Photo API ของเราไปแล้ว

ก่อนที่จะไปทำความเข้าใจข้อมูลที่ได้รับกลับมาจาก API คุณควรเข้าใจรูปแบบของ JSON ก่อน 
จำเรื่อง notation ของ JavaScript ได้มั้ย:

<blockquote>[ ] -> Square bracket หมายถึงข้อมูลที่เป็น array<br>{ } -> Curly bracket หมายถึงข้อมูลที่เป็น object<br>" " -> Double quote หมายถึงข้อมูลที่เป็น string และใช้เพื่อบอกชื่อของ key ใน JSON ด้วย</blockquote>

ความเข้าใจในโครงสร้างของข้อมูลที่ API ส่งกลับมาเป็นเรื่องสำคัญ เพราะว่าโครงสร้างข้อมูลนี้จะส่งผลถึงวิธีในการดึงข้อมูลที่คุณต้องการมาใช้

ในหน้าต่างด้านขวา ให้ลองคลิกปุ่ม `Get Message` เพื่อดึงข้อมูล JSON จาก Cat Photo API มาแสดงเป็น HTML

จะเห็นว่าตัวอักษรแรกและตัวอักษรสุดท้ายของข้อมูล JSON เป็น square bracket `[ ]` แปลว่าข้อมูลที่เราได้กลับมานี้เป็น array แต่ถ้าข้อมูล JSON นี้ถูกครอบด้วย curly bracket `{ }` ก็จะแปลว่าข้อมูลนี้เป็น object 
ให้ลองดูข้อมูลนี้ดีๆอีกครั้ง จะเห็นว่าในข้อมูลนี้มี object 3 ตัว 
แปลว่าข้อมูล JSON ที่เราได้มาจากการเรียก API ในครั้งนี้เป็น array ที่มี object 3 ตัวอยู่ด้านใน โดย object แต่ละตัวจะเก็บข้อมูลของรูปน้องแมว

จากที่คุณได้เรียกมาจากบทเรียนที่ผ่านมา object จะมีข้อมูลข้างในเป็น "key-value pair" ที่แบ่งด้วยคอมม่า 
จากตัวอย่างของรูปน้องแมว object แรกจะมี `"id":0` 
โดย `id` คือคีย์ (key) และ `0` คือค่า (value) ของคีย์นั้น 
แล้วใน object นี้ก็จะมีคีย์ตัวอื่นอีก คือ `imageLink`, `altText`, และ `codeNames` 
ใน object ของรูปน้องแมวแต่ละตัวจะมี คีย์ที่เหมือนกันแต่มีค่าของคีย์นั้นต่างกัน

ใน object แรกมีส่วนที่น่าสนใจอีกอย่างก็คือ `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]` โดย `codeNames` เป็นคีย์ที่มีค่าเป็น array ของ string 3 ตัว

ยังจำวิธีการเข้าถึงข้อมูลใน array และ object ได้อยู่ใช่ไหม? 
เราจะเข้าถึงข้อมูลใน array ได้โดยใช้ bracket notation และระบุตำแหน่ง (index) ของข้อมูลใน array ที่เราจะเข้าถึง 
และเราจะเข้าถึงข้อมูลใน Objects โดยใช้ bracket หรือ dot notation ก็ได้ โดยการระบุชื่อของ property ที่เราจะเข้าถึง
ในตัวอย่างด้านล่าง เราจะแสดง property `altText` ของรูปแมวรูปแรกใน console:
(ในตัวอย่างนี้เราเก็บข้อมูล JSON ไว้ในตัวแปรชื่อ json แล้ว)

```js
console.log(json[0].altText);
```

console จะแสดง string `A white cat wearing a green helmet shaped melon on its head.`

# --instructions--

ให้แสดง string ตัวที่สองของ array `codeNames` ใน console โดยดึงค่ามาจาก object ของรูปน้องแมวที่มี `id` เป็น `2`
ต้องใช้ bracket และ dot notation เพื่อดึงค่าออกมาจาก object (เราเก็บข้อมูลที่ได้จาก API ลงในตัวแปร `json` แล้ว)

# --hints--

ต้องใช้ bracket และ dot notation เพื่อเข้าถึง `codeNames` และแสดงคำว่า `Loki` บน console

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
        // เขียนโค้ดใต้บรรทัดนี้

        // เขียนโค้ดเหนือบรรทัดนี้
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
        // เขียนโค้ดใต้บรรทัดนี้
        console.log(json[2].codeNames[1]);
        // เขียนโค้ดเหนือบรรทัดนี้
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
