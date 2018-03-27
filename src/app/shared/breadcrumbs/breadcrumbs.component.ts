import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label = '';

  constructor(private router: Router, public _title: Title, public _meta: Meta) {

    this.getDataRoute().subscribe(data => {
      this.label = data.titulo;
      this._title.setTitle(this.label);
      // tslint:disable-next-line:prefer-const
      let metaTag: MetaDefinition = {
        name: 'descripcion',
        content: this.label
      };
      this._meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
     return this.router.events
    .filter( event => event instanceof ActivationEnd)
    .filter( (event: ActivationEnd) => event.snapshot.firstChild === null)
    .map((event: ActivationEnd) => event.snapshot.data);
  }

  ngOnInit() {
  }

}
