# Portafolio web by @MadDevCL

Para poder trabajar en local este proyecto necesitarás **NODE.JS** y el **CLI de ASTRO**
**Node >= 18.**
Primero instalamos las dependencias con el siguiente comando **IMPORTANTE**:
Si no tienes yarn primero deberás ingresar este comando:

    npm install yarn --global

Si ya tenemos yarn:

    yarn &&  yarn add sharp --ignore-engines

Una vez se hayan instalado las dependencias usamos el comando:

    yarn dev

Con esto ya podemos configurar nuestro proyecto.

Para poder activar el formulario necesitas crear una ACCESS KEY totalmente gratuita en el sitio [https://docs.web3forms.com/how-to-guides/static-site-generators/astro](https://web3forms.com/#start)
Una vez generada la **KEY** crea el archivo `.env` en el **root del proyecto** y agrega tu key de la siguiente manera:

    FORM_ACCESS_KEY=TU_KEY

**¡Con esto se habilitará automáticamente la sección contacto!**

Podrás configurar la mayoría de las cosas desde el archivo

    src\config\index.ts

**En la cual podrás editar:**

- Ordenar/Eliminar las secciones de la pagina.
- Agregar/editar nombre
- Experiencia
- Proyectos
- Sección en qué destaco
- Stack (iconos)
- Acciones (Call to actions)

**Para poder editar la sección Sobre ti, tendrás que ir al siguiente archivo:**

    src\components\AboutMe.astro

**Lo mismo para la sección En qué destaco:**

    src\components\GoodAt.astro

Con eso podremos editar el proyecto totalmente, pero... te dejo un reto
**¿Podrás agregarle dark y light mode?**
