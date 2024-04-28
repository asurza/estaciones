import React from "react";
import {Navbar, NavbarBrand} from "@nextui-org/react";
import {EstacionesLogo} from "./../../public/estaciones"

export function Navegacion(){

    return(
      <Navbar shouldHideOnScroll isBordered>
        <NavbarBrand>
          <EstacionesLogo />
          <p className="font-bold text-inherit">Estaciones de Madrid</p>
        </NavbarBrand>
      </Navbar>
    )

}