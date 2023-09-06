pikachu = ["pi", "ka", "chu"]

a = input()

for i in pikachu:
    a = a.replace(i, " ")

if len(a.strip()) == 0:
    print("YES")
else:
    print("NO")
