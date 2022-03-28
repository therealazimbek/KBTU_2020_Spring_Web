a, b, c, d = (map(int, input().split()))


def min2(a, b) -> int:
  if a >= b:
    return b
  return a  
def min4(a, b, c, d) -> int:
  return min2(min2(a, b), min2(c, d))

print(min4(a, b, c, d))