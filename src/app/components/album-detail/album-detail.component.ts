import { Component, OnInit } from '@angular/core';
import { Foto } from '../../model/album';
import { AlbumService } from '../../service/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
foto: Foto[]=[]

constructor(private as:AlbumService, private route:ActivatedRoute){}

ngOnInit(): void {
  const id =parseInt(this.route.snapshot.paramMap.get("id")!)

  this.as.getFotoAlbum(id).subscribe(dati => this.foto =dati)
}
}
