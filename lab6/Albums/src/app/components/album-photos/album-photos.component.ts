import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { Photo } from 'src/app/models/photo';
import { Album } from 'src/app/models/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = -1;
  @Input() album?: Album;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumID'));
    this.albumId = albumIdFromRoute;

    this.albumsService.getAlbums().subscribe((albums) => {
      this.album = albums.find((album) => album.id === albumIdFromRoute);
      console.log(albumIdFromRoute);
    });

    this.albumsService
      .getPhotos(albumIdFromRoute)
      .subscribe((photos) => (this.photos = photos));
  }
}
