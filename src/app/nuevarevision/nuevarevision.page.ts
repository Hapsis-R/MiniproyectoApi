import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

import { revision } from '../revision';
import { RevisionesService } from '../services/revisiones.service';
import { RevisionesPageModule } from '../revisiones/revisiones.module';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-nuevarevision',
  templateUrl: './nuevarevision.page.html',
  styleUrls: ['./nuevarevision.page.scss'],
})
export class NuevarevisionPage implements OnInit {

  nuevaRevision = {} as revision;
  idVehiculo: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private loadingController: LoadingController,
    private RevisionService: RevisionesService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    console.log('El componente de Nueva Revision se ha inicializado.');
    this.route.params.forEach((params: any) => {
      this.idVehiculo = params['id'];
      this.nuevaRevision.idVehiculo= this.idVehiculo;
    });
  }

  nueva_revision(nuevaRevision: revision) {
    this.RevisionService.CrearRevision(nuevaRevision).then(() => {
      this.router.navigate(['tabs/revisionesvehiculo', this.idVehiculo]);
      this.mostrarMensaje("Revision registrada");
      this.nuevaRevision = {} as revision;
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

}
