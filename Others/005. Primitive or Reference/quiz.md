# Primitive or Reference (Quiz)

1.

```js
let str = '1';
const obj = { str };
str = '2';
console.log(obj.str);
```

2.

```js
const obj1 = { str: '1' };
const obj = { obj1 };
obj1.str = '2';
console.log(obj.obj1);
```

3.

```js
let num = 1;
const obj = { num };
num = 2;
console.log(obj.num);
```

4.

```js
let bool = true;
const obj = { bool };
bool = false;
console.log(obj.bool);
```

5.

```js
let error = new Error('error1');
const obj = { error };
error = new Error('error2');
console.log(obj.error.message);
```

6.

```js
const date = new Date();
const obj = { date };
date.setHours(date.getHours() - 1);
console.log(obj);
```

7.

```js
const array = [1];
const obj = { array };
array.unshift(0);
console.log(obj);
```

8.

```js
const array = new Array(1);
const obj = { array };
array.unshift(0);
console.log(obj);
```

9.

```js
const obj0 = {};
let obj1 = { str: 'andy' };
obj1 = Object.assign(obj0, obj1);
console.log(obj0);
console.log(obj1);
```
