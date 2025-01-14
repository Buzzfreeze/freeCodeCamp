---
id: 587d78aa367417b2b2512aec
title: Define the Head and Body of an HTML Document
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cra9bfP"
forumTopicId: 301096
dashedName: define-the-head-and-body-of-an-html-document
---

# --description--

คราวนี้มาลองจัดโค้ดของคุณให้เป็นระเบียบมากขึ้นอีก
โดยใช้ element `head` และ `body`
โดยข้อมูลใดๆ ที่เป็นรายละเอียดของหน้าเว็บจะต้องอยู่ในแท็ก `head`
และข้อมูลใดๆที่เป็นเนื้อหาของหน้านั้นที่จะต้องแสดงให้ผู้ใช้เห็น ก็จะอยู่ในแท็ก `body`

โดยปกติแล้ว element ที่เป็น metadata อย่างเช่น `link`, `meta`, `title`, และ `style` จะอยู่ใน `head` element

ลองดูตัวอย่างโครงสร้างของเว็บไซต์ที่ใช้วิธีนี้:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta />
  </head>
  <body>
    <div></div>
  </body>
</html>
```

# --instructions--

ให้แก้โค้ดใน editor โดยให้เพิ่ม `head` และ `body` อย่างละตัว
โดยต้องย้าย `title` ไปไว้ใน `head`
และย้าย `h1` และ `p` ไปไว้ใน `body`

# --hints--

ในเว็บต้องมี `head` element แค่หนึ่งตัว

```js
const headElems = code.replace(/\n/g, "").match(/\<head\s*>.*?\<\/head\s*>/g);
assert(headElems && headElems.length === 1);
```

ในเว็บต้องมี `body` element แค่หนึ่งตัว

```js
const bodyElems = code.replace(/\n/g, "").match(/<body\s*>.*?<\/body\s*>/g);
assert(bodyElems && bodyElems.length === 1);
```

`head` element ต้องเป็น child ของ `html` element

```js
const htmlChildren = code
  .replace(/\n/g, "")
  .match(/<html\s*>(?<children>.*)<\/html\s*>/);
let foundHead;
if (htmlChildren) {
  const { children } = htmlChildren.groups;

  foundHead = children.match(/<head\s*>.*<\/head\s*>/);
}
assert(foundHead);
```

`body` element ต้องเป็น child ของ `html` element

```js
const htmlChildren = code
  .replace(/\n/g, "")
  .match(/<html\s*>(?<children>.*?)<\/html\s*>/);
let foundBody;
if (htmlChildren) {
  const { children } = htmlChildren.groups;
  foundBody = children.match(/<body\s*>.*<\/body\s*>/);
}
assert(foundBody);
```

`title` element ต้องอยู่ใน `head` element

```js
const headChildren = code
  .replace(/\n/g, "")
  .match(/<head\s*>(?<children>.*?)<\/head\s*>/);
let foundTitle;
if (headChildren) {
  const { children } = headChildren.groups;
  foundTitle = children.match(/<title\s*>.*?<\/title\s*>/);
}
assert(foundTitle);
```

`h1` และ `p` element ต้องอยู่ใน ต้องอยู่ใน `body` element

```js
const bodyChildren = code
  .replace(/\n/g, "")
  .match(/<body\s*>(?<children>.*?)<\/body\s*>/);
let foundElems;
if (bodyChildren) {
  const { children } = bodyChildren.groups;
  const h1s = children.match(/<h1\s*>.*<\/h1\s*>/g);
  const ps = children.match(/<p\s*>.*<\/p\s*>/g);
  const numH1s = h1s ? h1s.length : 0;
  const numPs = ps ? ps.length : 0;
  foundElems = numH1s === 1 && numPs === 1;
}
assert(foundElems);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>
    Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare
    fangs at toy run hide in litter box until treats are fed. Go into a room to
    decide you didn't want to be in there anyway. I like big cats and i can not
    lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff. Meow i could pee on this if i had the energy for slap owner's face at
    5am until human fills food dish yet scamper. Knock dish off table head butt
    cant eat out of my own dish scratch the furniture. Make meme, make cute
    face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at
    your fat belly licks your face and eat grass, throw it back up kitty ipsum
    dolor sit amet, shed everywhere shed everywhere stretching attack your
    ankles chase the red dot, hairball run catnip eat the grass sniff.
  </p>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The best page ever</title>
  </head>
  <body>
    <h1>The best page ever</h1>
    <p>
      Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse,
      bare fangs at toy run hide in litter box until treats are fed. Go into a
      room to decide you didn't want to be in there anyway. I like big cats and
      i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere
      stretching attack your ankles chase the red dot, hairball run catnip eat
      the grass sniff. Meow i could pee on this if i had the energy for slap
      owner's face at 5am until human fills food dish yet scamper. Knock dish
      off table head butt cant eat out of my own dish scratch the furniture.
      Make meme, make cute face. Sleep in the bathroom sink chase laser but pee
      in the shoe. Paw at your fat belly licks your face and eat grass, throw it
      back up kitty ipsum dolor sit amet, shed everywhere shed everywhere
      stretching attack your ankles chase the red dot, hairball run catnip eat
      the grass sniff.
    </p>
  </body>
</html>
```
