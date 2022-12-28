import React, { Component } from "react";
import styles from './App.module.css'
import logo from '../img/logo.png'
import user from '../img/user.png'
import band from '../img/rectangle.png'
import ellipse from '../img/ellipse.png'

export class App extends Component {
  state = {
    followers: 100500,
    condition: true
  }

  addFollowers = () => {
    this.setState(prevState => {
      return {
        followers: prevState.followers + 1,
        condition: false
      };
    });
    localStorage.setItem('condition', false);
    localStorage.setItem('followers', JSON.stringify(this.state.followers + 1));
  }

  removeFollowers = () => {
    this.setState(prevState => {
      return {
        followers: prevState.followers - 1,
        condition: true
      };
    });
    localStorage.setItem('condition', JSON.stringify(true));
    localStorage.setItem('followers', JSON.stringify(this.state.followers - 1));
  }

  componentDidMount() {
    const condition = localStorage.getItem('condition');
    const followers = localStorage.getItem('followers');
    const followersParse = JSON.parse(followers);
    const conditionParse = JSON.parse(condition);
    if (followers) {
      this.setState({     
        followers: followersParse,
        condition: conditionParse });
    }
  }

  render () {
    const followersRender = `${this.state.followers}`.slice(0, 3)+','+`${this.state.followers}`.slice(3, 100);
    return (
      <div className={styles.card}>
        <img src={band} alt="" width={454} height={8} srcSet="" className={styles.band}/>
        <img src={logo} alt="" width={88} height={24} srcSet="" className={styles.logo} />
        <img src={user} alt="" width={72} height={72} srcSet="" className={styles.user} />
        <img src={ellipse} alt="" width={92} height={92} srcSet="" className={styles.ellipse} />
        <p className={styles.tweets}>777 TWEETS</p>
        <p className={styles.followers}>{followersRender} Followers</p>
        {this.state.condition ? (
          <button type="button" onClick={this.addFollowers} className={styles.btn_follow}>Follow</button>
        ) : (
          <button type="button" onClick={this.removeFollowers} className={styles.btn_following}>Following</button>
        )}
      </div>
    );
  }
};
