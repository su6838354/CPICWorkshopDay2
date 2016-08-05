/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    NavigastorIOS,
    TouchableHightlight,

} from 'react-native';




import  Header from './Header';
import Boxtwo from './Boxtwo';

var twitter = require('./twitter.json');




class domeTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 2000);
  }


  render() {
    let data = twitter[0];

    let  users =data.activities.users;


    let  retweet = this.state.showText ? this.props.text : data.activities.Retweet ;
    let  likes=  twitter[0].activities.Likes;


    return (

        <View style={styles.constntainer}>
          <View style={styles.main}>
            <Header data={twitter[0].user}/>




            <View  style={styles.boxone}>
              <Text style={[styles.onetext,styles.textColor]}>
                {data.text}
              </Text>
            </View>


            <Boxtwo/>



            <View    style={[styles.boxThree,styles.row]}>
              <View style={[styles.threeLeft,styles.row]}>
                <View  style={styles.leftOne}>
                  <Text style={styles.threeTxt}>RETWEET</Text>
                  <Text style={styles.threeNum}>{retweet}</Text>
                </View>

                <View  style={styles.leftOne}>
                  <Text style={styles.threeTxt}>LIKES</Text>
                  <Text style={styles.threeNum}>{likes}</Text>
                </View>
              </View>



              <View  style={[styles.threeRight,styles.row]}>



                {users.map (function(users)  {
                  return <Image style={styles.threeImg} source={{uri:users.avatar}}/>
                })}


              </View>
            </View>



            <View style={styles.boxFour}>
              <Text style={styles.fourTxt}>{data.createdAt}</Text>
            </View>


            <View style={[styles.footer,styles.row]}>

              <Image source={require('./icons/reply.png')}  style={styles.footerImg} />
              <View style={[styles.footerMain,styles.row]}>
                <Image source={require('./icons/retweet.png')}  style={styles.footerImg} />
                <Text style={styles.footerNum}>{retweet}</Text>
              </View>

              <View style={[styles.footerMain,styles.row]}>
                <Image source={require('./icons/heart.png')}  style={styles.footerImg} />
                <Text style={styles.footerNum}>{likes}</Text>
              </View>

              <Image source={require('./icons/more.png')}  style={{width: 20, height: 20,marginLeft:36,}} />

            </View>





          </View>
        </View>




    )
  }
}

const styles = StyleSheet.create({
  sroll:{
    flex:1,

  },
  constntainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  row:{flexDirection:'row',},

  textColor:{ color:'#292f33',},

  main:{
    flex:1,
    marginTop:60,
    marginLeft:40,
    marginRight:40,
  },

  head:{
    alignItems: 'center',

  },

  headtext: {
    flex: 1,
  },

  reat: {
    fontSize: 20,
    fontWeight: 'bold',

  },


  reactjs: {
    fontSize: 14,
    color:'#8899a6'


  },





  headtext:{
    flex:1,
  },



  boxone:{
    height:60,
    marginTop:21,
  },

  onetext:{
    fontSize:20,
  },




  boxThree:{
    marginTop:18,
    borderBottomColor:'#e1e8ed' ,
    borderTopColor:'#e1e8ed' ,
    borderTopWidth:1,
    borderBottomWidth:1,
  },

  threeLeft:{
    flex:3,
    borderRightColor:'#e1e8ed' ,

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
