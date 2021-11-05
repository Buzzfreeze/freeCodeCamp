---
id: 5e601bf95ac9d0ecd8b94afd
title: Sudoku Solver
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

สร้างแอพ full stack JavaScript ซึ่งมีฟังก์ชันการทำงานคล้าย link นี้ : <https://sudoku-solver.freecodecamp.rocks/>  ทำงานใน project นี้ เขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้: 

- ทำการ clone repo [GitHub นี้](https://github.com/freecodecamp/boilerplate-project-sudoku-solver) เพื่อสร้าง project ในนั้นให้สำเร็จ
- ใช้  project เริ่มต้นจาก [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver) เพื่อสร้าง project ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

# --instructions--

- puzzle logic ทั้งหมด สามารถไปที่ `/controllers/sudoku-solver.js`
  - ฟังก์ชัน `validate` ควรใช้อักขระปริศนาที่กำหนด และตรวจสอบเพื่อดูว่ามีอักขระที่ถูกต้อง 81 ตัวสำหรับอินพุตหรือไม่
  - ฟังก์ชัน `check` ควรตรวจสอบกับสถานะ *ปัจจุบัน* ของกระดาน
  - ฟังก์ชัน `solve` ควรจัดการกับการแก้อักขระปริศนาที่ถูกต้อง ไม่ใช่แค่อินพุตทดสอบและวิธีแก้ปัญหา คาดหวังให้ผู้เรียนเขียน logic เพื่อแก้ปัญหานี้
- logic การกำหนดเส้นทางทั้งหมดสามารถไปที่ `/routes/api.js`
- ดูไฟล์ `puzzle-strings.js` ใน `/controllers' สำหรับปริศนาตัวอย่างที่แอปพลิเคชันควรแก้
- หากต้องการchallenge ในหน้านี้ ให้ตั้งค่า "NODE_ENV" เป็น "test" โดยไม่มีเครื่องหมายคำพูดในไฟล์ ".env"
- ในการรันการทดสอบในคอนโซล ให้ใช้คำสั่ง `npm run test` หากต้องการเปิดคอนโซล Replit ให้กด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์ "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/1_unit-tests.js`:

- logic จัดการอักขระปริศนาที่ถูกต้อง 81 อักขระ
- logic จัดการกับอักขระปริศนาที่มีอักขระที่ไม่ถูกต้อง (ไม่ใช่ 1-9 หรือ `.`)
- logic จัดการกับอักขระปริศนาที่มีความยาวไม่เกิน 81 อักขระ
- logic จัดการตำแหน่งแถวที่ถูกต้อง
- logic จัดการตำแหน่งแถวที่ไม่ถูกต้อง
- logic จัดการตำแหน่งคอลัมน์ที่ถูกต้อง
- logic จัดการตำแหน่งคอลัมน์ที่ไม่ถูกต้อง
- logic จัดการตำแหน่งที่ถูกต้อง (ตาราง 3x3)
- logic จัดการกับตำแหน่งที่ไม่ถูกต้อง (ตาราง 3x3)
- อักขระปริศนาที่ถูกต้องผ่านตัวแก้
- อักขระปริศนาที่ไม่ถูกต้อง ล้มเหลวในการแก้
- Solver คืนค่าบอกวิธีแก้ปัญหาสำหรับ puzzle ที่ไม่เสร็จสมบูรณ์ 

เขียนการทดสอบต่อไปนี้ใน  `tests/2_functional-tests.js`

- แก้ puzzle ด้วยอักขระตัวต่อที่ถูกต้อง: POST คำขอไปที่ `/api/solve`
- แก้ puzzle ด้วยอักขระปริศนาที่ขาดหายไป: POST คำขอไปที่ `/api/solve`
- แก้ puzzle ด้วยอักขระที่ไม่ถูกต้อง: POST คำขอไปที่ `/api/solve`
- แก้ puzzle ที่มีความยาวไม่ถูกต้อง: POST คำขอไปที่ `/api/solve`
- แก้ puzzle ที่ไม่สามารถแก้ไขได้: POST คำขอไปที่ `/api/solve`
- ตรวจสอบตำแหน่ง puzzle ที่มีทุกช่อง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่ขัดแย้งตำแหน่งเดียว: POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่ขัดแย้งกันหลายตำแหน่ง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่ขัดแย้งของตำแหน่งทั้งหมด: โพสต์คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่ไม่มีฟิลด์บังคับ:  POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่มีอักขระที่ไม่ถูกต้อง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่งของ puzzle ที่มีความยาวไม่ถูกต้อง: POST คำขอไปที่ `/api/check`
- ตรวจสอบตำแหน่ง puzzle ที่มีพิกัดตำแหน่งที่ไม่ถูกต้อง: POST คำขอไปที่`/api/check`
- ตรวจสอบตำแหน่ง puzzle ด้วยค่าตำแหน่งที่ไม่ถูกต้อง: POST คำขอไปที่ `/api/check` 

# --hints--

ผู้เรียนควรจัดทำ project ของผู้เรียนเอง โดยไม่ใช้ URL ตัวอย่าง 

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

ผู้เรียนสามารถ `POST` `/api/solve` ด้วยข้อมูลในแบบฟอร์มที่มี `puzzle` ซึ่งจะเป็น string ที่ประกอบด้วยผสมกันระหว่างตัวเลข (1-9) และจุด `.` เพื่อแสดงถึงช่องว่าง object ที่ส่งคืนจะมีคุณสมบัติ `solution` puzzle ที่แก้ไขแล้ว 

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

หาก object ที่ส่งไปยัง `/api/solve' ไม่มี `puzzle' ค่าที่ส่งคืนจะเป็น `{ error: 'Required field missing' }` 

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

หาก puzzle ที่ส่งไปยัง `/api/solve` มีค่าที่ไม่ใช่ตัวเลขหรือจุด ค่าที่ส่งคืนจะเป็น `{ error: 'Invalid characters in puzzle' }` 

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

หาก puzzle ที่ส่งไปยัง `/api/solve` มากกว่าหรือน้อยกว่า 81 อักขระ ค่าที่ส่งคืนจะเป็น `{ error: 'Expected puzzle to be 81 characters long' }`

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

หาก puzzle ที่ส่งไปยัง `/api/solve` ไม่ถูกต้องหรือไม่สามารถแก้ไขได้ ค่าที่ส่งคืนจะเป็น  `{ error: 'Puzzle cannot be solved' }`

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

ผู้เรียนสามารถ "POST" เป็น "/api/check" object ที่มี `puzzle`, `coordinate` และ `value` โดยที่ `coordinate`  คือตัวอักษร A-I ระบุแถว ตามด้วยตัวเลข 1-9 ที่ระบุคอลัมน์ และ `value` คือตัวเลขตั้งแต่ 1-9 

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

ค่าที่ส่งคืนจาก `POST` ถึง `/api/check`" จะเป็น object ที่มีคุณสมบัติ `valid`ซึ่งเป็น `true` หากวางตัวเลขไว้ที่พิกัดที่ให้ไว้ และจะเป็น `false` หากตัวเลขนั้นไม่ใช่ หากเป็นเท็จ object ที่ส่งคืนจะมีคุณสมบัติ `conflict ซึ่งเป็น array ที่มีสตริง `"row"` , `"column"` และ/หรือ `"region"`  ทั้งนี้ขึ้นอยู่กับว่าตำแหน่งใดไม่ถูกต้อง 

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

หาก `value` ที่ส่งไปยัง "/api/check" ถูกวางไว้ใน `puzzle`บน `coordinate` นั้น ค่าที่ส่งคืนจะเป็น object ที่มีคุณสมบัติ `valid` โดยมี `true`หาก `value`  ไม่ขัดแย้งกัน 

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

หาก puzzle ที่ส่งไปยัง `/api/check` มีค่าที่ไม่ใช่ตัวเลขหรือจุด ค่าที่ส่งคืนจะเป็น `{ error: 'Invalid characters in puzzle' }` 

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

หากpuzzle ที่ส่งไปยัง `/api/check' นั้นมากกว่าหรือน้อยกว่า 81 อักขระ ค่าที่ส่งคืนจะเป็น `{ error: 'Expected puzzle to be 81 characters long' }` 

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

หาก object ที่ส่งไปยัง "/api/check" ไม่มี `puzzle`, `coordinate`  หรือ `value`ค่าที่ส่งคืนจะเป็น `{ error: Required field(s) missing }`

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

หากพิกัดที่ส่งไปยัง `api/check` ไม่ชี้ไปที่ grid cell ที่มีอยู่ ค่าที่ส่งคืนจะเป็น`{ error: 'Invalid coordinate'}`

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

หาก `value` ที่ส่งไปยัง `/api/check` ไม่ใช่ตัวเลขระหว่าง 1 ถึง 9 ค่าที่ส่งคืนจะเป็น `{ error: 'Invalid value' }` 

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

การทดสอบ (unit test) ทั้งหมด 12 หน่วยเสร็จสมบูรณ์ และผ่าน ให้ไปดูที่ `/tests/1_unit-tests.js` สำหรับดูวิธีการเขียน Test ที่คาดหวังให้ผู้เรียนควรเขียน

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

การทดสอบ functional test ทั้ง 14 แบบ เสร็จสมบูรณ์และผ่าน ให้ไปดูที่ `/tests/2_functional-tests.js` สำหรับฟังก์ชันที่ให้ผู้เรียนควรเขียน

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
