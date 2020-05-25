import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import {   
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
  Validators} from '@angular/forms';

@Component({
  selector: 'app-foodlist-add',
  templateUrl: './foodlist-add.component.html',
  styleUrls: ['./foodlist-add.component.scss'],
  providers: [ApiService]
})
export class FoodlistAddComponent implements OnInit {

  form: FormGroup;
  foods = [];
  dietPrograms=[];
  vendor;

  // foodlist={};
  // foods_id=[];

  selectedFoodlist;
  constructor(private api:ApiService, private formBuilder : FormBuilder, private router:Router) {
    // this.selectedFoodlist = {foodlist_name:'',foodlist_dietprogram:'',foodlist_foods:[],foodlist_availdate:'',foodlist_price:0,foodlist_logo:''}
    this.vendor = {role_pk:localStorage.getItem('role_pk')}
    // const formControls = this.foods.map(control => new FormControl(false));
    this.form = this.formBuilder.group({
      foodlist_name:['',Validators.required],
      foods: new FormArray([], this.minSelectedCheckboxes(1)),
      dietprogram_pk:['',Validators.required],
      description:['',[Validators.required,Validators.minLength(20)]],
      price:['',Validators.required],
      calories:['',Validators.required],
      available_date:['',Validators.required],
      logo:'',
    });
    this.getVendorFoodlistAdd();
    
  }

  getVendorFoodlistAdd = () => {
    this.api.getVendorFoodListAdd(this.vendor).subscribe(
      data => {
        this.foods = data.food;
        this.dietPrograms = data.dietprogram;
        // this.foods.push(data.food);
        console.log('------dietprogram and foods----');
        console.log(this.foods);
        console.log(this.dietPrograms);
        this.addCheckboxes(this.foods);
      },
      error => {
        console.log(error);
      }
    );
  }

  createFoodlist = (foodlist,foods_id) => {
    this.api.createFoodlist(foodlist,foods_id).subscribe(
      data => {
        console.log("foodlist created successfully");
      },
      error => {
        console.log(error);
      }
    );
  }

  submit(){
    const selectedFoodids = this.form.value.foods
      .map((checked, index) => (checked ? this.foods[index].id : null))
      .filter(value => value !== null);
    console.log("--------------")
    console.log(selectedFoodids);
    console.log("---thisform---");
    console.log(this.form.value);
    this.createFoodlist(this.form.value,selectedFoodids);
  }


  private addCheckboxes(foods) {
    
    foods.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.foods as FormArray).push(control);
    });
  }

  // formControl() { return (this.form.get('foods') as FormArray).controls; } 

   minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }

  ngOnInit(): void {
  }

}

