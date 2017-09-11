import React from 'react';
import {
    ShareButtons,
    generateShareIcon
} from 'react-share'
import {injectIntl} from 'react-intl';

import {BASE_URL} from '../utils/Constants'

const {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,

} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');

class Sharing extends React.Component {

    constructor(props){
        super(props);
        this.formatMessage = props.intl.formatMessage;
    }
    currentLoc = () => BASE_URL + this.props.loc.pathname;

    render () {
        return(
            <div className="sharing">
                <div className="share-item">
                    <TwitterShareButton url={this.currentLoc()} via="yigaldviri" hashtags={["izit.io"]}>
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </div>
                <div className="share-item">
                    <FacebookShareButton
                        url={this.currentLoc()}
                        qoute={this.currentLoc()}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>

                { (navigator.userAgent.match(/iPhone|Android/i)) &&
                <div className="share-item">
                    <WhatsappShareButton
                        url={this.currentLoc()}
                        title={this.formatMessage({id:'whatsappSharingTitle'})}
                        separator=" - ">
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
                }

            </div>
        )
    }
}

export default injectIntl(Sharing);
