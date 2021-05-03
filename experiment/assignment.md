 Let us now consdier some interesting ways in which the basic experiment can be extended.

  1.  We have seen four different representation formats for numbers. Each had its own advantages and disadvantages. Consider the following representation formats. It holds from the fundamental theorem of arithmetic that every positive integer at least 1 can be expressed uniquely as the product of prime numbers. How would you add and multiply numbers in this format? Also, think of operations on numbers that are easier in this format than in other formats.

  2.  Another related representation that is possible is to use the Chinese remainder theorem. The Chinese remainder theorem is a fundamental theorem in number theory. It states that any number can be represented uniquely as the residue of relatively prime numbers. The representation is unique up to the produce of the relative primes chosen. For instance, x = 2 (mod 5), and x = 3 (mod 8), implies that x = 27. How would you implement the operations add and multiply using this representation. Are there operations that are simple in this format than other formats?

  3.  A related question to think about is to study and implement routines for multiplication in the binary number system that are different from the standard one. By standard, we mean that multiplication is treated as repeated addition. In what circumstances does your routine outperform the standard multiplication routine. Also, study the multiplication operation used in computer hardware at present. To carry our thoughts further, we consider the following questions. Notice that some of these questions may be open, and may not have any published solution.

  4.  Design a representation format for numbers so that the following operations are all efficient. The operations of interest are : add, multiply, gcd, and mod. (mod refers to integer modulo).

  5.  Can you design routines where the size of the numbers being handled far exceedes the number sizes that a machine word can handle. Typical number sizes that current machines can handle is about 20-25 digits. However, there are applications which require one to handle numbers of 500 digits or more. How can you support operations on such large numbers?

