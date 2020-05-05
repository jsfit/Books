import React, {Component} from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
import { BooksCarousel, CardComponent, PDFOpen, WritterBooks } from '@Components';

export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <WritterBooks />
      </Container>
      // <Container>
      //   <Header style={{backgroundColor: "#2c3e50"}}>
      //     <Text style={{
      //       fontSize: 30,
      //       top: 10,
      //       fontWeight: "bold",
      //       color: "white" 
      //     }}>
      //       Books Libarary
      //     </Text>
      //   </Header>
      //   <Tabs>
      //     <Tab style={{ backgroundColor: "#2c3e50"}} heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
      //       <BooksCarousel />
      //       <Button rounded iconLeft style={{ 
      //         width: 130,
      //         top: 520,
      //         left: 200,
      //         backgroundColor: "#34495e"
      //         }}>
      //         <Icon name='list' />
      //         <Text>List View</Text>
      //       </Button>
      //     </Tab>
      //     <Tab style={{ backgroundColor: "#2c3e50"}} heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
      //     </Tab>
      //     <Tab style={{ backgroundColor: "#2c3e50"}} heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
      //     </Tab>
      //   </Tabs>
      // </Container>
    );
  }
}
