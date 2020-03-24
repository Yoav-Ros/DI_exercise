# ex 1
import random
# a = random.random()*100
# b = random.random()*100
# if a > b:
#     print("Hello world")
# else:
#     print("Hi world")
#
# my_list = []
# a = int(input("give 1 of 3 numbers: "))
# b = int(input("give 2 of 3 numbers: "))
# c = int(input("give 3 of 3 numbers: "))
# my_list.append(a)
# my_list.append(b)
# my_list.append(c)
# num = max(my_list)
# print(f"biggest number is {num}")
# if a == b:
#     print(f"1st number: {a} is equal to 2nd number: {b}")
# elif a == c:
#     print(f"1st number:{a} is equal to 3nd number: {c}")

# ex3
# user_month = input("What month were you born in?")
# month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
# check = user_month.lower()
# if check == check == month[2] or check == month[3] or check == month[4]:
#     print(f"Because you were born in {user_month}, you were born in the spring")
# elif check == check == month[8] or check == month[9] or check == month[10]:
#     print(f"Because you were born in {user_month}, you were born in the autumn")
# elif check == check == month[5] or check == month[6] or check == month[7]:
#     print(f"Because you were born in {user_month}, you were born in the summer")
# elif check == check == month[11] or check == month[0] or check == month[1]:
#     print(f"Because you were born in {user_month}, you were born in the winter")
# else:
#     print("you misspelled")
#

# # ex 4
# string = input("To check if vowel or consonant, write something: ")
# check = string.upper()
# for i in check:
#     if i.isdigit():
#         print(f"{i} is a number")
#     elif i == " ":
#         continue
#     elif i =="I" or i =="O" or i =="U" or i =="A" or i =="E":
#         print(f"{i} is a vowel")
#     else:
#         print(f"{i} is a consonant")

# ex5
# from random import randint
# value = randint(1, 9)
# print(value)
#
# for i in reversed(range(3)):
#     user_input = input("Guess a number from 1 to 9: ")
#     if value == int(user_input):
#         print("you win!")
#         break
#     else:
#         print("Guess again")

# ex6
# for i in range(1,21):
#     print(i)
# ex 7 + 8
# million_list = [n for n in range(1000001)]
# print(min(million_list))
# print(max(million_list))
# print(sum(million_list))
# ex 9
# star = " "
# for i in range(5):
#     star = star + "*"
#     print(star)
#
# ex 10
# import random
# a_list = [n for n in range(101)]
# random.shuffle(a_list)
#
# num = int(input("Choose a number from 0 to 100:"))
# print("The number you chose is at position", a_list.index(num))

# ex 11
# l1 = ["l", "i", "s", "t"]
# l2 = ["l", "i", "s", "t", 2]
# l1.extend(l2)
# print(l1)


# ex 12
# import sys
# print("""Welcome to the Pizza Place! We have the world's best pizza and toppings!
# Choose from our selection of pizza toppings: Pineapple, Roasted Pineapple, and Grilled Pineapple.
# To finish your selection write done!""")
# def pizza():
#     topping = input("what toppings do you want?")
#     topping = topping.lower()
#     while topping != "done":
#         if topping == "pineapple" or topping == "roasted pineapple" or topping == "grilled pineapple":
#             print("Added your selection to: Pizza")
#             topping = input("what toppings do you want?")
#         else:
#             print("This is not a valid choice at: the Pizza Place!")
#             topping = input("what toppings do you want?")
#     if topping == "done":
#         print("Finished adding toppings, Goodbye!")
#         exit(0)
# pizza()

# # ex 13
# print("""
# Welcome, the price of the movie is based on your age.
# """)
# def movie():
#     pop = int(input("""How many people are seeing a movie today?
#     > """))
#     price = 0
#     for i in range(pop):
#         age = int(input(f"How old is person {i+1}? \n > "))
#         if age <= 3:
#             print("The price is 0$ until the age of 3")
#         elif age < 12:
#             print("The price for Children is 12$")
#             price += 12
#             print(f"The current price is: {price}")
#         elif age > 12:
#             print("The price for adults is 15$")
#             price += 15
#             print(f"The current price is: {price}")
#     print(f"Your total is {price}")
# movie()

# ex1 14
# string = input("Input a sentence, or a word, whatever... I don't care... >")
# listl = list(string.strip())
# newlist =[]
# i = 0
# listl.reverse()
# while len(newlist) < (len(listl)):
#     newlist.append(listl[i])
#     i += 1
# print(newlist)

# ex 15
#
# store = {
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000,
#     "major_color": {"France": "blue", "Spain": "red", "US": "pink, green"},
# }
# store["number_stores"] = 2
# print(f"the clients of {store['name']} are {store['type_of_clothes']}")
# store["Country of origin"] = "Spain"
# store["international_competitors"].append("Desigual")
# del store["creation_date"]
# print(store["international_competitors"][3])
# print(f"in a sentence {store['major_color']['US']}")
# print(len(store.items()))
# print(store.keys())
# store1 = {"creation_date":1975,"number_stores":10000}
# # print(store)



# daily
alpha = {
    "a": "y",
    "b": "z",
    "c": "a",
    "d": "b",
    "e": "c",
    "f": "d",
    "g": "e",
    "h": "f",
    "i": "g",
    "j": "h",
    "k": "i",
    "l": "j",
    "m": "k",
    "n": "l",
    "o": "m",
    "p": "n",
    "q": "o",
    "r": "p",
    "s": "q",
    "t": "r",
    "u": "s",
    "v": "t",
    "w": "u",
    "x": "v",
    "y": "w",
    "z": "x"
}

print("Would you like to encrypt or decrypt?")
en_de= input(">>>")
if en_de == "encrypt":
    secret = input("what would you like to hide?")
    secret_list = list(secret)
    empty_list = []
    for i in secret_list:
        if i in alpha.keys():
            empty_list.append(alpha[i])
        if i == " ":
            empty_list.append(" ")
    new = ''.join(empty_list)
    print("Your new message is ", new)
elif en_de == "decrypt":
    reveal = input("What would you like to reveal?")
    reveal_list = list(reveal)
    em_list = []
    for i in reveal_list:
        for key, item in alpha.items():
            if i == item:
                em_list.append(key)
        if i == " ":
            em_list.append(" ")
    em_list = ''.join(em_list)
    print(em_list)











# import string
# import random

# letters = string.ascii_letters
# strings = ["".join(random.choices(letters, k=random.randint(1,500))) for i in range(100)]
# max_length = 1
# for index,s in enumerate(strings):
#     temp = len(s)
#     if temp > max_length:
#         max_length=temp
#         long_index = index
# print(strings[long_index])
# print(max_length)
# print(sorted(strings, key=len)[-1])














