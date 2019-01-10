import React, {Component} from 'react'
import { Container, Header, Content, List, ListItem, Text } from 'native-base'

import Anime from './components/Anime1'

export default class MyAnimeList extends Component {

    animes = [
        'Naruto',
        'Boku no Hero Academia',
        'Dargon Ball Super',
        'Overlord'
    ]
    
    constructor() {
        super()
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.animes)
        // }
    }

    render() {
        return(
           <Container>
               <Header/>
               <Content>
                    <List>
                        {this.animes.map((anime, key) => <Anime key={key} anime={anime} />)}
                    </List>
               </Content>

           </Container>
        )
    }
}