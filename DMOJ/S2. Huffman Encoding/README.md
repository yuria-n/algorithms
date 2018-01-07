# S2 HuffmanEncoding
https://dmoj.ca/problem/ccc10s2[https://dmoj.ca/problem/ccc10s2]

There is an ingenious text-compression algorithm called Huffman cording, designed by David Huffman in 1952.

Write a program to read a Huffman code (i.e., set of characters and associated binary sequences) along with a binary sequence, and decode the binary sequence to its character representation.


### Specification
The first line of input will be an integer 'k', representing the number of characters and associated codes. The next k lines each contain a single character, followed by a space, followed by the binary sequence (of length at most 10) representing the associated code of that character. You may assume that the sequence of binary codes has the prefix-free property. On the k + 2nd line is the binary sequence which is to be decoded. You may assume the binary sequence contains codes associated with the given characters, and that the k + 2nd line contains no more than 250 binary digits.

- int k (0 ≤ k ≤ 20)
- the number of k alphabet chars ('a'...'z' and 'A'...'Z')
- int binary sequence B (1 ≤ B ≤ 10)


Sample Input:
```
5
A 00
B 01
C 10
D 110
E 111
00000101111
```

Output:
```
AABBE
```
