---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

คุณได้เห็นวิธีการใช้ `if/else`, `&&` และ ternary operator (`condition ? expressionIfTrue : expressionIfFalse`) เพื่อใช้เป็นเงื่อนไขว่าจะเรนเดอร์อะไรแล้ว
แต่ก็ยังมีเรื่องสำคัญอีกเรื่องนึงที่เรายังไม่ได้พูดถึง ที่จะทำให้เราใช้ฟีเจอร์พวกนี้กับ props ได้ 
การใช้ props เพื่อเรนเดอร์โค้ดโดยใช้เงื่อนไขนั้น เป็นเรื่องปกติสำหรับคนที่เขียน React โดยเราจะใช้ค่าของ prop เพื่อเลือกว่าจะเรนเดอร์อะไรโดยอัตโนมัติ

ในแบบทดสอบนี้คุณจะต้องเขียน child component ให้เรนเดอร์ตาม props 
คุณจะใช้ ternary operator แต่ก็จะได้เห็นว่าการใช้เงื่อนไขแบบอื่น ก็มีประโยชน์เหมือนกัน

# --instructions--

เราได้เขียน component สองตัวใน code editor ไว้คร่าวๆให้แล้ว คือ:
parent ชื่อ `GameOfChance` และ child ชื่อ `Results` เราจะใช้ component สองตัวนี้สร้างเกมง่ายๆ ที่ user กดปุ่มเพื่อดูว่าชนะหรือแพ้

ขั้นแรก คุณจะต้องใช้ expression ที่จะคืนค่าออกมาแบบสุ่มทุกครั้งที่เรียกใช้ 
ซึ่งคุณจะใช้ method `Math.random()` ก็ได้ โดย method นี้จะคืนค่าเป็นตัวเลขตั้งแต่ `0` ถึง `1` (ไม่รวม 1) ทุกครั้งที่มีการเรียกใช้ 

ถ้าจะให้มีโอกาส ชนะ/แพ้ เป็น 50/50 ให้ใช้ `Math.random() >= .5` ใน expression นี้ 
ตามสถิติ expression นี้จะมีโอกาสคืนค่าเป็น `true` 50% และเป็น `false` อีก 50% 
ใน method render ให้เปลี่ยน `null` เป็น expression ตัวด้านบน

ตอนนี้คุณมี expression ที่สุ่มค่าได้แล้ว  
ต่อไป ให้เรนเดอร์ `Results` เป็น child ของ `GameOfChance` และส่ง `expression` เป็น prop ชื่อ `fiftyFifty` เข้าไปใน `Results`  
แล้วให้เขียน ternary expression ที่จะเรนเดอร์ `h1` ที่มีข้อความว่า `You Win!` หรือ `You Lose!` ตามค่าของ prop `fiftyFifty` ที่ถูกส่งมาจาก `GameOfChance`  
สุดท้ายให้เขียน method `handleClick()` ให้นับจำนวนตาที่เล่นให้ถูกต้อง เพื่อให้ user รู้ว่าเล่นไปกี่ตาแล้ว 

# --hints--

ต้องมี component `GameOfChance` และต้องเรนเดอร์ได้

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` ควรต้องมี `button` หนึ่งตัวอยู่ข้างใน

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` ต้องมี `Results` หนึ่งตัวอยู่ข้างใน และต้องส่ง prop ชื่อว่า `fiftyFifty` เข้าไปด้วย

```js
assert(
  Enzyme.mount(React.createElement(GameOfChance)).find('Results').length ===
    1 &&
    Enzyme.mount(React.createElement(GameOfChance))
      .find('Results')
      .props()
      .hasOwnProperty('fiftyFifty') === true
);
```

state ของ `GameOfChance` ต้องมี property ชื่อ `counter` และมีค่าเริ่มต้นเป็น `1`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

เมื่อ `GameOfChance` ถูกเรนเดอร์ไปยัง DOM ในตอนแรก แท็ก `p` ต้องมีข้อความข้างในเป็น `Turn: 1`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

ทุกครั้งที่คลิกปุ่ม counter ใน state เพิ่มขึ้นทีละ 1 และ `p` จะต้องแสดงข้อความ `Turn: N` โดยที่ `N` คือค่าของ counter ใน state

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    count: comp.state('counter'),
    text: comp.find('p').text()
  });
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  assert(
    _1_val.count === 2 &&
      _1_val.text === 'Turn: 2' &&
      _2_val.count === 3 &&
      _2_val.text === 'Turn: 3' &&
      _3_val.count === 4 &&
      _3_val.text === 'Turn: 4' &&
      _4_val.count === 5 &&
      _4_val.text === 'Turn: 5' &&
      _5_val.count === 6 &&
      _5_val.text === 'Turn: 6'
  );
})();
```

`h1` ของ `GameOfChance` ต้องแสดงผลเป็น `You Win!` หรือ `You Lose!` ทั้งตอนที่ `GameOfChance` ถูกเรนเดอร์ไปยัง DOM เป็นครั้งแรก และในทุกครั้งที่คลิกปุ่ม

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    h1: comp.find('h1').length,
    text: comp.find('h1').text()
  });
  const _1 = result();
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const __text = new Set([
    _1.text,
    _2_val.text,
    _3_val.text,
    _4_val.text,
    _5_val.text,
    _6_val.text,
    _7_val.text,
    _8_val.text,
    _9_val.text,
    _10_val.text
  ]);
  const __h1 = new Set([
    _1.h1,
    _2_val.h1,
    _3_val.h1,
    _4_val.h1,
    _5_val.h1,
    _6_val.h1,
    _7_val.h1,
    _8_val.h1,
    _9_val.h1,
    _10_val.h1
  ]);
  assert(__text.size === 2 && __h1.size === 1);
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GameOfChance />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* แก้ไขโค้ดใต้บรรทัดนี้ */}
    return <h1></h1>;
    {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // เขียนคำสั่ง return ตามเงื่อนไขที่ให้มาให้เสร็จ:
      return {
        counter: prevState
      }
    });
  }
  render() {
    const expression = null; // แก้โค้ดบรรทัดนี้
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

        {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```
