import React from 'react';
import now from '../resources/now.gif'

class About extends React.Component {

    render () {
        return(
            <div id="about" className="context-wrapper about-page">
                <h1>So, who are we?</h1>

                <div className="about-quote">
                    <div className="about-quote-sentence">
                        "He who plan for days, sow wheat, he who plan for years plant a tree, he who plan for generations, educate people"
                    </div>
                    <div className="about-quote-author">Janusz Korczak</div>
                </div>

                <div>We are 2 programmers - Yonatan and I, Yigal.
                    Actually Yoantan was my manager 4 years ago as I did my first steps in the software world. In some way, this is sort fo my graduation project.
                </div>
                <div>
                    A few weeks ago I read about some politician that made a ridiculous promise in the newspaper and I thought it would be nice to put his promise online in a way hw won't be able to forget about it - as politicians often tends to.
                    I told Yonatan about my idea and a day later he mailed me the entire server side. He left me no chance but to get into it and do my part - the UI.
                </div>

                <div>One week later my father had died.</div>

                <div>This little project isn't because of my father but as a result of him. My parents never spared money when it came to education.
                    It was important to my father (and of course my mother) that I will be an educated man.
                    And where other programmers might see a "yet another ordinary open source project" - I see the result of education.
                </div>

                <div>A wise man once told me - "it doesn't matter what you put (should be in past) online - the fact you did so - worth more than all the others who didn't.</div>
                <div>Hence, another online rubbish.</div>

                <div>
                    <a href="https://cddirector.io" target="blank" className="name-and-nick">
                        <span className="name">Yonatan </span>
                        <span className="nick">"I'm a software engineer - I can do anything" </span>
                        <span className="name">Katz </span>
                    </a>
                is a tech lead in AOL after he ran the R&D in Proonto and my team in Nolio (acquired by CA).
                It doesn't matter in what fields he have experience in because he's 2 days away from knowing any technology - seriously, I have seen him in action.
                </div>
                <div>
                    <a href="https://cddirector.io" target="blank" className="name-and-nick">
                        <span className="name">Rachel </span>
                        <span className="nick">"5 minutes it's in your mail" </span>
                        <span className="name">Kramer </span>
                    </a>
                who volunteered by force to be this site designer which can be pretty hard since I drove her mad with my desires.
                She's a very talented designer and I believe this site could have been a lot prettier if I would have just let here do here job quietly.
                </div>

                <div>
                And me, Yigal "WTF" Dviri - A simple man, as my dad was.
                </div>

                <div className="now-what">
                    <img src={now} style={{width : "100%", height : "60%"}} alt="What up, yo?"/>
                    <div className="now">Oh, now you can go back to <a href="/">the main page</a>.</div>
                </div>
            </div>
        )
    }

}

export default About;
