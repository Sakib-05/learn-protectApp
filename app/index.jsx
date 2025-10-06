import { Redirect } from 'expo-router';

// This component is the entry point of the app.
// It immediately redirects the user to the 'home' tab within our tab navigator.
export default function Index() {
  return <Redirect href="/home" />;
}