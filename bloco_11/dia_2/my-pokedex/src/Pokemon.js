import { Component } from "react";

class Pokemon extends Component {
    render() {
        const {name, type, averageWeight, image, moreInfo} = this.props;
        return (
            <div className="pokemon">
                <div className="pokemon-bio">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average weight: {averageWeight}</p>
                </div>
                <img src={image} alt={moreInfo}></img>
            </div>
        )
    }
}

export default Pokemon;