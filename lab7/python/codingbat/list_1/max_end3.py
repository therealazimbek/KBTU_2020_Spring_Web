def max_end3(nums):
  if nums[0] > nums[2]:
    nums[1] = nums[2] = nums[0]
  else:
    nums[0] = nums[1] = nums[2]
  return nums  
