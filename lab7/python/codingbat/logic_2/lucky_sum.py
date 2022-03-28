def lucky_sum(a, b, c):
  res = 0
  if a != 13:
    res += a
    if b == 13:
      return res
    else:
      res += b
      if c == 13:
        return res
      else:
        return res + c
  else:
    return 0