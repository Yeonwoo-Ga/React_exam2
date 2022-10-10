import React from "react";
import Form from "./Form";
import List from './List';
import styled from "styled-components";
import Header from './Header'
const Layout  = () => {
    return(
        <StContainerBox>
            <Header/>
            <Form/>
            <List/>
        </StContainerBox>
    )
}

const StContainerBox = styled.div`
    max-width: 1200px;
    min-height: 800px;
    margin:0 auto
`;
export default Layout;