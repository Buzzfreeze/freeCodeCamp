---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

ถ้าเราใช้ความรู้ทั้งหมดที่ได้เรียนมา ตอนนี้เราจะสร้าง stateful component ที่ซับซ้อนมากขึ้นได้แล้ว 
รวมถึงการตั้งค่าเริ่มต้นให้ `state` หรือการเขียน method ที่เปลี่ยนค่าของ `state` และทำให้ click handler มาเรียกใช้ method ที่เราเขียน

# --instructions--

component `Counter` จะอ่านค่าของ `count` ใน `state` 
โดยจะมีปุ่มสองปุ่มที่แต่ละปุ่มจะเรียกใช้ method `increment()` (เพิ่มค่า) และ `decrement()` (ลดค่า)

ให้เขียน method สองตัวนี้เพื่อให้ count เพิ่มขึ้น 1 เมื่อคลิกปุ่ม `Increment!` หรือลดลง 1 เมื่อคลิกปุ่ม `Decrement!` 
และให้สร้าง method `reset()` ที่จะทำงานเมื่อคลิกปุ่ม `Reset` แล้วจะทำให้ค่าของ count เป็น 0

**Note:** ห้ามแก้ไข `className` ของปุ่มต่างๆ แล้วก็อย่าลืมการผูก method ที่สร้างขึ้นใหม่กับ this ใน constructor ด้วย

# --hints--

`Counter` ต้องคืนค่าเป็น `div` ที่มีปุ่ม 3 ปุ่มอยู่ข้างใน โดยปุ่มจะมีข้อความว่า `Increment!`, `Decrement!`, `Reset` ตามลำดับ

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

state ใน `Counter` ต้องมีค่าเริ่มต้นของ property `count` เป็น `0`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

การคลิกที่ปุ่ม `Increment!` ต้องเป็นการเพิ่มค่า count ที่ละ `1`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

การคลิกที่ปุ่ม `Decrement!` ต้องเป็นการลดค่า count ที่ละ `1`

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

การคลิกปุ่ม `Reset` ต้องเป็นการรีเช็ตค่า count เป็น `0`

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
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
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
