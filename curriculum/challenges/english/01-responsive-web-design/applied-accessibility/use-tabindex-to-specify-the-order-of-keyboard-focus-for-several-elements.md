---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` attribute ได้ระบุลำดับการ tab ของ elementไว้เช่นกัน
สิ่งนี้ทำได้โดยการกำหนดค่าที่เป็นค่าบวกให้ attribute

การกำหนดค่า `tabindex="1"` จะนำ keyboard focus มาที่ elementนั้นเป็นลำดับแรก
หลังจากนั้น มันจะวนตามลำดับที่ถูกกำหรดไว้ในค่าของ `tabindex` (2, 3 เป็นต้น), ก่อนที่จะย้ายไปยังส่วนที่  `tabindex="0"` 

มันสำคัญที่ต้องจำไว้ว่าเมื่อลำดับการกดถูกตั้งไว้แบบนี้
มันจะเขียนทับ (override) ลำดับที่เป็นค่าเริ่มต้น (ที่ใช้ HTML source) สิ่งนี้อาจทำให้ผู้ใช้ที่ตั้งใจจะเริ่มดูจากด้านบนสับสนได้
เทคนิคนี้อาจจะจำเป็นในบางกรณี แต่ในเชิงของความสามารถในการเข้าถึง ให้ระวังก่อนที่จะใช้มัน

นี่คือตัวอย่าง:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat มีช่องค้นหาในหน้า Inspirational Quotes ของเขาที่เขาตั้งใจจะวางมันไว้ที่มุมขวาบนด้วย CSS
เขาต้องการให้ `input` ของการค้นหา และ form controls สำหรับส่ง `input` เป็น item 2 ตัวแรกในลำดับการกด
จงเพิ่ม `tabindex` attribute 1 อันและกำหนดค่า  `1` ให้ `search` `input`, และอีก 1`tabindex` attribute ก็กำหนดค่า `2` ให้ `submit` `input`.

อีกสิ่งที่ต้องจำไว้ก็คือ browser บางอันอาจจะพากลุ่มไปที่ตรงกลางของลำดับการกดเมื่อมี  element หนึ่งถูกคลิก
element ได้ถูกเพิ่มเข้าไปที่หน้านั้นเพื่อให้คุณมั่นใจว่าจะเริ่มที่จุดเริ่มต้นของลำดับการกดของคุณ 

# --hints--

โค้ดของคุณควรเพิ่ม `tabindex` attribute 1 อันให้กับ `search` `input` tag.

```js
assert($('#search').attr('tabindex'));
```

คุณควรเพิ่ม `tabindex` attribute อันหนึ่งให้กับ `submit` `input` tag.

```js
assert($('#submit').attr('tabindex'));
```

คุณควรกำหนดให้ `tabindex` attribute ของ `search` `input` tag มีค่าเป็น 1

```js
assert($('#search').attr('tabindex') == '1');
```

คุณควรกำหนดให้ `tabindex` attribute ของ `submit` `input` tag มีค่าเป็น 2

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
