import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public project = {
    location: ['Desert', 'Rainforest', 'Mountain', 'Beach', 'Plains', 'Hills'],
    build: ['Semi-detached House', 'Single-detached House', 'Row House', 'Apartments', 'Mobile Home'],
    material: ['Wood', 'Concrete'],
    si: ['700', '850', '900', '950', '1000', '1200', '1400', '1700', '2100', '3000', '4000'],
  }


  public output = {
    loc: '',
    type: '',
    mat: '',
    sq: ''

  }

  randomSelect() {
    const loc = this.project.location[Math.floor(Math.random() * this.project.location.length)]
    const type = this.project.build[Math.floor(Math.random() * this.project.build.length)]
    const mat = this.project.material[Math.floor(Math.random() * this.project.material.length)]
    const sq = this.project.si[Math.floor(Math.random() * this.project.si.length)]

    this.output.loc = loc
    this.output.type = type
    this.output.mat = mat
    this.output.sq = sq
  }

  constructor() { }

  ngOnInit(): void {
  }

}
