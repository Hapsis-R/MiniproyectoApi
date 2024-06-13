import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../vehiculo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editarvehiculo',
  templateUrl: './editarvehiculo.page.html',
  styleUrls: ['./editarvehiculo.page.scss'],
})
export class EditarvehiculoPage implements OnInit {
  id: string = "";
  tipo: string = "";
  seleccionado!: Vehiculo;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehiculosService: VehiculosService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.route.params.forEach((params: any) => {
      this.id = params['id'];
      this.vehiculosService.getVehiculo(this.id).subscribe(seleccionado => {
        this.seleccionado = seleccionado;
        setTimeout(() => {
          this.tipo = this.seleccionado.tipo;
        }); 
        console.log('editar', this.seleccionado);
      });
    });
  }

  ionViewDidEnter(){
    
  }

  regresar(){
    this.router.navigateByUrl("tabs/vehiculos");
  }

  editar(seleccionado: any) {
    this.vehiculosService.editarVehiculo(seleccionado).then(() => {
      this.router.navigateByUrl("tabs/vehiculos");
      this.mostrarMensaje("Vehiculo actualizado");
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
    this.seleccionado.tipo = ev.target.value;
  }
  
}
