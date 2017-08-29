# S1 Computer Purchase
Write a program to read a given list of computers and output the top two computers in order of preference, from highest preference to lowest preference. If there is a tie in the rankings, pick the computer(s) whose name(s) are lexicographically smallest.


### Specification
The first line of input will be an integer 'n'. Each of the remaining n lines of input will contain a computer specification. A computer specification contains the computer name, the RAM available (R), the CPU speed (S) and the disc drive space (D).

- int n (0 ≤ n ≤ 10000)
- String name (less than 20 characters)
- int R (1 ≤ R ≤ 128)
- int S (1 ≤ S ≤ 4000)
- int D (1 ≤ D ≤ 3000)

Formula to calculate a performance:
- 2 * R + 3 * S + D


Sample Input:
```
4
ABC 13 22 1
DEF 10 20 30
GHI 11 2 2
JKL 20 20 20
```

Output:
```
JKL
DEF
```
