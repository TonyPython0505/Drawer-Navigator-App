# Drawer-Navigator-App
Learnt about: 
- createDrawerNavigator from '@react-navigation/drawer' and Drawer.Navigator
- Options in Drawer.Screen:
  +) drawerLabel: 'some label' -> to set the name of a screen in the drawer.
  +) drawerActiveBackgroundColor: 'some color' -> to set the background color of the rectangle surrounding the screen label in the drawer. Can also be used in screenOptions of Drawer.Navigator.
  +) drawerActiveTintColor: 'some color' -> to set the text color for the screen name in the drawer. Can also be used in screenOptions of Drawer.Navigator.
  +) drawerStyle: {all other styles} -> can also be used in screenOptions of Drawer.Navigator.
  +) drawerIcon: ({color, size}) => {return (<Ionicons name="icon name" color={color} size={size} />);} -> to set the icon next to the screen name in the drawer
- Ionicon from @expo/vector-icons: <Ionicons name="icon name" color="some color" size={some size number} /> -> to use icons in our app
- navigation.toggleDrawer() -> navigation being the prop sent to a registered screen. This method opens the drawer on command.
  
