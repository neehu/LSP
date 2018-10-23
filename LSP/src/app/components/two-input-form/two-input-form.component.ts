import { Component, OnInit, Input,EventEmitter, Output, ViewChild } from '@angular/core';
import {FormControl,FormGroup,
  Validators,FormBuilder,AbstractControl} from '@angular/forms';
import { PasswordValidator } from '../../Validators/PasswordValidator';


@Component({
  selector: 'app-two-input-form',
  templateUrl: './two-input-form.component.html',
  styleUrls: ['./two-input-form.component.css']
})
export class TwoInputFormComponent implements OnInit {
//Defining a FormGroup for loginForm
userInputForm:FormGroup;

//FormControls for Inputs
firstUserInputFormControl:FormControl;
secondUserInputFormControl:FormControl;
buttonControl:FormControl;

@Input() firstInputField:string;
@Input() secondInputField:string;
@Input() formName:string;
@Input() buttonName:string;
@Input() checkForInputPattern:boolean=false;
@Input() inputPattern:RegExp;
@Input() secondInputType:string="text";
@Output() buttonClicked=new EventEmitter<Event>();
@Output() firstInputValue=new EventEmitter<string>();
@Output() secondInputValue=new EventEmitter<string>();
@ViewChild('secondUserInput') secondInput:HTMLInputElement;



constructor(private formbuilder:FormBuilder) { }

  ngOnInit()
   {  
    // Build InputForm
    this.buildForm();
    this.setPatternValidator();
  }

//Method to build LoginForm
buildForm()
{
  this.userInputForm=this.formbuilder.group
  ({
    firstUserInput:[this.firstUserInputFormControl,
                   [Validators.required]],
    secondUserInput:[this.secondUserInputFormControl,
                    [Validators.required]],
    buttonControl:[this.buttonName,this.buttonControl]},
    )
}

//Method to set pattern validation

setPatternValidator()
{
  if(this.checkForInputPattern)
    {
      this.userInputForm.controls.firstUserInput.setValidators(Validators.pattern(this.inputPattern));
      this.userInputForm.controls.secondUserInput.setValidators(Validators.pattern(this.inputPattern));
      this.userInputForm.setValidators(PasswordValidator.validate.bind(this));
    }
}

  emitClickEvent(event:Event)
  { 
    if(!this.userInputForm.invalid)
    {
    this.firstInputValue.emit(this.userInputForm.controls.firstUserInput.value);
    this.secondInputValue.emit(this.userInputForm.controls.secondUserInput.value);
    this.buttonClicked.emit(event);
    }
  }

  get formControls()
  {
    return this.userInputForm.controls;
  }
}

