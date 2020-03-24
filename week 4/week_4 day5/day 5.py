# tic tac die
# def make_rows () ##### for later




small_board = [[0,0,0],[0,0,0],[0,0,0]]
def start(board):
    player_input = int((input("choose your destiny - row")))
    player_input2 = int((input("choose your destiny - column")))
    answer_list = [player_input, player_input2]
    print(answer_list)


start(board)


# 1. ask user for rows about the size of the board - create empty (' ') lists based on user input
# 2. each item in list gets a box number to which you can call.
# 45. first turn is always 'x'. every press puts either an x or an o and replaces the empty space
# -32. after each press of the button loop through the lists to check the status
# 58. if any list is full of x player 1 wins. if it's o player 2 wins
# 11. if every list at position i is full of x\o = winner
# 7. special condition. loop  through and if every row at position i+1 is full of x\o = winner
# 7.d. special condition. loop through and if every row at position len(list)-1 is full of x\o = winner