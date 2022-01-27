---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJVkcZ"
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

element `audio` ของ HTML5 เป็นการสื่อว่าเนื้อหาที่ครอบอยู่มีเสียง
โดยเนื้อหาที่เป็นเสียงก็จำเป็นจะต้องมีคำอธิบายเป็นตัวอักษร เพื่อที่ผู้พิการทางการได้ยินจะได้รู้ว่าเสียงนั้นคืออะไร
โดยคำอธิบายนี้เราจะระบุเป็นข้อความไปเลย หรือใช้เป็นลิงก์ให้กดไปดูก็ได้

เราจะใช้ attribute `controls` กับแท็ก `audio` ได้
โดย attribute นี้จะทำให้เบราว์เซอร์เห็นการควบคุมการ เล่น หยุด ฯลฯ และยังช่วยใช้ใช้คีย์บอร์ดควบคุมเสียงได้ด้วย
โดย attribute นี้จะรับค่าเป็น boolean แปลว่า เราไม่ต้องกำหนดค่าให้ attribute นี้ก็ได้ แค่เราพิมพ์ชื่อของ attribute นี้ไว้ก็พอแล้ว

ลองดูตัวอย่าง:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

**Note:** ปกติแล้วเนื้อหาที่เป็น multimedia (เสียง วีดีโอ ฯลฯ) จะมีทั้งภาพและเสียง ซึ่งทำให้ต้องแสดง subtitle หรือแคปชั่นไปพร้อมๆกับการเล่นไฟล์ multimedia นั้น เพื่อที่จะทำให้ผู้ใช้ที่มีปัญหาด้านการมองเห็นและการได้ยิน เข้าใจเนื้อหาได้
โดยทั่วไปแล้วโปรแกรมเมอร์จะไม่ได้เป็นคนรับผิดชอบเรื่องการสร้างคำอธิบาย หรือ subtitle แต่ก็จำเป็นต้องรู้ว่าจะใช้อย่างไร

# --instructions--

ถึงเวลาพักโค้ดของนาย Camper Cat ไว้ก่อน
เราขอแนะนำให้คุณรู้จักกับนาย Zersiax (@zersiax) ผู้เป็นเซียนด้าน accessibility และก็เป็นผู้ใช้ screen reader ด้วย
นาย Zersiax ได้อัดเสียงการทำงานของ screen reader ของเขาไว้
ให้คุณเพิ่ม `audio` element หลัง `p` และใช้ attribute `controls`
หลังจากนั้นให้ใส่แท็ก `source` ไว้ในแท็ก `audio` โดยตั้งค่าให้ `src` เป็น `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` และตั้งค่าให้ `type` เป็น `"audio/mpeg"`

เมื่อทำเสร็จ ให้ลองกดเล่นคลิปเสียง เพื่อลองฟังเสียงที่อ่านโดยใช้ screen reader

**Note:** ถ้าคุณลองฟังคลิปเสียงคุณอาจตกใจในความเร็ว แต่ความเร็วแบบนี้ถือเป็นเรื่องปกติในการใช้ screen reader

# --hints--

ต้องมีแท็ก `audio` ในโค้ด

```js
assert($("audio").length === 1);
```

ต้องมีแท็กปิดของ `audio`

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

ต้องใช้ attribute `controls` ในแท็ก `audio`

```js
assert($("audio").attr("controls"));
```

ต้องมีแท็ก `source` หนึ่งอัน

```js
assert($("source").length === 1);
```

แท็ก `source` ต้องอยู่ในแท็ก `audio`

```js
assert($("audio").children("source").length === 1);
```

ค่าของ `src` ในแท็ก `source` ต้องตรงกับลิงก์ที่เรามีให้

```js
assert(
  $("source").attr("src") ===
    "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3"
);
```

attribute `type` ของแท็ก `source` ต้องเป็น `audio/mpeg`

```js
assert($("source").attr("type") === "audio/mpeg");
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source
        src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3"
        type="audio/mpeg"
      />
    </audio>
  </main>
</body>
```
