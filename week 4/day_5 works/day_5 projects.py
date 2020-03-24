# # tic tac die
# # def make_rows () ##### for later
# 
# small_board = [[None, None, None], [None, None, None], [None, None, None]]
# 
# # these functions ask the player where they want to place their x\o on a given board
# # functions returns an int for placement on board
# def user_input_row():
#     player_input = int((input("choose your destiny - row \n >>>")))
#     # row
#     row = False
#     while not row:
#         if player_input-1 < len(small_board):
#             row = True
#         else:
#             player_input = int((input("Not a valid choice. choose your destiny - row")))
#     return player_input
# 
# def user_input_column():
#     player_input2 = int((input("choose your destiny - column \n >>>")))
#     column = False
#     while not column:
#         if player_input2-1 < len(small_board[0]):
#             column = True
#         else:
#             player_input2 = int((input("Not a valid choice. choose your destiny - column")))
#     return player_input2
# 
# # this function takes the parameters given in the user funcions and changes the board
# # the function returns a new board with the user assignment
# # it calls 3 other functions to decide what turn it is and
# def change_board(turn):
#     row = user_input_row() -1
#     column = user_input_column() -1
#     small_board[row][column] = turn
#     for i in small_board:
#         print(i)
#     return small_board
# 
# 
# # COUNTER FOR GAME TURN returns x or o
# def check_turn(i):
#     if i % 2 == 0:
#         return 'X'
#     else:
#         return 'O'
# 
# 
# # check if game is over return result
# def check_over():
#     i = 0
#     total_chars = 0
#     for box in small_board:
#         total_chars += len(box)
#     while i < total_chars:
#         turn = check_turn(i)
#         check = change_board(turn)
#         result = check_conditions(check)
#         i += 1
#     if i == total_chars:
#         print("Game over! No more moves, and no winner!")
# 
# def check_conditions(check_board):
#     winner = False
#     board_len = len(check_board)
#     # winner = traverse_board(check_board)
#     check_board_transposed = list(map(list, zip(*check_board)))
#     # winner = traverse_board(check_board_transposed)
#     diag1 = [check_board[i][i] for i in range(board_len)]
#     diag2 = [check_board[i][len(check_board[0]-i-1)] for i in range(board_len)]
#     # winner = traverse_board([diag1, diag2])
# 
#     return traverse_board(check_board) or traverse_board(check_board_transposed) or traverse_board([diag1, diag2])
# 
# 
# 
# 
# def traverse_board(check_board):
#     for box in check_board:
#         if box[1:] == box[:-1] and None not in box:
#             return True
#     return False
# 
# 
# def start_game():
#     check_over()
# start_game()


animals = [
    {
    "id":1,
    "legs":2,
    "weight":80,
    "height":170,
    "speed":2,
    "family": 1
    },
    {
    "id":300,
    "legs":2,
    "weight":50,
    "height":270,
    "speed":3,
    "family": 2
    },
        {
    "id":50,
    "legs":17,
    "weight":30,
    "height":70,
    "speed":200,
    "family": 3
    },

    {
    "id":10,
    "legs":7,
    "weight":30,
    "height":720,
    "speed":2,
    "family": 4
    },
    {
    "id":6,
    "legs":6,
    "weight":30,
    "height":20,
    "speed":31,
    "family": 5
    }]


new_dic = {}
for dic in animals:
    new_dic = dic[id]

print(new_dic)