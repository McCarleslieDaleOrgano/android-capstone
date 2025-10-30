import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type InputStyle = ViewStyle & TextStyle;

type Style = {
  safeArea: ViewStyle;
  container: ViewStyle;
  header: TextStyle;
  sectionLabel: TextStyle;
  label: TextStyle;
  accountTypeContainer: ViewStyle;
  accountTypeButton: ViewStyle;
  selectedAccountType: ViewStyle;
  radioButton: ViewStyle;
  radioButtonSelected: ViewStyle;
  accountTypeLabel: TextStyle;
  row: ViewStyle;
  column: ViewStyle;
  input: InputStyle;
  nextButton: ViewStyle;
  nextButtonText: TextStyle;
  marginBottom: InputStyle;
  picker: ViewStyle & TextStyle;
};

export default function PartnerApplicationForm() {
  const router = useRouter();
  const [accountType, setAccountType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [streetName, setStreetName] = useState('');
  const [province, setProvince] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [barangay, setBarangay] = useState('');

  const handleNext = () => {
    // You can navigate to the services selection page here
    // navigation.navigate('ServicesScreen');
    console.log('Next button pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Application Form</Text>

        {/* Account Type */}
        <Text style={styles.label}>Choose account type:</Text>
        <View style={styles.accountTypeContainer}>
          <TouchableOpacity
            style={[styles.accountTypeButton, accountType === 'Individual' && styles.selectedAccountType]}
            onPress={() => setAccountType('Individual')}
          >
            <View style={styles.radioButton}>
              {accountType === 'Individual' && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.accountTypeLabel}>Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.accountTypeButton, accountType === 'Team' && styles.selectedAccountType]}
            onPress={() => setAccountType('Team')}
          >
            <View style={styles.radioButton}>
              {accountType === 'Team' && <View style={styles.radioButtonSelected} />}
            </View>
            <Text style={styles.accountTypeLabel}>Team</Text>
          </TouchableOpacity>
        </View>

        {/* Basic Information */}
        <Text style={styles.sectionLabel}>Basic Information</Text>
        <View style={styles.row}>
          <View style={[styles.column, { flex: 2 }]}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              placeholderTextColor="#666"
            />
          </View>
          <View style={[styles.column, { flex: 2 }]}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholderTextColor="#666"
            />
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="M.I."
              value={middleInitial}
              onChangeText={setMiddleInitial}
              maxLength={1}
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.column, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#666"
            />
          </View>
          <View style={[styles.column, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Mobile number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        {/* Birthdate */}
        <Text style={styles.sectionLabel}>Birthdate</Text>


        {/* Full Address */}
        <Text style={styles.sectionLabel}>Full Address</Text>
        <TextInput
          style={[styles.input, styles.marginBottom]}
          placeholder="House no. & Street Name"
          value={`${houseNo}${streetName ? ` ${streetName}` : ''}`}
          onChangeText={(text) => {
            const match = text.match(/^(\d*)\s*(.*)/);
            if (match) {
              setHouseNo(match[1]);
              setStreetName(match[2]);
            }
          }}
          placeholderTextColor="#666"
        />
        <View style={styles.row}>
          <View style={[styles.column, { flex: 1 }]}>
            <Picker
              selectedValue={barangay}
              onValueChange={setBarangay}
              style={styles.picker}
            >
              <Picker.Item label="Barangay" value="" />
              <Picker.Item label="Barangay 1" value="barangay1" />
              <Picker.Item label="Barangay 2" value="barangay2" />
            </Picker>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, { flex: 1 }]}>
            <Picker
              selectedValue={municipality}
              onValueChange={setMunicipality}
              style={styles.picker}
            >
              <Picker.Item label="Municipality" value="" />
              <Picker.Item label="Municipality 1" value="municipality1" />
              <Picker.Item label="Municipality 2" value="municipality2" />
            </Picker>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, { flex: 1 }]}>
            <Picker
              selectedValue={province}
              onValueChange={setProvince}
              style={styles.picker}
            >
              <Picker.Item label="Province" value="" />
              <Picker.Item label="Province 1" value="province1" />
              <Picker.Item label="Province 2" value="province2" />
            </Picker>
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={handleNext}
          activeOpacity={0.7}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 16,
  } as const,
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#000',
  } as const,
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  } as const,
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000',
  } as const,
  accountTypeContainer: {
    flexDirection: 'row' as const,
    marginBottom: 24,
    gap: 12,
  } as const,
  accountTypeButton: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFF',
    flex: 1,
  } as const,
  selectedAccountType: {
    borderColor: '#40E0D0',
  } as const,
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#40E0D0',
    marginRight: 8,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  } as const,
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#40E0D0',
  } as const,
  accountTypeLabel: {
    fontSize: 14,
    color: '#000',
  } as const,
  row: {
    flexDirection: 'row' as const,
    gap: 12,
    marginBottom: 16,
  } as const,
  column: {
    flex: 1,
  } as const,
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#000',
  } as InputStyle,
  nextButton: {
    backgroundColor: '#40E0D0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center' as const,
    marginTop: 24,
  } as const,
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  } as const,
  marginBottom: {
    marginBottom: 16,
  } as InputStyle,
  picker: {
    ...Platform.select({
      ios: {
        marginTop: -8,
        marginBottom: -8,
      },
      android: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
      },
    }),
    color: '#000',
    height: 50,
  } as ViewStyle & TextStyle,
});
