import React from 'react'
import {Container, Header, Content, Footer, Left, Body, Right, Text, Button, Icon, Card, CardItem} from 'native-base'

export default NativeBaseAnatomy = () => (
    <Container>
        <Header>
            <Left>
                <Icon name='arrow-back' style={{ color: 'white' }}/>
            </Left>
            <Body>
                <Text style={{ color: 'white' }}>Title Page</Text>
            </Body>
        </Header>

        <Content>
            <Card>
                <CardItem header>
                    <Text>Card Header</Text>
                </CardItem>
                <CardItem header>
                    <Body>
                        <Text>Card Body</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>

        <Footer>
                <Text>Footer</Text>
        </Footer>
    </Container>

)

