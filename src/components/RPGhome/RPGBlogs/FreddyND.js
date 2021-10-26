import React from 'react'
import './RPGBlog.css'
import { Container, Col, Row } from 'react-bootstrap'

export default function FreddyND() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="ndblog">
                            <div className="blogtitle">
                                <h1>Natty Dubs</h1>
                                <h2>What is Natty Dubs?</h2>
                                <p>It’s the place for all things RPG here at World of Realms! Written by Ryan (hey hello it’s me) our resident RPG enthusiast, Natty Dubs will consist of original content as well as stories and news from around the RPG-verse. </p>
                                <p>For the month of October, come by every Saturday for Spooky Saturdays, where we will be creating a new monster for D&D fifth edition based on classic movie monsters and villains!</p>
                                <br />
                                <h2>Pirates: a D&D One Shot (5e)</h2>
                                <div className="byline">Ryan Aspinall October 25th, 2021</div>
                                <img src="pirate.png" alt=""></img>
                                <p>I had a friend request my services as a DM recently. Their girlfriend wanted to play D&D for their birthday (excellent choice), and they asked me to create a one shot for around 7-8 people. When deciding upon a theme, my friend mentioned that they had recently watched the Pirates of the Carribean movies for the very first time.</p>
                                <p>“There it is! Our theme!” I said. “Pirates!”</p>
                                <p>Which really, is a great idea. Who hasn’t entertained fantasies of sailing around the high seas, plundering loot and fighting their rivals on the open water? There was just one problem: the official D&D ruleset did not have rules for ships! A quick perusal of the unofficial content led me to an Unearthed Arcana page, but I didn’t feel like it was what I was looking for. So, I did what DMs have been doing since the dawn of Role-playing games. I cracked my knuckles, buckled down, and created a brand new set of rules. Thus, the cleverly named Pirate System was born! Below is a full account of how to run this ruleset as a Dungeon Master (DM).</p>
                                <p>The Pirate System requires several adjustments to work within the 5e rules. The first is the addition of three new skills: piloting, canon, and repair. The way these three skills are used will be fully explained in the next section. They correspond to how well you steer the ship, how well you fire cannons at other ships/ targets, and how well you repair damage to your own ship.  Before the session, I had players roll 3 d4s and then assign the rolls to the skills they wanted. Once complete, simply have players add a note on their character sheets with their selections.</p>
                                <p>The next thing to consider is the ships themselves. Ships have a few values they absolutely need. Armor class, movement speed, and hit points are all essential. They allow the ship to engage in combat. These values, along with number of canons, number of crewmates, and the style of ship are all up to the DM or the players to decide. If you want a massive towering war dreadnought, make it have high AC and hitpoints. Arm that bad boy to the teeth and send it on its way. If your players want speed and maneuverability, perhaps a sloop is in order. This is one of those fun things that is entirely up to your discretion, and you can go as deep or shallow as you want with it.</p>
                                <p>Now we move onto the most important part: how to have epic battles out on the open water. The system itself is fairly simple. Your playersand any accompanying NPCs on their ship make up the crew, and are considered “crewmates”. At the start of combat, every crewmate makes an initiative roll. The DM takes the average of these rolls to calculate the initiate score for the entire ship. Any other NPC ships make a single roll, adding whatever modifiers the DM wants. The highest scoring ship goes first, just like standard 5e rules.</p>
                                <p>Once initiative is sorted, the system deviates from the norm. As opposed to having three actions each round (that being movement, action, then bonus action), crew members have the choice to take one OF three actions. Those are to Pilot, Fire Canon, or to Repair. These correspond to the new skills that you hopefully had your players roll at the start of the session! </p>
                                <p>A round of combat plays out thusly: the DM will start with the first ship in the initiative order. Each crewmate will select one of three actions. Once every crewmate has selected which action they want to perform, actions resolve simultaneously! The ship will move, fire a salvo of cannon fire, and be repaired all at once. With larger parties (this system was originally run with 8 people), this keeps the combat simple and moving along. The specifics of how to perform each action are below.</p>
                                <h4><ins>Piloting</ins></h4>
                                <p>If the crew wants to move somewhere, one player will be designated as the Principal Navigator. The Principal Navigator will make a Piloting check, consisting of a D20 roll + their Piloting score. Other members of the party can aid the Principal Navigator (trimming sails, pulling out oars) as an action, thereby adding their individual Piloting skill to the overall Piloting check for that round.</p>
                                <p>For instance, Player A has been selected as the Principal Navigator. They roll a D20, and get an 11 on the dice. If their piloting skill is a +3, the overall result of the Piloting check is  a 14. However, if Player B has decided to help them, and had a Piloting skill of +2, they would add that +2 to the original check to make the overall Piloting for that round a 16. It is at the discretion of the DM to decide what score is necessary to perform the movement.. If the crew wants to go in a straight line, a 16 should be more than sufficient. If they wanted to say, I don’t know, use a magically created whirlpool to attempt a slingshot (a la the Rich Purnell Maneuver from The Martian by Andy Weir) in order to ram an enemy ship, that would of course be much harder. The whole crew might have to pitch in to make that one work!</p>
                                <h4><ins>Firing Cannons</ins></h4>
                                <p>Oh yeah, the fun one. Canons are the bread and butter of ship based combat, and I can assure you that players will want to be firing them as much as possible. A ship can have any number of cannons, but every cannon will be the same. Each one has two firing modes, standard and grapeshot. Standard cannonballs deal 1d12+ Cannon skill damage, but suffer disadvantage at ranges beyond 120ft. Grapeshot, on the other hand, deals only 1d8 + Cannon skill damage, but is accurate out to 200ft. When a cremate chooses to fire a cannon, they first select which kind of cannonball to use and then make a ranged weapon attack using 1d20+ Cannon skill. </p>
                                <p>Like Piloting, the success of the attack is up to the DM. A ship may only have an AC of 15, but environmental factors may compound to make it harder to hit. Consider, what’s the weather like? Is it a dark and stormy night? Is there a heavy fog? Are the seas roiling up and down, making it more difficult to time to volley? Is there an island you have to account for, which is obstructing an otherwise clear shot? These are all factors that should be considered when engaging in ship to ship combat.</p>
                                <h4><ins>Repair</ins></h4>
                                <p>As the crew’s ship suffers damage, different crewmates can choose to use their action to repair the ship. They roll 1d20 + Repair skill, and if the result is above a ten, they restore 1d10+ Repair skill hit points to the ship. I found this to be the most challenging yet rewarding process as a DM. It’s interesting to describe how the player’s go above repairing the ship. Maybe they are mending a ripped sail, or retying a thick tar-encrusted rope that has come loose. Perhaps they are trying to stop the main mast from listing dangerously over the side of the ship, or cutting it free when it ultimately goes so as to preserve the maneuverability of the craft. There are a lot of options for flavor here, so really dig into the imagination bank!</p>
                                <p>And that’s all she wrote mateys! Terrible word choice, but appropriate in this instance. Everything in this ruleset is by no means set in stone, and is completely flexible based upon your own experiences and the desires of you or your party. Also, despite it working oh so beautifully in one-shot, it has yet to be rigorously tested in a full campaign setting! If you do find this useful, please let us know at any of our socials, or by dropping us an email via the address on our contact page.</p>
                                <p>Until next time, go get those Dubs.</p>


                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className="ndblog">
                            <div className="blogtitle">
                                
                                <h2>Spooky Saturday's: Jason Vorhees Edition</h2>
                                <div className="byline">Ryan Aspinall October 23th, 2021</div>
                                <p>It’s Saturday. Time to get Spooky!</p>
                                <p>Our pick this week is Jason, the hockey mask wearing momma’s boy from the Friday the 13th franchise.</p>
                                <p>Jason is indestructible. That’s his whole schtick. He basically regenerates all damage and tanks stab wounds like a champ, all while chopping down horny teenagers like stalks of wheat. Because of this, Jason is a lot simpler than Freddy. A mass murderer with a machete doesn’t need any mystical powers, he just needs to kill you.</p>
                                <h4><ins>Ability Breakdown</ins></h4>
                                <p>Look, I’m just gonna come out and say it: Jason is a tanky mofo. This man has survived fourteen movies having been stabbed, drowned, hit with an axe, and generally abused. His longevity is thanks in large part to his wicked cool regenerative skills, a la the Wolverine, and Hollywood’s complete lack of originality. In this 5e interpretation, not only does Jason have a ton of resistances, but he also regains 2d12 hit points at the start of every round. When combined with his 300hp, and +7 constitution modifier, Jason is guaranteed to shrug off a good portion of what your party is trying to do to him. Oh, you stabbed him? That’s cool bro, but he takes half damage, and he’s gonna close that wound up next time his turn comes around. What’s this? You hit him with a mace? Tis but a flesh wound homie, he’s fine.</p>
                                <p>Even better, while you recoil in horror as his bones snap back into place, he’s gonna grab you. And with a +21 athletics score, you are going to get grabbed. Then he will stab you. A lot. I mean, a lot a lot. Sure, his machete doesn’t do a ton of damage, but the man is not going to let go of you without some serious divine intervention. You’re gonna have to nat 20, or pray. Honestly, probably both! And the whole time you're waiting for the dice gods to answer your prayers, he’s going to be inflicting some serious hurt onto you. He gets advantage with his machete, and does 2d6+6 bonus damage! Squishies beware.</p>
                                <br />                               
                                <p>To make the whole experience even worse, I would 100% make your characters underleveled. The more astute observers may have noticed that he has no real defense against magic. Your best bet is to sit back from range and just hurl spells at him. Let’s be real, we play D&D. Fireball cures all ills.  Keep in mind, while he is a mass murdering giant, technically most of his iterations have him as just being a man. A man who feels no pain, sure, but still just a man. So there isn’t reallyyyyy a good reason for him to be immune to magic (Unless you want to talk about how Adam Marcus made him a Deadite, but then we get into a copyright debate, and whether or not that’s canon, and these posts are supposed to be snappy, so let's not). However, if your party has no decent spells, and your cleric already used their cure wounds to fix up that rather nasty stab wound… welp. Looks like it's time to run. Quickly. Away. Tell your mum to come get you from summer camp, because the hockey mask wearing psycho has already chopped your mates to bits, and you’re next.</p>
                                <img src="jasonvorhees.png" alt=""></img>
                                


                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className="ndblog">
                            <div className="blogtitle">
                                
                                
                                <h2>Spooky Saturday's: Freddy Kreuger Edition</h2>
                                <div className="byline">Ryan Aspinall October 16th, 2021</div>
                                <p>Our first Villain for Spooky Saturdays is an all time classic, Freddy Kreuger!</p>
                                <p>This build is based purely on the first movie. The deeper you delve into the Cravenverse, the more insane and complicated things get. I could write literally a dozen different versions of this character, and still not cover every variation. The focus for this build is the idea that he cannot be stopped.</p>
                                <h4><ins>The Dreamscape</ins></h4>
                                <p>Freddy Kreuger is a dream demon, and as such is going to get all kinds of nifty bonuses when inside of people’s minds. He also innately has the ability to bring any sleeping PCs directly into his Region, the Dreamscape. Once inside, your PCs should probably get ready for some serious terror. Freddy can teleport, walk through doors, and is unable to be permanently killed while inside the Dreamscape. Plus, as it is all a dream (it always was, ehgads!), the setting is entirely up to you!</p>
                                <p>Perhaps you want to recreate the movie, and have the action take place inside of Nancy’s house, or the boiler room below the highschool. Maybe a spooky haunted house by the lake? Or in the woods? Or… actually, pretty much any kind of haunted house should suit you. Go wild!</p>
                                <br />
                                <h4><ins>Ability Breakdown</ins></h4>
                                <p>Let’s look at his abilities! As you can probably tell, the names of his actions and abilities are directly inspired by his creepy nursery rhyme. The Legendary Action Freddy’s Coming for You is really the bread and butter of his kit. The ability to teleport towards any character and instantly inflict damage is supposed to be a surprise, and any DM should avoid telling their players what’s going on. It’s also a great way to get closer to those pesky backliners, and make them feel pressured. Freddy can then either use his claws, stabbing players, or use his longer ranged Elm Street Slasher as they try to run away. Elm Street Slasher is open to interpretation of how he does it. One way is to think of him launching out condensed aura and slicing PCs. Maybe he rips a hole in reality and his claws reach that far. Or, perhaps he has extendo arms that reach all 20 feet. Whatever you decide, make it scary!
                                    Aside from dealing damage, Freddy is a bit of an unstoppable force. Literally. There are no means by which to stop him. Better Lock the Door is supposed to be an overpowered ability, and prevent players from simply casting spells from afar, or impeding his movement. However, it should not be abused. You can use this ability to sneak up on players, hitting them quick with a teleport, or a volley of Elm Street Slasher, and then get out again. A one on one confrontation doesn’t need to be the only way to deal with him. An unstoppable demon who only shows up occasionally to inflict serious damage and then leaves can be much worse than one who shows up, TPKs, and then gloats over you players poor poor desiccated corpses. Plus, even if they do kill him, he’ll be back in a few days thanks to Never Sleep Again, a pesky little thing that makes him effectively immortal inside the Dreamscape.</p>
                                <p>Which begs the question, how do you kill him? Well, that’s up to you! Magical artifacts, different objectives to complete, or finding the source of his evil are all options. Maybe there’s a pseudo holy grail inside the house that can banish him for a longer period of time. The vicar down the street seems to know something, why don’t you go talk to him? Bring coffee though, you’d hate to go into the Dreamscape alone. Because don’t you know?</p>
                                <p>Freddy’s Coming for you...</p>
                                <img src="freddy.jpg" alt=""></img>


                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
