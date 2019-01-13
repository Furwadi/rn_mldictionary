import React, { Component } from 'react'
import { Container, FooterTab, Footer, Icon, Button } from 'native-base'

export default class Tabnav extends Component {

    render() {
        return(
            <Container>

                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

