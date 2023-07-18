var storyDict = {};
var hintDict = {};

storyDict[1.0] = `<span class="green">PLAYER</span> wakes up in a dark, dimly lit room. The regret of what happened last night during <span class="green">GEN AGEth</span> birthday party comes flooding in; realising they got a bit too drunk yet again. They lie there in the weirdly uncomfortable bed for a few minutes with their eyes closed, not yet ready to leave the confines of their bed.<br class="doubleSpace">
The bed feels different than when they initially went to bed; the room damper and colder - something which is brushed aside and surely attributed to their headache and grogginess.<br>
Finally, <span class="playerAction">PLAYER decides to...</span><br class="doubleSpace">
<button type="button" class="collapsible" id="tutCollapse">Click me to view the tutorial...</button>
    <span class="content">
        This is a free-text game, so you can write anything you like into the input below.<br> Some puzzles and options may require some thinking and some deliberation.
        For this choice, we'll give you some help:<br>
        <ul id="tutList">
            <li>If you're ready to get up and brave the bright sunshine in your face, simply type "open eyes".</li>
            <li>If not, you can choose to "go to sleep" and you'll fall back to sleep.<br class="doubleSpace"></li>
        </ul>
        Since this is a free text game, sometimes it will be hard to find the exact correct wording. Therefore, we have added a HINT button if needed. We will also try to keep options consistent throughout the game.
        <br>
    </span>`;

hintDict[1.0] = `Maybe you should <span class="hint">open your eyes?</span>`;


storyDict[1.01] = `After careful deliberation, you decide you are finally ready to face the world. You slowly open your eyes, which take a bit longer than usual to come into focus. As you're sat lying on your back with your eyes open; the first major goal of your day <span class="green">accomplished</span>. As you stare upwards, trying to pluck up the courage to actually get out of bed, you notice something peculiar.<br class="doubleSpace">
<q>Huh, I don't remember the ceiling being that colour... And so badly damaged? Is this just my imagination or has it always been like that?</q>, you think to yourself. <q>Weird.</q>, you say quietly.<br class="doubleSpace">
For some reason, your mind drifts elsewhere, and you put the thought of the ceiling to the back of your mind; making a note to get a ladder and look at it.<br>
You let out a great sigh; it's time to <span class="hint">get up</span>. Finally you decide <span class="playerAction">you should...</span><br>`;

hintDict[1.01] = `It's maybe time to <span class="hint">get up</span>.`;

storyDict[1.02] = `You prepare yourself to <span class="playerAction">sit up</span>; you close your eyes and push your back up off the bed, throwing your arms into the air and stretching them widely as you do so.<br>
You slowly open your eyes again and the sight that greets you takes a few seconds to sink in.<br class="doubleSpace"><span class="playerAction">Press enter to continue...</span>`;

hintDict[1.02] = `Just press <span class="hint">enter.</span>`;

storyDict[1.03] = `It suddenly dawns upon you why the ceiling was so battered and different; why the bed was so <span class="red">uncomfortable</span> - you're not in your room at all.
You jolt out of bed as if a jolt of electricity shot through your body. Now standing at the side of your bed, heart racing due to the environment you have no idea of - There's a million thoughts rushing through your head.
Maybe you could <span class="hint">search the room for any clues?</span> Finally, <span class="playerAction">you...</span><br>`;

hintDict[1.03] = `Maybe you could <span class="hint">search the room</span> for some clues or items?`;

//!NOTE That the quotation marks from word e.g. class="red" are messed up and don't work; redo them all
storyDict[1.04] = `You stand for a few seconds, letting your mind take in your surroundings. There are a <span class="red">million questions running through your head</span>, but you have no time to think about them. Instead, you decide to look around and search the room; just to see what is around you...<br class="doubleSpace">
You see a table and decide to run over to it. In the table's drawers, there are a few items; some more interesting that others. Of all the things in the drawer, the only things that seem to be of use would be a <span class="item">screwdriver</span> and a <span class="item">knife</span>. 
Your hands still seem to work pretty well and you're pretty sure you could <span class="hint">pick up</span> an item. <span class="playerAction">You...</span><br>`;
hintDict[1.04] = `You should probably <span class="hint">pick up</span> one of those <span class="hint">items</span>.`


storyDict[1.05] = `As you pick up the <span class="item">ITEM</span>, you hear a loud <span class="emphasise">bang</span> come from outside the room, causing you to jump away from the table. You didn't even notice the door was lying <span class="playerAction">wide open</span>. You could
easily <span class="hint">go through the door</span>. You deliberate for a second, and <span class="playerAction">decide to...</span>`;
hintDict[1.05] = `You could easily <span class="hint">go through the door</span>`

storyDict[2.0] = `You walk through the door and survey your surroundings, trying to find the source of the sound you heard. The room doesn't look like anything you'd expect after exiting the first. 
This one is clean, bright and colourful; the walls and floors made of a rich wood; it's as if you just stepped into a <span class="red">completely different world</span>. The room looks like some sort of <span class="location">study</span>, with desks placed around the room, books strewn over them. There's a door on the other side of the room, but of course it's locked.<br class="doubleSpace">
The door you came through originally has closed. It seems like you're <span class="red emphasise">stuck</span>.<br class="doubleSpace">At an impasse, <span class="playerAction">you...</span>`
hintDict[2.0] = `Maybe you should <span class="hint">search the room</span>, it might give you some clues.`;


