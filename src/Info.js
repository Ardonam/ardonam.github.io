import React, { Component } from 'react';
import './App.css';
import './Info.css';


class Info extends Component {

  render() {
    return (

      <div  className="Info-container">



        {/*<h1 className="App-title">Wellocme to my portfolio</h1>*/}

        <h1 id={this.props.id} className="Info-title" >INFORMATION</h1>
        <h2 className="" ><br/>For inqueries please contatct me at</h2>
        <h2 className="" ><br/>(442) 777-3812</h2>
        <h2 className="" ><br/>eric.norman1@msu.montana.edu<br/></h2>



{/*
        Find out more about me at my website:
        http://www.adamhartwig.co.uk

        I'm an award winning digital designer and developer specialising in rich interactive experiences for web, tablet and mobile. I'm passionate about interactive media, and in an age of digital, I believe being able to bring design to life with code is essential.

        Since graduating with a 1st Class BA Honours degree in Design: Multimedia & Graphics in 2008, I have been working with global brands, and I am internationally recognised in the creative industry for my talent and ability to intertwine design and development philosophies.

        Specialities:
        Concept to creation
        Web, mobile and tablet design and development
        Rich interactive applications
        Video production
        User experience
        Innovation
*/}
      </div>
    );
  }
}

export default Info;
