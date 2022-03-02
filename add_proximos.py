from cgitb import text
from datetime import datetime
from email.policy import default
import tkinter as tk
from tkinter import *
import shutil


OptionList = [
    "Atletismo",
    "Ciclismo",
    "BTT",
    "Mushing"
]

titulos = ['Categoría', 'Título', 'Fecha', 'Hora', 'Distancia', 'Organizador', 'Miniatura']


root = tk.Tk()
root.geometry("800x600")  # Tamaño por defecto
root.title("Añadir-Próximos Eventos RS-Sport")  # Titulo de ventana
root.config(background="aliceblue")

entries = []
i = 0

categoriaResultado = StringVar()


def draw_categories():
    for i, titulo in enumerate(titulos):
        label = Label(root, text=titulos[i])
        label.grid(column=0, row=i+2)
        if(titulo != "Categoría"):
            entry = Entry(root, width=50)
            entry.grid(column=1, row=i+2)

        else:
            categoriaResultado.set(OptionList[0])
            menu = OptionMenu(root, categoriaResultado, *OptionList)
            menu.config(indicatoron=False,)

            menu.grid(column=1, row=i+2)
            entry = Entry(textvariable=categoriaResultado)
        entries.append(entry)


def draw_buttons(num):
    for j in range(int(num)):
        label1 = Label(root, text="Título botón " + str(j+1))
        label1.grid(column=0, row=2*j+9)
        entry1 = Entry(root, width=50)
        entry1.grid(column=1, row=2*j+9)
        entries.append(entry1)

        label2 = Label(root, text="Link botón " + str(j+1))
        label2.grid(column=0, row=2*j+10)
        entry2 = Entry(root, width=50)
        entry2.grid(column=1, row=2*j+10)
        entries.append(entry2)


def print_all(entries):
    for i, entry in enumerate(entries):
        print("I: " + str(i) + ". Entrada: " + entry.get())


def draw_final_button():
    button = Button(text="Añadir Próximo Evento", command=lambda: lectura_escritura())
    button.grid(column=1, row=20)


def draw_instructions():
    label = Label(root, text="\nFecha: dd/mm/aaaa", justify=LEFT)
    label.grid(column=0, row=22, columnspan=1)
    label = Label(root, text="Miniatura: poner imagen en la carpeta raiz, copiar solo nombre: image.jpg.\nEl programa la guarda automáticamente en su carpeta", justify=LEFT)
    label.grid(column=0, row=23, columnspan=2)
    label = Label(
        root, text="Link: poner link completo, sea de PDF o web.\n Por ejemplo: pdf/2022/ogro.pdf, http://www.ogromaraton.com", justify=LEFT)
    label.grid(column=0, row=24, columnspan=2)


def start_app():
    draw_categories()
    draw_buttons(entradaNumBotones.get())
    draw_final_button()
    draw_instructions()


def lectura_escritura():
    print_all(entries)
    mensaje = leer_archivo()
    mensaje = add_race(mensaje)
    guardar_archivo(mensaje)
    copiar_pdf()


def copiar_pdf():
    year = parse_date(entries[2].get())
    shutil.move(entries[6].get(), "img/"+year+"/"+entries[6].get())
    #print("año" + parse_date(entries[1].get()))


def parse_date(date):
    date_string = ""
    date_string = datetime.strptime(date, "%d/%m/%Y")
    return str(date_string.year)

def leer_archivo():
    fichero = open('proximos.js', 'r')
    mensaje = ""
    i = 0
    for i, line in enumerate(fichero):
        # Elimino la primera línea
        if(i >= 1):
            mensaje += line
    fichero.close()
    return mensaje


def add_race(mensaje):
    year = parse_date(entries[2].get())

    textoCompleto = ""
    textoCompleto += "proximos = [\n\n" + "{\n"
    textoCompleto += "\ttitulo: " + "\"" + entries[1].get() + "\",\n"
    textoCompleto += "\tfecha: " + "\"" + entries[2].get() + "\",\n"
    textoCompleto += "\tcategoria: " + "\"" + entries[0].get() + "\",\n"
    textoCompleto += "\thora: " + "\"" + entries[3].get() + "\",\n"
    textoCompleto += "\tdistancia: " + "\"" + entries[4].get() + "\",\n"
    textoCompleto += "\torganizador: " + "\"" + entries[5].get() + "\",\n"
    textoCompleto += "\tminiatura: " + "\"img/" +year+"/" + entries[6].get() + "\",\n"

    textoCompleto += "\tbotones:\n"+"\t\t[\n"

    for j in range(int(entradaNumBotones.get())):
        textoCompleto += "\t\t\t{\n"
        textoCompleto += "\t\t\t\ttitulo: \"" + entries[2*j+7].get() + "\",\n"
        textoCompleto += "\t\t\t\tarchivo: \"" + entries[2*j+8].get() + "\",\n"

        textoCompleto += "\t\t\t},\n"
    textoCompleto += "\n\t\t],"

    #textoCompleto+="\tbotones: " + "\"" + botonesResultado.get() + "\",\n"

    textoCompleto += "\n},\n"
    textoCompleto += mensaje

    # print(textoCompleto)
    return textoCompleto


def guardar_archivo(mensaje):
    fichero = open('proximos.js', 'w')
    fichero.write(mensaje)


labelNumBotones = Label(root, text="Introduce el número de botones")
labelNumBotones.grid(column=0, row=0)

entradaNumBotones = Entry()
entradaNumBotones.grid(column=1, row=0)

button = Button(text="Aceptar", command=lambda: start_app())
button.grid(column=2, row=0)

root.mainloop()
