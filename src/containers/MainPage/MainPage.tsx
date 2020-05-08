import * as React from "react";
import {
    Container,
    AsideContainerLeft,
    AsideContainerRight,
    GreenAside,
    YellowAside,
    Main,
    MainContainer
} from './styled';
import {
    YellowButton,
    Footer,
    BrownBlock, Header
} from "../../components";

export const MainPage: React.FC = React.memo(() => {

    return (
        <Container>
            <Header/>
            <MainContainer>
                <AsideContainerLeft>
                    <GreenAside/>
                    <BrownBlock/>
                </AsideContainerLeft>
                <Main/>
                <AsideContainerRight>
                    <YellowAside/>
                </AsideContainerRight>
            </MainContainer>
            <Footer>
                <YellowButton/>
            </Footer>
        </Container>
    )
});


