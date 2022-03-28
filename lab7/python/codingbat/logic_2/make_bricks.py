def make_bricks(small, big, goal):
  if big*5 + small < goal:
    return False
  if goal%5 > small:
    return False
  return True
    