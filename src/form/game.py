import streamlit as st
import random

def number_guessing_game():
    st.title("Number Guessing Game")
    st.write("Guess the number between 1 to 20")

    random_number = random.randint(1, 20)
    attempts = 0
    try:
        guess = st.number_input("Enter your guess:", min_value=1, max_value=20)
    except:
        st.write("Enter between 1 to 20")

    if st.button("Submit Guess"):
        attempts += 1

        if guess < random_number:
            st.write("Too low! Try again.")
        elif guess > random_number:
            st.write("Too high! Try again.")
        else:
            st.write(f"Congratulations! You guessed it right in {attempts} attempts.")

if __name__ == "__main__":
    number_guessing_game()
