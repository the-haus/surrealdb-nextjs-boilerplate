import { Container, Content, Footer, Grid, Header, Navbar } from "rsuite";
import Link from "next/link";

export default function MainLayout({ children }): JSX.Element {
    return (
        <Container className={"layout"}>
            <Header>
                <Navbar appearance="inverse">
                    <Navbar.Brand>Surreal + GraphQL + NextJS TS Boilerplate</Navbar.Brand>
                </Navbar>
            </Header>
            <Content>{children}</Content>
            <Footer>
                <Grid style={{ textAlign: "center" }}>
                    ©2022 Your Awesome Company - Boilerplate created by{" "}
                    <Link href={"https://www.linkedin.com/in/joost-van-berkel/"} target={"_blank"} rel="noreferrer">
                        Joost van Berkel
                    </Link>
                </Grid>
            </Footer>
        </Container>
    );
}
