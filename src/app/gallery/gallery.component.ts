import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  @Input() datasource:any[];
  @Input() filterBy?: string = 'all'

  constructor(private imageService: ImageService) {
    this.datasource = this.imageService.getImages();
  }

  ngOnInit() { }
}
