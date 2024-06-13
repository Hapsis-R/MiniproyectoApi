import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../services/vehiculos.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  vehiculos !: Observable<Vehiculo[]>;

  constructor(private vehiculosService: VehiculosService, private actionSheetController: ActionSheetController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.vehiculos = this.vehiculosService.getVehiculos();
  }

  async seleccionarVehiculo(vehiculo: Vehiculo) {
    let actionSheet = this.actionSheetController.create(
      {
        header: "Que desea hacer?", buttons: [{
          text: "Borrar vehiculo",
          role: "destructive",
          handler: () => {
            this.borrarVehiculo(vehiculo.id);
          }
        },
        {
          text: "Modificar vehiculo",
          handler: () => {
            this.editar(vehiculo.id);
          }
        },
        {
          text: "Gestionar revisiones",
          handler: () => {
            this.revisiones(vehiculo.id);
          }
        }, {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Click cancelar");
          }
        }]
      }
    );
    (await actionSheet).present();
  }


  async borrarVehiculo(vehiculo: any) {
    const alert = await this.alertController.create({
      header: "Borrar!",
      message: "Esta seguro que desea borrar este contacto?",
      buttons: [{
        text: "No",
        role: "cancel",
        cssClass: "secondary",
        handler: () => {
          console.log("Click cancelar");
        }
      }, {
        text: "Si",
        handler: () => {
          this.vehiculosService.borrar(vehiculo);
        }
      }]
    });
    (await alert).present();
  }

  async editar(vehiculo: any) {
    this.router.navigate(["tabs/editarvehiculo", vehiculo]);
  }

  async revisiones(vehiculo: any) {
    this.router.navigate(["tabs/revisionesvehiculo", vehiculo]);
  }
}
