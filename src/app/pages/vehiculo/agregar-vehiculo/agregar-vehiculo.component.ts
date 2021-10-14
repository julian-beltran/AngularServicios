import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/Vehiculo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent implements OnInit {
  
  
  Vehiculoform: FormGroup;
  placa = '';
  modelo = 0;
  marca = 0;
  tipoVehiuclo = '';
  capacidad = '';

  selected : string; 


 


  constructor(private serviceAgregarVehiculo: VehiculoService,
              private router: Router,
              private fb: FormBuilder,
              private title: Title) { }
             
             
  ngOnInit(): void {
    this.title.setTitle('agregarVehiculosColombia');
    this.Vehiculoform = this.fb.group({
      placa: ['', Validators.required],
      modelo: [null, Validators.required],
      marca: ['', Validators.required],
      tipoVehiuclo: ['', Validators.required],
      capacidad: ['', Validators.required]
    });
  }
            
  iniciarVacio(){
    this.Vehiculoform = new FormGroup({
      ' placa ': new FormControl('', [Validators.required]),
      ' modelo ': new FormControl(0, [Validators.required]),
      ' marca ': new FormControl('', [Validators.required]),
      ' tipoVehiuclo ': new FormControl('', [Validators.required]),
      ' capacidad ': new FormControl('', [Validators.required]),
    });
  }
            
  
            
  guardar(){
    let vehiculo = new Vehiculo();
    vehiculo.placa = this.Vehiculoform.value['placa'];
    vehiculo.modelo = this.Vehiculoform.value['modelo'] + '';
    vehiculo.marca = this.Vehiculoform.value['marca'];
    vehiculo.tipoVehiuclo = this.Vehiculoform.value['tipoVehiuclo'];
    vehiculo.capacidad = this.Vehiculoform.value['capacidad'];
    // metodo de guardar
    this.serviceAgregarVehiculo.guardarVehi(vehiculo).subscribe(() => {
      this.Vehiculoform.reset();
      this.router.navigate(['/vehiculo']);
    });         
  }

}
