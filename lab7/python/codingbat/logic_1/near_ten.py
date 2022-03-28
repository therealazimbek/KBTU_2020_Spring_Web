def near_ten(num):
  n = num
  if n%10 == 0 or (n+1)%10 == 0 or (n-1)%10 == 0 or (n-2)%10 == 0 or (n+2)%10 == 0:
    return True
  return False
