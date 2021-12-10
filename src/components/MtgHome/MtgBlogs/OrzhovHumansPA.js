import React from 'react'
import './MtgBlog.css'
import { Container, Row, Col } from 'react-bootstrap'
import MTGnav from '../MTGnav'

export default function OrzhovHumansPA() {
    return (
        <div>
            <MTGnav />
            <Container>
                <Row>
                    <Col>
                        <div className="pablog">

                            <div className="orzhov">

                                <h2>Orzhov Historic Humans</h2>
                                <div className="byline">By Joey Zelinka October 18, 2021</div>
                                <img src="orzhovlist.png" alt=""></img>
                                <p>Disclaimer: I am not a pro. Though, you probably already knew that since you have never heard of me in Magic. I’ve been playing Magic for a long time but Arena only since June. In my time on Arena, I’ve spent $20 by accident (long story). In paper Magic I play 5 Color Humans in Modern (some might call me the “Humans Guy” here in Atlanta). I attend as many Competitive REL in Atlanta and the surrounding areas as I can. Like I said I’m not a pro, but I’ve probably gotten smashed by your favorite pro player. This blog is for regular players who make mistakes, play through them and want to be as competitive as possible. “Poetically Aggro” is just my perspective and knowledge of all things aggro.</p>
                                <p>This deck shreds. I made Mythic with a worse version in Standard before rotation and I’ve since converted it for Historic play. The combination of aggression and disruption is what makes this deck so deadly. Just like any good aggressive deck, if your opponent looks away, their eyes come back to lethal on the board early. We’re going to go through cards individually and then show you the best lines of play, in a general sense. Here’s the players in the game.</p>
                                <p>Let’s start with the one drops. Star Pupil is true to its name as far as I’m concerned. I know I know, Esper Sentinel right?! Well, F$#k that!</p>
                                <p>Here's me smashing what looks to be the mirror but my opponent has Esper Sentinel</p>
                                <p><img src="espersent.png" alt=""></img></p>
                                <p>DO YOU SEE WHAT HAPPENS LARRY WHEN YOU PLAY ESPER SENTINEL OVER STAR PUPIL</p>
                                <p>The ability to keep Pupil’s power on the board after death is huge. Not to mention, there’s a really cool interaction with Star Pupil and First Strike damage. If they die to First Strike damage, then the counters get transferred before regular damage. I’ve saved creatures, won the game etc... with this play. Giant Killer/Chop Down is pretty straightforward. A solid turn one play or kill something big. But, the true power of this card is that tap ability. Ohhhh, I love it. Your opponent cheat something huge out early? Neutralized. Need to sneak in some lethal damage? Giant Killer’s got you. Pictured is me winning through a turn 3 Ulamog by using that ability.</p>
                                <p><img src="ulamog.png" alt=""></img></p>
                                <p>Now, for my favorite card in the deck, Beloved Princess. She’s the homie. I GET MONEY WITH BELOVED PRINCESS! Sucks when your wall of 8/8 Elves can’t block a 10/10 Lifelinker, you lose the game and there wasn’t a damn thing you could have done about it. The one drops in this deck are the tone setters.</p>
                                <p>The two drops are where things start to get sexy. Luminarch Aspirant is the first target by spot removal for a reason. They get you huge fast. Rally the Ranks is what it is, a lord effect that can live past a board wipe. Thalia’s Lieutenant and I go way back (see disclaimer) and they’re value is well documented. Kitesail Freebooter says “Lemme see wat you got” and then “I’ll take that thank you”. These are the cards that “guide” the strategy in this concerto of pain.</p>
                                <p>Big surprise! This deck curves out at three mana. I don’t like four drop spells in my aggressive decks. But that’s a blog post planned for another time. Elite Spellbinder has caused more turn 3 rage quits for me than anything I’ve played in Arena to date. So much that I don’t think I’ve ever played anything before it on turn 3. General Kudro’s lord effect is usually enough on its own. However, that graveyard effect comes in handy and often. Your opponent do a whole lot of work to get Kroxa into the graveyard? Cool story bro. Banishing Light is the catch all. Most people would run Skyclave Apparition here, but mathematically there are more cards on Arena that can remove a creature than can remove an enchantment. Despite that fact, I may be wrong in playing it. I don’t care. Banishing Light does its job, and it does it well.</p>
                                <p>There are some really great lines of play, some pretty good lines of play and one line of play that is just a bummer. Any opening hand without a one drop is a bummer. Not unplayable but it feels bad not playing something on turn 1. If your turn 2 play is Kitesail, that is a bit redeeming but sucks, nonetheless. Princess into Luminarch Aspirant into General is the best of the “pretty good lines of play”. Giant Killer into Lieutenant can be a nice defensive play on turns 1 and 2. But, the mother of all lines of play, Beloved Princess into Kitesail into Spellbinder. If you’re on the play, you’re going to be VERY tough to beat. A turn 4 Lieutenant and it’s lights out.</p>
                                <p><img src="bestlineinthedeck.png" alt=""></img></p>
                                <p>There are a lot more ways to win with this deck and it is very resilient. The only thing I’m going to play around with is the mana base, but it is fine as is. BO3 version to come.</p>
                                <p>This:</p>
                                <p><img src="oohbefore.png" alt=""></img>
                                    <p>Turns into this quickly:</p>
                                    <img src="oohafter.png" alt=""></img></p>
                                <p>As with any non-meta deck you’re going to have to play the hell out of it. If your opponent has a hand that’s full of spot removal or counterspells, just keep casting. One of you is going to run out of something eventually and there’s no honor in dying with a hand full of cards as an aggro player. You can make it to Diamond with this deck fairly easy. If you ball out with it, you can make Mythic. One more thing: I GET MONEY WITH BELOVED PRINCESS. Fight me.</p>
                                <p>Until next time…and f%&k a boardwipe!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
