import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../home/Nav';
import BlogTemplate from './BlogTemplate';
import Footer from './Footer';

function Switching() {
  return(
    <div>
    <Nav />
    <BlogTemplate
    imageClass="switch-img"
    blogTitle="Switching Careers"
    authorimage="../../../images/Andy_w1.jpg"
    authorname="Andrew Igbeinkutu"
    readtime="12/8 | 2 mins read"
    />
    <main className="blog-main">
    <hr></hr>
    <figure className="quote">
    <q>There's only one way to do a great job, love it.</q>
    <figcaption>&mdash; Steve Jobs</figcaption>
    </figure>
    <p>I'm going to begin this blogpost by sharing a few things
    about me.</p>
    <p>I have always loved Science and technology. This was
    pivotal in my choice to study Chemical Engineering in
    the University. Over the years, I've had a great exposure
    to the Chemical Engineering field.
    I had the opportunity to work as an Industrial trainee in an oil refinery.
    There, I learnt so much about Process Engineering, refinery operations and
    valuable ethics in a work environment.</p>
    <p>I was convinced that being a Chemical Engineer was the only
    option I had, majorly because I had a degree on the subject.</p>
    <p>Now, that's a trap so many people fall into. Getting a degree in a
    field doesn't necessarily mean you have to practice in that field.
    It's very imporant to have broad career prospects and not limit
    one's self to a field.</p>
    <p>A few months ago, I considered having a career change.</p>
    <p><strong>Why?</strong></p>
    <p>It turns out that there are a few careers out there that provide
    variety of work opportunities and are high in demand.</p>
    <p>Honestly, in my home country, I haven't found many Chemical Engineering
    firms with vacant entry-level positions and there's a fierce competition
    with the few available jobs.
    </p>
    <p>This prompted me to consider a career switch. To find a
    career with more employment opportunities. And I found it in Tech..
    Particularly, Web development.
    </p>
    <p>Now, I'm not promoting the Tech industry or convincing
    you to delve into it. But on a personal level, I have had
    a great fulfilment since I started learning to be a developer.</p>
    <p>According to
    <a href="https://www.indeed.com/career-advice/finding-a-job/in-demand-careers" target="_blank"> Indeed</a>,
    there are careers in high-demand, with large number of open positions
    and offering long-term career growth.
    </p>
    <p>It's worth considering careers that provide
    in demand with benefits in career growth.</p>
    <p>My advice is: Find a career you really love.
    That way you'll be more productive and above all you'll find satisfaction.</p>
    <p>Don't be afraid of a career switch. It might be difficult to adapt
    at first but things will get easier with time. If you've been considering it,
    just take a leap of faith and trust the process.
    The best is yet to come.
    </p>
    <hr></hr>
    </main>
    <Footer />
    </div>
  )
}

export default Switching;
