---
id: 587d781a367417b2b2512ab7
title: Use the strong Tag to Make Text Bold
challengeType: 0
videoUrl: "https://scrimba.com/c/ceJNBSb"
forumTopicId: 301080
dashedName: use-the-strong-tag-to-make-text-bold
---

# --description--

เราสามารถใช้แท็ก `strong` เพื่อทำให้ข้อความเป็นตัวหนาได้
ซึ่งปกติจะใช้เพื่อดึงความสนใจมาที่ข้อความหรือสัญลักษณ์ที่มีความสำคัญ

เมื่อเราใช้แท็ก `strong` เบราว์เซอร์จะทำให้ CSS ของ element นั้นเป็น `font-weight: bold;`

# --instructions--

ให้ใช้แท็ก `strong` ครอบข้อความ `Stanford University` ที่อยู่ข้างในแท็ก `p` (ไม่ต้องครอบจุด)

# --hints--

ต้องเพิ่มแท็ก `strong` ลงไปในโค้ด

```js
assert($("strong").length == 1);
```

แท็ก `strong` ต้องซ้อนอยู่ในแท็ก `p`

```js
assert($("p").children("strong").length == 1);
```

ข้อความในแท็ก `strong` ต้องเป็นคำว่า `Stanford University`

```js
assert(
  $("strong")
    .text()
    .match(/^Stanford University\.?$/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google was founded by Larry Page and Sergey Brin while they were Ph.D.
        students at Stanford University.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google was founded by Larry Page and Sergey Brin while they were Ph.D.
        students at
        <strong>Stanford University</strong>.
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```
