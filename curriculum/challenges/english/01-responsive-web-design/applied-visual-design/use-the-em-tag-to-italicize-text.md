---
id: 587d781a367417b2b2512ab9
title: Use the em Tag to Italicize Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJRBtp'
forumTopicId: 301078
dashedName: use-the-em-tag-to-italicize-text
---

# --description--

เราสามารถใช้แท็ก `em` เพื่อทำให้ข้อความดูเด่นขึ้นมาได้ (`em` ย่อมาจาก emphasize)
เมื่อเราใช้แท็ก `em` เบราว์เซอร์จะทำให้ CSS ของ element นั้นเป็น `font-style: italic;`

# --instructions--

ให้ใช้แท็ก `em` ครอบข้อความในแท็ก `p` เพื่อทำให้ข้อความเป็นตัวเอียง

# --hints--

ต้องใช้แท็ก `em` ในโค้ด

```js
assert($('em').length == 1);
```

`em` ต้องครอบแค่ข้อความในแท็ก `p` (โดยไม่ครอบแท็ก `p` ไปด้วย) 

```js
assert($('p').children().length == 1 && $('em').children().length == 2);
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
        Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
        <strong>Stanford University</strong>.
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
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
        <em
          >Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
          <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
