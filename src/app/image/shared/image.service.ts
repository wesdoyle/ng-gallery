import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
  getImages(){
    return IMAGES
  }

  getImage(id: number){
    return IMAGES.find(image => image.id == id)
  }
}

const IMAGES =[
  {"id":1, "category": "Camping Photos", "caption": "Hanging Out", "url":"https://images.pexels.com/photos/344100/pexels-photo-344100.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":2, "category": "Camping Photos", "caption": "Overlook", "url":"https://images.pexels.com/photos/63917/pexels-photo-63917.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":3, "category": "Camping Photos", "caption": "Afternoon Hike", "url":"https://images.pexels.com/photos/27765/pexels-photo-27765.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":4, "category": "Camping Photos", "caption": "Hiking", "url":"https://images.pexels.com/photos/126383/pexels-photo-126383.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":5, "category": "Camping Photos", "caption": "Eating breakfast", "url":"https://images.pexels.com/photos/198979/pexels-photo-198979.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":6, "category": "Camping Photos", "caption": "Great Camping Spot", "url":"https://images.pexels.com/photos/27865/pexels-photo-27865.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":7, "category": "Thailand Photos", "caption": "Thailand", "url":"https://images.pexels.com/photos/235959/pexels-photo-235959.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":8, "category": "Thailand Photos", "caption": "Thailand Vacation", "url":"https://images.pexels.com/photos/176398/pexels-photo-176398.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
  {"id":9, "category": "Thailand Photos", "caption": "Thailand", "url":"https://images.pexels.com/photos/111216/pexels-photo-111216.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"},
]
