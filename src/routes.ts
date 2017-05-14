import { Routes } from "@angular/router"
import { GalleryComponent } from "./app/gallery/gallery.component"
import { ImageDetailComponent } from "./app/image/image-detail.component"

export const appRoutes:Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "image/:id", component: ImageDetailComponent },
  { path: "", redirectTo: "/gallery", pathMatch: 'full' },
]
