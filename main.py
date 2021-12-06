import operations

print ("select an operation to perform:")
print ('1.ADD')
print ('2.SUBTRACT')
print ('3.MULTIPLY')
print ('4.DIVIDE')

operation: str = input ()

num1 = int(input('enter first number: '))
num2 = int(input('enter second number: '))

if operation == "1":
    print(operations.addition(num1, num2))
elif operation == "2":
    print(operations.subtraction(num1, num2))
elif operation == "3":
    print(operations.division(num1, num2))
elif operation == "4":
    print(operations.multiplication(num1, num2))
else:
    print('invalid entry')

