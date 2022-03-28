def lone_sum(a, b, c):
  if a != b and b != c and a != c:
    return a+b+c
  else:
    if a == b and a != c:
      return c
    elif a == c and a != b:
      return b
    elif b == c and a != b:
      return a
    elif a == b and b == c:
      return 0
