import React from "react";
import { getPreview } from '../services/Api';
import yigal from '../resources/yigal.jpg'

class Preview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.url !== this.props.url) {
            this.getAPreview(nextProps.url);
        }
    }

    getAPreview = url => {
        if (url) {
            getPreview(url)
                .then(
                    (res) => {
                        this.setState({ preview: res.data });
                    }
                )
                .catch(
                    (error) => {
                        //think of what I want here
                        console.log(error);
                    }
                )
        }
    };

    render() {
        if (!this.state.preview) {
            return null;
        }

        return ( 
            <div className="preview-wrapper">
                <div dir="ltr" className="preview" >
                    <div className="prev-image-wrapper" >
                        <img 
                            src={ this.state.preview.image ? this.state.preview.image : yigal}
                            className="prev-image"
                            alt="What up, yo?" />
                    </div> 
                    <div className="prev-data">
                        <div className="title" > { this.state.preview.title } </div>
                        <div className="block-with-text" > { this.state.preview.description } </div>
                    </div > 
                </div >
            </div>
        )
    }
}

export default Preview;