---
id: 587d7fae367417b2b2512be6
title: Render Images from Data Sources
challengeType: 6
forumTopicId: 18265
dashedName: render-images-from-data-sources
---

# --description--

จากที่ผ่านมา เราจะเห็นว่า object ใน array ของ JSON มีคีย์ชื่อ `imageLink` ที่เก็บ URL ของรูปน้องแมวอยู่

เมื่อเราวนอ่าน objects จะอ่านค่าของ property `imageLink` นี้เพื่อนำรูปไปแสดงใน `img` element ได้

ตามตัวอย่างนี้:

```js
html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
```

# --instructions--

ให้เพิ่มแท็ก `img` โดยให้มี attribute `src` เป็นค่าของ property `imageLink` และ attribute `alt` เป็นค่าของ `altText`

# --hints--

ต้องใช้ property `imageLink` เพื่อแสดงรูป

```js
assert(code.match(/val\.imageLink/g));
```

attribute `alt` ของรูปต้องมีค่าของ property `altText`

```js
assert(code.match(/val\.altText/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // เขียนโค้ดใต้บรรทัดนี้


          // เขียนโค้ดเหนือบรรทัดนี้
          html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
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
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // เขียนโค้ดใต้บรรทัดนี้
          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
          // เขียนโค้ดเหนือบรรทัดนี้
          html += "</div><br>";
        });
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
