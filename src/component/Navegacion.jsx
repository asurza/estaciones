import React from "react";
import {Navbar, NavbarBrand} from "@nextui-org/react";
import {EstacionesLogo} from "./../../public/estaciones"

export function Navegacion(){

    return(
      <Navbar shouldHideOnScroll isBordered>
        <NavbarBrand>
          <EstacionesLogo />
          <h1 className="font-bold text-inherit" style={{ lineHeight : 10, padding: 20 }}>Estaciones de Madrid</h1>
        </NavbarBrand>
      </Navbar>
    )

}