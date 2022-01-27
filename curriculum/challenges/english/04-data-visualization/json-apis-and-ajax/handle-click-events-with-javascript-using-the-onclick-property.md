---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
forumTopicId: 301503
dashedName: handle-click-events-with-javascript-using-the-onclick-property
---

# --description--

ถ้าคุณต้องการให้โค้ดของคุณทำงานต่อเมื่อหน้าของคุณโหลดเสร็จแล้ว ให้ `addEventListener` ไปยัง document โดย event นี้ชื่อว่า `DOMContentLoaded`

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

แล้วในฟังก์ชัน `DOMContentLoaded` นี้ คุณค่อยเพิ่ม event handler เพื่อจัดการ event `onclick` 
ในตัวอย่างด้านล่างจะเป็นการใช้ event handler ที่จะทำงานเมื่อผู้ใช้คลิกที่ element ที่มี id เป็น `getMessage`:

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

ในฟังก์ชัน `DOMContentLoaded` ให้เพิ่ม click event ที่จะทำงานเมื่อคลิกที่ element ที่มี id เป็น `getMessage`

# --hints--

ต้องใช้ method `document.getElementById` เพื่อเลือก element ที่มี id เป็น `getMessage` 

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

ต้องเพิ่ม event `onclick`

```js
assert(typeof document.getElementById('getMessage').onclick === 'function');
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    // เขียนโค้ดใต้บรรทัดนี้


    // เขียนโค้ดเหนือบรรทัดนี้
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
    // เขียนโค้ดใต้บรรทัดนี้
    document.getElementById('getMessage').onclick = function(){ };
    // เขียนโค้ดเหนือบรรทัดนี้
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
