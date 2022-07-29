import { RegisterComponent } from "./register.component";

const regComponent = new RegisterComponent();

//Form Values 
regComponent.name="Sanjay";
regComponent.email="s@gmail.com";
regComponent.password="pass123";

//onsubmit
regComponent.register();

