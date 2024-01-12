import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  noticias = [
    {
      titulo: "Emboscada TC television",
      desc: "La Fiscalía informó este miércoles 10 de enero 2023 que procesará por terrorismo a 13 personas relacionadas con el asalto armado y violento de este martes al canal TC Televisión, entre ellos dos menores de edad.",
      imag: "https://elmercurio.com.ec/wp-content/uploads/2024/01/procesados-por-terrorismo.jpg",
    },{
      titulo: "Ayuda a los militares",
      desc: "Cuando los policías y militares empezaron a salir a las calles tras los hechos de violencia ocurridos en Ecuador, la familia Durán se preguntó cómo podían colaborar. Entre ideas e ideas surgió cocinar alimentos y entregar a los miembros de las fuerzas del orden mientras cumplían con su trabajo.",
      imag: "https://elmercurio.com.ec/wp-content/uploads/2024/01/1-3A-CUATRO-COLES-XCA-696x464.jpg",
    },{
      titulo: "Kichwa Saraguro en Harvard",
      desc: "Amy Chalán Vacacela, una joven migrante con raíces en la comunidad Chukidel Ayllullakta, estudió en la Universidad de Harvard y obtuvo una Licenciatura en Ciencias Sociales, lo que la convierte en la primera indígena del pueblo Kichwa Saraguro en graduarse en una de las mejores universidades del mundo.",
      imag: "https://elmercurio.com.ec/wp-content/uploads/2023/11/1-3A-4colesh-696x624.jpg",
    },{
      titulo: "Madera Plástica",
      desc: "La preservación del medio ambiente nunca fue tan importante como lo es hoy. Así lo expresa Juan Carlos Granda, gerente administrativo de ‘Disecoarvol’, un emprendimiento que aplica un modelo de economía circular y busca formas de reducir la huella de carbono.",
      imag: "https://elmercurio.com.ec/wp-content/uploads/2024/01/1-3A-5coles-696x464.jpg",
    }
  ]
}
