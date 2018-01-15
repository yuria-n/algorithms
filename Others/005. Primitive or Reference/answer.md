# Primitive or Reference (Answer)

1.

```js
'1';
```

Javascript's string is primitive type.

2.

```js
'2';
```

Javascript's object is reference type.

3.

```js
1;
```

Javascript's number is primitive type.

4.

```js
true;
```

Javascript's boolean is primitive type.

5.

```js
'error1';

let error = new Error('error1'); // 0x01
const obj = { error }; // 0x01
error = new Error('error2'); // 0x02
```

Javascript's object is reference type.

6.

```js
date.getHours() - 1;
```

Javascript's object is reference type.

7.

```js
[0, 1];

const array = [1]; // 0x01, [1]
const obj = { array }; // 0x01, [1]
array.unshift(0); //0x01, [0, 1]
```

Javascript's array is reference type.

8.

```js
[0, undefined];

const array = new Array(1); // 0x01, [undefined]
const obj = { array }; // 0x01, [undefined]
array.unshift(0); // 0x01, [0, undefined]
```

Javascript's array is reference type. `new Array()` is not prefered.

9.

```js
obj0: {
  str: 'andy';
} // 0x01
obj1: {
  str: 'andy';
} // 0x01

const obj0 = {}; // 0x01
let obj1 = { str: 'andy' }; // 0x02
obj1 = Object.assign(obj0, obj1); // 0x01
```

Javascript's object is reference type. `Object.assign(obj0, obj1)` means obj1 is assigned to obj0. Now both point obj0's address.
