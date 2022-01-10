# multilanguage-app-ecare



Crear menu (guía):
https://www.cloudwebfactory.com/blog/menu-flotante-con-ionic-5-angular/

Pasos:

1.
ionic generate module => components
ionic generate component => components/menu

2.
En components.module.ts añadir el/los componentes que quieres visualizar/presentar(en este caso menuComponent)

3.
En app.module añadir el components.module 

4.
ionic generate interface => interfaces

5.
En app.component.html modificar el <ion-router-outle> con el id correspondiente
