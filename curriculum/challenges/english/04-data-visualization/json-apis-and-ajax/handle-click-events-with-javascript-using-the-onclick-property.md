---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

หากคุณต้องการให้โค้ดของคุณทำงานต่อเมื่อหน้าของคุณโหลดเสร็จแล้ว ให้ attach JavaScript event ไปที่ document โดยจะเรียกว่า`DOMContentLoaded`

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

สามารถใช้ตัวจัดการเหตุการณ์ที่อยู่ภายใน `DOMContentLoaded` functionและจัดการ `onclick` event เมื่อ user click ที่ element id `getMessage` โดยสามารถเพิ่มโค้ดได้ตามตัวอย่างข้างล่างนี้

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

เพิ่ม click event ภายใน `DOMContentLoaded` function สำหรับ element id `getMessage`

# --hints--

ควรใช้ `document.getElementById` method เพื่อเลือก `getMessage` element.

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

ควรเพิ่ม `onclick` event 

```js
assert(typeof document.getElementById('getMessage').onclick === 'function');
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line


    // Add your code above this line
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
    // Add your code below this line
    document.getElementById('getMessage').onclick = function(){ };
    // Add your code above this line
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
