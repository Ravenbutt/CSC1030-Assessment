document.addEventListener('DOMContentLoaded', function (event) {

    //Dictionary to hold each story level text e.g. {1.0: "text for 1.0"}
    var allStoryText = storyDict;

    //Stores the players name
    var userName;
    //Stores player age
    var userAge;
    //Stores player gender
    var userGen;
    //Stores current location number
    var locationNum;
    //Stores current location's text - Don't think this is necessary??
    var currentText;

    //Stores the text speed adjusted by the user
    var textSpeed;
    var typeWriter;

    // Variable used to check if player has scrolled up
    var scrolledUp = false;

    // Player object
    var player;
    
    // Variable to store the game start time as a Date object
    var startTime;

    // Variable to store the current win and lose counts
    var winCount = 0;
    var loseCount = 0;

    // Gets the room name element for updating in different scenes
    var roomName = document.querySelector('#roomName h1');

    // Stores a sound object to play the background music
    var bgMusic;


    /**
     * Function to initialise and set up the main components of the game
     */
    function gameLoad() {

        
        //Gets name, age and gender from session storage
        userName = sessionStorage.getItem('NAME');
        userAge = sessionStorage.getItem('AGE');
        userGen = sessionStorage.getItem('GENDER');

        // Checks what gender player chose on main menu and changes
        // pronoun based on it for inserting into text
        if (userGen === 'Male') {
            userGen = 'his';
        } else if (userGen === 'Female') {
            userGen = 'her';
        }
        else {
            userGen = 'their';
        }

        // Building the player object to store details about the player
        player = {
            name:userName,
            age:userAge,
            gender:userGen,
            inventory:[]
        };

        // Cover which displays over the screen as a transition
        // Has keyframe animation added to it
        var cover = document.getElementById('cover');
        cover.style.display = 'initial';
        cover.classList.add('fadeOutCover');
        // Used to hide the cover when the animation is over so it doesn't reappear
        cover.addEventListener('animationend', function() {
            cover.style.display = 'none';
        })
        
        // Initial background color of black as character's eyes are closed
        document.body.style.backgroundColor = 'black';

        //Event listener to wait for changes in text speed from user in options
        speedListener();
        //Sets up listener on btnHistory that when clicked it shows text history
        historyListener();
        //Sets up listener on btnOpt that when clicked shows the option block
        optionsListener();
        // Sets up listener on btnShowHint to display the hint pop up
        hintListener();
        // Sets up listener on sound slider in options
        soundListener();

        // Gets the time when the game is started
        // Used to calculate play time
        startTime = Date.now();

        // Sets initial location number of 1.0
        // The text for this location is then retrieved from StoryStorage
        locationNum = 1.0;
        roomName.innerHTML = 'Your bedroom...?';

        // Displays a prompt asking if the player wants to play music
        // Gets around the limitation of having to interact before music plays
        var musicPrompt = document.getElementById('musicPrompt');
        document.getElementById('backgroundVideo').style.display='none';
        document.getElementById('musicYes').addEventListener('click', function() {
            bgMusic = new sound("music/themeSong.mp3", true);
            bgMusic.play();
            document.getElementById('musicOn').checked = true;
            
            musicPrompt.classList.add('fadeOut');
            musicPrompt.style.animationDuration = '2s';
            musicPrompt.addEventListener('animationend', function() {
                musicPrompt.style.display = 'none';
                writeText(locationNum, 2000);
            })
        })

        document.getElementById('musicNo').addEventListener('click', function() {
            musicPrompt.classList.add('fadeOut');
            musicPrompt.style.animationDuration = '2s';
            musicPrompt.addEventListener('animationend', function() {
                musicPrompt.style.display = 'none';
                writeText(locationNum, 2000);
            })
        })
    };
    gameLoad();


    // Variable to store a timeout
    var wait;

    // Variable storing how many times player has entered the wrong input
    // Used to display the hint pop up
    var wrongCount = 0;

    // Used to store the sound object
    var footSteps;
    
    /**
     * This function is the back bone of the script and retrieves and displays text
     * from the StoryStorage dictionary based on locationNum
     * Writes the retrieved text to the output, and performs any necessary
     * operations for that scene
     */
    function newLocation() {
        playerInv = player.inventory;
        var backgroundImage = document.getElementById('backgroundImage');
        if(wrongCount == 2) {
            document.getElementById('btnShowHint').click();
            wrongCount = 0;
        }
        // Switch case for the current location number
        switch(locationNum) {
            case 1.0:
                if(checkInput(['open', 'eyes'], true)) {
                    // Displays the cover as a transition and fades it out
                    var cover = document.getElementById('cover');
                    cover.style.display = 'initial';
                    cover.classList.add('fadeOutCover');
                    cover.addEventListener('animationend', function() {
                        cover.style.display = 'none';
                    })

                    backgroundImage.style.display = 'initial';
                    backgroundImage.src = 'images/darkRoom.jpg';
                    backgroundImage.alt = 'A dark bedroom.';
                    // Function used to zoom the background image
                    zoomBackground();

                    // Setting the background color to match the image
                    document.body.style.backgroundColor = '#151515';

                    // The text for locationNum=1.0 has already been written
                    // So if the above if condition==true then it'll write text for locationNum=1.01
                    locationNum = 1.01;

                    // writeText() accepts a delay before it starts writing
                    // Used to delay writing text so it doesn't lag with any animations
                    writeText(locationNum, 5000);
                }
                else if(checkInput(['sleep'], true)) {
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 1.01:
                if(checkInput(['sit', 'get'], false, ['up'])) {
                    locationNum = 1.02;
                    writeText(locationNum);
                }
                else if(checkInput(['lie', 'longer', 'stay', 'rest'], false)) {
                    // Simple sleep function if the player says stay
                    writeText(locationNum, 10000);
                }
                else {
                    wrongCount++;
                }
                break;
            case 1.02:
                // This means if the user enters nothing
                if(checkInput([''], true)) {
                    roomName.innerHTML = 'Where am I?';
                    
                    backgroundImage.src = 'images/abandonedRoom.jpg';
                    backgroundImage.alt = 'An abandoned room; looks like it\'s in some sort of asylum?';
                    document.body.style.backgroundColor = '#171f22';
                    
                    zoomBackground();

                    locationNum = 1.03;
                    writeText(locationNum, 5000);
                }
                else {
                    wrongCount++;
                }
                break;
            case 1.03:
                // checkInput() can contain 3 parameters; if so, first list is words input can contain,
                // second is if it should contain all 1st param's words, third is words it must contain
                if(checkInput(['look', 'explore', 'search', 'scout'], false, ['room'])) {
                    locationNum = 1.04;
                    roomName.innerHTML = 'The toolbench';
                    backgroundImage.src = 'images/toolDrawer.jpg';
                    backgroundImage.alt = 'A drawer of tools.';
                    
                    document.body.style.backgroundColor = '#4f2515'
                    zoomBackground();

                    writeText(locationNum, 5000);   
                }
                else {
                    wrongCount++;
                }
                break;
            case 1.04: 
                if(checkInput(['pick', 'up', 'lift', 'get', 'take'], false, ['screwdriver'])) {
                    // Adds screwdriver to player's inventory
                    player.inventory.push('screwdriver');
                    backgroundImage.src = 'images/abandonedRoom.jpg';
                    backgroundImage.alt = 'An abandoned room; looks like it\'s in some sort of asylum.';
                    document.body.style.backgroundColor = '#171f22'
                    zoomBackground();
                    locationNum = 1.05;
                    roomName.innerHTML = 'Where am I?';
                    writeText(locationNum);
                }
                else if(checkInput(['pick', 'up', 'lift', 'get', 'take'], false, ['knife'])) {
                    // Adds knife to player's inventory
                    player.inventory.push('knife');
                    backgroundImage.src = 'images/abandonedRoom.jpg';
                    backgroundImage.alt = 'An abandoned room; looks like it\'s in some sort of asylum?';
                    document.body.style.backgroundColor = '#171f22'
                    zoomBackground();
                    locationNum = 1.05;
                    roomName.innerHTML = 'Where am I?';
                    //var backgroundVideo = document.getElementById('')
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 1.05: 
                if(checkInput(['go', 'to', 'open', 'door', 'unlock'], false, ['door'])) {
                    locationNum = 2.0;
                    roomName.innerHTML = 'Wooden Room';
                    
                    backgroundImage.src = 'images/lamp.jpg';
                    backgroundImage.alt = 'An abandoned room; looks like it\'s in some sort of asylum?';
                    zoomBackground();
                    document.body.style.backgroundColor = 'black';
                    writeText(locationNum, 5000);
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.0: 
                if(checkInput(['look', 'explore', 'search', 'scout'], false, ['room'])) {
                    locationNum = 2.01;

                    backgroundImage.src = 'images/box.jpg';
                    backgroundImage.alt = 'A wooden box with many panels and intricacies.';
                    document.body.style.backgroundColor = '#030e14';
                    zoomBackground();

                    writeText(locationNum, 5000);
                    roomName.innerHTML = 'The Puzzle';
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.01: 
                if(checkInput(['inspect', 'look', 'scan'], false, ['box'])) {
                    locationNum = 2.02;
                    writeText(locationNum);
                }
                else if(checkInput(['smash', 'destroy', 'throw', 'break'], false, ['box'])) {
                    locationNum = 2.03;
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.02:
                if(checkInput(['take', 'use', 'get', 'obtain'], false, ['screwdriver']) && playerInv.includes('screwdriver')) {
                    locationNum = 2.04;
                    writeText(locationNum);
                }
                else if(checkInput(['take', 'use', 'get', 'obtain'], false, ['knife']) && playerInv.includes('knife')) {
                    locationNum = 2.05;
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.03: 
                if(checkInput([''], true)) {
                    gameOver();
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.04: 
                if(checkInput(['unscrew', 'remove'], false, ['screw'])) {
                    locationNum = 2.07;
                    writeText(locationNum);
                }
                else if(checkInput(['smash', 'destroy', 'throw', 'break'], false, ['box'])) {
                    locationNum = 2.08;
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.05: 
                if(checkInput(['cut', 'snip', 'clip'], false, ['red'])) {
                    locationNum = 2.09;
                    writeText(locationNum);
                }
                else if(checkInput(['cut', 'snip', 'clip'], false, ['green'])) {
                    locationNum = 2.06;
                    writeText(locationNum);
                    gameOver();
                }
                else {
                    wrongCount++;
                }
                break;

            case 2.07: 
                if(checkInput(['go', 'to', 'open', 'door', 'unlock'], false, ['door'])) {
                    locationNum = 2.1;
                    roomName.innerHTML = 'Dark corridor';

                    // Used to display the background video
                    var backgroundVideo = document.getElementById('backgroundVideo');
                    backgroundVideo.style.display = 'initial';
                    backgroundVideo.setAttribute('src', 'videos/Hallway - 20837.mp4');
                    backgroundVideo.setAttribute('title', 'Video of a long, dark corridor in disrepair.');
                    backgroundVideo.play();
                    document.getElementById('backgroundImage').style.display = 'none';
                    document.getElementById('toSkew').style.backgroundColor = 'rgba(27, 27, 27, 0.5)';

                    // Timeout for the user to input
                    // If they don't input in time then they get a game over
                    wait = setTimeout(function() {
                        locationNum = 2.11;
                        writeText(locationNum);
                        gameOver();
                        //timeout at 16s to account for time it takes to write text
                    }, 16000);
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 2.08: 
                if(checkInput([''], true)) {
                    footSteps.pause();
                    gameOver();
                }
                else {
                    footSteps.pause();
                    gameOver();
                }
                break;
            case 2.09: 
                if(checkInput(['go', 'to', 'open', 'door', 'unlock'], false, ['door'])) {
                    locationNum = 2.1;
                    var backgroundVideo = document.getElementById('backgroundVideo');

                    if(document.getElementById('musicOn').checked) {
                        footSteps = sound('music/footSteps.wav', false);
                        footSteps.play();
                    }

                    backgroundVideo.style.display = 'initial';
                    backgroundVideo.setAttribute('src', 'videos/Hallway - 20837.mp4');
                    backgroundVideo.setAttribute('title', 'Video of a long, dark corridor in disrepair.');
                    backgroundVideo.play();
                    
                    document.getElementById('backgroundImage').style.display = 'none';
                    document.getElementById('toSkew').style.backgroundColor = 'rgba(27, 27, 27, 0.5)';
                    writeText(locationNum);
                    wait = setTimeout(function() {
                        locationNum = 2.11;
                        writeText(locationNum);
                        gameOver();
                        //timeout at 16s to account for time it takes to write text
                    }, 16000);
                }
                break;
            case 2.1:
                clearTimeout(wait);
                footSteps.pause();
                document.getElementById('toSkew').style.backgroundColor = 'rgba(51, 51, 51, 0.5)';
                if(checkInput(['sprint', 'run', 'rush', 'dash', 'pelt'], false)) {
                    roomName.innerHTML = 'The Study';
                    locationNum = 3.0;

                    // Hides the background video
                    document.getElementById('backgroundVideo').style.display = 'none';
                    document.getElementById('backgroundImage').style.display = 'initial';

                    backgroundImage.src = 'images/book.jpg';
                    backgroundImage.alt = 'An old, quite battered looking book.';
                    zoomBackground();
                    writeText(locationNum);
                }
                else if(checkInput(['fight', 'attack', 'strike', 'charge', 'defend'], false)) {
                    clearTimeout(wait);
                    locationNum = 2.12;
                    writeText(locationNum);
                }
                else {
                    locationNum = 2.11;
                    writeText(locationNum);
                    gameOver();
                }
                break;
            case 2.12: 
                if(checkInput([''], true)) {
                    if(playerInv.includes('screwdriver')) {
                        locationNum = 2.13;
                        writeText(locationNum);
                    }
                    else if(playerInv.includes('knife')) {
                        locationNum = 2.14;
                        writeText(locationNum);
                    }
                }
                break;
            case 2.11: 
                if(checkInput([''], true)) {
                    gameOver();
                }
                else {
                    gameOver();
                }
                break;
            case 2.12: 
                if(checkInput([''], true)) {
                    backgroundImage.src = 'images/book2.jpg';
                    backgroundImage.alt = 'An open book.';
                    zoomBackground();

                    locationNum = 3.0;
                    writeText(locationNum);
                }
                else {
                    wrongCount++;
                }
                break;
            case 3.0: 
                if(checkInput(['certain', 'actions'], true)) {
                    locationNum = 3.01;
                    writeText(locationNum);
                    setTimeout(function() {
                        locationNum = 3.03;
                        writeText(locationNum);
                    });
                }
                else {
                    locationNum = 3.02;
                    writeText(locationNum);
                    gameOver();
                }
                break;

            case 3.03: 
                if(checkInput(['go', 'to', 'open', 'door', 'unlock'], false, ['door'])) {
                    locationNum = 3.04;
                    var cover = document.getElementById('cover');
                    cover.style.display = 'initial';
                    cover.classList.add('fadeOutCover');
                    cover.addEventListener('animationend', function() {
                        cover.style.display = 'none';
                    })
                    document.body.backgroundColor = 'black';

                    backgroundImage.src = 'images/bedroom.jpg';
                    backgroundImage.alt = 'Your real bedroom.';

                    // Fades in the background kind of like waking up
                    var background = document.getElementById('background');
                    background.classList.add('fadeIn');
                    background.animationDuration = '7s';

                    roomName.innerHTML = 'Your bedrooom...?';
                    writeText(locationNum, 7000);

                    winCount++;
                    gameWin();
                }
                else if(checkInput(['go', 'head', 'move', 'walk', 'run'], false, ['back'])) {
                    locationNum = 3.05;
                    writeText(locationNum);
                    gameOver();
                }
                else {
                    wrongCount++;
                }
                break;

            default:
                break;
        }
    }



    /**
     * Function making use of replaceAll() function to find and replace
     * specific words
     * @param {string} text 
     */
    function formatText(text) {
        var uInputText = document.getElementById('uInput').value;
        text = replaceAll(text, 'PLAYER', player.name);
        text = replaceAll(text, 'GEN', player.gender);
        text = replaceAll(text, 'AGE', player.age);
        text = replaceAll(text, 'ITEM', player.inventory[0]);
        text = replaceAll(text, 'INPUTTEXT', uInputText);

        return text;
    }

    var scrElement = document.getElementById('text');
    scrElement.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            scrolledUp = true;
        }
    })

    /**
     * Function to automatically scroll the text area
     * If player scrolls up, it stops scrolling
     */
    function pageScroll() {
        if (!scrolledUp) {
            scrElement.scrollBy(0, 1);
            scrolldelay = setTimeout(pageScroll, 10);
        }
    }
    pageScroll();

    // Listener to listen for when user submits text
    document.getElementById('btnSubmit').addEventListener('click', function () {
        sendChoice(document.getElementById('uInput').value);
    });

    // Listener to check if enter is pressed and calls sendChoice()
    uInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendChoice(document.getElementById('uInput').value);
        }
    });


    /**
     * Function to add user input choice and location text to the history box IF it is accepted
     * @param {string} userChoice the input text of the user
     */
    function sendChoice(userChoice) {
        document.getElementById('historyText').insertAdjacentHTML('beforeend', formatText(currentText));
        document.getElementById('historyWrap').display = 'none';
        newLocation();
        document.getElementById('historyText').insertAdjacentHTML('beforeend', '<br>' + '<span class="playerAction">> </span>' + userChoice + '<span class="playerAction"> <</span><br>');
    };

    /**
     * Function used to wait for input number of ms
     * @param {int} ms the time in which the wait should go on for 
     */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };


    /**
     * Function to write text to the screen
     * @param {double} locNum the location/scene number of the text to be written
     * @param {int} [waitFor] an optional parameter that delys text writing by it's value in ms
     */
    function writeText(locNum, waitFor) {
        currentText = formatText(allStoryText[locNum]);
        document.getElementById('uInput').value = '';
        var element = document.getElementById('text');

        // using the imported typewriter module to give a typewriting style
        typeWriter = new Typewriter(element, {
            loop: false,
            delay: textSpeed,
            cursor: ''
        });

        scrolledUp = false;
        // Calls pageScroll() to automatically scroll down
        scrollInterval = setInterval(pageScroll, 1000);

        // Sets the hint for the current location
        setHint(hintDict[locNum]);

        // Checks if input arguments = 2, meaning waitFor has been specified
        if(arguments.length == 2) {
            setTimeout(function() {
                typeWriter.typeString(currentText).start();
            }, waitFor);
        }
        else {
            typeWriter.typeString(currentText).start();
        }
    };


    /**
     * Function to search a string for a word; if found, will replace with
     * the parameter replace
     * @param {string} str input string to search
     * @param {string} find word to find in str
     * @param {string} replace word to replace find with if found
     */
    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }


    /**
     * Function that waits for the tutorial collapsible to display
     * @param {string} selector 
     * @param {int} time 
     */
    async function waitForElementToDisplay(selector, time) {
        if (document.querySelector(selector) != null) {
            var coll = document.getElementsByClassName('collapsible');

            for (var i = 0; i < coll.length; i++) {
                coll[i].addEventListener('click', function () {
                    this.classList.toggle('active');
                    var content = this.nextElementSibling;
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
            }
            return;
        } else {
            setTimeout(function () {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }
    waitForElementToDisplay(selector = '#tutCollapse', 500);

    /**
     * Listener for the history button so history box can be displayed
     */
    function historyListener() {
        document.getElementById('btnHistory').addEventListener('click', function () {
            var content = document.getElementById('historyWrap');
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }

    /**
     * Listener for options button so options box can be displayed
     */
    function optionsListener() {
        document.getElementById('btnShowOptions').addEventListener('click', function () {
            var content = document.getElementById('optionsBlock');
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
                document.getElementById('hintBlock').style.display = 'none';
            }
        })

        // Checks if the fullscreen slider has been checked and requests fullscreen if so
        document.getElementById('fullScr').addEventListener('change', function () {
            if (this.checked) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        })
    }

    /**
     * Listener for when the player changes the text speed in the options
     */
    function speedListener() {
        textSpeed = document.getElementById('txtSpeed').value;
        document.getElementById('txtSpeed').addEventListener('change', function () {
            textSpeed = document.getElementById('txtSpeed').value;
            typeWriter.changeDelay(textSpeed);
        })
    }

    /**
     * Listener for when player clicks the hint button and displays the hint box
     */
    function hintListener() {
        document.getElementById('btnShowHint').addEventListener('click', function () {
            var content = document.getElementById('hintBlock');
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
                document.getElementById('optionsBlock').style.display = 'none';

                // Fades hint box out after 5 seconds
                var hintTimeout = setTimeout(function () {
                    content.classList.add('fadeOut');
                    content.style.animationDuration = '2s';

                }, 5000);
                content.addEventListener('animationend', function () {
                    content.style.display = 'none';
                })
            }
        })

        document.getElementById('btnCloseHint').addEventListener('click', function () {
            var content = document.getElementById('hintBlock');
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
            }
        })
    }

    /**
     * Listener for when the sound on checkbox is changed in options
     * Turns on/off sound based on it's value
     */
    function soundListener() {
        var musicCheck = document.getElementById('musicOn');
        musicCheck.addEventListener('change', function() {
            if(musicCheck.checked) {
                bgMusic.play();
            }
            else {
                bgMusic.stop();
            }
        })
    }

    /**
     * Function that checks user input against a specified list of words, wordList
     * Takes three parameters; last one being optional; first param specifies
     * the list of words the input can contain; second specifies whether the
     * input MUST CONTAIN all of those words.
     * Third param is used when containsAll=false and specifies words that the input
     * must contain no matter what
     * @param {string[]} wordList the initial list of words
     * @param {boolean} containsAll if true, user input must contain ALL of wordList
     *                              else it must contain AT LEAST ONE of wordList
     * @param {string[]} [mustContain] optional param used when containsAll=false which
     *                                 specifies words that MUST be input along with at least
     *                                 one word in wordList
     */
    function checkInput(wordList, containsAll, mustContain) {
        var inputText = document.getElementById('uInput').value.toUpperCase().trim();

        for (i = 0; i < wordList.length; i++) {
            wordList[i] = wordList[i].toUpperCase().trim();
        }

        // Checking if the arguments contains two or three values
        // If two, just compares input with wordList
        if (arguments.length === 2) {
            if (containsAll) {
                return wordList.every(item => inputText.includes(item));
            } else {
                for (i = 0; i < wordList.length; i++) {
                    return wordList.some(item => inputText.includes(item));
                }
            }

            // If three arguments specified, compares user input with wordList
            // AND checks if it contains ALL OF mustContain
        } else if (arguments.length === 3) {
            for (i = 0; i < mustContain.length; i++) {
                mustContain[i] = mustContain[i].toUpperCase().trim();
            }

            if (containsAll) {
                return wordList.every(item => inputText.includes(item));
            } else {
                for (i = 0; i < wordList.length; i++) {
                    var containsSome = wordList.some(item => inputText.includes(item));
                    var containsMust = mustContain.every(item => inputText.includes(item));
                    return containsSome && containsMust;
                }
            }
        }
    }

    /**
     * Function to set the hint
     * @param {string} newHintText the new text for the hint
     */
    function setHint(newHintText) {
        var hintText = document.getElementById('hintText');
        hintText.innerHTML = newHintText;
    }

    /**
     * Function to restart the game
     */
    function restartGame() {
        var gameOverPage = document.getElementById('gameOver');
        gameOverPage.classList.remove('fadeIn');
        gameOverPage.classList.add('fadeOut');
        gameOverPage.style.animationDuration = '2s';
        
        gameOverPage.addEventListener('animationend', function() {
            gameOverPage.style.display = 'none';
        })

        locationNum = 1.0;
        writeText(locationNum);
        newLocation();
        document.getElementById('backgroundVideo').style.display = 'none';
        document.getElementById('background').style.backgroundImage = 'none';
    }

    /**
     * Function used when the player loses
     */
    function gameOver() {
        loseCount++;
        setTimeout(function() {
            var gameOverPage = document.getElementById('gameOver');
            var gameOverVid = document.getElementById('gameOverVideo');
            document.getElementById('backgroundVideo').pause();
            gameOverPage.style.display = 'flex';
            gameOverPage.classList.add('fadeIn');
            var restartButton = document.getElementsByClassName('btnRestart');

            Array.from(restartButton).forEach(function(element) {
                element.addEventListener('click', function() {
                    restartGame();
            });
            setTimeout(function() {
                gameOverVid.classList.add('fadeOutVideo');
            }, 3000);
        });
    }, 7000)}

    /**
     * Function to zoom the background when going to a new location
     */
    function zoomBackground() {
        background.classList.add('zoomAnim');
        background.addEventListener('animationend', function() {
            background.classList.remove('zoomAnim');
        })
    }

    /**
     * Function used when the player wins
     */
    function gameWin() {
        var wonTimeout = setTimeout(function() {
            document.getElementById('gameWon').style.display = 'flex';
            document.getElementById('gameWon').classList.add('fadeIn');

            var endTime = Date.now();
            var timeDelta = endTime-startTime;
            var totalSeconds = Math.floor(timeDelta / 1000); 
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds - minutes * 60;
            var totalPlayTime = minutes + 'M ' + seconds + 'S';
            
            localStorage.setItem('playTime', totalPlayTime);
            localStorage.setItem('timesWon', winCount);
            localStorage.setItem('timesLost', loseCount);
        }, 16000);
    }

    /**
     * Function which adds a new audio element to the document and adds
     * methods to control the music
     * @param {string} src the source of the sound file
     */
    function sound(src, loop) {
        audioElem = document.createElement('audio');
        audioElem.src = src;
        audioElem.setAttribute('preload', 'auto');
        audioElem.setAttribute('controls', 'none');
        if(loop) {
            audioElem.setAttribute('loop', 'loop');
        }
        audioElem.style.display = 'none';
        document.body.appendChild(audioElem);
        this.play = function(){
            audioElem.play();
        }
        this.stop = function(){
            audioElem.pause();
        }    
    }
});