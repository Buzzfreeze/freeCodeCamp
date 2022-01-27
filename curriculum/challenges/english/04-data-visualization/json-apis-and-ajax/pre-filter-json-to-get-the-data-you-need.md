---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
forumTopicId: 18257
dashedName: pre-filter-json-to-get-the-data-you-need
---

# --description--

ถ้าคุณไม่ต้องการแสดงรูปน้องแมวทั้งหมดที่ได้มาจาก Cat Photo API คุณสามารถกรอง (filter) ข้อมูลใน JSON ก่อนที่จะทำการวนอ่านค่าได้

ถ้าข้อมูล JSON เป็น array คุณจะใช้ method `filter` เพื่อกรองเฉพาะรูปน้องแมวที่มีคีย์ `id` เป็นค่าอื่นนอกจาก `1` ได้

ลองดูตัวอย่างการใช้ `filter`:

```js
json = json.filter(function(val) {
  return (val.id !== 1);
});
```

# --instructions--

ให้ทำการกรองรูปน้องแมวโดยใช้ method `filter` กับข้อมูล JSON โดยให้แสดงเฉพาะรูปน้องแมวที่*ไม่*ได้มี `id` เป็น `1`

# --hints--

ต้องใช้ method `filter`

```js
assert(code.match(/json\.filter/g));
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
        let json = JSON.parse(req.responseText);
        let html = "";
        // เขียนโค้ดใต้บรรทัดนี้


        // เขียนโค้ดเหนือบรรทัดนี้
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
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
      req.onload = function(){
        let json = JSON.parse(req.responseText);
        let html = "";
        // เขียนโค้ดใต้บรรทัดนี้
        json = json.filter(function(val) {
          return (val.id !== 1);
        });

        // เขียนโค้ดเหนือบรรทัดนี้
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
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
