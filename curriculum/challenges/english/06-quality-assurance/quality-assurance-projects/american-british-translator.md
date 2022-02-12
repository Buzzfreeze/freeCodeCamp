---
id: 5e601c0d5ac9d0ecd8b94afe
title: American British Translator
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://american-british-translator.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

- ให้เขียน logic ทั้งหมดใน `/components/translator.js`
- ให้เขียน route `/api/translate` ทั้งหมดใน `/routes/api.js`
- ให้เขียน unit/functional test ทั้งหมดใน `tests/1_unit-tests.js` และ `tests/2_functional-tests.js`
- ดูไฟล์ JavaScript ใน `/components` สำหรับการสะกดคำและคำศัพท์ต่างๆ ที่แอปพลิเคชันควรแปลออกมาได้
- หากต้องการใช้ test บน Replit ให้ตั้งค่า `NODE_ENV` เป็น `test` (โดยไม่มีเครื่องหมายคำพูด) ในไฟล์ `.env`
- หากต้องการ test ในคอนโซล ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/1_unit-tests.js`: 

- แปลประโยค `Mangoes are my favorite fruit.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `I ate yogurt for breakfast.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `We had a party at my friend's condo.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `Can you toss this in the trashcan for me?` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `The parking lot was full.` to British English
- แปลประโยค `Like a high tech Rube Goldberg machine.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `To play hooky means to skip class or work.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `No Mr. Bond, I expect you to die.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `Dr. Grosh will see you now.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `Lunch is at 12:15 today.` เป็นภาษาอังกฤษแบบ British
- แปลประโยค `We watched the footie match for a while.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `Paracetamol takes up to an hour to work.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `First, caramelise the onions.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `I spent the bank holiday at the funfair.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `I had a bicky then went to the chippy.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `I've just got bits and bobs in my bum bag.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `The car boot sale at Boxted Airfield was called off.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `Have you met Mrs Kalyani?` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `Prof Joyner of King's College, London.` เป็นภาษาอังกฤษแบบ American
- แปลประโยค `Tea time is usually around 4 or 4.30.` เป็นภาษาอังกฤษแบบ American
- เน้นคำแปลในประโยค `Mangoes are my favorite fruit.`
- เน้นคำแปลในประโยค `I ate yogurt for breakfast.`
- เน้นคำแปลในประโยค `We watched the footie match for a while.`
- เน้นคำแปลในประโยค `Paracetamol takes up to an hour to work.`

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`: 

- การแปลโดยระบุฟิลด์ text และ locale ถูกต้อง: ส่ง POST request ไปยัง `/api/translate`
- การแปลโดยระบุฟิลด์ text ถูกต้อง แต่ locale ไม่ถูกต้อง: ส่ง POST request ไปยัง `/api/translate`
- การแปลโดยไม่ระบุฟิลด์ text : ส่ง POST request ไปยัง `/api/translate`
- การแปลโดยไม่ระบุฟิลด์ locale: ส่ง POST request ไปยัง `/api/translate`
- การแปลโดยส่ง text เป็น string ว่าง: ส่ง POST request ไปยัง `/api/translate`
- การแปลโดยส่ง text ที่ไม่จำเป็นต้องแปล: ส่ง POST request ไปยัง `/api/translate` 

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

สามารถส่ง `POST` request ไปยัง `/api/translate` ได้ โดยมีฟิลด์ `text` ที่มีข้อความที่จะแปล และฟิลด์ `locale` ที่มีค่าเป็น `american-to-british` หรือ `british-to-american` โดย object ที่คืนกลับมาจะเป็นมี property `text` ที่เป็นข้อความก่อนแปล และ `translation` ที่เป็นข้อความที่แปลแล้ว 

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

route `/api/translate` ต้องเปลี่ยนเวลาที่อยู่ในรูป British เป็น American ได้ เช่น ten thirty แบบ British จะเขียนเป็น "10.30" และแบบ American จะเขียนเป็น "10:30" และต้องใช้ element `span` ครอบ string ที่เป็นเวลา เช่น `<span class="highlight">10:30</span>` 

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ใน route`/api/translate` ต้องจัดการกับคำนำหน้าชื่อในแบบ British และแบบ American ได้ เช่น Doctor Wright แบบ British จะใช้เป็น "Dr Wright" ส่วนแบบ American จะใช้เป็น "Dr. Wright" ให้ดูที่ไฟล์ `/components/american-to-british-titles.js` สำหรับการจำดการคำนำหน้าชื่อ 

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ครอบคำที่แปลแล้วด้วย tag `<span class="highlight">...</span>` เพื่อให้เป็นตัวอักษรสีเขียว 

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ถ้าระบุฟิลด์ที่จำเป็นไม่ครบ ให้คืนค่าเป็น `{ error: 'Required field(s) missing' }` 

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ถ้าไม่ระบุ `text` ให้คืนค่าเป็น `{ error: 'No text to translate' }`

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ถ้า `locale` ไม่ตรงกับภาษาที่แปลได้ (`american-to-british` หรือ `british-to-american`) ให้คืนค่าเป็น `{ error: 'Invalid value for locale field' }` 

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ถ้า `text` ที่ระบุไม่จำเป็นต้องแปล ให้คืนค่าเป็น `"Everything looks good to me!"` ใน property `translation`

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

unit test ทั้ง 24 ตัวต้องเสร็จสมบูรณ์ และผ่าน ให้ไปดูที่ `/tests/1_unit-tests.js` เพื่อดู Test ที่ต้องเขียน
 
```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

functional test ทั้ง 6 แบบ ตัวต้องเสร็จสมบูรณ์ และผ่าน ให้ไปดูที่ `/tests/2_functional-tests.js` เพื่อดูฟังก์ชันที่ต้องเขียน

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
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
