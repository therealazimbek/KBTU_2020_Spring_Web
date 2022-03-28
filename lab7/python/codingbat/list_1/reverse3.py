def reverse3(nums):
  res = list()
  for i in range(len(nums)-1, -1, -1):
    res.append(nums[i])
  return res  
