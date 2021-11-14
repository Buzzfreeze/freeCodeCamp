---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

`audio` element ของ HTML5 ช่วยสื่อว่ามันเป็น content ที่เป็นเสียงหรือ audio stream ใน markup ของคุณ
เนื้อหาที่เป็นเสียงก็จำเป็นจะต้องมี text alternative เพื่อที่ผู้พิการทางการได้ยินได้จะเข้าถึงได้
สิ่งนี้สามารถทำได้ด้วยข้อความข้าง ๆ ที่อยู่บนเพจหรือลิงค์ที่พาไปยัง transcript

`audio` tag สนับสนุนการทำงานของ `controls` attribute
สิ่งนี้จะแสดงให้ browser เห็น play, pause, และคำสั่งอื่น ๆ และยังช่วยในเรื่องของ keyboard functionality
มันคือ boolean attribute ตัวหนึ่งซึ่งแปลว่ามันไม่จำเป็นต้องมีค่าข้างในเพียงแค่ตั้งค่าให้มัน on เราก็จะเห็นแท็กนี้แล้ว

นี่คือตัวอย่าง :

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Note:** เนื้อหาที่เป็น multimedia มันจะมีเนื้อหาที่เป็นภาพและเสียง มันต้องการ captions และ transcript ที่ทำงานพร้อมเพรียงกัน ซึ่งทำให้ผู้ใช้ที่มีปัญหาด้านการมองเห็นและการได้ยินสามารถเข้าถึงได้ 
โดยทั่วไปแล้วนักพัฒนาเว็บไซต์จะไม่ได้เป็นคนรับผิดชอบในส่วนของการสร้าง captions และ transcript แต่จำเป็นรู้วิธีใส่มันเข้าไป

# --instructions--

ถึงเวลาที่เราจะหลุดพ้นจาก Camper Cat และรู้จักกับผู้เข้าค่าย Zersiax (@zersiax) , ผู้ที่สนับสนุนในการของการเข้าถึงและเป็นผู้ใช้ screen reader 
เพื่อที่จะได้ยินคลิปจาก screen reader จงเพิ่ม `audio` element หลัง `p` และจงใส่ `controls` attribute
หลังจากนั้นจงใส่ `source` tag เข้าไปใน `audio` tags พร้อมกับ `src` attribute โดยตั้งไปที่ `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` ส่วน`type` attribute ก็ตั้งค่าให้เป็น `"audio/mpeg"`.

**Note:** คลิปเสียงอาจจะพูดเร็วและยากที่จะเข้าใจ แต่มันคือความเร็วปกติของผู้ใช้ screen reader 

# --hints--

โค้ดของคุณควรมี `audio` tag

```js
assert($('audio').length === 1);
```

`audio` element ควรมีแท็กปิด

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

`audio` tag ควรมี `controls` attribute.

```js
assert($('audio').attr('controls'));
```

คุณควรมี `source` tag อันหนึ่ง

```js
assert($('source').length === 1);
```

`source` tag ควรอยู่ใน `audio` tags

```js
assert($('audio').children('source').length === 1);
```

ค่าของ `src` attribute ของ `source` tag ควรจะตรงกับลิงค์ที่อยู่ใน instructions 

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

คุณควรเพิ่ม `type` attribute ไว้ใน `source` tag โดยกำหนดให้มันมีค่าเป็น audio/mpeg

```js
assert($('source').attr('type') === 'audio/mpeg');
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
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
