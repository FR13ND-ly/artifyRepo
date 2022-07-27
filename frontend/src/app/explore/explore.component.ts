import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  products$ : Observable<Product[]> = of([
    {
      id : 0,
      imageUrl : 'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
  ])

  topRatedProducts$ : Observable<Product[]> = of([
    {
      id : 0,
      imageUrl : 'https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
    {
      id : 0,
      imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      name : 'monkey',
      user : {
        username : 'George Lucas',
        imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
      },
      likes : 5
    },
  ])

  ngOnInit(): void {
  }

}
