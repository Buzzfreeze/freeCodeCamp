---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

คุณสามารถออกแบบ stateful component ที่ซับซ้อนมากขึ้นได้โดยการรวมแนวคิดที่ได้เรียนรู้จนถึงตอนนี้ ซึ่งรวมถึงการเริ่มต้น `state` การเขียน method ที่กำหนด `state` และการกำหนดclick handler เพื่อเรียกใช้งาน method เหล่านี้

# --instructions--

`Counter` component จะติดตามค่า `count` ใน `state` มันมีสองปุ่มที่เรียกใช้ methods `increment()` และ `decrement()` ให้เขียน methods เหล่านี้เพื่อให้ค่า counter เพิ่มขึ้นหรือลดลงทีละ 1 เมื่อคลิกปุ่มที่เหมาะสม นอกจากนี้ให้สร้าง method `reset()` เพื่อเวลาที่คลิกปุ่มรีเซ็ต count จะถูกตั้งเป็น 0

**Note:** ตรวจสอบให้แน่ใจว่าคุณไม่ได้แก้ไข `className` ของปุ่มต่างๆ นอกจากนี้อย่าลืมเพิ่มการเชื่อมที่จำเป็นสำหรับ methods ที่สร้างขึ้นใหม่ใน constructor

# --hints--

`Counter` ควร return `div element ที่มีปุ่ม 3 ปุ่ม ที่มีข้อความว่า `Increment!`, `Decrement!`, `Reset` ตามลำดับ

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Counter));
    return (
      mockedComponent.find('.inc').text() === 'Increment!' &&
      mockedComponent.find('.dec').text() === 'Decrement!' &&
      mockedComponent.find('.reset').text() === 'Reset'
    );
  })()
);
```

State ของ `Counter` ควรเริ่มต้นด้วย `count` property ที่มีค่าเป็น `0`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

การคลิกที่ปุ่มเพิ่มควรเป็นการเพิ่มค่า count ที่ละ `1`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

การคลิกที่ปุ่มลดควรเป็นการลดค่า count ที่ละ `1`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

การคลิกปุ่มรีเซ็ตควรเป็นการรีเช็ตค่า count เป็น `0`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.setState({ count: 5 });
const currentCountElement = mockedComponent.find('h1');
assert(currentCountElement.text() === 'Current Count: 5');
mockedComponent.find('.reset').simulate('click');
assert(currentCountElement.text() === 'Current Count: 0');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
