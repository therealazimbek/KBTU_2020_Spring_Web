import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  deleteAlbum(album: Album) {
    this.albums = this.albums.filter((x) => x.id !== album.id);
    this.albumsService.deleteAlbum(album).subscribe(() => {
      console.log('deleted', album.id);
    });
    alert('Deleted locally');
  }
}
