import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-nuevovehiculo',
  templateUrl: './nuevovehiculo.page.html',
  styleUrls: ['./nuevovehiculo.page.scss'],
})
export class NuevovehiculoPage implements OnInit {

  nuevoVehiculo = {} as Vehiculo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private loadingController: LoadingController,
    private vehiculosService: VehiculosService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

  }

  nuevo(nuevoVehiculo: any) {
    this.vehiculosService.crearNuevo(nuevoVehiculo).then(() => {
      this.router.navigateByUrl("tabs/vehiculos");
      this.mostrarMensaje("Vehiculo registrado");
    }, err => {
      this.mostrarMensaje("Ocurrio un error.");
    });
  }

  mostrarMensaje(mensaje: string) {
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).then(toast => toast.present());
  }

  setTipo(ev: any){
    this.nuevoVehiculo.tipo = ev.target.value;
  }
}
