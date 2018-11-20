import React, {Component} from 'react';
import { Button , Container, Content, Text} from 'native-base';

export default class AddButton extends Component {
  render() {
    return (
        <Container>
        <Content>
            <Button rounded> 
                 <Text> + </Text>
             </Button>
        </Content>
        </Container>

    );
  }
}
