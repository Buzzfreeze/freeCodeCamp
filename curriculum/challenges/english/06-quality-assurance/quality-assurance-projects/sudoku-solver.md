---
id: 5e601bf95ac9d0ecd8b94afd
title: Sudoku Solver
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://sudoku-solver.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-sudoku-solver/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

- ให้เขียน puzzle logic ทั้งหมดใน `/controllers/sudoku-solver.js`
  - ฟังก์ชัน `validate` ต้องรับค่าเป็น string ของ puzzle และตรวจสอบเพื่อดูว่ามี รืยีะ เป็นตัวอักษรที่ถูกต้องทั้งหมด 81 ตัวหรือไม่
  - ฟังก์ชัน `check` ต้องตรวจสอบข้อมูล *ปัจจุบัน* ของกระดาน
  - ฟังก์ชัน `solve` ต้องระบุค่าทั้งหมดของตัวเลขที่อยู่ในกระดาน sudoku ออกมา คุณต้องเขียน logic เพื่อลงตัวเลขครบทุกตัวในกระดานให้ได้อย่างถูกต้อง
- ให้เขียน logic ของการ route ทั้งหมดใน `/routes/api.js`
- ดูไฟล์ `puzzle-strings.js` ใน `/controllers` สำหรับตัวอย่างกระดาน sudoku ที่แอปพลิเคชันควรแก้ได้
- หากต้องการใช้ test ให้ตั้งค่า `NODE_ENV` เป็น `test` (โดยไม่มีเครื่องหมายคำพูด) ในไฟล์ `.env`
- หากต้องการ test ในคอนโซล ให้ใช้คำสั่ง `npm run test` หากต้องการเปิดคอนโซล Replit ให้กด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์ "open shell" 

เขียนการทดสอบ logic ต่อไปนี้ใน `tests/1_unit-tests.js`:

- logic ที่ใช้จัดการเมื่อ string ของ sudoku ทั้ง 81 ตัวอักษรถูกต้อง
- logic ที่ใช้จัดการเมื่อ string ของ sudoku ไม่ถูกต้อง (ไม่ใช่ 1-9 หรือ `.`)
- logic ที่ใช้จัดการเมื่อ string ของ sudoku มีความยาวไม่ถึง 81
- logic ที่ใช้จัดการตำแหน่งแถวที่ถูกต้อง
- logic ที่ใช้จัดการตำแหน่งแถวที่ไม่ถูกต้อง
- logic ที่ใช้จัดการตำแหน่งคอลัมน์ที่ถูกต้อง
- logic ที่ใช้จัดการตำแหน่งคอลัมน์ที่ไม่ถูกต้อง
- logic ที่ใช้จัดการตาราง (region) ที่ถูกต้อง (ตาราง 3x3)
- logic ที่ใช้จัดการตารางที่ไม่ถูกต้อง (ตาราง 3x3)
- test เมื่อส่ง string ของ sudoku ที่ถูกต้อง ไปในฟังก์ชันที่ใช้หาคำตอบ (solver)
- test เมื่อส่ง string ของ sudoku ที่ไม่ถูกต้อง ไปในฟังก์ชันที่ใช้หาคำตอบ
- Solver ต้องคืนค่ามาเป็นตาราง sudoku ที่กรอกตัวเลขทั้งหมดครบแล้ว 

เขียนการทดสอบต่อไปนี้ใน  `tests/2_functional-tests.js`

- การแก้ sudoku เมื่อส่ง string ของ sudoku ที่ถูกต้องเข้าไป: POST คำขอไปที่ `/api/solve`
- การแก้ sudoku เมื่อไม่ส่ง string ของ sudoku เข้าไป: POST คำขอไปที่ `/api/solve`
- การแก้ sudoku เมื่อส่ง string ของ sudoku ที่ไม่ถูกต้องเข้าไป: POST คำขอไปที่ `/api/solve`
- การแก้ sudoku เมื่อส่ง string ของ sudoku ที่ไม่ครบเข้าไป: POST คำขอไปที่ `/api/solve`
- การแก้ sudoku เมื่อส่ง string ของ sudoku ที่ไม่สามารถแก้ไขได้เข้าไป: POST คำขอไปที่ `/api/solve`
- ตรวจสอบตัวเลขที่ลงในกระดาน โดยส่งค่าครบทุกฟิลด์: POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีค่าผิดตำแหน่งเดียว: POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีค่าผิดหลายตำแหน่ง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีค่าผิดทุกตำแหน่ง: โพสต์คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน โดยไม่ระบุฟิลด์ที่บังคับ:  POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีตัวอักษรที่ไม่ถูกต้อง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีความยาวไม่ถูกต้อง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ที่มีพิกัดตำแหน่งที่ไม่ถูกต้อง: POST คำขอไปที่`/api/check`
- ตรวจสอบตัวเลขที่ลงในกระดาน ด้วยค่าตำแหน่งที่ไม่ถูกต้อง: POST คำขอไปที่ `/api/check` 

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

