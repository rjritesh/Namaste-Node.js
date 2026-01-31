# Namaste Node.js – Episode 2

## Chapter 02: JavaScript on the Server

This chapter focuses on how JavaScript runs on the server using Node.js and how the **V8 engine** plays a key role in executing JavaScript efficiently.

---

## Servers in Node.js

A **server** is a system that provides data, resources, or services to other computers (called clients) over a network.

In **Node.js**, a server mainly:
- Listens for client requests (usually over **HTTP**)
- Processes those requests
- Sends back appropriate responses

### Why Node.js Servers Are Efficient

Node.js uses an **event-driven, non-blocking I/O architecture**, which allows it to:

- Handle multiple client requests at the same time
- Avoid creating a new thread for each request
- Reduce memory and CPU usage
- Improve overall application performance

This makes Node.js well-suited for scalable and high-traffic applications.

---

## The V8 JavaScript Engine

**V8** is an open-source JavaScript engine developed by **Google**.  
It is used in **Google Chrome** and **Node.js** to execute JavaScript code.

### Key Features of V8

- **Just-In-Time (JIT) Compilation**  
  Converts JavaScript into machine code at runtime for faster execution

- **Garbage Collection**  
  Automatically manages memory and cleans up unused objects

- **High Performance Execution**  
  Optimizes frequently executed code paths to improve speed

---

## How Node.js Converts JavaScript to Machine Code

JavaScript is a **high-level language**, so it must be converted into **machine code** before the CPU can execute it.  
This entire process is handled by the **V8 engine**.

### Step-by-Step Conversion Process

### 1. Parsing
- V8 reads the JavaScript code
- Checks for syntax errors
- Converts the code into an **Abstract Syntax Tree (AST)**

### 2. Intermediate Representation (IR)
- The AST is converted into an **Intermediate Representation**
- This form is lower-level and platform-independent

### 3. Just-In-Time (JIT) Compilation
- The IR is compiled into machine code at runtime
- V8 continuously optimizes the code based on how it runs

---

## Why This Matters

This conversion and optimization process allows Node.js to:
- Execute JavaScript at high speed
- Scale efficiently
- Maintain flexibility while delivering strong performance

---

## Who This Chapter Is For

- Beginners learning how Node.js works internally
- Frontend developers curious about JavaScript on the server
- Learners following the **Namaste Node.js** series

---

## License

This content is for **educational purposes only**.
