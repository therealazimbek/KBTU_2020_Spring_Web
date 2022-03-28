def rotate_left3(nums):
  res = nums[1:]
  res.append(nums[0])
  return res
