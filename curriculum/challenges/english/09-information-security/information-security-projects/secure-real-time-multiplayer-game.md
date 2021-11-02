---
id: 5e601c775ac9d0ecd8b94aff
title: Secure Real Time Multiplayer Game
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

การพัฒนาเกม 2D real time multiplayer โดยใช้ HTML Canvas API และ [Socket.io](https://socket.io/) ที่มีฟังก์ชันเหมือนกับ: <https://secure-real-time-multiplayer-game.freecodecamp.rocks/> ในการทำโปรเจคนี้จะทำให้คุณเขียนโค้ด ที่มี method ต่างๆ ด้านล่างนี้: 

- Clone [Github repo นี้](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/) แล้วนำมาใช้กับโปรเจคของคุณบนเครื่องของคุณเอง
- ให้ใช้ [โปรเจค  Replit starter ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game) กับโปรเจคนี้
- ใช้ตัวสร้างเว็บไซต์ที่คุณต้องการในการทำโปรเจคนี้ อย่าลืมรวมไฟล์ทั้งหมดจาด Github repo ของเราลงไปด้วย
เมื่อทำโปรเจคนี้เสร็จแล้ว ให้อัปโหลดงานเดโมที่ใช้งานได้ไปบนโฮสต์ที่ไหนก็ได้ที่เป็น public หลังจากนั้นส่ง URL นั้นมาในช่อง `Solution Link` และคุณสามารถส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยหรือไม่ก็ได้

# --instructions--

**Note**: ต้องใช้ `helmet@^3.21.3` สำหรับ user stories. ซึ่งหมายความว่าคุณต้องใช้ Helmet’s docs ของเวอร์ชันก่อนหน้านี้สำหรับข้อมูลในการทำ user stories ให้สำเร็จ

# --hints--

คุณสามารถสร้างโปรเจ็คของคุณเองได้โดยไม่ต้องใช้ URL ตัวอย่าง


```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

ผู้เล่นหลายคนสามารถเชื่อมต่อกับเซิร์ฟเวอร์และเล่นได้

```js

```

ผู้เล่นแต่ละคนมีอวาตาร์

```js

```

ผู้เล่นแต่ละคนจะถูกแทนค่าด้วย object ที่ถูกสร้างโดย `Player` class ในไฟล์  `Player.mjs`

```js

```

ให้อย่างน้อย player object แต่ละอันจะต้องมี `id` เฉพาะ, `score` และ `x` กับ `y` coordinates ที่แสดงถึงตำแหน่งที่อยู่ปัจจุบันของผู้เล่น

```js

```

ให้เกมต้องมีต้องมีชนิดของ collectible item อย่างน้อย 1 ชนิด ให้สร้าง `Collectible` class ใน `Collectible.mjs` ให้สำเร็จเพื่อทำให้เกิด collectible item นี้

```js

```

ให้อย่างน้อย collectible item object แต่ละอันที่ถูกสร้างโดย `Collectible` class ควรจะต้องมี `id` เฉพาะ, `value`, `x` กับ `y` coordinates ที่แสดงถึงตำแหน่งที่อยู่ปัจจุบันของไอเทมนั้น

```js

```

ผู้เล่นสามารถใช้คีย์ WASD และ/หรือ ลูกศร เพื่อเคลื่อนที่อวาตาร์ของตัวเองด้วย เขียน `movePlayer` method ใน `Player.mjs` ให้สำเร็จเพื่อทำให้เงื่อนไขนี้เกิดขึ้น

```js

```

`movePlayer` method ควรยอมรับ 2 argument คือ สตริงของ "up", "down", "left", หรือ "right" และ และตัวเลขของจำนวนพิกเซลที่ตำแหน่งของผู้เล่นที่จะเคลื่อนไป `movePlayer` ควรจะปรับ `x` กับ `y` coordinates ของ player object ที่มันถูกเรียกใช้

```js

```

คะแนนของผู้เล่นควรใช้ในการคำนวณอันดับของผู้เล่นต่อผู้เล่นคนอื่นๆ เขียน `calculateRank` method ให้สำเร็จใน `Player` class เพื่อให้เงื่อนไขนี้เกิดขึ้น

```js

```

`calculateRank` method ควรยอมรับ array ของ object ที่แสดงถึงที่เชื่อมต่อกันทั้งหมด และ return สตริง `Rank: currentRanking/totalPlayers` ตัวอย่างเช่น สมมติว่าในเกมมีผู้เล่นสองคน หากผู้เล่น A มีคะแนนเท่ากับ 3 และ ผู้เล่นบีมี 5 คะแนน `calculateRank` สำหรับผู้เล่น A จะต้อง return `Rank: 2/2`

```js

```

ผู้เล่นสามารถรวบรวมกับ collectible item ได้ เขียน `collision` method ให้สำเร็จ เพื่อให้เงื่อนไขนี้เกิดขึ้น

```js

```

`collision` method ควรยอมรับ collectible item's object เป็น argument ถ้าอวาตาร์ของผู้เล่นรวมไอเทมได้ `collision` method ควร retrun `true`

```js

```

ผู้เล่นทุกคนจะได้รับการซิงค์

```js

```

ผู้เล่นสามารถยกเลิกการเชื่อมต่อจากเกมได้ตลอดเวลา

```js

```

ป้องกันไม่ให้ client พยายามเดา/เซาะหา MIME type

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

ป้องกันการโจมตีจาก cross-site scripting (XSS)

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

ไม่มีสิ่งใดจากเว็บไซต์ถูกแคชใน client

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

ในส่วน header ให้มีข้อความว่า the site is powered by "PHP 7.4.3" ถึงแม้ว่ามันจะไม่ก็ตาม (เป็นมาตรการรักษาความปลอดภัย)

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
