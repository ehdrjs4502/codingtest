n = int(input())

for _ in range(n):
    words = input().split()
    print(words)

    for i in words:
        print(i[::-1], end=" ")
    print()
