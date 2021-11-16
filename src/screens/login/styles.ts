import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  errorinput: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  link: {
    color: 'blue',
  },
})

export default styles
