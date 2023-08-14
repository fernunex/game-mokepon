<p align="center">
  <a href="" rel="noopener">
 <img width=650px height=450px src="https://github.com/fernunex/game-mokepon/assets/49699693/d0d8deab-8536-4d84-862e-415e27dcd7e7" alt="Project logo"></a>
</p>
<h3 align="center">Basic Web Online Multiplayer Game</h3>

---

 This project is part of the course [Curso de Programación Básica](https://platzi.com/cursos/programacion-basica/) of [Platzi](https://platzi.com).



## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Next Steps](#next-steps)

## 🧐 About <a name = "about"></a>

The purpose of this project is to learn the following concepts about Programming and Web-development.
  - Learn to write clean code in HTML, CSS y JavaScript
  - Algorithm Design
  - Functions, objects, and events
  - HTTP Protocol
  - Basics of Nodejs
  - Client-server architecture 
  - Web server using Express.js
  - API REST using JavaScript


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

    Node.js >= v12.22.9

### Installing

1. Clone or download the repository

    ```bash
    $ git clone https://github.com/fernunex/game-mokepon.git
    ```

2. Open the project directory and then install the dependencies:

    ```bash
    $ npm install
    ```

3. Run the app (server):

    ```bash
    $ node index.js 
    ```

## 🎈 Usage <a name="usage"></a>

Go to http://127.0.0.1:8070/ or http://localhost:8070/ when the game is running. Then open a new tab at the same URL (http://127.0.0.1:8070/) to simulate two players on a different computer, then you can select the mokepon, and then when you are in the map you can collide with another mokepon and the fight is gonna start, finally, you select the order of your attacks and wait for the enemy's attacks.

If you want to play on any device in your local network, then you can modify the 'urlLocalHost' variable located at line 86 file /public/js/index.js for the IP address of your server.
And configure your firewall to allow HTTP connection through port 8070, though.
## ⛏️ Built Using <a name = "built_using"></a>

- [Node.js](https://nodejs.org/en) - Node.js

## ✍️ Authors <a name = "authors"></a>

- [@fernunex](https://github.com/fernunex)


## 💡 Next steps <a name = "next-steps"></a>

- Create a system to create and save user info.
- Add more mokepones.
- Extend the map.
- Add misions and achivements.
- Use MariaDB Database or MongoDB.
- Use Docker.
