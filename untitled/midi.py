import mingus.core.notes as notes
import mingus.core.intervals as intervals
from mingus.core.intervals import from_shorthand
from random import randint


def augmented_fifth(note):
    fifth = from_shorthand(note, '#5')
    return fifth


def augmented_second(note):
    second = from_shorthand(note, '#2')
    return second


def augmented_fourth(note):
    fourth = from_shorthand(note, '#4')
    return fourth


def augmented_sixth(note):
    sixth = from_shorthand(note, '#4')
    return sixth


data = {
    'augmented fifth': augmented_fifth,
    'augmented second': augmented_second,
    'augmented fourth': augmented_fourth,
    'augmented sixth': augmented_sixth,
    'minor union': intervals.minor_unison,
    'major unison': intervals.major_unison,
    'augmented unison': intervals.augmented_unison,
    'minor second': intervals.minor_second,
    'major second': intervals.major_second,
    'minor third': intervals.minor_third,
    'major third': intervals.major_third,
    'perfect fourth': intervals.perfect_fourth,
    'perfect fifth': intervals.perfect_fifth,
    'major fifth': intervals.major_fifth,
    'major fourth': intervals.major_fourth,
    'minor fifth': intervals.minor_fifth,
    'minor fourth': intervals.minor_fourth,
    'minor sixth': intervals.minor_sixth,
    'major sixth': intervals.major_sixth,
    'minor seventh': intervals.minor_seventh,
    'major seventh': intervals.major_seventh
}



if __name__ == '__main__':
    # ...............................................................................................................
    # a simple function to create a random starting note
    # this creates just any simple note to start an exercise from
    # next three functions are a starting position not available to user

    # function to create a !simple! starting note
    def create_simple_start():
        options = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
        note = options[randint(0, len(options)-1)]
        return note

    # function for creating a starting note at a normal difficulty
    def create_any_start_note():
        options = ['Cb', 'C', 'C#',
                   'Db', 'D', 'D#',
                   'Eb', 'E', 'E#',
                   'Fb', 'F', 'F#',
                   'Gb', 'G', 'G#',
                   'Ab', 'A', 'A#',
                   'Bb', 'B', 'B#'
                   ]
        note = options[randint(0, len(options)-1)]
        return note

    # creates a complex starting note
    def create_complex_start():
        options = ['Cbb','Cb', 'C', 'C#', 'C##',
                   'Dbb', 'Db', 'D', 'D#', 'D##',
                   'Ebb', 'Eb', 'E', 'E#', 'E##',
                   'Fbb', 'Fb', 'F', 'F#', 'F##',
                   'Gbb', 'Gb', 'G', 'G#', 'G##',
                   'Abb', 'Ab', 'A', 'A#', 'A##',
                   'Bbb', 'Bb', 'B', 'B#', 'B##',
                   ]
        note = options[randint(0, len(options) - 1)]
        return note
    # ................................................................................................................
    # next 4 functions generate a possible interval for a selected level of difficulty.
    # the information is not available to the user
    # a function for simple intervals only
    def create_interval_perfect(start_note):
        start = start_note
        options = [intervals.perfect_fifth(start),
                   intervals.perfect_fourth(start),
                   intervals.major_unison(start)]
        end = options[(randint(0, 2))]
        interval = intervals.determine(start, end)
        return interval

    # a function for only consonant intervals
    def create_interval_consonant(start_note):
            start = start_note
            options = [intervals.perfect_fifth(start),
                       intervals.perfect_fourth(start),
                       intervals.major_unison(start),
                       intervals.major_third(start),
                       intervals.minor_third(start),
                       intervals.major_sixth(start),
                       intervals.minor_sixth(start)]
            end = options[(randint(0, len(options)-1))]
            interval = intervals.determine(start, end)
            return interval

    # a function for dissonant intervals
    def create_interval_dissonant(start_note):
            start = start_note
            options = [intervals.minor_second(start),
                       intervals.major_second(start),
                       intervals.minor_fifth(start),
                       intervals.minor_seventh(start),
                       intervals.major_seventh(start)]
            end = options[(randint(0, len(options)-1))]
            interval = intervals.determine(start, end)
            return interval

    # a function that creates a random interval for the user to answer
    def create_interval_all(start_note):
        start = start_note
        end = notes.int_to_note(randint(0, 11))
        interval = intervals.determine(start, end)
        return interval

    # ................................................................................................................
    # next three functions generate an array of possible wrong answers for the selected level
    # the lists will then be used by the question function to display the information in the list to the user
    # a function for simple wrong answers
    def simple_wrong(start_note):
        answers = []
        while len(answers) < 4:
            answer = create_simple_start()
            if answer not in answers:
                answers.append(answer)
        return answers

    # creates a list with wrong answers from the any function
    def any_wrong(start_note):
        answers = []
        while len(answers) < 4:
            answer = create_any_start_note()
            if answer not in answers:
                answers.append(answer)
        return answers

        # creates a list with wrong answers from the complex function
    def complex_wrong(start_note):
        answers = []
        while len(answers) < 4:
            answer = create_complex_start()
            if answer not in answers:
                answers.append(answer)
        return answers

    # ................................................................................................................
    # a function that generates all the needed items for the simple question
    def simple_perfect():
        start_note = create_simple_start()
        my_interval = create_interval_perfect(start_note)
        wrong_answers = simple_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_any_start_note()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer

    #  consonant simple
    def simple_consonant():
        start_note = create_simple_start()
        my_interval = create_interval_consonant(start_note)
        wrong_answers = any_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_any_start_note()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer


 #  consonant normal
    def normal_consonant():
        start_note = create_any_start_note()
        my_interval = create_interval_consonant(start_note)
        wrong_answers = any_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_any_start_note()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer

#  dissonant simple
    def simple_dissonant():
        start_note = create_simple_start()
        my_interval = create_interval_dissonant(start_note)
        wrong_answers = any_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_any_start_note()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer

#  dissonant simple
    def normal_dissonant():
        start_note = create_any_start_note()
        my_interval = create_interval_dissonant(start_note)
        wrong_answers = any_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_any_start_note()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer

#  complex practice
    def complex_practice():
        start_note = create_complex_start()
        my_interval = create_interval_all(start_note)
        wrong_answers = any_wrong(start_note)
        right_answer = data[my_interval](start_note)
        all_answers = []
        for answer in wrong_answers:
            all_answers.append(answer)
        position = randint(0, len(wrong_answers))
        while len(all_answers) < 5:
            if right_answer not in all_answers:
                all_answers.insert(position, right_answer)
            else:
                other = create_complex_start()
                all_answers.insert(position, other)
        return start_note, all_answers, my_interval, right_answer

bob = complex_practice()
print(bob[0])
print(bob[1])
print(bob[2])
print(bob[3])


# diminished fifth
# 'augmented third'
# diminished third
# diminished sixth'
# diminished fourth
# diminished seventh
# 'diminished second'
# diminished unison
# minor unison
