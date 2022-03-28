def front_back(str):
  if len(str) <= 1:
    return str
  res = str[len(str)-1] + str[1:len(str)-1] + str[0]
  return res


print(front_back('code'))