import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { revision } from '../revision';

@Injectable({
  providedIn: 'root'
})
export class RevisionesService {
  private revisiones: Observable<revision[]>;
  private revisionesCollection: AngularFirestoreCollection<revision>;

  constructor(private afs: AngularFirestore) {
    this.revisionesCollection = this.afs.collection<revision>('revisiones');
    var snap = this.revisionesCollection.snapshotChanges();
    console.log(snap);
    this.revisiones = this.revisionesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { ...data, id };
        });
      })
    );
  }

  CrearRevision(revision: revision): Promise<DocumentReference> {
    console.log(revision);
    return this.revisionesCollection.add(revision);
  }

  GetRevisiones(idVehiculo: string): Observable<revision[]> {
    this.revisiones = this.afs.collection<revision>('revisiones', ref => ref.where('idVehiculo', '==', idVehiculo)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { ...data, id };
      });
    }));
    return this.revisiones;
  }

  BorrarRevision(revision: any) {
    this.afs.doc(`revisiones/${revision}`).delete().then(() => {
      console.log(`Revision Eliminada: "${revision}"`);
    }).catch(err => { console.error(err) });
  }

  GetRevision(id: string): Observable<revision | undefined> {
    return this.revisionesCollection.doc<revision>(id).valueChanges().pipe(
      map(revision => {
        return revision
      })
    );
  }

  EditarRevision(revision: revision, id: any): Promise<void> {
    return this.revisionesCollection.doc(id).update(
      {
        fecha: revision.fecha,
        descripcion: revision.descripcion,
        repuestos: revision.repuestos,
        valorTotal: revision.valorTotal,
        mecanico: revision.mecanico,
        taller: revision.taller,
      });
  }


}
