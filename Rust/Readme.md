# Compiling Commands

```bash
$ rustc ./main.rs
```

compiles the rust code and creates a binary

```bash
./main
```

Runs the binary

### Resources

- [Rust Book](https://rust-book.cs.brown.edu/ch01-02-hello-world.html)

---

# Cargo

Cargo is rusts build system and package managaer.

Build system means its a tool to which automates the process of turning souce code into executable

```bash
$ cargo new hello_cargo
```

creates a new project cargo in the directory hello_cargo with git and has a src folder with main.rs

```bash
$ cargo build
```

creates an executable file in target/debug and to run it

```bash
$ ./target/debug/hello_cargo
```

cargo run to compile the code and then run the resultant executable all in one command:

```bash
$ cargo run
```

```bash
$ cargo check
```

check whether the code compiles or not and faster than cargo build.

```bash
$ cargo build --release
```

Used for Production . It compile the code with optimizations and it creates an executable in ./target/release.

\*\*\* Cargo does not watch your files by default.

### Resources

- [Rust Book](https://rust-book.cs.brown.edu/ch01-03-hello-cargo.html)

---

# Variables and mutability

Variables are immutable by default in rust . We can change it by adding mut

```rust
fn main{
    let x = 5;
    let mut y= 6;
    x = 7;  // doesnt compile
    y =7; //compiles
}
```

---

# Constants

1. Immutable varibales that are bound to a name and doest change its value

**Differences with variables**

1. Constants are always immutable
2. Can be declare in any scope
3. Constants are attached to constant expression only i.e we know its value in compile time . Rust compiler can perform basic operations.

   ```rust
   use std::time::SystemTime;
   fn main {
   const THREE_HOURS_IN_SECONDS = 60*60*3 //compiles
   const NOW: u128 = SystemTime::now().elapsed().unwrap().as_millis();
   // cant be evaluated at compile time not compiles.
   }
   ```

4. Constants are valid for the entire time a program runs, within the scope in which they were declared.

### Resources

- [Rust Book](https://rust-book.cs.brown.edu/ch03-01-variables-and-mutability.html)

---

# Shadowing

1. Redclaring the varibale with same name .

   ```rust
   let x = 5;
   let x = 6;// shadows previous value of x

   {
       let x = x*2;  // gives 12
   // shadwos the preious value of x in current scope
   }
   println!("{x}") //6
   ```

## **Difference with using mut Keyword**

1. Shadowing can change the type of the varibale also

   ```rust
   let x = 'shoyo';
   let x = x.len(); // prints 5
   ```

### Resources

- [Rust Book](https://rust-book.cs.brown.edu/ch03-01-variables-and-mutability.html)

---

# Data Types

1. Rust is statically typed lang . It must know all the types at compile time .The compiler infers some types based on the value.

## Scalar Types

1. Represents a single value .

   - Integer (i8,i16,i32,i64,i128,isize similar for u)
   - Floating Point ( f32, f64 bytes)
   - Booleans (1 byte)
   - Characters (4 bytes)

signed variant can store numbers from −(2^n − 1) to 2^n − 1 − 1 inclusive,

Unsigned variants can store numbers from 0 to 2^n − 1.

**Integer Literals**

- A literal is a value written directly in code (42, 0xff, 0b10)

- Prefixes (0b, 0x, 0o) tell Rust what number base you're using

- Suffixes (u8, i32, etc.) tell Rust what type to use

- \_ is just a visual separator: 1_000_000 = 1000000

**Integer OverFlow**

1. In debug mode code panics
2. In release mode code return random value inplace of original

### Resources

- [Rust Book](https://rust-book.cs.brown.edu/ch03-02-data-types.html)

---
