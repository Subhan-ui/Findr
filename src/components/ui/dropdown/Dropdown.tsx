import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DropdownStyle';

const GenderDropdown = ({
  selectedGender,
  isDropdownOpen,
  options,
  handleSelectGender,
  dropDownOpen,
}: {
  selectedGender: string | null;
  isDropdownOpen: boolean;
  options: string[];
  handleSelectGender: (gender: string) => void;
  dropDownOpen: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gender</Text>
      <TouchableOpacity style={styles.dropdown} onPress={dropDownOpen}>
        <Text style={styles.dropdownText}>
          {selectedGender ? selectedGender : 'Select Gender'}
        </Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.optionsContainer}>
          {options.map(gender => (
            <TouchableOpacity
              key={gender}
              style={styles.option}
              onPress={() => handleSelectGender(gender)}>
              <Text style={styles.optionText}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default GenderDropdown;
