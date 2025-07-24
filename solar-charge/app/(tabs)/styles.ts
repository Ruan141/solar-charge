import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  result: {
    marginTop: 30,
    fontSize: 18,
    color: '#27ae60',
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(39, 174, 96, 0.1)',
    overflow: 'hidden',
  },
  error: {
    marginTop: 20,
    fontSize: 18,
    color: '#c0392b',
  },
  loading: {
    marginTop: 20,
  },
});
