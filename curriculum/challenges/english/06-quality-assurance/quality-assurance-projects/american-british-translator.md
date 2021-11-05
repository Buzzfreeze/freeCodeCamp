---
id: 5e601c0d5ac9d0ecd8b94afe
title: American British Translator
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

สร้างแอพ full stack JavaScript ซึ่งมีฟังก์ชันการทำงานคล้าย link นี้ : <https://american-british-translator.freecodecamp.rocks/> ทำงานใน project นี้ เขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้: 

- ทำการ clone repo [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) เพื่อสร้าง project ในนั้นให้สำเร็จ
- ใช้  project เริ่มต้นจาก [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator) เพื่อสร้าง project ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public  จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

# --instructions--

- logic ทั้งหมดสามารถเข้าไปดูที่ `/components/translator.js`
- สร้าง `/api/translate' ใน  route `/routes/api.js`
- สร้าง unit/functional tests ทั้งหมดใน `tests/1_unit-tests.js` และ `tests/2_functional-tests.js`
- ดูไฟล์ JavaScript ใน `/components` สำหรับการสะกดคำและคำศัพท์ต่างๆ ที่แอปพลิเคชันควรแปลออกมา
- หากต้องการ run code ทดสอบบน Replit ให้ตั้งค่า "NODE_ENV" เป็น "test" โดยตัดเครื่องหมายคำพูดออกในไฟล์ ".env" ออกไป
- ในการ run code ทดสอบใน console ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/1_unit-tests.js`: 

- แปลประโยค `Mangoes are my favorite fruit.` เป็นภาษาอังกฤษ
- แปลประโยค `I ate yogurt for breakfast.` เป็นภาษาอังกฤษ
- แปลประโยค `We had a party at my friend's condo.` เป็นภาษาอังกฤษ
- แปลประโยค `Can you toss this in the trashcan for me?` เป็นภาษาอังกฤษ
- แปลประโยค `The parking lot was full.` to British English
- แปลประโยค `Like a high tech Rube Goldberg machine.` เป็นภาษาอังกฤษ
- แปลประโยค `To play hooky means to skip class or work.` เป็นภาษาอังกฤษ
- แปลประโยค `No Mr. Bond, I expect you to die.` เป็นภาษาอังกฤษ
- แปลประโยค `Dr. Grosh will see you now.` เป็นภาษาอังกฤษ
- แปลประโยค `Lunch is at 12:15 today.` เป็นภาษาอังกฤษ
- แปลประโยค `We watched the footie match for a while.` เป็นภาษาอังกฤษ
- แปลประโยค `Paracetamol takes up to an hour to work.` เป็นภาษาอังกฤษ
- แปลประโยค `First, caramelise the onions.` เป็นภาษาอังกฤษ
- แปลประโยค `I spent the bank holiday at the funfair.` เป็นภาษาอังกฤษ
- แปลประโยค `I had a bicky then went to the chippy.` เป็นภาษาอังกฤษ
- แปลประโยค `I've just got bits and bobs in my bum bag.` เป็นภาษาอังกฤษ
- แปลประโยค `The car boot sale at Boxted Airfield was called off.` เป็นภาษาอังกฤษ
- แปลประโยค `Have you met Mrs Kalyani?` เป็นภาษาอังกฤษ
- แปลประโยค `Prof Joyner of King's College, London.` เป็นภาษาอังกฤษ
- แปลประโยค `Tea time is usually around 4 or 4.30.` เป็นภาษาอังกฤษ
- เน้นคำแปลในประโยค `Mangoes are my favorite fruit.`
- เน้นคำแปลในประโยค `I ate yogurt for breakfast.`
- เน้นคำแปลในประโยค `We watched the footie match for a while.`
- เน้นคำแปลในประโยค `Paracetamol takes up to an hour to work.`

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`: 

- การแปลช่องข้อความและ text : ให้ POST คำขอไปที่ `/api/translate`
- การแปล text แล locale field ไม่ถูกต้อง: ให้ POST คำขอไปที่ `/api/translate`
- การแปล โดยไม่มี text : ให้ POST ไปที่ `/api/translate`
- การแปล โดยไม่มี locale field: ให้ POST ไปที่ `/api/translate`
- การแปล text ว่าง: ให้ POST ไปที่ `/api/translate`
- การแปล text ที่ไม่ต้องการการแปล: ให้ POST ไปที่ `/api/translate` 

# --hints--

ตัวอย่างที่ให้ใน project โดยที่ไม่ใช่ URL ตัวอย่าง 

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

ผู้เรียนสามารถ 'POST' ที่ '/api/translate' ด้วยเนื้อหาที่มี 'text' พร้อม text ที่จะแปล และ 'locale' ด้วย 'american-to-british' หรือ 'british-to-american' โดย object ที่คืนค่าควรมี `text` และ `translation` ที่ส่งมาพร้อมข้อความที่แปลแล้ว 

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

ใน route`/api/translate` ควรสามารถจัดการกับเวลาที่เขียนเป็นภาษาอังกฤษในรูปแบบแบบอเมริกัน และอังกฤษ  เช่น ten thirty (สิบ-สามสิบ) รูปแบบอังกฤษ จะเขียนเป็น "10.30" และของอเมริกัน  จะเขียนเป็น "10:30" // และ "span" element ครอบ string เกี่ยวกับเวลาทั้งหมด เช่น `<span class="highlight">10:30</span>` 

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

ใน route`/api/translate` ควรจัดการกับชื่อย่อนำหน้า/คำให้เกียรติ ในภาษาอังกฤษรูปแบบอเมริกันและอังกฤษแบบอังกฤษ เช่น Doctor Wright ในอังกฤษจะใช้ว่า "Dr Wright" ส่วนอเมริกันจะใช้ว่า "Dr. Wright" // ดูได้ที่ `/components/american-to-british-titles.js` สำหรับชื่อต่างๆ ที่ควรจัดการ 

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

ครอบการสะกดหรือคำศัพท์ที่แปลแล้วด้วย tag `<span class="highlight">...</span>` เพื่อให้ปรากฏเป็นสีเขียว 

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

หากไม่มีช่องที่ต้องกรอกอย่างน้อย 1 ช่อง ให้ส่งคืนค่า `{ error: 'Required field(s) missing' }` 

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

หาก `text` ว่างเปล่า ให้ส่งคืนค่า `{ error: 'No text to translate' }`

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

หาก `locale` ไม่ตรงกับหนึ่งในสองภาษาที่ระบุ ให้ส่งคืนค่า `{ error: 'Invalid value for locale field' }` 

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

หาก `text` ไม่ต้องการการแปล ให้ส่งคืนค่า `"Everything looks good to me!"` สำหรับค่า `translation`

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

การทดสอบ (unit test) ทั้งหมด 24 หน่วยเสร็จสมบูรณ์ และผ่าน ให้ไปดูที่ `/tests/1_unit-tests.js` สำหรับดูวิธีการเขียน Test ที่คาดหวังให้ผู้เรียนควรเขียน
 
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

การทดสอบ functional test ทั้ง 6 แบบ เสร็จสมบูรณ์และผ่าน ให้ไปดูที่ `/tests/2_functional-tests.js` สำหรับฟังก์ชันที่ให้ผู้เรียนควรเขียน

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
