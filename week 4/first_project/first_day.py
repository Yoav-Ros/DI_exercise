#data structures

# a list and a dictionary are mutable
# tupple and sets are not

a_list = [1,3, 6, 5,4,8, 9]
# a_second_list = list((1,5,1,9,7,3))
a_list.index(6)
print(a_list[a_list.index(6)])
# print(a_list[:-1])
# a_list.append(654)
# print(a_list)
# print(a_list[1:6:2])
# a_list[4] = (789)
# print(len(a_list))
# a_list.remove(3)
# print(a_list)
# print(a_list.pop(3))
# print(dir(list))

# l = [5,6,7,4]
# l2 = ["a", "tre" , "pofpds"]
# print(l+l2)
# print(l)
# print(l2)
# l.extend(l2)
# print(l)
# print(l2)
# l.extend([9,8,7])
# l.append(["a",5,"k"])
# print(l)

########################tuple
# # similar to a list, but ordered and not mutable
# t=(5,6,7,8,9)
# print(t[1])
# print(t[3])
# print(t[-1])
# t=(45,6,7,8,9)
# print(t)
# # can overide a tuple
# print(t.index(45))
# t=(45,6,7,8,9,45,45,45)
# print(t.count(45))
# print(len(t))
# # convert tuple to list
# l = list(t)
# print(l)
# y = l
# y=l.copy()
# y[0]=10
# print(l)
# print(y)

######################## dictionary
# print(dir(dict))
# d = {
#     "key1": 1,
#     "key2": 5,
#     "a": "whatever"
# }
# print(d)
# dictionaries are not ordered, but mutable
# print(d["key1"])
# print(d["key2"])
# d["a"] = "something"
# print(d)
# d["b"]="something else"
# print(d)
# d.update({"a":"this is an update"})
# print(d)
# d.clear()
# print(d)

# print(d.keys())
# print(d.values())
# print(d.items())
# for key, value in d.items():
#     print(key, value)
# for key in d.keys():
#         print(key)
#
# for key in d.keys():
#         print(d[key])

####################sets
# not ordered - no index and can't access single itmes
# s = set((1,2,5))
# print(s)
# s=set((1,2,3,4,4))
# print(s)
# s2=set((1,2,3,4,5,6))
# print(s.intersection(s2))
# print(s.union(s2))

# l = [1,2,3,9,9,9,9,9,6]
# temp=[]
# for element in l:
#     if element in temp:
#         continue
#     else:
#         temp.append(element)
# print(temp)

#
# a = "a string"
# print(a[::-1])
# a = a + " whatever"
# s = a.split(" ")
# print(s)
# a.replace("a", "d")
# print(a)
# new = 'your age is {}'
# var = input("age?")
# print(new.format(var))
# age = 28
# print(f"your age is {age}")

#33#######################################3 day 3 class
# l = [1,2,3,4,5,6]
# if 1 in l:
#     print("yes")
# elif 0 in l:
#     print("no")
# else:
#     print("don't know")

# l =["u", 4, [1,2,3], {"a":78}]
# # for i in l:
# #     print(i)
# for index in range(len(l)):
#     print(index, l[index])


# for i in range(10):
#     if i%2==0:
#         print(i)
#     continue
#
# i=0
# while i<10:
#     print(i)
#     i += 1

# while true:
#     value= input("choose a number from 1 to 10")
#     try:
#         value=int(value)
#     except ValueError:
#         print("not a number")
#         continue
#
#     if 1 <= value <=10:
#         print("Thank you!")
#     break
# else:
#     print("not in the valid range")

#
# l1 = [num for num in range(10)]
# l2 = [num*2 for num in range(10)]
# l3 = sum([num*2 for num in range(10)])
# l4 = [num*2 for num in range(10) if num%2==0]

# d = {str(key):value for key,value in zip(range(5), range(5))}
# d2 = {str(key):key for key in range(5))}
# print(d)
# names = ["john", "eyal", "michael"]
# ages = [5, 10, 20]
# d3 = {name:int(age) for name, age in zip(names, ages)}
# # print(d3)
# map(int, ages)
# d4 = list(map(int, ages))
# print(d4)

# letters = string.ascii_letters
# import random
# integers = [random.randint(1,1000) for i in range(10)]
# letters = [''.join(random.choices(letters, k=5)) for i in range(100)]
# l = integers + letters
# random.shuffle(l)
# string_list = []
# int_list = []
# for element in l:
#     if type(element) == str:
#         string_list.append(element)
#     else:
#         int_list.append(element)
# print(string_list)
# print(int_list)
#
# # random.choices(string.ascii_letters, k=5)
# # ''.join(random.choices(string.ascii_letters, k=5))



# day 4 #################################################################
#
# def talk():
#     print("blah")
# import random
# p =random.random()
# def gamble():
#     print(p)
#     if p >0.5:
#         return "blah"
#     else:
#         return "blah blah"
# print(gamble())
# #
# def multiply(num, multiplier=2):
#     return num* multiplier
#
# #list compression with no function
# l = [i*2 for i in range(10)]
# # list compression with the funcion
# l2 - [multiply(2, multiplier) for multiplier in range(10)]
# print(l)
#
# person = 'Yair'
# def say_name(name):
#     print("Hey {}".format(name))
# say_name(person)


# def show_names(*args):
#     for i, name in enumerate(args):
#         print(f"person number {i}: {name}")
#
#
#
# show_names("yair", "shlomo", "eran", )


# kwargs == keyword arguments
# def show_info(**kwargs):
#     for key, value in kwargs.items():
#         print(key, value)
#
# info = {
#     "name": "fred",
#     "lastname": "Nietzsche",
#     "profession": "crazy-guy",
#     "nationality": "Austro-pastafarian"
# }
# show_info(name ='fred',
#           lastname = 'Nietzsche',
#           profession='crazy-guy')
#
#
# def operation(num1, num2, **kwargs):
#     if kwargs:
#         print('description:\n {}'.format(kwargs))
#     print(num1 ** num2)
#     return num1 ** num2
#
#
# result = operation(2,3, description = '2 to the power 3',
#                    type = 'mathematical')











