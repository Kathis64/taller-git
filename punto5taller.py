def contar(frase):
    letras = 0
    numeros = 0
    espacios = 0

    for caracter in frase:
        if caracter.isalpha():
            letras += 1
        elif caracter.isdigit():
            numeros += 1
        elif caracter.isspace():
            espacios += 1

    return letras, numeros, espacios

frase = input("Ingresa una frase: ")

letras, numeros, espacios = contar(frase)


print(f"Letras: {letras}")
print(f"Números: {numeros}")
print(f"Espacios: {espacios}")
