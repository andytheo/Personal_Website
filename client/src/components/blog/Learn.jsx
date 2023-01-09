import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../home/Nav';
import BlogTemplate from './BlogTemplate';
import Footer from './Footer';

function Learn() {
  return(
    <div>
    <Nav />
    <BlogTemplate
    imageClass="learn-img"
    blogTitle="Learning to code"
    authorimage="../../../images/Andy_w1.jpg"
    authorname="Andrew Igbeinkutu"
    readtime="12/8 | 2 mins read"
    />
    <main className="blog-main">
    <hr></hr>
    <figure className="quote">
    <q>Learning never exhausts the mind</q>
    <figcaption>&mdash; Leonardo da Vinci</figcaption>
    </figure>
    <p>It's amazing to know that humans never stop learning
    throughout their lives whether consciously or
    subconsciously.
    <p>The human brain is one of the most powerful organs
    in the body. Scientists say, our brains store
    everything we've ever seen, every word
    heard, every smell perceived. Think about it -
    the numerous nerve cells in our brains
    with neuro-transmitters sending information
    and connecting to every part of our body,
    it's magical.
    </p>
    <p>
    Learning subconsiously - maybe by observing
    things around us, might seem easy.
    However, making a conscious effort
    on our part to learn something new may be
    difficult sometimes.
    Everything we've learnt, from learning to sit or walk
    as an infant to learning an instrument or a new
    skill require constant effort to master.
    </p>
    <p>
    Learning to code is no different. There are trends
    and countless videos and blogs that talk about
    why everyone should learn to code. This blog
    post is not about me convincing you to be
    a programmer.
    I believe it is practically not possible for
    everyone to be a programmer as there are a plethora
    of things one could do aside coding.</p>
    <p>However, if you've thought about learning to
    being a programmer or you just need some inspiration,
    this is for you.
    One truth you should know is that Coding is difficult!
    Yeah.. you read it right. It's a really challenging skill
    to master and not everyone who ventures continue in the
    path.
    </p>
    <p>
    I've seen so many individuals who get motivated to learn
    to code but loose their motivation a few days later.
    </p>
    <p>
    One reason for this is PRESSURE. People are pressured
    by the media and friends who are techies and they feel
    they just want to level up.
    </p>
    <p>
    I too have been pressured in similar ways. In fact, a-times
    I'm forced to do things I do not choose for myself.
    </p>
    <p>
    This can be a motivation killer. To truly learn to code,
    and not just coding but any skill whatsoever, there must be a
    deep desire and a willingness on your part to learn.
    </p>
    <p>
    If you've truly decided to be a programmer and you know it within
    your heart, then I'm gonna share you a secret.
    The most effective way to learn is by doing. By practicing
    and building things with whatever software you wish to learn.
    We may take hours of tutorials online but until we take time to practice,
    we don't really absorb the tutorials.
    There are great resources that provide hands-on learning.
    A few I would recommend for aspiring software developers are
    <a href="https://www.freecodecamp.org" target="_blank"> freecodecamp</a>,
    <a href="https://www.codecademy.com" target="_blank"> Codecademy</a>,
    <a href="https://www.code.org" target="_blank"> Code.org</a>.
    </p>
    <p>I'll conclude with this quote.</p>
    <figure className="quote">
    <q>Continuous learning is the minimum requirement for success in any field.</q>
    <figcaption>&mdash; Brian Tracy</figcaption>
    </figure>
    <p>There you have it. Keep going with that programming
    language or skill you're learning. Who knows, you
    could be the next tech Geek 😉.
    </p>
    </p>
    <hr></hr>
    </main>
    <Footer />
    </div>
  )
}

export default Learn;
