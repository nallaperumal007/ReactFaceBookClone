import React from 'react';
import './StoryReel.css'

// component
import Story from './Story';

// images (profile)
import Nallaperumal from './images/story/Nallaperumal.jpg';
import Sundram from './images/story/Sundram.jpg';
import Makesh from './images/story/Makesh.jpg';
import RockyBoy from './images/story/RockyBoy.jpg';
import Virat from './images/story/Virat.jpg';

// images (story)
import frontEnd from './images/story/storyImage/front-end.jpg';
import html from './images/story/storyImage/html.jpg';
import js from './images/story/storyImage/js.jpg';
import css from './images/story/storyImage/css.jpg'
import frontEndSteps from './images/story/storyImage/front-end-steps.jpg';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={frontEnd}
                profileSrc={Nallaperumal}
                title="Nalla Perumal"
            />
            <Story 
                image={html}
                profileSrc={Sundram}
                title="Kalyan Sundram"
            />
            <Story 
                image={js}
                profileSrc={Makesh}
                title="Makesh"
            />
            <Story 
                image={css}
                profileSrc={RockyBoy}
                title="RockyBoy"
            />
            <Story 
                image={frontEndSteps}
                profileSrc={Virat}
                title="King"
            />
        </div>
    );
}

export default StoryReel;
