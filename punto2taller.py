numero = int(input("Ingrese un numero positivo: "))

sumaDivisores = 0

for i in range (1, numero):
    if numero % i == 0:
        sumaDivisores += i

if sumaDivisores == numero:
    print(f"{numero} es un numero perfecto")
else:
    print(f"{numero} no es un numero perfecto")
