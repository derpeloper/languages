"""
**PYTHON TUTORIAL FOR BEGINNERS**
Embedded explanations and runnable examples covering core concepts and standard library
"""

# === CORE PYTHON CONCEPTS ===

"""
**1. VARIABLES**
Dynamic typing - no type declarations needed
snake_case naming convention
"""
name = "Alice"  # Immutable string
scores = [90, 85]  # Mutable list
scores.append(95)  # Mutation

# ❗ Avoid: Using global variables for everything

"""
**2. DATA TYPES**
Basic types: str, int, float, bool, None
"""
text = "Hello"  # String
count = 42  # Integer
pi = 3.1415  # Float
is_valid = True  # Boolean
nothing = None  # Null value

"""
**3. OPERATORS**
Arithmetic: + - * / % **
Comparison: == != > < >= <=
Logical: and or not
Identity: is (checks memory location)
"""
x = 5
y = 5
print(x is y)  # True (small integers are interned)

"""
**4. CONDITIONALS**
if/elif/else structure
Ternary operator: value_if_true if condition else value_if_false
"""
age = 18
status = "Adult" if age >= 18 else "Minor"

"""
**5. LOOPS**
for loops with ranges/iterables
while loops with conditions
List comprehensions: [expression for item in iterable]
"""
# For loop with range
for i in range(3):
    print(i)  # 0, 1, 2

# While loop
count = 3
while count > 0:
    print(count)  # 3, 2, 1
    count -= 1

# List comprehension
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

"""
**6. FUNCTIONS**
def for named functions
lambda for anonymous functions
*args/**kwargs for variable arguments
"""
def add(a, b):
    return a + b

# Lambda example
multiply = lambda x, y: x * y

# *args example
def show_args(*args):
    print(args)  # Tuple of positional arguments

# **kwargs example
def show_kwargs(**kwargs):
    print(kwargs)  # Dictionary of keyword arguments

# ❗ Avoid: Mutable default arguments
def risky_func(items=[]):  # Default list persists between calls
    items.append(1)
    return items

"""
**7. ASYNC FUNCTIONS**
async/await syntax for concurrency
Requires asyncio event loop
"""
import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # Simulate I/O wait
    return "Data"

async def main():
    result = await fetch_data()
    print(result)

# asyncio.run(main())  # Uncomment to execute

# === STANDARD LIBRARY ===

"""
**8. LISTS**
Common methods: append(), extend(), insert(), remove()
"""
numbers = [1, 2]
numbers.extend([3, 4])  # [1, 2, 3, 4]

"""
**9. DICTIONARIES**
Key-value pairs with O(1) access
Dictionary comprehensions: {k: v for ...}
"""
person = {"name": "Bob", "age": 30}
print(person["name"])  # Bob

# Comprehension example
squared = {x: x*x for x in range(3)}  # {0:0, 1:1, 2:4}

"""
**10. FILE I/O**
open() modes: 'r' (read), 'w' (write), 'a' (append)
with statement ensures proper resource cleanup
"""
# Write to file
with open("test.txt", "w") as f:
    f.write("Hello Python!")

# Read from file
with open("test.txt", "r") as f:
    content = f.read()
    print(content)  # Hello Python!

"""
**11. PATHLIB MODULE**
Object-oriented path manipulation
"""
from pathlib import Path

# Create path object
path = Path("data") / "file.txt"
print(path.name)  # file.txt
print(path.exists())  # Check if exists

"""
**12. OS MODULE**
Environment variables and path operations
"""
import os

# Get environment variable
home = os.getenv("HOME")
print(os.path.join(home, "Documents"))  # Cross-platform path

"""
**13. JSON MODULE**
Serialization and deserialization
"""
import json

data = {"name": "Alice", "age": 30}
json_str = json.dumps(data)  # Convert to JSON string
loaded = json.loads(json_str)  # Convert back to dict

"""
**14. DATETIME MODULE**
Date/time manipulation
"""
from datetime import datetime

now = datetime.now()
print(now.strftime("%Y-%m-%d"))  # YYYY-MM-DD format

"""
**15. HTTP REQUESTS (http.client)**
Basic HTTP GET request
"""
import http.client

conn = http.client.HTTPSConnection("example.com")
conn.request("GET", "/")
response = conn.getresponse()
print(response.status, response.reason)  # 200 OK
conn.close()

"""
**16. ERROR HANDLING**
try/except/finally blocks
Custom exceptions
"""
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division by zero!")
finally:
    print("Cleanup")

# Custom exception
class MyError(Exception):
    pass

# raise MyError("Custom error message")

"""
**HOW TO USE THIS TUTORIAL**
1. Run entire file: `python tutorial.py`
2. Test specific sections by uncommenting code
3. Use Python REPL for interactive experimentation:
   - Start with: `python -i tutorial.py`
4. Modify values and add print statements to explore
5. Practice debugging by intentionally causing errors
"""