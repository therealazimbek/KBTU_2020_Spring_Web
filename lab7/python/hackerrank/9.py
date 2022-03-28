n = int(input())
l = list()
res = list()
for _ in range(n):
    name = input()
    grade = float(input())
    l.append([name, grade])
l.sort(key=lambda x: x[1])
i = 1
fir = l[0][1]
sec = 0
for i in range(n):
    if l[i][1] > fir:
        sec = l[i][1]
        break
while i < len(l):
    if l[i][1] == sec:
        res.append(l[i][0])
    i += 1
res.sort()
for name in res:
    print(name)
