a, n = (map(int, input().split()))
a = float(a)
def power(a, n):
  if n == 0:
      return 1
  else:
      return a * power(a, n - 1)
 
print(power(a, n))