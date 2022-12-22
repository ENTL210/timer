import React from "react";
import styled from "styled-components";
import {Container} from "./Style"
import GlobalFont from "./Fonts"

import Header from "./Components/Header";
import Timer from "./Components/Timer"

export default function App() {

    return (
        <Container>
            <GlobalFont />
            <Header />
            <Timer />
        </Container>
    )
}