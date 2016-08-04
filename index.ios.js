/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';


class CPICWorkshop extends Component {
  render() {
    return (
        <View style={styles.constntainer}>
          <View style={styles.main}>

            <View   style={styles.row}>

              <Image source={{uri: 'http://lorempixel.com/100/100/cats/'}} style={{width: 40, height: 40}} />


              <View style={styles.headtext}>
                <Text style={[styles.react,styles.textColor]}>React </Text>
                <Text style={styles.reactjs}>@reactjs</Text>
              </View>


              <Image source={{uri: 'https://unsplash.it/100/100/?random'}} style={{width: 40, height: 40}} />

              <View style={styles.botton}>
                <Text style={styles.bottext}>Following</Text>
              </View>
            </View>

            <View  style={styles.boxone}>
              <Text style={[styles.onetext,styles.textColor]}>
                We just shipped v15.3.0 with React.PureComponent &react-test-renderer!（docs coming soon）
              </Text>
            </View>




            <View style={styles.boxTwo}>

              <Text> Full changelog</Text>
              <View  style={[styles.twoMain,styles.row]}>
                <Image source={{uri:'https://avatars0.githubusercontent.com/u/69631?v=3&s=200'}} style={{width: 90, height: 100,marginLeft:5}} />

                <View  style={styles.twoTxt}>
                  <Text>facebook/react</Text>
                  <Text>reat-A declarative,efficient,and flexible JavaScript library for builing user interfaces</Text>
                  <Text >github.com</Text>
                </View>
              </View>

            </View>



            <View    style={[styles.boxThree,styles.row]}>
              <View style={[styles.threeLeft,styles.row]}>
                <View  style={styles.leftOne}>
                  <Text style={styles.threeTxt}>RETWEENS</Text>
                  <Text style={styles.threeNum}>357</Text>
                </View>

                <View  style={styles.leftOne}>
                  <Text style={styles.threeTxt}>LIKES</Text>
                  <Text style={styles.threeNum}>461</Text>
                </View>
              </View>



              <View  style={[styles.threeRight,styles.row]}>
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />
                <Image source={{uri:'https://unsplash.it/100/100/?random'}} style={styles.threeImg } />


              </View>
            </View>



            <View style={styles.boxFour}>
              <Text style={styles.fourTxt}>11:53 AM - 29 Jul 2016</Text>
            </View>


            <View style={[styles.footer,styles.row]}>

              <Image source={{uri:'https://unsplash.it/100/100/?random'}}  style={styles.footerImg} />
              <View style={[styles.footerMain,styles.row]}>
                <Image source={{uri:'https://unsplash.it/100/100/?random'}}  style={styles.footerImg} />
                <Text style={styles.footerNum}>357</Text>
              </View>

              <View style={[styles.footerMain,styles.row]}>
                <Image source={{uri:'https://unsplash.it/100/100/?random'}}  style={styles.footerImg} />
                <Text style={styles.footerNum}>461</Text>
              </View>

              <Image source={{uri:'https://unsplash.it/100/100/?random'}}  style={{width: 20, height: 20,marginLeft:36,}} />

            </View>





          </View>
        </View>




    )
  }
}

const styles = StyleSheet.create({
  constntainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  row:{flexDirection:'row',},

  textColor:{ color:'#292f33',},

  main:{
    flex:1,
    marginTop:30,
    marginLeft:40,
    marginRight:40,
  },


  headtext:{
    flex:1,
  },

  reat: {
    fontSize:20,
    fontWeight:'bold',

  },


  reactjs:{
    fontSize:14,


  },

  botton:{
    flex:1,
    backgroundColor:'blue',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:3,

  },

  bottext:{
    color:'white',
  },

  boxone:{
    height:60,
    marginTop:21,
  },

  onetext:{
    fontSize:20,
  },


  boxTwo:{
    marginTop:40,

  },

  twoMain:{

    marginTop:18,
    borderColor:'#e1e8ed',
    borderWidth:2,

  },

  twoTxt:{
    marginLeft:10,
    marginRight:20,
    flex:1,


  },

  boxThree:{
    marginTop:18,
    borderBottomColor:'#e1e8ed' ,
    borderTopColor:'#e1e8ed' ,
    borderWidth:2,
  },

  threeLeft:{
    flex:3,
    borderRightColor:'#e1e8ed' ,
    borderWidth:2,
  },


  threeRight:{
    flex:5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },


  threeImg:{
    width: 25,
    height: 25,
    marginLeft:5,
    borderRadius:2,


  },

  leftOne :{
    flex:1,
    marginTop:9,
    marginBottom:8,

  },


  threeTxt :{
    color:'#8899a6',
    fontSize:10,

  },

  threeNum :{
    color:'#0084b4',
    fontSize:18,

  },


  boxFour:{
    marginTop:17,
  },


  fourTxt :{
    color:'#8899a6',
    fontSize:14,

  },


  footer:{
    marginTop:20,
    justifyContent: 'flex-start',
  },


  footerMain:{
    marginLeft:36,
    alignItems: 'center',


  },



  footerNum :{
    fontSize:12,
    marginLeft:10,
    color:'#8899a6',
  },


  footerImg:{
    width: 20,
    height: 20,

  }



});
AppRegistry.registerComponent('CPICWorkshop', () => CPICWorkshop);
