---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: "https://scrimba.com/c/c437DcV"
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

ผู้ใช้ screen reader (โปรแกรมอ่านหน้าจอ) สามารถตั้งค่า screen reader เพื่อควบคุมเนื้อหาที่อ่านได้หลายแบบ
การตั้งค่านี้รวมถึงการไปยัง landmark element, ไปยัง main content, หรืออ่านสรุปของหน้านั้นจาก heading
อีกตัวเลือกหนึ่งคืออ่านแค่ลิงก์ที่อยู่บนหน้า

ถ้าใช้วิธีนี้ screen reader จะอ่านข้อความที่เป็นลิงก์ หรือข้อความในแท็ก anchor (`a`)
การที่มีลิงก์แบบ "click here" หรือ "read more" ไม่ค่อยช่วยอะไร
ดังนั้น ให้ใช้ข้อความที่สั้น กระชับ และมีความหมายในตัวเองภายในแท็ก `a` เพื่อผู้ใช้จะได้ข้อมูลที่เป็นประโยชน์มากขึ้น

# --instructions--

ตอนนี้ข้อความในลิงก์ ที่ Camper Cat ใส่ไว้ ไม่ค่อยมีประโยชน์อะไร ถ้าไม่ได้ดูบริบทรอบข้าง
ให้ย้ายแท็ก anchor (`a`) โดยนำไปครอบข้อความ `information about batteries` แทนที่จะเป็น `Click here`

# --hints--

ต้องย้ายแท็ก anchor `a` ที่ครอบคำว่า `Click here for ` ไปครอบคำว่า `information about batteries` แทน

```js
assert(
  $("a")
    .text()
    .match(/^(information about batteries)$/g)
);
```

แท็ก `a` ต้องมี attribute `href` ที่มีค่าเป็น string `""`

```js
assert($("a").attr("href") === "");
```

ต้องมีแท็กปิดของ `a` ด้วย

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near.
      <a href="">Click here</a> for information about batteries
    </p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near. Click
      here for
      <a href="">information about batteries</a>
    </p>
  </article>
</body>
```
