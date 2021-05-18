import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import hornsData from './hornsData.json';


class Main extends React.Component {
  render() {
    return (
      <CardColumns>
      <div>
        {hornsData.map((item, i) => {
          return (
            < HornedBeast
              key={i}
              title={item.title}
              imgUrl={item.image_url}
              description={item.description}
              renderModel={this.props.renderModel}
              renderShow={this.props.renderShow}
            />
          )
        })}
      </div>
      </CardColumns>

    )
  }
}

export default Main;