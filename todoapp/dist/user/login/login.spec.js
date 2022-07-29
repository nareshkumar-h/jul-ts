"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_component_1 = require("./login.component");
const loginComponent = new login_component_1.LoginComponent();
loginComponent.email = "nn@gmail.com";
loginComponent.password = "p";
loginComponent.onSubmit();
