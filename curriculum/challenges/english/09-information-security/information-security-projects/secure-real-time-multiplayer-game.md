---
id: 5e601c775ac9d0ecd8b94aff
title: Secure Real Time Multiplayer Game
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

ลองสร้างเกมแบบ 2D Real Time Multiplayer โดยใช้ HTML Canvas API และ [Socket.io](https://socket.io/) โดยให้เกมมีฟังก์ชันเหมือนกับ: <https://stock-price-checker.freecodecamp.rocks/>

ให้วิธีทำแบบฝึกหัดในบทเรียนนี้ โดยเลือกจากวิธีด้านล่างนี้:

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยก็ได้

# --instructions--

**Note**: ในการเขียนโค้ดตาม user story คุณจะต้องใช้ `helmet@^3.21.3`
ซึ่งหมายความว่าคุณต้องใช้ docs ของ Helmet รุ่นเก่า เพื่อเขียนโค้ดตาม user story

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา


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

ผู้เล่นทุกคนต้องมีอวาตาร์

```js

```

ผู้เล่นแต่ละคนจะเป็น object ที่ถูกสร้างโดย class `Player` ในไฟล์  `Player.mjs`

```js

```

player object แต่ละตัวจะต้องมี property อย่างน้อยตามนี้ unique `id`, `score` และ coordinate `x` กับ `y` ที่แสดงถึงตำแหน่งปัจจุบันของผู้เล่น

```js

```

ให้เกมต้องมีต้องมีไอเทมที่ให้ผู้เล่นเก็บได้ (collectible item) อย่างน้อย 1 ชนิด โดยให้เขียน class `Collectible` ใน `Collectible.mjs` เพื่อสร้าง item นี้

```js

```

object ของไอเทมที่ถูกสร้างโดย class `Collectible` จะต้องมี unique `id`, `value` และ coordinate `x` กับ `y` ที่แสดงถึงตำแหน่งปัจจุบันของไอเทมนั้น

```js

```

ผู้เล่นสามารถใช้ปุ่ม WASD และ/หรือ ลูกศร เพื่อขยับอวาตาร์ของตัวเองได้ โดยให้เขียน method `movePlayer` ใน `Player.mjs` ตามเงื่อนไขนี้

```js

```

method `movePlayer` ต้องรับ argument 2 ตัว คือสตริง "up", "down", "left", หรือ "right" และตัวเลขจำนวนพิกเซลที่ผู้เล่นเคลื่อนที่ไป โดย `movePlayer` จะต้องไปเปลี่ยน coordinate `x` กับ `y` ของ player object ที่ถูกเรียกใช้

```js

```

ต้องใช้คะแนนของผู้เล่นไปกำหนดอันดับของผู้เล่นจากผู้เล่นทั้งหมด โดยให้เขียน method `calculateRank` ใน class `Player` เพื่อทำตามเงื่อนไขนี้

```js

```

method `calculateRank` ต้องรับค่าเป็น array ของ object ที่เป็นผู้เล่นที่เล่นอยู่ทั้งหมด และคืนค่าเป็นสตริง `Rank: currentRanking/totalPlayers` เช่น สมมติว่าในเกมมีผู้เล่นสองคน หากผู้เล่น A มี 3 คะแนน และ ผู้เล่น B มี 5 คะแนน method `calculateRank` ของผู้เล่น A ต้องคืนค่าเป็น `Rank: 2/2`

```js

```

ผู้เล่นสามารถเก็บไอเทมได้ โดยให้เขียน method `collision` เพื่อทำตามเงื่อนไขนี้

```js

```

method `collision` ต้องรับ argument เป็น object ของไอเทม ถ้าอวาตาร์ของผู้เล่นเก็บไอเทมได้ method `collision` ต้องคืนค่าเป็น `true`

```js

```

ผู้เล่นทุกคนจะได้รับการอัพเดทข้อมูลทั้งหมดอยู่ตลอด

```js

```

ผู้เล่นสามารถยกเลิกการเชื่อมต่อจากเกมได้ตลอดเวลา

```js

```

ต้องป้องกันไม่ให้ client เดาหรือ siff MIME type ได้

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

ต้องป้องกันการโจมตีจาก cross-site scripting (XSS)

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

ข้อมูลของเว็บไซต์เราต้องไม่ถูกแคชใน client

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

ให้เก็บค่าของ header x-powered-by เป็น "PHP 7.4.3" ถึงแม้ว่าจริงๆแล้วจะไม่ได้ใช้ PHP ก็ตาม (เป็นมาตรการรักษาความปลอดภัย)

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
