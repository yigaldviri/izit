import React from 'react';
import now from '../resources/now.gif'
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import yigal from '../resources/yigal.jpg'
import yonatan from '../resources/yonatan.jpg'
import rachel from '../resources/rachel.jpg'

const MemberAvatar = ({logo, link}) => {
    return <a href={link} className="about-avatar">
                <MuiThemeProvider>
                    <Avatar size={40} src={logo} />
                </MuiThemeProvider>
           </a>
};

class About extends React.Component {

    render () {
        return(
            <div id="about" className="context-wrapper about-page">
                <h1>So, who are we?</h1>

                <div className="content about-quote">
                    <div className="about-quote-sentence">
                        "He who plan for days, sow wheat, he who plan for years plant a tree, he who plan for generations, educate people"
                    </div>
                    <div className="about-quote-author">Janusz Korczak</div>
                </div>

                <div className="content">We are 2 programmers - Yonatan and I, Yigal.</div>
                <div className="content">
                    Actually Yonatan was my manager 4 years ago as I made my first steps in the software world. In some way, this is sort fo my graduation project.
                </div>
                <div className="content">
                    A few weeks ago, I read about some politician who made a ridiculous promise in the newspaper. I thought it would be nice to put his promise online in a way he won't be able to forget about it - as politicians often tend to.
                </div>
                <div className="content">
                    I told Yonatan about my idea and a day later he mailed me the entire server side. He left me no chance but to get into it and do my part - the UI.
                </div>

                <div className="content">One week later my father passed away.</div>

                <div className="content">So, it took me some time, obviously, but eventually we finished it. </div>

                <div className="content">This little project isn't because of my father, but as a result of him.</div>

                <div className="content" style={{margin: 0}}>
                    My parents never spared money when it came to education. It was important to my father (and of course my mother) that I will be an educated man. So where other programmers might see a "yet another ordinary open source project" - I see the result of education.
                </div>
                <div className="content">A wise man once told me- "It doesn't matter what you put online- The fact you have, is worth more than all the others who didn't.</div>
                <div className="content">Hence, another online rubbish.</div>

                <div className="content about-member">
                    <MemberAvatar logo={yonatan} link="https://github.com/yigaldviri"/>
                    <a href="https://cddirector.io" target="blank" className="name-and-nick">
                        <span className="name">
                            Yonatan
                                <i> "I'm a software engineer - I can do anything" </i>
                            Katz
                        </span>
                    </a>
                </div>
                <div className="about-member-content">
                is a team leader at Imperva. In the past, he ran the R&D of Proonto and led my team in Nolio (acquired by CA).
                It doesn't matter in what fields he has experience in because he's 2 days away from knowing any technology - seriously, I have seen him in action.
                </div>
                <div className="content about-member">
                    <MemberAvatar logo={rachel} link="https://github.com/yigaldviri"/>
                    <a href="https://cddirector.io" target="blank" className="name-and-nick">
                        <span className="name">
                            Rachel
                                <i> "5 minutes it's in your mail" </i>
                            Kremer
                        </span>
                    </a>
                </div>
                <div className="about-member-content">
                    who volunteered by force to be this site's designer, which can be pretty hard since I drove her mad with my desires.
                    She's a very talented designer and I believe this site could have been a lot prettier if I would have just let her do her job quietly.
                </div>

                <div className="content about-member" style={{marginTop: "50px"}}>And me, </div>
                <div className="content about-member">
                    <MemberAvatar logo={yigal} link="https://github.com/yigaldviri"/>
                    <a href="https://github.com/yigaldviri" target="blank" className="name-and-nick">
                        <span className="name">
                            Yigal
                                <i> "We don't need I18N" </i>
                            Dviri -
                        </span>
                    </a>
                </div>
                <div className="about-member-content" >  a simple man, as my dad was.</div>
                <div className="now-what">
                    <img src={now} style={{width : "100%", height : "60%"}} alt="What up, yo?"/>
                    <div className="now">Oh, now you can go back to <a href="/">the main page</a>.</div>
                </div>
            </div>
        )
    }

}

export default About;
