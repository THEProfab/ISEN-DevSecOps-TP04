import React from "react";
import { Container } from "react-bootstrap";

const AuthFooter = () => {
    return (
        <React.Fragment>
            <footer className="bg-light border-top py-3 fixed-bottom">
                <Container>
                    Projet AP5 - Marc BAYART / Loïc CLEDELIN / César DUVAL / Etienne EL GUEDER / Allan MATANGA / Clément ZAJAC
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default AuthFooter;