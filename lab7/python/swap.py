s = input()

# for letter in s:
#     if letter.islower():
#         print(letter.upper(), end='')
#     else:
#         print(letter.lower(), end='')    

def swap_case(s):
    return ''.join([i.lower() if i.isupper() else i.upper() for i in s])


print(swap_case(s))        