สามารถส่ง `POST` request ไปยัง `/api/solve` โดยใช้ form data ที่มีฟิลด์ `puzzle` (เป็น string) ได้ โดยฟิลด์นี้จะเป็นผสมกันระหว่างตัวเลข (1-9) และจุด `.` เพื่อแสดงถึงช่องว่าง และจะต้องคืนค่าเป็น object ที่มี property `solution` เป็นค่าของตาราง sudoku ที่มีตัวเลขครบทุกตัว 

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

หาก object ที่ส่งไปยัง `/api/solve` ไม่มี `puzzle` จะต้องคืนค่าเป็น `{ error: 'Required field missing' }` 

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

หาก puzzle ที่ส่งไปยัง `/api/solve` มีค่าที่ไม่ใช่ตัวเลขหรือจุด จะต้องคืนค่าเป็น `{ error: 'Invalid characters in puzzle' }` 

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

หาก puzzle ที่ส่งไปยัง `/api/solve` มีความยาวไม่เท่ากับ 81 ตัวอักษร จะต้องคืนค่าเป็น `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const input =
    '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Expected puzzle to be 81 characters long';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

หาก puzzle ที่ส่งไปยัง `/api/solve` ไม่ถูกต้อง หรือไม่สามารถหาคำตอบได้ จะต้องคืนค่าเป็น  `{ error: 'Puzzle cannot be solved' }`

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

สามารถส่ง `POST` request ไปยัง `/api/check` ได้ โดยส่งเป็น object ที่มี propperty `puzzle`, `coordinate` และ `value` โดยที่ `coordinate` คือตัวอักษร A-I ที่ใช้ระบุแถว ตามด้วยตัวเลข 1-9 ที่ใช้ระบุคอลัมน์ และ `value` คือตัวเลขตั้งแต่ 1-9 

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

response ที่ได้จากการส่ง `POST` request ไปยัง `/api/check` จะเป็น object ที่มี property `valid` เป็น `true` ถ้าตัวเลขในตำแหน่งที่ระบุถูกต้อง และจะเป็น `false` ถ้าเลขนั้นผิด และถ้าเลขผิด object ที่ส่งคืนมาจะมี property `conflict` ซึ่งเป็น array ที่มีสตริง `"row"` , `"column"` และ/หรือ `"region"`  ทั้งนี้ขึ้นอยู่กับว่าตำแหน่งใดไม่ถูกต้อง 

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

ถ้า `value` ที่ส่งไปยัง `/api/check` มีค่าใน `puzzle` ใน `coordinate` นั้นแล้ว จะต้องคืนค่าเป็น object ที่มี property `valid` เป็น `true` ถ้า `value` ถูก 

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

ถ้า `puzzle` ที่ส่งไปยัง `/api/check` มีค่าที่ไม่ใช่ตัวเลขหรือจุด จะต้องคืนค่าเป็น `{ error: 'Invalid characters in puzzle' }` 

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

ถ้า `puzzle` ที่ส่งไปยัง `/api/check` มีความยาวไม่เท่ากับ 81 ตัวอักษร จะต้องคืนค่าเป็น `{ error: 'Expected puzzle to be 81 characters long' }` 

```js
async (getUserInput) => {
  const input =
    '9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

ถ้า object ที่ส่งไปยัง `/api/check` ไม่มี property `puzzle`, `coordinate`  หรือ `value` จะต้องคืนค่าเป็น `{ error: Required field(s) missing }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field(s) missing';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

ถ้า `coordinate` ที่ส่งไปยัง `api/check` ไม่ถูกต้อง จะต้องคืนค่าเป็น`{ error: 'Invalid coordinate'}`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinate = 'XZ18';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

ถ้า `value` ที่ส่งไปยัง `/api/check` ไม่ใช่ตัวเลขระหว่าง 1 ถึง 9 จะต้องคืนค่าเป็น `{ error: 'Invalid value' }` 

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const value = 'X';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

unit test ทั้งหมด 12 รายการต้องเสร็จสมบูรณ์ และผ่าน ให้ไปดูที่ `/tests/1_unit-tests.js` เพื่อดู Test ที่ต้องเขียน

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const units = getTests.filter((el) => el.context.includes('UnitTests'));
    assert.isAtLeast(units.length, 12, 'At least 12 tests passed');
    units.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
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

functional test ทั้ง 14 รายการต้องเสร็จสมบูรณ์และผ่าน ให้ไปดูที่ `/tests/2_functional-tests.js` เพื่อดูฟังก์ชันที่ต้องเขียน

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const funcs = getTests.filter((el) =>
      el.context.includes('Functional Tests')
    );
    assert.isAtLeast(funcs.length, 14, 'At least 14 tests passed');
    funcs.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
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
