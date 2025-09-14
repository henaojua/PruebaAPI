# 🚀 Proyecto de Automatización de APIs con Cypress

Este proyecto implementa pruebas automatizadas para APIs REST utilizando **Cypress** como framework de testing.

## 📋 Tecnologías Utilizadas

- Cypress - Framework de testing (incluye todo lo necesario para APIs)
- JavaScript - Lenguaje de programación

## 🎯 Características

- ✅ Testing de endpoints RESTful
- ✅ Validación de status codes y respuestas
- ✅ Pruebas de contratos API
- ✅ Manejo de autenticación (Bearer Token, Basic Auth, API Keys)
- ✅ Data-driven testing con fixtures
- ✅ Testing de APIs sin interfaz gráfica

## 📦 Prerrequisitos

- Node.js 14.0.0 o superior
- npm 6.0.0 o superior
- Cypress 15.2.0
- Git

## ⚙️ Instalación

1. Clonar el repositorio:
   En bash
   git clone https://github.com/tu-usuario/tu-repo-api-cypress.git
   cd tu-repo-api-cypress

Estructura del proyecto

cypress/
├── e2e/PruebaAPI                   
│   └── Ejercicio2.cy.js/              
├── support/            
│   ├── commands.js       
│   └── e2e.js                 
cypress.config.js        
package.json 


## 📋 Para el package.json se manejan las siguientes configuraciones:
{
  "name": "pruebaapi",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "npx cypress open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "cypress": "^15.2.0"
  }
}

## 📋 Para el cypress.config.js se manejan las siguientes configuraciones:



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



Ejecución del proyecto:


Digitar en la linea de comandos npm run test, ya que es el script configurado en el package.json, allí escoger la opción E2E Testing, escoger el navegador, se abrirá una pestaña del navegador seleccionado y allí deberán seleccionar el test llamado Ejercicio2 y se ejecutara de manera automática.

IMPORTANTE: 
Dentro de la UI de cypress hay un botón de repetir la prueba, allí se podrá ejecutar las veces que se desee.



          