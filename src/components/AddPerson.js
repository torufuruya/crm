import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKColor, Textfield } from 'react-native-material-kit';

import * as actions from '../actions';

class AddPerson extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'plus'} size={50} color={tintColor} />
    )
  };
  onAddPress() {
    const { firstName, lastName, phone, email, company, project, notes } = this.props;
    this.props.createNewContact({ firstName, lastName, phone, email, company, project, notes });
    this.props.navigation.navigate('People');
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'First name'}
            tintColor={MKColor.Teal}
            value={this.props.firstName}
            onChangeText={value => this.props.formUpdate({ prop: 'firstName', value })}
          />
          <Textfield
            type={styles.fieldStyles}
            placeholder={'Last name'}
            tintColor={MKColor.Teal}
            value={this.props.lastName}
            onChangeText={value => this.props.formUpdate({ prop: 'lastName', value })}
          />
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'Phone number'}
            tintColor={MKColor.Teal}
            value={this.props.phone}
            onChangeText={value => this.props.formUpdate({ prop: 'phone', value })}
          />
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'Email'}
            tintColor={MKColor.Teal}
            value={this.props.email}
            onChangeText={value => this.props.formUpdate({ prop: 'email', value })}
          />
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'Company'}
            tintColor={MKColor.Teal}
            value={this.props.company}
            onChangeText={value => this.props.formUpdate({ prop: 'company', value })}
          />
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'Project'}
            tintColor={MKColor.Teal}
            value={this.props.project}
            onChangeText={value => this.props.formUpdate({ prop: 'project', value })}
          />
          <Textfield
            textInputStype={styles.fieldStyles}
            placeholder={'Notes'}
            tintColor={MKColor.Teal}
            value={this.props.notes}
            onChangeText={value => this.props.formUpdate({ prop: 'notes', value })}
          />
          <View style={styles.addButton}>
            <Button title='ADD' onPress={this.onAddPress.bind(this)} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  const { firstName, lastName, phone, email, company, project, notes } = state;
  return { firstName, lastName, phone, email, company, project, notes };
};

export default connect(mapStateToProps, actions)(AddPerson);