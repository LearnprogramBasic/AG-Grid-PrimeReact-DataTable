<p align="center">
  <img src="https://cms.siigo.com/wp-content/uploads/2023/08/logo_slogan.png" alt="Siigo Logo" width="50%" height="50%">
  <br>
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="20%" height="20%">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React Logo" width="20%" height="20%">
</p>

# Siigo React UI Trunk Component

Bienvenido al repositorio de tax-details-table Componente de Dominio de Trunk de Siigo. Este repositorio contiene el código fuente de la aplicación de tax-details-table de Siigo, usando React y Vite.

## ¿Qué es UI Trunk Component?

_**Este espacio debe contener la información sobre la necesidad de negocio que cumple el micro front end de siigo. Este texto es un place holder y debe ser de actualizado de acuerdo con su contexto**_

La Parcela tax-details-table es encargada de ...

## Quien mantiene este repositorio?

_**Este espacio debe contener la información sobre la tribu que mantiene y es responsable de este micro frontend**_

Este repositorio es mantenido por la tribu de `Tribu` de Siigo.



## 📋 Table of Contents
1. [Features](#features)
2. [Estructura fisica del microfrontend/parcela](#estructura-fisica-del-microfrontend)
3. [Tecnologías](#tecnologías)
4. [Guía de administración y uso](#guía-de-administración-y-uso)
	- [Requisitos Previos](#requisitos-previos)
	- [Entorno de desarrollo](#entorno-de-desarrollo)
	- [Documentaciones relevantes](#documentaciones-relevantes)
	- [Variables de entorno para desarrollo](#variables-de-entorno-para-desarrollo)
	- [Advertencias y limitaciones](#advertencias-y-limitaciones)
	- [Zustand como state management](#zustand-como-state-management)
	- [Instalación y administración de dependencias](#instalación-y-administración-de-dependencias)
	- [Ejecución del proyecto](#ejecución-del-proyecto)
	- [Ejecución de linters](#ejecución-de-linters)
	- [Ejecución de tests](#ejecución-de-tests)
	- [Commits y versionamiento](#commits-y-versionamiento)
5. [Administración del repositorio](#administración-del-repositorio)
	- [Branches](#branches)
	- [Deployments y como se integran con los ambientes](#deployments-y-como-se-integran-con-los-ambientes)



# Features
- Lazy Loading y Code Splitting.
- Modo single-spa y stand-alone.
- Manejo de assets con path dinámicos.
- Uso estándar de environments.
- Manejo de traducciones.
- SCSS.
- Zustand para manejo de estados.
- Vitest para unit testing.
- Encapsulación de estilos.
- Gestión de estados
- Enrutamiento
- Linters
- Convenciones de commits
- CI/CD
- Versionamiento
- Documentación


# Estrucutra fisica del microfrontend

```
.github
.husky
src
	├── assets
	│   ├── scss
	│   └── i18n
	├── components
		├── componentA
			├── index.tsx
			├── index.scoped.scss
			├── props.type.ts
	├── hooks
	├── pages
	├── services
		├── i18n
		├── routes
		├── store
	├── typings
	├── utils
tests
	├── unit
	├── e2e
.pretierrc.json
.eslintrc.json
.env.example
package.json
vite.config.ts
tsconfig.json
vitest.config.ts

```


Cada carpeta tiene un propósito especifico y se debe de respetar la estructura de la carpeta para mantener la coherencia y la legibilidad del código. A continuación se detallan las responsabilidades de cada carpeta:
- `.github`: Carpeta encargada de almacenar los workflows de github.
- `.husky`: Carpeta encargada de almacenar los hooks de git.
- `src`: Carpeta encargada de almacenar el código fuente del micro frontend.
	- `assets`: Carpeta encargada de almacenar los assets del micro frontend, como estilos, imágenes, fuentes, traducciones, etc.
	- `components`: Carpeta encargada de almacenar los componentes del micro frontend, cada componente debe de tener su propia carpeta.
	- `hooks`: Carpeta encargada de almacenar los hooks del micro frontend, cada hook debe de tener su propia carpeta.
	- `pages`: Carpeta encargada de almacenar las páginas del micro frontend, cada página debe de tener su propia carpeta.
	- `services`: Carpeta encargada de almacenar los servicios del micro frontend, cada servicio debe de tener su propia carpeta.
		- `i18n`: Carpeta encargada de almacenar los servicios de internacionalización del micro frontend, cada servicio debe de tener su propio archivo y debe de seguir el estándar de internacionalización de siigo.
		- `routes`: Carpeta encargada de almacenar los servicios de rutas del micro frontend, cada servicio debe de tener su propio archivo y debe de seguir el estándar de rutas de siigo.
		- `store`: Carpeta encargada de almacenar los servicios de estado del micro frontend, cada servicio debe de tener su propio archivo y debe de seguir el estándar de estado de siigo.
	- `typings`: Carpeta encargada de almacenar los typings del micro frontend, cada tipo debe de tener su propio archivo y debe de seguir el estándar de typings de siigo.
	- `utils`: Carpeta encargada de almacenar los utilitarios del micro frontend.
- `tests`: Carpeta encargada de almacenar los tests del micro frontend, cada test debe de tener su propia carpeta y debe de seguir el estándar de tests de siigo.
	- `unit`: Carpeta encargada de almacenar los tests unitarios del micro frontend, cada test debe de tener su propia carpeta .
	- `e2e`: Carpeta encargada de almacenar los tests de integración del micro frontend, cada test debe de tener su propia carpeta.
- `.prettierrc.json`: Archivo de configuración de prettier.
- `.eslintrc.json`: Archivo de configuración de eslint.
- `.env.example`: Archivo de ejemplo de variables de entorno.
- `package.json`: Archivo de configuración de npm.
- `vite.config.ts`: Archivo de configuración de vite.
- `tsconfig.json`: Archivo de configuración de typescript.
- `vitest.config.ts`: Archivo de configuración de vitest.
- Existen otros archivos de configuración que son necesarios para el funcionamiento del micro frontend y que no se deben de modificar a menos que sea estrictamente necesario.



# Tecnologías
- Vite
- React
- Single SPA React
- SCSS
- Vitest
- Eslint
- Prettier
- Typescript
- Zustand



# Guía de administración y uso

A continuación se detallan los pasos para la instalación, configuración y uso de este micro frontend, para su desarrollo y mantenimiento del repositorio.

## Requisitos Previos

Para poder ejecutar este micro frontend, se requiere tener instalado en el equipo de desarrollo las siguientes herramientas:

-   [Node.js](https://nodejs.org/es/) (v18.10.0 o superior)
    -   Método de instalación recomendado: [Volta](https://volta.sh/) **⚠ Advertencia: NVM puede causar problemas con la resolución de módulos globales, en especial en entornos windows**
-   [PNPM](https://pnpm.io/) (v8.6.0 o superior) **⚠ Advertencia: NO se soporta ningún otro package manager, como YARN, BUN o NPM**
    -   Guía de instalación: [Instalación de PNPM](https://pnpm.io/es/installation)
    -   Método de instalación recomendado: [Volta](https://volta.sh/)
    -   Método de instalación alternativo: [Node Corepack](https://github.com/nodejs/corepack)
        1. Enable Corepack using `corepack enable`
        2. Test Corepack using `pnpm -v`

### Configuración del .npmrc

Debido a que los paquetes de uso de siigo siguen el estándar de isolation de registros de npm, es necesario configurar el archivo .npmrc para que pueda acceder a los paquetes privados de siigo. Para esto debe de existir un archivo .npmrc en la raíz del proyecto. El siguiente es un ejemplo de como debe de estar configurado el archivo .npmrc

_**Advertencia: Solo se pueden consumir los feeds npm de github, azure devops no esta soportado**_

```bash
; begin auth token
@siigo-arquitectura:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
; end auth token

; begin auth token
@siigo-siigonube:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
; end auth token

# Disclaimer:
# Queda estrictamente prohibido dejar tokens quemados en este archivo en cualquier situación.
```

Este archivo permitirá que el proyecto pueda acceder a los paquetes privados de siigo. Para poder acceder a estos paquetes es necesario que se tenga un token de autenticación de github. Para poder obtener este token se debe de seguir la guía oficial de github: [Manejo de tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) y se debe de conceder como mínimo el permiso de `read:packages`. Una vez se tenga el token se debe de configurar como una variable de entorno en el sistema operativo con el nombre `NODE_AUTH_TOKEN` (Puede seguir la guía para [Linux](https://beebom.com/how-set-environment-variables-linux/), [Windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables), [MacOs](https://youngstone89.medium.com/setting-up-environment-variables-in-mac-os-28e5941c771c) ).

En caso tal de que no tenga configurado el token de autenticación, el proyecto no podrá acceder a los paquetes privados de siigo y no podrá funcionar correctamente.

_**Advertencia bajo ninguna circunstancia se deben de incluir cualquier tipo de tokens o información sensible en el .npmrc o cualquier parte del repositorio y siempre se debe de recurrir a las variables de entorno**_



## Entorno de desarrollo

A continuación encontrará pasos y comandos para la instalación y configuración del entorno de desarrollo de este micro frontend. Tenga en cuenta los requisitos previos para poder ejecutar estos comandos.

### Documentaciones relevantes

-   [Arquitectura](https://alexandria.siigo.com/shelves/frontless)
    -   [Nueva Arquitectura de dominios](https://alexandria.siigo.com/books/ddd-architecture-frontend)
-   [Vite](https://vitejs.dev/guide/)
-   [React](https://react.dev/reference/react)
-   [React-i18next](https://react.i18next.com/)
-   [React-router-dom](https://reactrouter.com/web/guides/quick-start)
-   [Single SPA React](https://single-spa.js.org/docs/ecosystem-react/)
-	[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

### 🌿 Variables de entorno para desarrollo

En el nuevo esquema de micro front ends, se requiere que cada micro frontend tenga sus consideraciones de entorno isoladas e independientes al manejo diferencial (crear una rama para cada país/ambiente por ejemplo rd una mala practica). Por lo cual se hace un uso intensivo de variables de entorno para la configuración de los micro frontends. Sin comprometer la implementación de features.

Cada micro frontend debe de tener un archivo `.env` en la raíz del proyecto, este archivo debe de contener las variables de entorno necesarias para el funcionamiento del micro frontend. Para el caso de este micro frontend, se debe de crear un archivo `.env` con el siguiente contenido:

```bash
cp .env.example .env
```

lo cual creara un archivo `.env` con el contenido de `.env.example` y se debe de configurar las variables de entorno de acuerdo con las necesidades del micro frontend y el entorno de desarrollo. Si se desea agregar mas variables de entorno, se debe de agregar al archivo `.env.example` (este archivo sera usado como template para crear el archivo `.env` en el futuro) y se debe de agregar la variable de entorno en el archivo `.env` del micro frontend. Para mas información sobre el uso de variables de entorno, puede consultar la documentación oficial de [Vite](https://vitejs.dev/guide/env-and-mode.html#env-files).

Se debe de tener en cuenta que el archivo `.env` no debe de ser versionado en el repositorio, y unicamente se distribuye el archivo `.env.example` para que los desarrolladores puedan crear su propio archivo `.env` de acuerdo con sus necesidades, adicionalmente los archivos `.env` no serán considerados en el pipeline de CI/CD, debido a un manejo distinto de las variables de entorno en el pipeline.

### ⚠ Advertencias y limitaciones

-   Siempre se deben de usar los [alias path](https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353) (pueden ser encontrados en tsconfig y vite.config) para importar los módulos del proyecto independientemente de su indole, de esta manera se garantiza que el código sea portable y no se tenga que hacer modificaciones en el código para que funcionen las resoluciones relativas y o conflictos de compilación.

-   **_NO se deben utilizar estilos globales o sin un scoping definido_**; el uso de hojas globales en las cabeceras o en el body del documento HTML **_esta prohibido_**, debido a que puede causar conflictos de estilos y problemas de compatibilidad con el Shell root. En caso de requerir un estilo transversal se recomienda usar el scope de `App`.

-   Deben de evitarse a toda costa el uso de utilidades para modificar la compilación/productos/bundling de assets en el micro frontend, debido a que puede causar problemas de compatibilidad con el pipeline de CI/CD y con el Shell root.

-   El uso de `React.Fragments` esta limitado al uso **_SIN estilos_**, debido a que el bundling de estilos scoped de vite/styled-jsx no es soportado, por lo cual se recomienda el uso de algún elemento DOM estático como el `div`, como padre para el manejo de componentes reusable estilizados, o en su defecto el uso de `React.Fragments` sin estilos. Si el uso de `React.Fragments` con estilos es estrictamente necesario, unicamente se podrán estilizar en los componentes que los implementen y no directamente en los componentes que los contengan.

-   El elemento padre de cualquier componente debe evitar el uso de clases o parámetros especiales y se debe de tratar como un elemento dummy y estático. Es posible que algunas implementaciones puedan omitir esta regla, pero se debe de tener en cuenta en el uso general. ej:

```tsx
const myComp = () => {
	return (
		<div>
			<div className="my-class">...</div>
		</div>
	);
};
```

-   La modificación de la estructura del proyecto **_debe de ser aprobada por el equipo de arquitectura_**, debido a que puede causar problemas de compatibilidad con el pipeline de CI/CD, conflictos de compilación y problemas de compatibilidad con el Shell root.

-   Las traducciones y archivos de localización `json` deben de ser manejados como estructuras de datos anidadas, por lo tanto el uso de llaves no estandarizadas o de un único nivel se considera una mala practica, por lo cual siempre se debe de optar por estructuras anidadas concisas y descriptivas. ej mala practica:

```jsonc
{
	"MItraduccion": "Mi traducción",
	"MItraduccion2": "Mi traducción 2",
	"MItraduccion3": "Mi traducción 3",
	// ...
	"MItraduccionN": "Mi traducción N"
}
```

ej buena practica:

```jsonc
{
	"pagina": {
		"title": "Mi traducción",
		"description": "Mi descripción"
	},
	"pagina2": {
		"title": "Mi traducción 2",
		"description": "Mi descripción 2",
		"componente": {
			"title": "Mi traducción 2",
			"description": "Mi descripción 2"
		}
	},
	"pagina3": {
		"title": "Mi traducción 3",
		"description": "Mi descripción 3"
	}
}
```

Para usar este template de parcela en react debes tener las siguientes consideraciones:
- Tener instalado los types de SystemJS en tu proyecto
- Tener un componente que haga llamado de la parcela
- Leer la documentación de los Actores dentro de un Cluster Frontend de Siigo [Actores](https://alexandria.siigo.com/books/lineamientos-frontend/chapter/actores-en-un-cluster-frontend)
```tsx	
import React from 'react';
import Parcel from 'single-spa-react/parcel';
export const RelatedCFDIParcel = () => {
	return (
		<>
			<div className="parcel-UI Trunk Component-container">
				<Parcel
					config={System.import(UI Trunk Component)}
					wrapWith="div"
					title="Parcela de UI Trunk Component"
					description="Parcela de UI Trunk Component"
					// and other props
					handleError={err => console.error(err)}
				/>
			</div>
		</>
	);
};
```
Si deseas usarla en otro framework, puedes hacerlo, pero debes tener en cuenta que debes tener un componente que haga llamado de la parcela.
puedes visitar la documentación de [single-spa](https://single-spa.js.org/docs/ecosystem) para más información.

### 📦 Zustand como state management
-	Se eliminan el proveedor global y la carpeta de contex, ya que la gestión del estado global de la aplicación se ha migrado a Zustand.
-	Para ofrecer una mejor experiencia de desarrollo y mantenimiento del micro frontend, se recomienda el uso de Zustand para el manejo de estado global en el micro frontend, debido a que es una librería ligera y fácil de usar, adicionalmente se integra de manera sencilla con el micro frontend y no requiere de configuraciones adicionales para su uso.
-	La libreria ya esta integrada en el micro frontend y se puede usar de manera inmediata.
-	Para mas información sobre el uso de Zustand, puede consultar la documentación oficial de [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction).


### 🔨 Instalación y administración de dependencias

Para instalar las dependencias de este micro frontend, ejecute el siguiente comando:

```bash
pnpm install
```

---

Para agregar una nueva dependencia, ejecute el siguiente comando:

```bash
pnpm add <package-name>
```

si el paquete es una dependencia de desarrollo:

```bash
pnpm add -D <package-name>
```

---

Para remover una dependencia, ejecute el siguiente comando:

```bash
pnpm remove <package-name>
```

### 🚀 Ejecución del proyecto

A continuación encontrará los comandos para ejecutar el proyecto en su ambiente de desarrollo.

Para ejecutar el proyecto en modo stand-alone y habilitar el HMR (watch mode) para un desarrollo mas fluido, ejecute el siguiente comando:

```bash
pnpm dev
```

---

Para ejecutar el proyecto en modo de disponibilidad para el orquestador de micro frontend, ejecute el siguiente comando:

```bash
pnpm start:spa
```

util para probar la integración final de manera local

---

### 🔍 Ejecución de linters

Para ejecutar los linters y diagnósticos del código, ejecute el siguiente comando:

```bash
pnpm lint
```

Si se desea ejecutar los linters y corregir los errores de manera automática, ejecute el siguiente comando:

```bash
pnpm lint:fix
```

En caso de que solo se desea ejecutar los linters de TypeScript, ejecute el siguiente comando:

```bash
pnpm lint:types
```

En caso de que solo se desea ejecutar los linters de código y formato, ejecute el siguiente comando:

```bash
pnpm lint:code
```

En caso de que solo se desee ejecutar los linters de estilos, ejecute el siguiente comando:

```bash
pnpm lint:styles
```

### 🧪 Ejecución de tests

Para ejecutar los tests del proyecto (Este comando ejecutara los test unitarios y de integración), ejecute el siguiente comando:

```bash
pnpm test
```

---

#### Test unitarios

Para ejecutar los tests del proyecto en modo watch, ejecute el siguiente comando:

```bash
pnpm test:watch
```

---

Para ejecutar los test unitarios unicamente, ejecute el siguiente comando:

```bash
pnpm test:unit
```

Si se desea ejecutar los test unitarios en modo watch, ejecute el siguiente comando:

```bash
pnpm test:unit:watch
```

Si en cambio desea obtener un reporte de cobertura de los test unitarios, ejecute el siguiente comando:

```bash
pnpm test:coverage
```

---

#### Test de integración (E2E)

Debido a que los test de integración (E2E) requieren un entorno especializado, debe ejecutar los siguientes comandos por lo menos una vez antes de ejecutar cualquiera de los comandos de test de integración (E2E):

```bash
pnpm install:e2e:deps
```

```bash
pnpm prepare
```

---

Para ejecutar los test de integración (E2E) del proyecto, ejecute el siguiente comando:

```bash
pnpm test:e2e
```

Si se desea ejecutar los test de integración (E2E) en modo watch, ejecute el siguiente comando:

```bash
pnpm test:e2e:watch
```

---

### Commits y versionamiento

Este proyecto enfoca el versionamiento y los commits haciendo uso de convenciones de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), por lo cual los mecanismos tradicionales para la escritura de commits serán rechazados por el pipeline de CI/CD y el propio git si el mensaje no cumple con las convenciones. Para facilitar el uso de estas convenciones se recomienda el siguiente flujo para la escritura de commits:

1. Ejecute el siguiente comando para agregar los cambios al stage de git:

```bash
git add .
```

2. Ejecute el siguiente comando para ejecutar el asistente de commits:

```bash
pnpm commit
```

3. Siga las instrucciones del asistente para escribir el mensaje del commit.

    - Si el commit tiene una descripción larga, se recomienta el uso de listas para una mejor legibilidad del mensaje.
      ej: `- Se agrega la funcionalidad de X` o si son multiples items: `- Se agrega la funcionalidad de X\n- Se agrega la funcionalidad de Y` (enfasis en nuevas lineas con la secuencia de escape `\n`)

4. Para realizar push de los cambios al repositorio remoto, ejecute el siguiente comando:

```bash
git push --follow-tags
```

El versionamiento y la generación de changelogs se realizan de manera automática en la ejecución del pipeline de CI/CD, por lo cual no es necesario ejecutar ningún comando para generar estos archivos, no obstante esto implica que posteriormente se debe de realizar un proceso de sincronización con el repositorio remoto para obtenerlos una vez se hayan generado. Para esto se recomienda que al finalizar el proceso de pipeline de CI/CD y previo a realizar un nuevo commit o cambios sobre la rama, se ejecute el siguiente comando:

```bash
git pull --tags
```

en caso de que ya se hayan realizado cambios sobre la rama local o inclusive commits, se recomienda ejecutar el siguiente comando:

```bash
git pull --rebase --tags
```

## Administración del repositorio

En el esquema de micro frontend, se requiere que cada micro frontend tenga su propio repositorio, por lo cual este repositorio es independiente de los demás micro frontend de siigo. Para la administración de este repositorio, se recomienda seguir las siguientes convenciones:

### Branches

Se manejaran 3 tipos de branches en este repositorio:

-   `main`: Branch principal del repositorio, se recomienda que esta branch sea protegida y que solo se pueda hacer merge a esta branch mediante pull requests.

-   `development`: Branch de desarrollo, en esta rama se integraran las features/fixes de los branches de features/fixes mediante pull requests, adicionalmente esta branch sera la base para la generación de releases y tags.

-   `(feature|fix)/<title>`: Branches de features, son branches temporales que se crean para el desarrollo de una feature especifica, se recomienda que estas branches nazcan de la branch `development` y que se haga merge a la branch `development` mediante pull requests para su integración.

De esta manera siguiendo un git-flow simplificado, se puede tener un control de versionamiento y de integración de features/fixes de manera mas controlada y ordenada. Una manera de visualizar este flujo es la siguiente:

```
main <------ development <------> (feature|fix)/<title>
```

### Deployments y como se integran con los ambientes

En el esquema simplificado para la administración de entornos como se menciono en la sección de variables de entorno:

> se requiere que cada micro frontend tenga sus consideraciones de entorno aisladas e independientes al manejo diferencial (crear una rama para cada país/ambiente por ejemplo se considera una mala practica). Por lo cual se hace un uso intensivo de variables de entorno para la configuración de los micro frontend. Sin comprometer la implementación de features.

Esto garantiza que la base de código se mantenga unificada y que su mantenimiento sea mucho mas fácil gracias a que se mantienen orígenes únicos a pesar de que las consideraciones de negocio/ambientales sean distintas entre países/ambientes.
**_ej si mi feature solo aplica para Mexico debo buscar mecanismos basados en variables de entorno para que mi feature se pueda activar/desactivar de acuerdo con el ambiente, sin afectar a los demás países/ambientes y/o la estructura del repositorio_**.

Debido a que las variables de entorno son independientes del ambiente y una única variable puede representar multiples valores según el ambiente donde se compile el micro frontend.

Para el caso de los despliegues es importante tener en cuenta la configuración inicial de environments, en la configuración de repositorio de github, para que el pipeline de CI/CD pueda desplegar el micro frontend en el ambiente correspondiente (Para mas detalles leer la guía de environments de github: [Environments](https://docs.github.com/en/actions/reference/environments) y la guía de secretos de github: [Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)).

Una única rama de desarrollo `development` sera la encargada de generar los despliegues en los ambientes de 'QA' de todos los países mientras la rama `main` sera la encargada de generar los despliegues en los ambientes de 'CANARY' y 'PRODUCCIÓN' también de todos los países. Esto ayuda a que las validaciones sigan un flujo estándar representado como:

```
PRODUCCIÓN <------ CANARY <------ QA
```

Debido a la relevancia de el ambiente de producción, se recomienda que los deployments a este ambiente sean manuales y que se requieran aprobaciones de los responsables de cada micro frontend para poder realizar el despliegue (Para mas información sobre aprobaciones de despliegues, puede consultar la documentación oficial de [Environments](https://docs.github.com/en/actions/reference/environments#approvals)).
