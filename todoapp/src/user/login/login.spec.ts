import { LoginComponent } from "./login.component";



const loginComponent = new LoginComponent();
loginComponent.email = "nn@gmail.com";
loginComponent.password = "p";

loginComponent.onSubmit();