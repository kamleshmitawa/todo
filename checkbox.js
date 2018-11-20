  import PickerCheckBox from 'react-native-picker-checkbox';

  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }

  const items = [
    {
      itemKey:1,
      itemDescription:'Item 1'
      },
    {
      itemKey:2,
      itemDescription:'Item 2'
      },
    {
      itemKey:3,
      itemDescription:'Item 3'
      }
  ];

  render() {
    return(
      <PickerCheckBox
        data={items}
        headerComponent={<Text style={{fontSize:25}} >items</Text>}
        OnConfirm={(pItems) => this.handleConfirm(pItems)}
        ConfirmButtonTitle='OK'
        DescriptionField='itemDescription'
        KeyField='itemKey'
        placeholder='select some items'
        arrowColor='#FFD740'
        arrowSize={10}
        placeholderSelectedItems ='$count selected item(s)'
        />
    )
  }
