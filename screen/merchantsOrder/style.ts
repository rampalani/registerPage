import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  subContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E6EAEB',
  },
  header: {
    padding: 16,
    paddingRight: 0,
    paddingLeft: 0,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  merchantInfo: {
    flexDirection: 'row',
    paddingLeft: 0,
    paddingRight: 0,
    padding: 20,
  },
  merchantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  merchantAddress: {
    color: '#777',
    marginBottom: 10,
  },
  merchantStats: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 6,
  },
  divider: {
    marginRight: 2,
    color: '#d5d5d5',
  },
  activeButtonStyle: {
    backgroundColor: '#ba1206',
    marginRight: 6,
  },
  inactiveButtonStyle: {
    backgroundColor: '#fff',
    marginRight: 6,
  },
  activeTitleStyle: {
    color: 'white',
  },
  inactiveTitleStyle: {
    color: 'black',
  },
  statText: {
    marginLeft: 4,
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  subText: {
    color: '#777',
    fontSize: 12,
    fontWeight: '600',
  },
  vertical: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 22,
  },
  flex: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 12,
  },
  subFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  menuTabs: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    gap: 6,
    overflow: 'scroll',
    // backgroundColor: '#fff',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    height: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    paddingLeft: 0,
    borderRadius: 10,
  },
  menuItemImage: {
    width: 62,
    height: 62,
    borderRadius: 8,
  },
  menuItemDetails: {
    marginLeft: 15,
    flex: 1,
  },
  menuItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  menuItemPrice: {
    color: '#fab800',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  menuItemCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#ba1206',
    borderRadius: 50,
    padding: 5,
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 'auto',
    padding: 20,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#ba1206',
    width: '90%',
    position: 'relative',
    borderRadius: 12,
    bottom: 10,
    height: 60,
  },
  checkoutButton: {
    color: '#ba1206',
    backgroundColor: '#d4aaa7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    height: 40,
  },
});
