import React, { Component } from 'react'
import { Image, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Body, Right } from 'native-base';

export default class BookDetail extends Component {
  // static navigationOptions = {
  //   header: null,
  // };

  render() {
    const { title, summary, imageLinks, subtitle } = this.props.navigation.state.params.data
    // console.log(this.props.navigation.state.params.data)
    console.log(this.props.navigation.state);
    return (
        <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text style={{fontSize: 24}}>{title}</Text>
                  <Text note style={{fontSize: 24}}>{subtitle}</Text>
                </Body>
              <Right>
                <Icon name="heart" />
              </Right> 
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: imageLinks.thumbnail}} resizeMode='contain' resizeMethod='scale' style={{flex: 1, width: '100%', height: 250}} />
                <Text style={{marginTop: '4%'}}>
                  Synopsis: {summary}
                </Text>
              </Body>
              
            </CardItem>
            <CardItem>
                <Button 
                    transparent 
                    textStyle={{color: '#87838B'}}
                    onPress={() => {
                        Linking.openURL(infoLink).then(() => {
                            console.log('Opening link')
                          }).catch(err => console.error('An error occurred', err));
                    }}>
                  <Icon name="navigate" />
                  <Text>More Info</Text>
                </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}