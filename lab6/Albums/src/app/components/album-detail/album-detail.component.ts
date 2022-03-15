import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumID'));

    this.albumsService.getAlbums().subscribe((albums) => {
      this.album = albums.find((album) => album.id === albumIdFromRoute);
    });
  }

  updateAlbum() {
    this.albumsService
      .updateAlbum(this.album!)
      .subscribe((post) => console.log(post));
    alert('Saved locally!');
  }
}
