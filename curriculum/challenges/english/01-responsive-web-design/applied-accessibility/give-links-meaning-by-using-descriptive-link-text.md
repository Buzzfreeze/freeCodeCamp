---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

ผู้ใช้ screen reader มีตัวช่วยที่หลากหลายสำหรับประเภทข้อความที่จะให้มันอ่าน
ตัวเลือกเหล่านี้รวมถึงการข้าม landmark elements, กระโดดไปที่ main content, หรืออ่านสรุปของเพจนั้นจาก heading
อีกตัวเลือกหนึ่งคือฟังแค่ลิงค์ที่ใช้ง่ายได้บนเพจ

Screen readers ทำแบบนี้โดยการอ่านข้อความที่ลิงค์ หรือสิ่งที่อยู่ระหว่าง anchor (`a`) tags
การที่มีลิงค์ของลิสต์จาก "click here"  หรือ "read more" links ไม่ค่อยช่วยอะไร
ดังนั้น จงใช้ข้อความที่สั้นกระชับและอธิบายได้ดีภายใน `a` tags เพื่อผู้ใช้จะได้ข้อมูลที่เป็นประโยชน์มากขึ้น


# --instructions--

ข้อความที่ถูกลิงค์ที่ Camper Cat ใช้อยู่นั้นไม่อธิบายอะไรเลยหากปราศจากบริบทรอบข้าง
จงทำให้ anchor (`a`) tag มันเก็บข้อความ `information about batteries` แทนที่จะเป็น `Click here`.

# --hints--

คุณควรย้าย anchor `a` tags จากบริเวณรอบ ๆ คำว่า `Click here` เพื่อคลุมรอบ ๆ คำว่า `information about batteries`.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

`a` element ควรมี `href` attribute อันหนึ่งที่เก็บ string `""`

```js
assert($('a').attr('href') === '');
```

`a` element ควรมีแท็กปิด

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```
