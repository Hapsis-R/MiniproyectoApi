import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { Vehiculo } from '../vehiculo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private vehiculos!: Observable<Vehiculo[]>;
  private vehiculosCollection: AngularFirestoreCollection<Vehiculo>;

  constructor(private afs: AngularFirestore) {
    this.vehiculosCollection = this.afs.collection<Vehiculo>("vehiculos");
    var snap = this.vehiculosCollection.snapshotChanges();
    console.log(snap);
    this.vehiculos = this.vehiculosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { ...data, id };
        });
      })
    );
  }

  crearNuevo(vehiculo: Vehiculo) {
    console.log('nuevo',vehiculo);
    return this.vehiculosCollection.add(vehiculo);
  }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.vehiculos;
  }

  borrar(vehiculo: any) {
    this.afs.doc(`vehiculos/${vehiculo}`).delete().then(() => {
      console.log("Vehiculo eliminado " + vehiculo);
    }).catch(err => { console.error(err) });
  }

  getVehiculo(id: string): Observable<Vehiculo> {
    return this.vehiculosCollection.doc<Vehiculo>(id).valueChanges().pipe(take(1), map(
      vehiculo => {
        if(vehiculo) vehiculo.id = id;
        return vehiculo!;
      }));
  }

  editarVehiculo(vehiculo: Vehiculo) {
    return this.vehiculosCollection.doc(vehiculo.id).update({
      placa: vehiculo.placa,
      anio: vehiculo.anio,
      marca: vehiculo.marca,
      color: vehiculo.color
    });
  }

}
