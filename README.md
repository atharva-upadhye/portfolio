


  #about-me{
  .tablets {
    li{
      display: inline-block;
      padding: .3rem;
      border-radius: .5rem;
      border: solid;
      border-width: .01rem;
      background-color: yellow;
    }
  }
}
#projects{
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  ul{
    list-style: none;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    // background-color: blueviolet;
    // flex-direction: row;
    li{
      
      .card-title{
        font-weight: bold;
        margin: 1rem;
      }
      .card-description{
        margin: 1rem;
      }
      .badges{
        margin: 1rem;
      }
      .badge{
        
        display: inline-block;
        padding: .3rem;
        border-radius: .5rem;
        border: solid;
        border-width: .01rem;
        background-color: yellow;
      }
      width: 100%;
      background-color: aqua;
      border-radius: .5rem;
      height: 15rem;
      margin: .4rem;
    }
  }
}
#certifications{
  ul{
    display: flex;
    li{
      list-style: none;
      margin: 1rem;
    }
  }
}
#contact-me{
  ul{
    list-style-type: none;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    a{
      margin: .5rem;
      display: flex;
      // background-color: cadetblue;  
      flex-direction: row;
      img{
        height: 1em;
        margin-right: .4rem;
      }
    }
  }
}




// 
.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
// 
a{
  color: inherit;
}
section{
  margin: 2rem;
}
section:not(#about-me){
  padding-top: 6rem;
}
section>h2{
  text-align: center;
}
p{
  margin: 1rem 0;
}