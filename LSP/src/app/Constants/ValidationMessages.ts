export const ValidationMessages =
{
    'userName':
    {
        required:'UserName Required',
        minLength:'UserName Must be ${this.userNameMinimunLength} charecters long',
        maxLength:'UserName Cannot be more that ${this.userNameMaximumLength} charecters long',
        validUserName:'UserName has been taken',
        userNameNotFound:'UserNameNotfound Please check the details'
    },

    'emailAddress':
    {
        required:'Email Address is required',
        pattern:'Enter Valid Address'
    },

    'confirmPassword':
    {
        required:'Confirm Password is required',
       areEqual:'Password mismatch'
    },
    'password':
    {
       required:'Password is required',
      minlength:'Password must be atleast ${this.passwordMinimumLength} characters long',
        pattern:'Your password must contain at least one uppercase, one lowercase, and one number',
        passwordIncorrect:'InvalidPassword Please check the password'
    }
}

export const inputsFieldConstraints =
{
    'userNameMinimunLength':3,
    'passwordMinimumLength':5,
    'userNameMaximumLength':12
}

export const emailPattern:string= '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
export const passwordPattern:string='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})';
export const phoneNumberPattern:string='\d{10}';