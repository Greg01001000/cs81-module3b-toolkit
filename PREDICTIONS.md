### **CS 81, Module 3B Math Toolkit, by GregH, 7/7/25**

I think the double() function will take one numeric argument and return that number multiplied by two.

I believe the square() function will take one numeric argument and return that number multiplied by itself.

I hope the isEven() function will take one numeric argument and return true if that number is even, or false if the number is odd. I'm not confident about this one because I used this code--!(n % 2)--which I hope will evaluate 0 as true and 1 as false. I'm at the mercy of JavaScript's quirks here. I can't wait to find out!

I'm optimistic that the isOdd() function will take one numeric argument and return true if that number is odd, or false if the number is even. I'm a little more confident about this one because the last one worked, but for this one I added an exclamation point--!!(n % 2)--which I hope will evaluate 1 as true and 0 as false. I confess that I got this idea from Google AI, which is part of the reason for my optimism. But again, its viability depends on the implementation details of the JavaScript interpreter, because this code is an edge case.

I believe the negation() function will take one numeric argument and return the negative of that number. (If the argument is already negative, the function will return the positive version of that number.) I'm confident because I used the code, 0 - n, which is a reliable way of switching the sign. n * -1 would also work, but it's longer. After verifying that the code works, I plan to test -n, which math teachers love and is even shorter, but which I doubt will work in most programming languages.