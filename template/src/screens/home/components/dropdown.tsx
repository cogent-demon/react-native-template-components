import { COLORS } from 'config';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { scale } = useScale;
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export interface Props {
  name: string;
}

const DropdownScreen: React.FC<Props> = _props => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);

  const _header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.pan} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item);
          console.log('selected', item);
        }}
      />

      <Dropdown
        style={styles.dropdown2}
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown1}
        onChange={item => {
          setDropdown1(item);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={scale(20)}
          />
        )}
        renderTickIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="checkcircleo"
            size={scale(20)}
          />
        )}
        textError="Error"
      />

      <Dropdown
        style={styles.dropdown}
        search
        searchPlaceholder="Search"
        labelStyle={{ color: COLORS.SECONDARY }}
        textStyle={{ color: COLORS.SECONDARY }}
        iconColor={COLORS.SECONDARY}
        textErrorStyle={{ color: COLORS.SECONDARY }}
        data={data}
        labelField="label"
        valueField="value"
        label="Title"
        placeholder="Select item"
        value={dropdown2}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="Safety"
            size={scale(20)}
          />
        )}
        renderTickIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="checkcircleo"
            size={scale(20)}
          />
        )}
        renderHeader={_header}
        onChange={item => {
          setDropdown2(item);
          console.log('selected', item);
        }}
        textError="Error"
      />
    </View>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  dropdown: {
    marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(12),
    padding: scale(12),
  },
  dropdown2: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: scale(0.5),
    marginTop: scale(20),
  },
  icon: {
    marginRight: scale(5),
  },
  header: {
    height: scale(40),
    width: '100%',
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: scale(0.3),
    borderBottomColor: '#DDDDDD',
    backgroundColor: COLORS.SECONDARY,
  },
  pan: {
    width: scale(40),
    height: scale(6),
    borderRadius: scale(6),
    backgroundColor: 'white',
  },
});
