# # ex1 temp advice
# from random import randint
# from sys import exit
# def random_temp():
#     season = user_month()
#     if season == "winter":
#         temp = randint(-10, 2)
#         return temp
#     elif season == "autumn":
#         temp = randint(2, 15)
#         return temp
#     elif season == "spring":
#         temp = randint(15, 32)
#         return temp
#     elif season == "summer":
#         temp = randint(25, 40)
#         return temp
#
# def main():
#     get_temp = random_temp()
#     print(f"The temperature right now is {get_temp} degrees Celsius")
#     if get_temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif 0 <= get_temp < 16:
#         print("Quite chilly! Don’t forget your coat")
#     elif 16 <= get_temp < 23:
#         print("Nice and Chilly")
#     elif 23<= get_temp < 32:
#         print("Nice and hot")
#     elif 32 <= get_temp <=40:
#         print("It's too damn hot right now!")
#
# def user_month():
#     user_month = input("What month is it now?")
#     month = ["january", "february", "march", "april", "may", "june", "july",
#     "august", "september", "october", "november", "december"]
#     check = user_month.lower()
#     if check == check == month[2] or check == month[3] or check == month[4]:
#         return "spring"
#     elif check == check == month[8] or check == month[9] or check == month[10]:
#         return "autumn"
#     elif check == check == month[5] or check == month[6] or check == month[7]:
#         return "summer"
#     elif check == check == month[11] or check == month[0] or check == month[1]:
#         return "winter"
#     else:
#         print("Not a valid time of the year")
#         exit(0)
#
# main()


# ex2
from random import randint
#
#
def throw_until_double():
    i = 0
    attempts = []
    success = False
    while not success:
        throw1 = randint(1, 6)
        throw2 = randint(1, 6)
        success = throw1 == throw2
        i += 1
        attempts.append((throw1, throw2))
        if throw1 == throw2:
            print(i)

    return attempts

def throw_many(attempts):
    throw_data_list = []
    i = 0
    while i < attempts:
        attempts_list = throw_until_double()
        i += 1
        throw_data_list.append(attempts_list)
    for count, items in enumerate(throw_data_list, 1):
        print(count, items)

throw_many(100)

#


# #gold section ex1
# from datetime import datetime
# date = datetime.now()
#
# def get_age(dd, mm, yy):
#     sex = input("are you male or female? >>>")
#     year = date.year - yy
#     month = date.month*0.1
#     day = date.day*0.01
#     age = day+month+year
#     print(age)
#     can_retire(sex, age)
#
#
# def can_retire(sex, age):
#     if sex == "male":
#         if age > 67:
#             print(f" your age is {age} and you can retire")
#         else:
#             print("Ha ha, get f**ked")
#     elif sex == "female":
#         if age > 62:
#             print(f" your age is {age} and you can retire")
#         else:
#             print("Ha ha, get f**ked")
#     else:
#         print("Attack helicopters don't get to retire!")
#
# def details():
#     yy = int(input("What year were you born in?"))
#     mm = int(input("what month were you born in?"))
#     dd = int(input("what day were you born in?"))
#     get_age(dd, mm, yy)
#
# details()


# daily


data = """7 3
Tsi
h%x
i #
sM
$a
#t%
ir!"""
new_data = data.split("\n")
print(new_data)



# def the_matrix(matrix):
#     decoded = []
#     k = 0
#     for i in matrix:
#         if k == len(i):
#             break
#         x = i[0]
#         if x.isalpha():
#             decoded.append(x)
#             k += 1
#
# #     print(decoded)
# def the_matrix(matrix):
#     decoded = []
#     for i in matrix:
#         for j in i:
#             if j.isalpha():
#                 decoded.append(j)
#             else:
#                 decoded.append(' ')
#     print(decoded)



# the_matrix(new_data)





