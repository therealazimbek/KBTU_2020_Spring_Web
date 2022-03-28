def make_chocolate(small, big, goal):
  if (small + 5*big < goal) or (goal % 5 > small):
      return -1

  elif 5 <= goal:
      smallnum = 0
      for i in range(1,big+1):
          if 5*i + small >= goal:
              if 5*i > goal:
                  break
              smallnum = goal - 5*i
      return smallnum
  return goal