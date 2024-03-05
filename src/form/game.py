import streamlit as st
import random

def number_guessing_game():
    st.title("Number Guessing Game")
    st.write("Guess the number between 1 to 20")

    random_number = random.randint(1, 20)
    attempts = 0
    
    guess = None
    try:
        guess = st.number_input("Enter your guess:", min_value=1, max_value=20)
    except ValueError:
        st.write("Please enter a valid number between 1 and 20.")
    
    if guess is not None and st.button("Submit Guess"):
        attempts += 1

        if guess < 1:
            st.write("Too low! Try again.")
        elif guess > 20:
            st.write("Too high! Try again.")
        elif(guess==random_number) :
            st.write(f"Congratulations! You guessed it right in {attempts} attempts.")
 
if __name__ == "__main__":
    number_guessing_game()
