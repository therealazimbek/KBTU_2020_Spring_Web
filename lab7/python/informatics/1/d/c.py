n = int(input())
arr = list(map(int, input().split()))
res = 0
for i in range(n):
  if arr[i] > 0:
    res += 1


print(res)