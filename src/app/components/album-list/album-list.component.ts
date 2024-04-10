import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit{
albums: Album[]= [];

constructor(private as:AlbumService){}

ngOnInit(): void {
  this.as.getAlbums().subscribe(dati => this.albums=dati)
}
}
