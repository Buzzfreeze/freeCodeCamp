---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
forumTopicId: 301500
dashedName: change-text-with-click-events
---

# --description--

เมื่อ click event ทำงาน เราจะใช้ JavaScript เพื่ออัปเดท HTML element ได้

ในโค้ดตัวอย่างด้านล่าง เมื่อผู้ใช้คลิกที่ปุ่ม `Get Message` โค้ดของเราจะไปเปลี่ยนข้อความใน element ที่มี class เป็น `message` เพื่อแสดงข้อความ `Here is the message`

```js
document.getElementsByClassName('message')[0].textContent="Here is the message";
```

# --instructions--

ให้เขียนโค้ดใน event `onclick` เพื่อเปลี่ยนข้อความใน element `message` ให้แสดงเป็น `Here is the message` แทน

# --hints--

ต้องใช้ method `document.getElementsByClassName` เพื่อเลือก element ที่มี class เป็น `message` และเปลี่ยน `textContent` ให้เป็น string ตามเงื่อนไข

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // เขียนโค้ดใต้บรรทัดนี้


      // เขียนโค้ดเหนือบรรทัดนี้
    }
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
      // เขียนโค้ดใต้บรรทัดนี้
      document.getElementsByClassName('message')[0].textContent = "Here is the message";
      // เขียนโค้ดเหนือบรรทัดนี้
    }
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
