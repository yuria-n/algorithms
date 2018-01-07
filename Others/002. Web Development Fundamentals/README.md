# Web Development Fundamentals

## Part1

#### What is the difference between a start tag and an end tag?

1. **An end tag starts with a forward slash.**
2. They are identical.
3. An end tag is capitalized.
4. An end tag is mandatory but a start tag is optional.


#### Which is not a valid location for CSS declarations?

1. Inline
2. **CSS div after the opening <body> tag**
3. External Style Sheet
4. Internal Style Sheet


#### What type of content can be placed into a <td> table cell element?

1. Text only
2. Text and links only
3. Text, links, and lists only
4. **Text, links, lists, and images **


#### Find the mistake (circle it and state why it is incorrect):

```HTML
<table>
    <tr>
        <td colspan="2">Row 1 Cell 1</td>
        <!-- Because colspan affects on <td> tag. -->
    </tr>
    <tr>
        <td>Row 2 Cell 1</td>
        <td>Row 2 Cell 2</td>
    </tr>
</table>
```


#### What CSS technique could we use to force a <div> element to center itself horizontally in the browser window, no matter what the screen dimensions are?

1. Set the text-align property of the \<div\> to center.
2. **Set the right and left margins of the \<div\> to auto.**
3. Set the screen property of the \<div\> to horizontal-center.
4. Set the width property of the \<div\> to be 50%.


#### When you move your mouse over a web link and it changes color, which CSS property has been set?

1. a:link
2. **a:hover**
3. a:mouseover
4. a:active


#### If you were on a web page and some of the links looked blue and some looked purple, what is the most likely explanation for this?

1. The web designer styled some links to be blue and others to look purple.
2. The links that are in purple are dead or inactive.
3. **The purple links are sites that you have already visited.**
4. The browser is having a problem and needs to be closed and restarted.


#### Write the CSS code to make all \<h2\> headings display centered and in green:

```css
h2 {
    text-align: center;
    color: green;
}
```


#### Write the CSS code to create a new class called 'newclass'. Define the dimensions as 300 by 300 pixels with 10 pixels of padding on all sides:

```css
.newclass {
    width: 300px;
    height: 300px;
    padding: 10px;
}
```




## Part2

#### How many alert dialogs will the following Javascript generate, and what will be displayed in each of them?

```js
var x = "10";
function f() {
    var x = "4";
    alert(this.x);
    function g() { alert(x); }
    g();
}
f();
```

-  2 alert dialogs will be generated. The first shows 10, the second does 4.


#### Below you will see some snippets of HTML from a Web page. Fill in the body of the Javascript function changeColor so that the color of the text changes in response to the selection made in the menu. (Hint: you can use .className property to set the class attribute.)

```HTML
<style type="text/css">
    .a {color: red;}
    .b {color: green;}
    .c {color: blue;}
</style>

<div id="colorText">Select below to change the color of this text</div>
<select onchange="changeColor(this.value)">
    <option value="a">Red</option>
    <option value="b">Green</option>
    <option value="c">Blue</option>
</select>

<script type="text/javascript">
    // <! [CDATA[
        function changeColor(value) {
            let t = document.getElementById("colorText")
            switch(value) {
                case 'a':
                    t.className = 'a';
                    break;
                case 'b':
                    t.className = 'b';
                    break;
                case 'c':
                    t.className = 'c';
                    break;
            }
        }
    // ]]>
</script>
```




## Part3

#### Write a small program that checks if a browser supports Javascript or not. If it does not support Javascript, it should ask the user to use a different browser. (hint: <noscript>)

```HTML
<html>
<head><title>noscript example</title></head>
<body>
<!-- Your code goes here... -->
    <script type="text/javascript">
       document.write("Hi! Your browser supports javascript :)")
    </script>
    <noscript>
      Oops! Your browser does not support javascript. Please use other browsers.
    </noscript>
</body>
</html>
```


#### What is the output when you run the following programs. (true / false)

```js
var i = 25;
var j = “25”;
var k = 2 + “5”
var l = “2” + “5”;
```

1. document.write (i == j);  -> 
`true`

2. document.write (i === j); ->
`false`

3. document.write (j == k);  ->
`true`

4. document.write (j === k); ->
`true`

5. document.write (i == k);  ->
`true`

6. document.write (i === k); ->
`false`

7. document.write (k == l);  ->
`true`

8. document.write (k === l); ->
`true`


#### What are Javascript events? List at least 3 events, and explain briefly what they do. Show with code segments how you can call a function for two events. You can assume the functions exist — you don’t have to write the code for the function. Just show the code for the event, and how the functions are called.

1. **onchange**	: When an HTML element has been changed
```HTML
<input type="text" name="message" value="" onchange="changed(this.value)">
<script type="text/javascript">
    function changed(val) {
       alert("Text changed to " + val);
    }
</script>
```

2. **onclick**	: When the user clicks an HTML element
```HTML
<button onclick="clicked()">Button</button>
<script type="text/javascript">
    function clicked() {
        alert('Button clicked!');
    }
</script>
```

3. **onload**	: When the browser has finished loading the page
```HTML
<body onload="onload()">Hello</body>
<script type="text/javascript">
    function onload() {
        alert('Page loaded!');
    }
</script>
```


#### Write a Javascript program/function that shows the numbers [1-10] in an alert box, one after another sleeping for 100, 200, ..., 900 msecs. That is, when the program starts, it should show “1”. Then it should sleep for 100 msec. and show “2”, sleep for 200 msec. and show “3” and so on, finally showing “10” before returning. You will use setTimeout function.
```HTML
<button onclick ="clicked()">Count Start</button>
<script type="text/javascript">
    const time = 100;
    const clicked = function() {
            delayedAlert(1);
    }

    function delayedAlert(j) {
        setTimeout(function() {
            alert(j);
            console.log(j);
            if (j < 10) {
                const i = j + 1;
                delayedAlert(i);
            }
        }, time);
</script>
```




## Part4

#### This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. Consider the series of numbers beginning at start and running up to but not including end , so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.

```
Examples:
fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
```

```js
function fizzBuzz(x, y) {
    let arr = [];
    for (let i = x; i < y; i++) {
        if (i % 15 === 0) {
            arr.push('FizzBuzz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else {
            arr.push(i);
        }
    }
    console.log(arr);
};
```


#### For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

```
Examples:
tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]
```

```js
function tenRun(arr) {
    let m = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n % 10 === 0) {
            m = n;
        }
        arr[i] = m;
    }
    console.log(arr);
};
```


#### Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes. We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others. We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

```
Examples:
palindrome("eye") → true.
palindrome("_eye") → true.
palindrome("race car") → true.
palindrome("not a palindrome") → false.
palindrome("A man, a plan, a canal. Panama") → true.
palindrome("never odd or even") → true.
palindrome("nope") → false.
palindrome("almostomla") → false.
palindrome("My age is 0, 0 si ega ym.") → true.
palindrome("1 eye for of 1 eye.") → false.
palindrome("0_0 (: /-\ :) 0-0") → true.
palindrome("five|\_/|four") → false.
```

```js
function palindrome(str) {
    let s = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(s);
    let r = '';
    for (let i = s.length; i > 0; i--) {
        r += s.substring(i - 1, i);
    }
    console.log(s === r);
};
```


#### Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!. For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

```
Examples:
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
```

```js
function factorialize(n) {
     return n === 0 ? 1 : n * factorialize(n - 1);
};
```




---

Done!
