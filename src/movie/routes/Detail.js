import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return (
                <div className="details">
                    <h2 className="title">{location.state.title}</h2>
                    <p className="summary">{location.state.summary}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;