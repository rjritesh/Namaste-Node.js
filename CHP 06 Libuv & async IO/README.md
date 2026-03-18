# Episode-06: libuv and Async I/O

## Understanding Synchronous and Asynchronous

### Overview

## libuv

**libuv** is a library written in the **C programming language** that helps **Node.js** improve efficiency while running tasks in parallel. However, Node.js already has asynchronous APIs. It uses **libuv's thread pool** when an async API is not available in Node.js and when processes block operations.

libuv itself does **not perform the task**; it only **manages the operations**.

### Key Features of libuv

- Integrates an **event-driven asynchronous I/O model**.
- Allows the **CPU and other resources to be used simultaneously** while performing I/O operations, resulting in efficient use of resources and network.
- Facilitates an **event-driven approach** where I/O and other activities are handled using **callback-based notifications**.

---

## Synchronous JavaScript

In **synchronous programming**, operations are performed **one after another in sequence**.

Each line of code **waits for the previous one to finish** before executing. This results in a **predictable and linear execution flow**, where every task completes before the next one starts.

**Characteristics:**
- Sequential execution
- Blocking behavior
- Predictable order of execution

---

## Asynchronous JavaScript

**Asynchronous programming** allows **multiple tasks to run independently**.

In asynchronous code, a task can be **started**, and while waiting for it to finish, **other tasks can continue executing**. This **non-blocking behavior** improves performance and responsiveness, especially in **web applications**.

**Characteristics:**
- Non-blocking execution
- Better performance for I/O operations
- Improved responsiveness