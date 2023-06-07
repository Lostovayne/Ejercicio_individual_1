const fs = require('fs') //commonJs
// import fs from 'fs'

//Crear archivo
fs.writeFile('Saludo.txt', 'Hola Mundo!', () => console.log('Archivo creado'))

//Leer Archivo
fs.readFile('Saludo.txt', 'utf-8', (data) => console.log(data))

// INDIVIDUAL 1
// ● ¿Node debería ser una alternativa a considerar si necesitara crear una aplicación que se
// ejecute en diferentes plataformas?
// Respuesta Esperada: Sí, Node es una excelente alternativa, pues una de sus ventajas es la capacidad de funcionar en múltiples plataformas. Desarrollamos el código una vez y ahorramos tiempo y esfuerzo en comparación con el desarrollo de aplicaciones nativas.

// ● ¿Node debería ser una alternativa a considerar si necesitara disponibilizar los datos de una
// base de datos como una API REST?
// Respuesta Esperada: Node es una excelente opción a considerar junto a su framework Express, debido a su eficiencia, escalabilidad, ecosistema de bibliotecas y facilidad de uso.

// ● ¿Ocuparía Node para hacer cambios estéticos en mis sitios web?
// Respuesta Esperada: No, Node no es una alternativa para realizar cambios estéticos en sitios
