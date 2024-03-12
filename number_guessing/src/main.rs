use std::io;
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let n: i32 = rng.gen_range(1..=100);

    println!("Enter your guess between 1 and 100: ");
    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    let mut guess: i32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input. Please enter a number.");
            return;
        }
    };

    while guess != n {
        if guess > n {
            println!("Your input is bigger");
        } else {
            println!("Your input is smaller");
        }

        println!("Enter your guess between 1 and 100: ");
        let mut input = String::new();
        io::stdin().read_line(&mut input)
            .expect("Failed to read line");

        guess = match input.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Invalid input. Please enter a number.");
                continue;
            }
        };
    }

    println!("Congrats, Your guess is right ");
}