"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_component_1 = require("./register.component");
const regComponent = new register_component_1.RegisterComponent();
//Form Values 
regComponent.name = "Sanjay";
regComponent.email = "s@gmail.com";
regComponent.password = "pass123";
//onsubmit
regComponent.register();
