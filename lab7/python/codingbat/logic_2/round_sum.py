def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
  
  
def round10(n):
  rem = n % 10
  if n % 10 == 0:
    return n
  if rem >= 1 and rem <= 4:
    return n - rem  
  else:
    return n + (10 - rem)  
