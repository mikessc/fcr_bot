# Fortnite Costa Rica Bot

Bot de Discord&reg; para el server de Fortnite&reg; Costa Rica - Oficial. Su principal función es registrar un ID de Fortnite&reg; para un usuario de Discord&reg;, de esta manera es mas facil para los otros usuarios saberlo y no andar preguntandolo. Tambien cuenta con algunos otros comandos útiles.

## Configurar

Para tener este bot en tu server solo tienes que invitarlo a traves de este link:

> [Invitar a Fortnite_CR Bot](https://discordapp.com/api/oauth2/authorize?client_id=408290437753995275&permissions=270003265&scope=bot)

Y listo! ya puedes comenzar a usarlo.

## Lista de Comandos

Estos son los comandos disponibles:

- **[.help](#help)**
- **[.register <Fortnite ID>](#register)**
- **[.get](#get)**
- **[.reset](#reset)**
- **[.squad](#squad)**
- **[.uber](#uber)**
- **[.stat](#stats)**


<a name="help" />
### \.help

Envia por mensaje privado una lista rapida de los comandos disponibles.

<a name="register" />
### \.register <Fortnite ID>

Registra un ID de Fortnite&reg; al usuario de Discord&reg;. Asegurarse de que el ID este escrito correctamente, ya que es el que los demas van a agregar.

Ejemplo:
```
.register A.I.R.E.L
```

<a name="get" />
### \.get @<Discord user>

Muestra el ID de Fortnite&reg; registrado para cierto usuario de Discord&reg; mencionado.

Ejemplo:
```
.get @☢ A.I.R.E.L#1324 
```

<a name="reset" />
### \.reset <new Fortnite ID>

Reemplaza un ID de Fortnite&reg; para el usuario de Discord&reg;, en caso de que se haya escrito mal o se cambie el ID en el juego.

Ejemplo:
```
.reset newCoolID
```

<a name="squad" />
### \.squad (opcional @<Discord user>)

Si se usa solo, muestra un mensaje general pidiendo personas que se unan al canal de voz para formar squad.
Si se menciona un usuario de Discord&reg;, se envia un mensaje solicitando a este usuario para que se una al canal de voz para integrar el squad.

> **IMPORTANTE:** La persona que usa este comando tiene que estar en un canal de voz.

Ejemplo:
```
.squad
.squad @☢ A.I.R.E.L#1324 
```

<a name="uber" />
### uber 

Si se usa solo, muestra un mensaje general ofreciendo carreo.
Si se menciona un usuario de Discord&reg;, se envia un mensaje solicitando carreo a dicho usuario.

Ejemplo:
```
.uber
.uber @☢ A.I.R.E.L#1324 
```

<a name="stats" />
### \.stats (opcional: ps|xb) <Fortnite ID>

Muestra estadisticas generales del usuario de Fortnite&reg;.
Opcional escribe **ps** para usuarios de play station o **xb** para usuarios que son de xbox. 

Ejemplo:
```
.uber A.I.R.E.L
```

## Bot hecho con

* [Node.js&reg;](https://nodejs.org) - JavaScript runtime.
* [Discord.js](https://discord.js.org) - Modulo de Node.js para interactuar con el Discord&reg; API.
* [MongoDB](https://www.mongodb.com/) - NoSQL document database.

## Autor

* **Michael Salas** - *Trabajo inicial* - [mikessc.com](http://mikessc.com)

## Licencia

Proyecto bajo licencia MIT. Sientase libre de usarlo como guste.

## Agradecimientos

* York Grimes de [anidiotsguide](https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/) por su guia del bot con Discord.js.
* Alfy por las pruebas.
* Irken por sus ideas.
