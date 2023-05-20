from random import randint

anj_word = [
    "Aardvark",
    "bingo",
    "bon",
    "bonfire",
    "Aiki",
    "Thethings",
    "aik",
    "wick",
    "weaker",
]


def funcer(word):
    random_pos = randint(0, len(anj_word) - 1)
    return f"{word} {anj_word[random_pos]}"


paragraph = int(input("Enter the number of paragraph you want: "))

with open("ipsum.txt") as items:
    item = items.read().split()
    # print(item)
    for n in range(paragraph):
        text = list(map(funcer, item))
        # print(text)
        with open("gen_ipsum.txt", "a") as ipsum:
            ipsum.write(" ".join(text) + "\n\n")
