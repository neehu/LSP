import {Directive, Attribute} from '@angular/core';
import {Validator,NG_VALIDATORS, FormControl,FormGroup,NgControl } from '@angular/forms'

@Directive
({
    selector:'passwordvalidator',
    providers:[{provide:NG_VALIDATORS,useExisting:ValidatePasswordMatch,multi:true}]
})
export class ValidatePasswordMatch implements Validator 
{
    constructor(@Attribute('passwordvalidator') public comparer:string,
                @Attribute('parent') public parent:string)
    {}

    validate(c:FormControl): {[key: string]: any} {
        let e = c.root.get(this.comparer);
    
        // value not equal in verify control
        if (e && c.value !== e.value && !this.isParent) {
          return {"passwordNotEquivalent": true};
        }
    
        // user typing in password and match
        if (e && c.value === e.value && this.isParent) {
            delete e.errors['passwordNotEquivalent'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }
    
        // user typing in password and mismatch
        if (e && c.value !== e.value && this.isParent) {
            e.setErrors({ "passwordNotEquivalent": true });
        }
      }
    
      private get isParent() {
        if (!this.parent) 
          return false;
    
        return this.parent === 'true' ? true: false;
      }
}