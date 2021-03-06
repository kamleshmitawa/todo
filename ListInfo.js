import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
        <Container>
            <Content>
            <ListItem>
                <CheckBox checked={true} />
                <Body>
                <Text>Daily Stand Up</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={true} />
                <Body>
                <Text>Discussion with Client</Text>
                </Body>
            </ListItem>
            <ListItem>
                <CheckBox checked={true} color="green"/>
                <Body>
                <Text>Finish list Screen</Text>
                </Body>
            </ListItem>
            </Content>
        </Container>
    );
  }
}