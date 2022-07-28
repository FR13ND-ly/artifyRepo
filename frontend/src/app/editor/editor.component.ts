import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/data-access/auth.service';
import { FilesService } from '../core/data-access/files.service';
import { ProductsService } from '../core/data-access/products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private filesService : FilesService, private productService : ProductsService, private authService : AuthService) { }

  user$ : Observable<any> = this.authService.getUserUpdateListener()

  product : Product = {
    token: '',
    id : 0,
    name : '',
    description : '',
    imageId : 0
  }


  ngOnInit(): void {

  }

  onAddFile(e : any) {
    let file = e.target.files[0]
    let formData = new FormData()
    formData.append('file', file, file.name)
    this.filesService.addFile(formData).subscribe((res : any) => {
      console.log(res)
      this.product.imageId = res
    })
  }

  onAddProduct(user : string) {
    this.product.token = user
    this.productService.add(this.product).subscribe(() => window.location.reload())
  }

}
