import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { revision } from '../revision';
import { RevisionesService } from '../services/revisiones.service';

@Component({
  selector: 'app-revisiones',
  templateUrl: './revisiones.page.html',
  styleUrls: ['./revisiones.page.scss'],
})
export class RevisionesPage implements OnInit {
  public Revisiones!: Observable<revision[]>;
  idVehiculo: string = "";
  constructor(
    private RevisionesService: RevisionesService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: any) => {
      this.idVehiculo = params['id'];
      console.log('El componente de Revisiones se ha inicializado.');
      this.Revisiones = this.RevisionesService.GetRevisiones(this.idVehiculo);
    });
  }

  async seleccionarrevision(revision: any) {
    let actionSheet = await this.actionSheetController.create(
      {
        header: "Que desea hacer?",
        buttons: [
          {
            text: "Borrar Revision",
            role: "destructive",
            handler: () => {
              this.borrarrevision(revision.id);
            }
          },
          {
            text: "Modificar revision",
            handler: () => {
              alert("Modificara la revision");//revisar funcionalidad
              this.editarrevision(revision);
            }
          }, {
            text: "Cancelar",
            role: "cancel",
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
    await actionSheet.present();
  }

  editarrevision(revision: any) {
    throw new Error('Method not implemented.');
  }

  async borrarrevision(revision: any) {
    const alert = await this.alertController.create({
      header: "Borrar!",
      message: "¿Esta seguro que desea borrar esta revision?",
      buttons: [{
        text: "No",
        role: "cancel",
        cssClass: "secondary",
        handler: (blah) => {
          console.log("Click cancelar");
        }
      }, {
        text: "Si",
        handler: () => {
          this.RevisionesService.BorrarRevision(revision);
        }
      }]
    });
    await alert.present();
  }

  async nuevaRevision() {
    this.router.navigate(['tabs/nuevarevision', this.idVehiculo]);
  }
}
