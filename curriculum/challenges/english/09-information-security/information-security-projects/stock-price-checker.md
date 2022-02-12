---
id: 587d824a367417b2b2512c44
title: Stock Price Checker
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

ลองสร้างแอปแบบ full stack โดยใช้ JavaScript โดยให้แอปมีฟังก์ชันเหมือนกับ: <https://stock-price-checker.freecodecamp.rocks/>

เนื่องจาก API ราคาหุ้นที่เชื่อถือได้ทั้งหมดต้องใช้ API Key เราจึงสร้างวิธีแก้ปัญหาชั่วคราว โดยให้ใช้ [Link นี้](https://stock-price-checker-proxy.freecodecamp.rocks/) เพื่อดึงข้อมูลราคาหุ้นโดยที่ไม่ต้องลงทะเบียนคีย์ของคุณเอง

ให้วิธีทำแบบฝึกหัดในบทเรียนนี้ โดยเลือกจากวิธีด้านล่างนี้:

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยก็ได้

# --instructions--

1. ตั้งค่า `NODE_ENV` ให้เป็น `test` โดยต้องไม่ใส่เครื่องหมายคำพูด และเก็บค่า connection string ของ MongoDB ใน `DB` 
2. ให้เขียนโค้ดใน `routes/api.js` หรือสร้าง handler/controller
3. ให้เพิ่มฟีเจอร์ด้านความปลอดภัยต่างๆ ในไฟล์ `server.js`
4. คุณจะต้องเขียน test ฟังก์ชันต่างๆ ทั้งหมดใน `tests/2_functional-tests.js`

**Note** เกี่ยวกับความเป็นส่วนตัว: เงื่อนไขในแบบทดสอนนี้กำหนดให้ส่งได้ 1 ไลค์ต่อ 1 IP คุณจึงจำเป็นต้องเก็บค่าของ IP address 
ทำให้คุณต้องปฏิบัติตามกฎหมายความเป็นส่วนตัวของข้อมูล (เช่น PDPA) 
คุณจะใช้วิธีขออนุญาตผู้ใช้ เพื่อบันทึกข้อมูลก็ได้ 
แต่การทำให้ข้อมูลนนั้นระบุตัวตนเจ้าของไม่ได้จะง่ายกว่า 
สำหรับแบบทดสอบนี้ เราให้คุณหาวิธีที่ทำให้ใช้ IP ระบุตัวตนไม่ได้ ก่อนบันทึกลงในฐานข้อมูล 
วิธีหนึ่งที่ใช้ได้ คือการเปลี่ยนตัวเลขบางตัวใน IP เป็น 0

เขียน test ข้างล่างนี้ใน `tests/2_functional-tests.js`:

- การดูหุ้นหนึ่งหุ้น: ส่ง GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นหนึ่งหุ้นและกดไลค์หุ้นนั้น: ส่ง GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นเดิมและกดไลค์หุ้นนั้นอีกครั้ง: ส่ง GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นสองหุ้นพร้อมกัน: ส่ง GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นสองหุ้นและกดไลค์ทั้งสองหุ้น: ส่ง GET request ไปยัง `/api/stock-prices/`

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

ต้องตั้งค่า Content Security Policies ให้โหลดสคริปต์และ CSS ได้จากเซิร์ฟเวอร์ของคุณเท่านั้น

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

ต้องส่ง `GET` request ไปยัง `/api/stock-prices` ได้ โดยส่งชื่อของหุ้น (หุ้นในตลาด NASDAQ) เป็น query parameter ชื่อ `stock` ซึ่งจะคืนค่าเป็น object ที่มี property ชื่อว่า `stockData`

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

property `stockData` จะมี `stock` ที่เป็นชื่อของหุ้น ซึ่งมีค่าเป็น string และ `price` ที่เป็นราคาของหุ้น ซึ่งมีค่าเป็น number และ `likes` ที่เป็นจำนวนไลค์ ซึ่งมีค่าเป็น number

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

ในการส่งข้อมูล ถ้าระบุฟิลด์ `like` เป็น `true` (Boolean) จะต้องเป็นการเพิ่มไลค์ให้หุ้นนั้น ซึ่ง 1 IP จะไลค์ได้แค่ 1 ครั้ง

```js

```

ถ้าส่งค่าเป็นหุ้นสอง 2 ตัว ค่าที่คืนกลับมาจะเป็น array ที่มีข้อมูลของหุ้นทั้งสองหุ้นนั้น และใน object `stockData` ทั้งสองตัว property `likes` จะเปลี่ยนเป็น `rel_likes` (ความแตกต่างของยอดไลค์ของหุ้นทั้งสอง) แทน

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

การทดสอบฟังก์ชันทั้งหมด 5 รายการต้องเสร็จสมบูรณ์ และ test ผ่าน

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
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
