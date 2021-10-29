---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

จนถึงตอนนี้ คุณได้เห็นวิธีการใช้ `if/else`, `&&` และ ternary operator (`condition ? expressionIfTrue : expressionIfFalse`) เพื่อการตัดสินใจแบบมีเงื่อนไขว่าจะเรนเดอร์อะไรและเมื่อใด อย่างไรก็ตามยังมีหัวข้อสำคัญที่จะเราพูดคุยกันซึ่งจะช่วยให้คุณรวมแนวคิดบางอย่างหรือทั้งหมดเหล่านี้เข้ากับฟีเจอร์ของ React อันทรงพลังอย่าง props การใช้ props เพื่อเรนเดอร์โค้ดแบบมีเงื่อนไขนั้นเป็นเรื่องธรรมดามากสำหรับนักพัฒนา React นั่นคือพวกเขาใช้ค่าของ prop ที่กำหนดเพื่อตัดสินใจโดยอัตโนมัติเกี่ยวกับสิ่งที่จะเรนเดอร์

ในแบบทดสอบนี้คุณจะต้องตั้งค่า child component เพื่อทำการตัดสินใจในการเรนเดอร์ตาม props คุณอาจจะใช้ ternary operator แต่คุณสามารถดูว่าแนวคิดอื่นๆ ที่ได้ลองทำนแบบทดสอบสองสามครั้งล่าสุดมีประโยชน์ในการนำมาใช้เพียงใดในบริบทนี้

# --instructions--

code editor มี components สองส่วนที่กำหนดไว้แล้วสำหรับคุณบางส่วน: parent ชื่อ `GameOfChance` และ child ที่เรียกว่า `Results` ใช้สำหรับสร้างเกมง่ายๆ ที่ user กดปุ่มเพื่อดูว่าชนะหรือแพ้

ขั้นแรก คุณจะต้องใช้ expression ทั่วไปที่สุ่ม return ค่าที่แตกต่างกันทุกครั้งที่เรียกใช้ คุณสามารถใช้ `Math.random()` method นี้ return ค่าระหว่าง "0" (รวม 0 ไปด้วย) และ "1" (ไม่รวม 1) ทุกครั้งที่มีการเรียกใช้ ดังนั้นสำหรับอัตราต่อรอง 50/50 ให้ใช้ `Math.random() >= .5` ใน expression ของคุณ ตามสถิติ expression นี้จะ return `true` 50% ของการเรียกใช้งาน และ `false` อีก 50% ในวิธีการเรนเดอร์ให้แทนที่ `null` ด้วย expression ด้านบนเพื่อสิ้นสุดการประกาศตัวแปร

ตอนนี้คุณมี expression ที่คุณสามารถใช้ตัดสินใจแบบสุ่มใน expression ได้ ถัดไปคุณต้องเรียกใช้ expression นี้ เรนเดอร์`Results` component เป็น child ของ `GameOfChance` และส่ง `expression` เป็น prop ที่เรียกว่า `fiftyFifty` ใน `Results` component ให้เขียน ternary expression ที่จะเรนเดอร์ `h1` element ที่มีข้อความ `You Win!` หรือ `You Lose!` `fiftyFifty` prop ที่ถูกส่งผ่านมาจาก `GameOfChance` สุดท้ายตรวจสอบให้แน่ใจว่า`handleClick()` method นับแต่ละเทิร์นอย่างถูกต้อง เพื่อให้ user รู้ว่าพวกเขาเล่นไปกี่ครั้งแล้ว นอกจากนี้ยังทำหน้าที่แจ้งให้ user ทราบว่า component ได้รับการอัปเดตจริงในกรณีที่พวกเขาชนะหรือแพ้สองครั้งติดต่อกัน

# --hints--

`GameOfChance` component ควรมีอยู่และเรนเดอรืไปยังเพจ

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` ควร return 1 `button` element

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` ควร return 1 ผลของ `Results` component ที่มี prop ชื่อว่า `fiftyFifty`

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

`GameOfChance` state ควรจะเริ่มต้นด้วย property ของ `counter` ที่มีค่าเป็น `1`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

เมื่อ `GameOfChance` component ถูกเรนเดอร์ไปยัง DOM ครั้งแรก `p` element ควรถูก return ด้วยข้อความข้างในว่า `Turn: 1`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

ทุกครั้งที่ปุ่มถูกคลิก counter state จะต้องถูกเพิ่งค่าที่ละ 1 และ `p` element จะถูกเรนเดอร์ไปยัง DOM ที่มีข้อความ `Turn: N` โดยที่ `N` คือค่าของ counter state

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

เมื่อ `GameOfChance` component ถูกติดตั้งไปยัง DOM เป็นครั้งแรก และในทุกครั้งที่ปุ่มถูกคลิก หลังจากนั้นจะต้อง return `h1` element เดียวที่แสดงผลแบบสุ่มว่า `You Win!` หรือ `You Lose!`

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
    {/* Change code below this line */}
    return <h1></h1>;
    {/* Change code above this line */}
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
      // Complete the return statement:
      return {
        counter: prevState
      }
    });
  }
  render() {
    const expression = null; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}

        {/* Change code above this line */}
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
