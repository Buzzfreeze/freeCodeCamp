---
id: 587d781b367417b2b2512abd
title: Adjust the Size of a Header Versus a Paragraph Tag
challengeType: 0
videoUrl: "https://scrimba.com/c/c3bRPTz"
forumTopicId: 301037
dashedName: adjust-the-size-of-a-header-versus-a-paragraph-tag
---

# --description--

ขนาดฟอนต์ของแท็ก header (`h1` ถึง `h6`) ควรจะใหญ่กว่าขนาดฟอนต์ของแท็ก `p`
การทำแบบนี้ จะทำให้ผู้ใช้เข้าใจระดับความสำคัญของสิ่งที่เห็นได้ดีขึ้น

คุณต้องใช้ property `font-size` เพื่อปรับขนาดของข้อความที่อยู่ใน element

# --instructions--

ให้ทำให้ขนาดของ heading ใหญ่กว่า paragraph อย่างชัดเจน
โดยเปลี่ยน `font-size` ของแท็ก `h4` ให้มีค่าเป็น 27 pixel

# --hints--

ต้องเพิ่ม property `font-size` ให้กับ `h4` element โดยกำหนดค่าให้เป็น 27 pixel

```js
assert($("h4").css("font-size") == "27px");
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
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
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were
          <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em
        >
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
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
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were
          <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em
        >
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
