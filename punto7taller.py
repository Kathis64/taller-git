
suma = 0

for i in range (1, 6):
    calificacion = int(input("Ingrese 5 calificaciones del 1 al 100: "))

    while calificacion < 0 or calificacion > 100:
        print("La calificación es del 1 al 100")
        calificacion = int(input("Ingrese nuevamente la calificación: "))
    
    suma += calificacion

promedio = suma / 5
print(f"Su promedio es: {promedio}")
           