storyDict[2.01] = `You begin to search the room, and you finally see a small box on a table just beside a lamp. You bend down to examine the box, noticing it's intricate lines and details. <br class="doubleSpace">In the centre of the box, there's a small hole, with a key visible through it. Of course, you try to stick a finger through and grab it, before realising the key is blocked by a small piece of glass. 
As soon as the logical thought of smashing the box comes into your head, you notice a <span class="item">small note</span> on the pedestal, just under where the box was saying <br><q>Smashing the box will cause more harm than good. - M</q>.<br class="doubleSpace">
You contemplate the note for a second, trying to decide what to do. You finally <span class="playerAction">decide to...<span>`;

hintDict[2.01] = `You could try to <span class="hint">inspect the box</span>.<br>Or just <span class="hint">smash the box</span> instead...`;

storyDict[2.02] = `You decide that smashing the box may not be the <span class="item">best idea</span>, and try to find another way to retrieve the key. As you inspect the box closer, you notice a few details.<br class="doubleSpace">
The bottom panel has a <span class="emphasise">single screw</span> in the middle that seems to be holding it together, and the top panel has a <span class="emphasise">groove at the side</span> where a thin object could be put to try and prise it off.<br>
You think about the <span class="item">ITEM</span> you picked up earlier, and <span class="playerAction">decide to...</span><br>`;

hintDict[2.02] = `You should maybe try to <span class="hint">get the item</span> that you picked up earlier from your pocket.`;

storyDict[2.03] = `You lift the box high above your head and send it <span class="red">plummeting towards the ground.</span><br class="doubleSpace"> 
                It shatters into pieces. You kneel down to find the key but... It's gone. Suddenly, you see 
                a faint glow from some gas like substance emanating from the box, resulting in you feeling quite sleepy...`;

hintDict[2.03] = `Bad idea.`;

storyDict[2.04] = `You flip the box on the table and take the <span class="item">screwdriver</span> out of your pocket. Checking the head of the <span class="item">screwdriver</span>, you are relieved to see that it <span class="green">matches</span> the screw.<br>
<br class="doubleSpace">Inside, you see the glass casing that surrounds the key, sitting atop the innermost wooden box. You inspect the inside and notice what looks to be ventilators at the bottom of the key chamber. 
Thinking nothing of it, you spin the box around to inspect from all angles. You take a second to contemplate and look around the box. Finally, you notice a few more screws which seem to hold a few <span class="blue">connectors</span> in place. What could they be for? <span class="playerAction">You decide to...</span><br>`;

hintDict[2.04] = `Screwdriver's are good when you want to <span class="hint">unscrew a screw</span>.<br>Or just <span class="hint">smash the box</span> instead...`;

storyDict[2.05] = `You look at the small groove at the top of the box and think for a second. <q>I could slide my knife in there and try pry it off</q>, you think to yourself.
You grab your knife out of your pocket and push it into the slot. It seems there may have been a button inside the slot as you hear a faint <i>click<i>. The top of the box suddenly whirrs open to reveal the inside; the key enclosed in a glass case which seems to have some sort of ventilator below it.
You see two exposed wires leading to connectors in the box. There's a red wire and a green wire. You notice a small plaque at the side of the box which says <q>The correct choice rhymes with the opposite of alive.</q> It's a riddle. You think for a few seconds and <span class="playerAction">decide to...</span>`;

hintDict[2.05] = `You should try to <span class="hint">cut the wire</span> which rhymes with 'dead'.`;

storyDict[2.06] = `You press your knife against the green wire and make a sharp cut. Nothing happens for a few seconds... Suddenly, you see a faint glow from some gas like substance emanating from the box, resulting in you feeling quite drowsy...`;
hintDict[2.06] = `Green rhymes with dead?`

storyDict[2.07] = `You decide it would be best to try unscrewing the connectors, rather than smashing the remainder of the box on the ground. After finishing with the screws, nothing happens. You're unsure what went wrong. You step back for a second, looking around to see if there's anything you could've missed, and see a <span class="blue">small hole</span> on the side of the box, roughly <span class="hint">the size of one of the screws you just removed.</span><br>
You decide to screw it into the newly found hole, which seems to complete a connection. The box starts whirring and, finally, the glass surrounding the key is released, allowing you to lift it off and <span class="green">take the key.</span>
You grab the key and walk straight to the door which blocked your advancement. You put the key in and after turning it, a loud and satisfying <i>click</i> comes from the door. <span class="playerAction">You...</span>`;
hintDict[2.07] = `You could easily <span class="hint">go through the door</span>.`;

