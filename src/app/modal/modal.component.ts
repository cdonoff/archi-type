import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() imgSelected = new EventEmitter<string>()

  public bgColor = 'bg-slate-800'


  private project = {
    location: ['desert', 'rainforest', 'mountain', 'beach', 'plains', 'hills'],
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

  /*public backgrounds = {

    desert: 'bg-stone-500',
    rainforest: 'bg-green-500',
    mountain: 'bg-gray-300',
    beach: 'bg-blue-400',
    plains: 'bg-yellow-500',
    hills: 'bg-pink-200'

  }
  */

  randomSelect() {
    const loc = this.project.location[Math.floor(Math.random() * this.project.location.length)]
    const type = this.project.build[Math.floor(Math.random() * this.project.build.length)]
    const mat = this.project.material[Math.floor(Math.random() * this.project.material.length)]
    const sq = this.project.si[Math.floor(Math.random() * this.project.si.length)]

    this.output.loc = loc
    this.output.type = type
    this.output.mat = mat
    this.output.sq = sq

    //this.bgColor = this.backgrounds[loc as keyof typeof this.backgrounds]
    this.bgColor = `bg-${loc}`

    this.imgSelected.emit(this.bgColor)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
