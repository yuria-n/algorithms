#!/bin/python3


def simple_array_sum(arr):
    return sum(i for i in arr)


n = int(input().strip())
array = list(map(int, input().strip().split(' ')))
result = simple_array_sum(array)
print(result)