storyDict[2.08] = `You lift the box high above your head and send it plummeting towards the ground. It shatters into pieces. You kneel down to find the key but... It's gone. Suddenly, you see a faint glow from some gas like substance emanating from the box, resulting in you feeling quite drowsy...<br><span class="playerAction">Press enter to continue...</span>`
hintDict[2.08] = `Bad idea.`;

storyDict[2.09] = `<q>Red rhymes with dead!</q> you think. You press your knife against the red wire and make a sharp cut. Nothing happens for a few seconds, making you think you made the wrong choice. Suddenly, the box whirrs into motion yet again and the case which surrounds the key pops off, revealing it to you.
You grab the key and walk straight to the door which blocked your advancement. You put the key in and after turning it, a loud and satisfying <i>click</i> comes from the door. It opens, and <span class="playerAction">you...</span>`;
hintDict[2.09] = `You could easily <span class="hint">go through the door</span>`;

storyDict[2.1] = `As you step through the door, <span class="red">you freeze</span>, stunned. You're back in the same place you awoke in; a different area, but clearly in the same dark, mouldy, <span class="emphasise">dilapidated</span> place, this time in a corridor...
You take a few steps forward, and suddenly hear a loud <span class="emphasise">crash</span>. You take a second to realise but there's a figure running down the corridor <span class="red">towards you</span>. <br><span class="playerAction emphasise">You must decide quickly, you...</span><br class="doublespace">`;
hintDict[2.1] = `Stop reading the hint and either <span class="hint">run</span> or <span class="hint">fight</span>!`;

storyDict[2.11] = `You did <span class="red">nothing</span> and the man grabs you.<br class="doubleSpace">He pins you against the wall and, being much bigger and stronger than you, beats you until you're <span class="red">lying on the ground</span> unconscious.<br>`;
hintDict[2.11] = `You weren't fast enough.`;

storyDict[2.12] = `Armed with your <span class="item">ITEM</span>, you decide to stand your ground and fight the man running towards you.`
hintDict[2.12] = `Your result here depends on what item you have in your pocket.`;

storyDict[2.13] = `Without thinking, you try to jab the screwdriver at the man as he reaches you. The screwdriver, being <span class="red emphasise">weak</span> and with a poor handle, is merely pushed out of your hand. The man <span class="red emphasise">grabs you</span>, and with no more weapons to fight with, he makes short work of you and leaves your lifeless body where it was.`;
hintDict[2.13] = `What? Did you think that screwdriver was going to be good in a fight?`;

storyDict[2.14] = `As the man reaches arm's length, you thrust the knife straight into his abdomen without even thinking; even before he grabs hold of you. The man keels over, falling to the ground with the knife still protruding out of him. You stay still for a second, wondering whether he's really dead, then slowly and shakily pull the knife out. You waste no time after that and run to the first open door you see.`;
hintDict[2.14] = `The knife proved pretty useful after all.`;

storyDict[3.0] = `You run into the room without even stopping to look inside and suddenly... You find yourself in a similar room to the second where you solved the puzzle.<br>
Yet again, there is a door on the other side of the room, again locked. However, this time, you notice that there's a pedestal in the centre.<br>
Instead, standing in the centre is a <span class="item">lectern</span>, on top of which stands a small book. You open the book and inside reads <br><q>Your final puzzle: Write certain actions in this book that will grant your freedom. Think carefully, however, as any missteps can have dire consequences."</q><br class="doubleSpace">
After reading this, you stop to think for a minute, trying to work out what you should write in the book. After careful deliberation, <span class="playerAction">you write...</span><br>`;
hintDict[3.0] = `It can't be that simple, can it?`;

storyDict[3.01] = `You slowly and shakily write the words <span class="red>"certain actions"</span> onto the page, letter by letter, expecting the worst from the stupidity of your choice. The ink takes a few seconds to dry in and...`;
hintDict[3.01] = `It was!`;
//2 sec delay

storyDict[3.02] = `You shakily transcribe the words <span class="playerAction">INPUTTEXT</span> into the book, and wait for a few seconds. Nothing happens. You breathe a sigh of relief thinking you made the right choice, but suddenly everything goes <span class="red">dark.</span>`;
hintDict[3.02] = `Interesting choice...`;

storyDict[3.03] = `You hear a faint <span class="green">click</span> from the other side of the room, and the door ahead which was before locked tight now swings open, light beaming through. You step away from the book and walk towards the door, <span class="playerAction">you...</span>`;
hintDict[3.03] = `You could easily <span class="hint">go through the door</span><br>Or, for whatever reason, if you want to <span class="hint>turn back</span>, you can.`;

storyDict[3.04] = `You <span class="red">jolt upright on your bed</span>, drenched in sweat. You check; the ceiling is back to the way it's meant to be. You're back in your room. It seems like it was all just a <span class="playerAction">dream.</span><br>`;
hintDict[3.04] = `Was it really just a dream?`;

storyDict[3.05] = `For whatever reason, you feel compelled to go back the way you came, straight through the wooden room and back into the asylum. As you reach the room you woke up in,
you begin to feel dizzy, falling on the ground in a heap.`;
hintDict[3.05] = `Who in their right mind would want to go back in?`;





