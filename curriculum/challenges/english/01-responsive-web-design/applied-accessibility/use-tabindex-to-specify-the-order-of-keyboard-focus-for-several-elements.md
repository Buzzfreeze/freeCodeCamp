---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/cmzRRcb"
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

attribute `tabindex` จะใช้ระบุลำดับที่ element ถูกเลือก เมื่อมีการกดปุ่ม tab บนคีย์บอร์ดได้ด้วย
โดยเราจะต้องกำหนดค่าของ attribute นี้เป็นจำนวนเต็มบวก

ถ้ากำหนดให้ `tabindex="1"` จะทำให้ element นี้ถูกโฟกัสเป็น element แรก
หลังจากนั้น ก็จะย้ายไปโฟกัสที่ element อื่นๆ ตามลำดับของ `tabindex` (2, 3 เป็นต้น) เมื่อวนครบแล้ว ก็จะกลับไปโฟกัสที่ `tabindex="0"`

การที่เราใช้วิธีนี้ จะทำให้เบราว์เซอร์เลิกใช้วิธีแบบปกติ (เรียงลำดับ element ที่โฟกัสจากบนลงล่างตามโค้ดของ HTML)
ซึ่งถ้าคุณกำหนดค่าไว้ไม่ดี อาจจะทำให้ผู้ใช้งงได้ เราขอให้คุณจัดการให้ดีเวลาใช้ attribute นี้

ลองดูตัวอย่าง:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

เว็บของนาย Camper Cat มีช่องค้นหาในหน้า Inspirational Quotes ที่เขาตั้งใจจะวางไว้ที่มุมขวาบนโดยใช้ CSS
เขาต้องการให้ `input` ของการค้นหา และ form control สำหรับส่ง `input` เป็น 2 element แรกที่จะถูกโฟกัสเมื่อกด tab

ให้เพิ่ม attribute `tabindex` ใน `search` `input` และกำหนดค่าเป็น `1` และเพิ่ม attribute `tabindex` ใน `submit` `input` และกำหนดค่าเป็น `2`

อีกเรื่องที่ควรรู้คือ เบราว์เซอร์บางตัวอาจย้ายลำดับการโฟกัสไปที่ element ที่ถูกคลิก
เราเลยเพิ่ม element ที่มีคลาสเป็น overlay มาให้ เพื่อให้คุณคลิก element อื่นบนหน้าเว็บไม่ได้ และจะทำให้การกด tab ของคุณ เริ่มที่ `tabindex=1` เสมอ

# --hints--

แท็ก `search` `input` ต้องมี attribute `tabindex`

```js
assert($("#search").attr("tabindex"));
```

แท็ก `submit` `input` ต้องมี attribute `tabindex`

```js
assert($("#submit").attr("tabindex"));
```

attribute `tabindex` ของแท็ก `search` `input` ต้องมีค่าเป็น 1

```js
assert($("#search").attr("tabindex") == "1");
```

attribute `tabindex` ของแท็ก `submit` `input` ต้องมีค่าเป็น 2

```js
assert($("#submit").attr("tabindex") == "2");
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

    <input type="search" name="search" id="search" />
    <input type="submit" name="submit" value="Submit" id="submit" />
  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>
      &ldquo;There's no Theory of Evolution, just a list of creatures I've
      allowed to live.&rdquo;<br />
      - Chuck Norris
    </p>
  </blockquote>
  <blockquote>
    <p>
      &ldquo;Wise men say forgiveness is divine, but never pay full price for
      late pizza.&rdquo;<br />
      - TMNT
    </p>
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

    <input tabindex="1" type="search" name="search" id="search" />
    <input
      tabindex="2"
      type="submit"
      name="submit"
      value="Submit"
      id="submit"
    />
  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>
      &ldquo;There's no Theory of Evolution, just a list of creatures I've
      allowed to live.&rdquo;<br />
      - Chuck Norris
    </p>
  </blockquote>
  <blockquote>
    <p>
      &ldquo;Wise men say forgiveness is divine, but never pay full price for
      late pizza.&rdquo;<br />
      - TMNT
    </p>
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
