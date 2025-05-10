# Introduction to Python

Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages in the world, used in web development, data science, artificial intelligence, automation, and many other domains.

## Python Basics

### Getting Started

#### Installation
Python can be downloaded from [python.org](https://www.python.org/downloads/). Most Linux and macOS systems come with Python pre-installed. You can verify your installation by opening a terminal or command prompt and typing:

```bash
python --version  # or python3 --version on some systems
```

#### Interactive Shell
Python provides an interactive shell (REPL - Read, Evaluate, Print, Loop) where you can execute code line by line:

```bash
python  # or python3 on some systems
```

```python
>>> print("Hello, World!")
Hello, World!
>>> 2 + 3
5
```

#### Running Python Scripts
Save Python code in a `.py` file and execute it:

```bash
python script.py  # or python3 script.py
```

Example `script.py`:
```python
print("Hello, World!")
```

### Python Syntax Basics

Python uses indentation (whitespace) to define code blocks, making it visually clean and readable.

```python
# This is a comment
print("Hello, World!")  # This is also a comment

"""
This is a multi-line comment
or docstring used to document code
"""
```

### Variables and Data Types

Python is dynamically typed, meaning you don't need to specify variable types:

```python
# Basic data types
name = "John"               # String
age = 30                    # Integer
height = 5.9                # Float
is_student = True           # Boolean
has_car = None              # NoneType (similar to null in other languages)

# Check type of variable
print(type(name))  # <class 'str'>
```

### Basic Data Structures

```python
# Lists (ordered, mutable collection)
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")     # Add item
fruits[0] = "pear"          # Modify item
first_fruit = fruits[0]     # Access by index (starts at 0)
fruits.remove("banana")     # Remove item
fruits.sort()               # Sort list

# Tuples (ordered, immutable collection)
coordinates = (10.5, 20.3)
x, y = coordinates          # Tuple unpacking

# Dictionaries (key-value pairs, mutable)
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
person["email"] = "john@example.com"  # Add item
name = person["name"]                 # Access by key
person["age"] = 31                    # Update value
del person["city"]                    # Remove item

# Sets (unordered collection of unique items)
colors = {"red", "green", "blue"}
colors.add("yellow")        # Add item
colors.remove("red")        # Remove item
is_present = "green" in colors  # Check membership
```

### Operators

```python
# Arithmetic operators
sum = 5 + 3          # Addition
difference = 10 - 5  # Subtraction
product = 4 * 2      # Multiplication
quotient = 20 / 5    # Division (returns float)
int_quotient = 20 // 5  # Integer division
remainder = 10 % 3   # Modulus (remainder)
power = 2 ** 3       # Exponentiation (2³ = 8)

# Comparison operators
is_equal = 5 == 5    # Equal to
is_not_equal = 5 != 3  # Not equal to
is_greater = 10 > 5  # Greater than
is_less = 5 < 10     # Less than
is_greater_or_equal = 10 >= 10  # Greater than or equal to
is_less_or_equal = 5 <= 5  # Less than or equal to

# Logical operators
is_adult = age >= 18 and height > 5.5  # Logical AND
is_eligible = is_student or has_experience  # Logical OR
is_not_valid = not is_valid  # Logical NOT

# Identity operators
a = [1, 2, 3]
b = a
is_same_object = a is b  # True (same object in memory)
c = [1, 2, 3]
is_same_object = a is c  # False (different objects, even with same content)

# Membership operators
is_present = "apple" in fruits  # True if "apple" exists in fruits
```

### String Operations

```python
# String creation
single_quote = 'Hello'
double_quote = "World"
triple_quote = '''Multiple
lines'''

# String concatenation
greeting = "Hello" + " " + "World"  # "Hello World"

# String formatting
name = "John"
age = 30
# f-strings (Python 3.6+)
message = f"My name is {name} and I'm {age} years old."
# format() method
message = "My name is {} and I'm {} years old.".format(name, age)
# %-formatting (older style)
message = "My name is %s and I'm %d years old." % (name, age)

# String methods
text = "  Hello, World!  "
length = len(text)          # Length of string
upper_case = text.upper()   # "  HELLO, WORLD!  "
lower_case = text.lower()   # "  hello, world!  "
stripped = text.strip()     # "Hello, World!" (removes leading/trailing whitespace)
replaced = text.replace("Hello", "Hi")  # "  Hi, World!  "
split_text = text.split(",")  # ["  Hello", " World!  "] (splits by delimiter)
```

## Control Flow

### Conditional Statements

```python
# If-elif-else statement
age = 18

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
else:
    print("Adult")

# One-line if statements
message = "Eligible" if age >= 18 else "Not eligible"
```

### Loops

```python
# For loop
for fruit in fruits:
    print(fruit)

# For loop with range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):  # 1, 2, 3, 4, 5
    print(i)

for i in range(1, 10, 2):  # 1, 3, 5, 7, 9 (step of 2)
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control statements
for i in range(10):
    if i == 3:
        continue  # Skip the rest of the current iteration
    if i == 7:
        break  # Exit the loop
    print(i)
```

### Comprehensions

Comprehensions provide a concise way to create lists, dictionaries, and sets:

```python
# List comprehension
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# List comprehension with condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]  # [0, 4, 16, 36, 64]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_values = {x % 3 for x in range(10)}  # {0, 1, 2}
```

## Functions

```python
# Defining a function
def greet(name):
    """This is a docstring: documentation for the function."""
    return f"Hello, {name}!"

# Calling a function
message = greet("John")  # "Hello, John!"

# Default parameters
def greet(name="Guest"):
    return f"Hello, {name}!"

message = greet()  # "Hello, Guest!"

# Multiple parameters
def add(a, b):
    return a + b

sum = add(5, 3)  # 8

# Variable number of arguments
def sum_all(*args):
    return sum(args)

total = sum_all(1, 2, 3, 4)  # 10

# Variable number of keyword arguments
def person_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

person_info(name="John", age=30, city="New York")

# Lambda functions (anonymous functions)
square = lambda x: x**2
result = square(5)  # 25

# Function as argument
def apply(func, value):
    return func(value)

result = apply(lambda x: x**2, 5)  # 25
```

## Object-Oriented Programming

### Classes and Objects

```python
# Defining a class
class Person:
    # Class attribute (shared by all instances)
    species = "Homo sapiens"
    
    # Constructor
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age
    
    # Instance method
    def greet(self):
        return f"Hello, my name is {self.name}"
    
    # Method with parameters
    def is_older_than(self, other_person):
        return self.age > other_person.age
    
    # Class method (works with class attributes)
    @classmethod
    def get_species(cls):
        return cls.species
    
    # Static method (doesn't use class or instance attributes)
    @staticmethod
    def is_adult(age):
        return age >= 18

# Creating objects (instances of a class)
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Accessing attributes and methods
name = person1.name  # "Alice"
greeting = person1.greet()  # "Hello, my name is Alice"
is_older = person2.is_older_than(person1)  # True
species = Person.get_species()  # "Homo sapiens"
is_adult = Person.is_adult(25)  # True
```

### Inheritance

```python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

# Derived class
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Creating objects
dog = Dog("Rex")
cat = Cat("Whiskers")

print(dog.speak())  # "Rex says Woof!"
print(cat.speak())  # "Whiskers says Meow!"

# Check if object is instance of a class
isinstance(dog, Dog)    # True
isinstance(dog, Animal) # True
isinstance(dog, Cat)    # False
```

### Encapsulation and Access Modifiers

Python uses naming conventions for access control:

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner        # Public attribute
        self._balance = balance   # Protected attribute (convention)
        self.__id = 12345         # Private attribute (name mangling)
    
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self._balance

account = BankAccount("John")
account.deposit(1000)
balance = account.get_balance()  # 1000
# Accessing private attribute (not recommended)
# print(account.__id)  # AttributeError
print(account._BankAccount__id)  # 12345 (name mangling)
```

## Modules and Packages

### Importing Modules

```python
# Importing an entire module
import math
result = math.sqrt(16)  # 4.0

# Importing specific functions
from math import sqrt, pi
result = sqrt(16)  # 4.0

# Importing with an alias
import math as m
result = m.sqrt(16)  # 4.0

# Importing all functions (not recommended)
from math import *
result = sqrt(16)  # 4.0
```

### Creating and Using Modules

`my_module.py`:
```python
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159
```

Using the module:
```python
import my_module

message = my_module.greet("John")  # "Hello, John!"
sum_value = my_module.add(5, 3)    # 8
```

### Packages

A package is a directory containing multiple Python modules and a special `__init__.py` file.

```
my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

Importing from packages:
```python
# Import a module from a package
import my_package.module1

# Import a function from a module in a package
from my_package.module1 import function_name

# Import a module from a subpackage
import my_package.subpackage.module3
```

## File Handling

### Reading Files

```python
# Basic file reading
with open('file.txt', 'r') as file:
    content = file.read()  # Read entire file
    
# Reading lines
with open('file.txt', 'r') as file:
    lines = file.readlines()  # List of lines with newline characters
    
# Reading line by line
with open('file.txt', 'r') as file:
    for line in file:
        print(line.strip())  # Process each line
```

### Writing Files

```python
# Writing to a file
with open('output.txt', 'w') as file:
    file.write("Hello, World!\n")
    file.write("This is a new line.")

# Appending to a file
with open('output.txt', 'a') as file:
    file.write("\nAppending another line.")
```

### Working with CSV Files

```python
import csv

# Reading CSV
with open('data.csv', 'r') as file:
    csv_reader = csv.reader(file)
    for row in csv_reader:
        print(row)  # List of values in the row

# Reading CSV into dictionaries
with open('data.csv', 'r') as file:
    csv_reader = csv.DictReader(file)
    for row in csv_reader:
        print(row['name'], row['age'])  # Access by column name

# Writing CSV
data = [
    ['Name', 'Age', 'City'],
    ['John', '30', 'New York'],
    ['Alice', '25', 'London']
]

with open('output.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
    for row in data:
        csv_writer.writerow(row)

# Or write all at once
with open('output.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerows(data)
```

### Working with JSON Files

```python
import json

# Reading JSON
with open('data.json', 'r') as file:
    data = json.load(file)  # Deserialize JSON to Python object

# Writing JSON
data = {
    'name': 'John',
    'age': 30,
    'city': 'New York',
    'languages': ['Python', 'JavaScript']
}

with open('output.json', 'w') as file:
    json.dump(data, file, indent=4)  # Serialize Python object to JSON
```

## Exception Handling

```python
# Basic try-except
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Invalid input. Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")

# Handling multiple exceptions
try:
    # Code that might raise an exception
    pass
except (ValueError, TypeError) as e:
    print(f"Error: {e}")

# try-except-else-finally
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("Invalid input.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    # Executes if no exception occurred
    print(f"Result: {result}")
finally:
    # Always executes, regardless of exception
    print("Execution completed.")

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 120:
        raise ValueError("Age seems unrealistic")
    return age

# Custom exceptions
class CustomError(Exception):
    """Base class for custom exceptions"""
    pass

class ValueTooSmallError(CustomError):
    """Raised when the value is too small"""
    pass

class ValueTooLargeError(CustomError):
    """Raised when the value is too large"""
    pass
```

## Working with Dates and Times

```python
from datetime import datetime, date, timedelta

# Current date and time
now = datetime.now()  # Current local datetime
today = date.today()  # Current local date

# Creating date and datetime objects
specific_date = date(2023, 1, 15)  # January 15, 2023
specific_time = datetime(2023, 1, 15, 14, 30, 0)  # 2:30 PM on January 15, 2023

# Formatting dates and times
formatted_date = now.strftime("%Y-%m-%d")  # e.g., "2023-01-15"
formatted_time = now.strftime("%H:%M:%S")  # e.g., "14:30:00"
formatted_datetime = now.strftime("%Y-%m-%d %H:%M:%S")  # e.g., "2023-01-15 14:30:00"

# Parsing datetime from string
date_string = "2023-01-15 14:30:00"
parsed_datetime = datetime.strptime(date_string, "%Y-%m-%d %H:%M:%S")

# Date arithmetic
tomorrow = today + timedelta(days=1)
next_week = today + timedelta(weeks=1)
two_hours_later = now + timedelta(hours=2)

# Date comparison
is_future = specific_date > today
is_past = specific_date < today
```

## Regular Expressions

```python
import re

# Matching patterns
text = "My phone number is 123-456-7890"
pattern = r"\d{3}-\d{3}-\d{4}"
match = re.search(pattern, text)

if match:
    phone_number = match.group()  # "123-456-7890"

# Finding all matches
text = "Call me at 123-456-7890 or 987-654-3210"
pattern = r"\d{3}-\d{3}-\d{4}"
matches = re.findall(pattern, text)  # ["123-456-7890", "987-654-3210"]

# Replacing patterns
text = "My phone number is 123-456-7890"
pattern = r"(\d{3})-(\d{3})-(\d{4})"
formatted = re.sub(pattern, r"(\1) \2-\3", text)  # "My phone number is (123) 456-7890"

# Splitting text
text = "apple,banana;orange,grape;pear"
pattern = r"[,;]"  # Split on comma or semicolon
fruits = re.split(pattern, text)  # ["apple", "banana", "orange", "grape", "pear"]
```

## Functional Programming

Python supports functional programming with tools like `map()`, `filter()`, and `reduce()`:

```python
# map(): Apply function to each item in an iterable
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25]

# filter(): Filter items based on a function
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4, 6]

# reduce(): Apply function cumulatively to items
from functools import reduce
numbers = [1, 2, 3, 4, 5]
sum_all = reduce(lambda x, y: x + y, numbers)  # 15
```

## Decorators

Decorators modify or enhance functions without changing their code:

```python
# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Something is happening before the function is called.
# Hello!
# Something is happening after the function is called.

# Decorator with arguments
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("John")
# Output:
# Hello, John!
# Hello, John!
# Hello, John!
```

## Generators

Generators are functions that can be paused and resumed, yielding values one at a time:

```python
# Simple generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Using the generator
counter = count_up_to(5)
print(next(counter))  # 1
print(next(counter))  # 2

# Looping through all values
for num in count_up_to(5):
    print(num)  # 1, 2, 3, A, 5

# Generator expressions
squares = (x**2 for x in range(5))  # Generator expression, similar to list comprehension
for square in squares:
    print(square)  # 0, 1, 4, 9, 16
```

## Context Managers

Context managers handle setup and teardown actions around a block of code:

```python
# Using a context manager for file operations
with open('file.txt', 'r') as file:
    data = file.read()
# File is automatically closed after the with block

# Creating a context manager using a class
class OpenFile:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

# Using the custom context manager
with OpenFile('file.txt', 'r') as file:
    data = file.read()

# Creating a context manager using a generator
from contextlib import contextmanager

@contextmanager
def open_file(filename, mode):
    file = open(filename, mode)
    try:
        yield file
    finally:
        file.close()

# Using the generator-based context manager
with open_file('file.txt', 'r') as file:
    data = file.read()
```

## Python Standard Library Highlights

Python comes with a rich standard library offering modules for various tasks:

```python
# os: Operating system interface
import os
files = os.listdir('.')  # List files in current directory
os.mkdir('new_directory')  # Create directory
path = os.path.join('folder', 'file.txt')  # Create path string

# sys: System-specific parameters and functions
import sys
args = sys.argv  # Command line arguments
sys.exit(0)  # Exit program

# random: Generate random numbers
import random
num = random.randint(1, 10)  # Random integer between 1 and 10
choice = random.choice(['apple', 'banana', 'cherry'])  # Random selection
random.shuffle(my_list)  # Shuffle list in place

# collections: Specialized container datatypes
from collections import Counter, defaultdict, namedtuple
word_counts = Counter(['apple', 'orange', 'apple', 'banana', 'apple'])
default_dict = defaultdict(int)  # Default value for missing keys is 0
Point = namedtuple('Point', ['x', 'y'])  # Create a named tuple class

# itertools: Functions for efficient looping
import itertools
permutations = list(itertools.permutations([1, 2, 3]))
combinations = list(itertools.combinations([1, 2, 3, 4], 2))
repeated = list(itertools.repeat(10, 3))  # [10, 10, 10]

# functools: Higher-order functions and operations on callable objects
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# datetime: Date and time handling
from datetime import datetime, timedelta
now = datetime.now()
one_week_ago = now - timedelta(days=7)

# math: Mathematical functions
import math
sine = math.sin(math.pi / 2)  # 1.0
log = math.log(100, 10)  # 2.0
sqrt = math.sqrt(16)  # 4.0

# json: JSON encoding and decoding
import json
data_string = json.dumps({"name": "John", "age": 30})
data_object = json.loads(data_string)

# urllib: URL handling
from urllib.request import urlopen
with urlopen('https://api.example.com/data') as response:
    data = response.read()

# re: Regular expressions
import re
matches = re.finditer(r'\d+', 'Numbers: 10, 20, 30')

# unittest: Unit testing framework
import unittest

class TestStringMethods(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('hello'.upper(), 'HELLO')
    
if __name__ == '__main__':
    unittest.main()
```

## Popular Third-Party Libraries

Python has a vast ecosystem of third-party libraries for various domains:

### Data Science and Machine Learning
- **NumPy**: Numerical computing with powerful array objects
- **pandas**: Data analysis and manipulation
- **matplotlib** and **seaborn**: Data visualization
- **scikit-learn**: Machine learning algorithms
- **TensorFlow** and **PyTorch**: Deep learning frameworks

### Web Development
- **Django**: Full-featured web framework
- **Flask**: Lightweight web framework
- **FastAPI**: Modern, fast web framework
- **Requests**: HTTP requests made easy

### Automation and Scripting
- **Selenium**: Browser automation
- **Beautiful Soup**: HTML and XML parsing
- **PyAutoGUI**: GUI automation
- **Scrapy**: Web scraping framework

### GUI Development
- **Tkinter**: Standard GUI toolkit
- **PyQt** and **PySide**: Qt framework bindings
- **Kivy**: Cross-platform GUI framework

### Database Access
- **SQLAlchemy**: SQL toolkit and ORM
- **psycopg2**: PostgreSQL adapter
- **pymongo**: MongoDB driver

## Python Development Tools

### Virtual Environments
Python virtual environments isolate project dependencies:

```bash
# Creating a virtual environment
python -m venv myenv

# Activating the virtual environment
# On Windows:
myenv\Scripts\activate
# On macOS/Linux:
source myenv/bin/activate

# Installing packages
pip install package_name

# Listing installed packages
pip list

# Freezing requirements
pip freeze > requirements.txt

# Installing from requirements
pip install -r requirements.txt

# Deactivating virtual environment
deactivate
```

### Package Management
**pip** is the standard package installer for Python:

```bash
# Installing packages
pip install package_name

# Installing specific version
pip install package_name==1.2.3

# Upgrading packages
pip install --upgrade package_name

# Uninstalling packages
pip uninstall package_name
```

### Linting and Formatting
Tools to maintain code quality:

- **pylint**: Static code analyzer
- **flake8**: Style guide enforcement
- **black**: Code formatter
- **isort**: Import sorter

### Testing
Frameworks for testing Python code:

- **unittest**: Standard library testing framework
- **pytest**: Feature-rich testing framework
- **nose2**: Test runner

### IDEs and Code Editors
Popular environments for Python development:

- **Visual Studio Code**: Lightweight, extensible editor
- **PyCharm**: Full-featured Python IDE
- **Jupyter Notebook**: Interactive computing
- **Spyder**: Scientific computing IDE

## Python Best Practices

1. **Follow PEP 8** - the official Python style guide
2. **Use meaningful variable and function names**
3. **Write docstrings** for modules, classes, and functions
4. **Handle exceptions** properly
5. **Use virtual environments** for project isolation
6. **Test your code** with automated tests
7. **Keep functions small and focused** on a single task
8. **Use list comprehensions** when appropriate for readability
9. **Avoid global variables**
10. **Use context managers** (with statements) for resource management
11. **Remember that readability counts** - clear is better than clever
12. **Follow the principle of "Explicit is better than implicit"**

## Next Steps in Python Learning

1. **Practice with small projects** - solve real problems
2. **Learn version control** with Git
3. **Explore libraries** relevant to your interests
4. **Contribute to open-source projects**
5. **Join Python communities** (like Python Discord, Reddit r/learnpython)
6. **Attend Python meetups or conferences**
7. **Read code written by experienced Python developers**
8. **Teach others** to solidify your understanding

Python's simplicity, readability, and vast ecosystem make it an excellent choice for beginners and experts alike. Whether you're building web applications, analyzing data, automating tasks, or exploring artificial intelligence, Python provides powerful tools to accomplish your goals.