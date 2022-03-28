def big_diff(nums):
  l = 0
  s = 1000000
  for num in nums:
    if num > l:
      l = num
    if num < s:
      s = num
  return l - s
