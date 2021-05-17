import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json'


class Main extends React.Component {
  render(){
    return(
      <>
        {hornsData.map(item=>{
            return (
                <HornedBeast
                    title={item.title}
                    imgUrl={item.image_url}
                    description= {item.description}
                />
            )
        })}
      </>
    )
  }
}

export default Main;
