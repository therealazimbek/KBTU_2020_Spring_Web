n = int(input())
arr = list(map(int, input().split()))
res = list()
for i in range(n-1, -1, -1):
  res.append(arr[i])

for i in range(len(res)):
  print(res[i], end=' ')