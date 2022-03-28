N = int(input())
    
arr = []
i = 0
v = 0
for _ in range(N):
    st = input().split()
    s = st[0]
    if len(st) == 2:
        v = int(st[1])
    elif len(st) == 3:
        i = int(st[1])
        v = int(st[2])
    if s == "insert":
        arr.insert(i, v)
    elif s == "remove":
        arr.remove(v)
    elif s == "append":
        arr.append(v)
    elif s == "sort":
        arr.sort()
    elif s == "reverse":
        arr.reverse()
    elif s == "pop":
        arr.pop()
    elif s == "print":
        print(arr)   