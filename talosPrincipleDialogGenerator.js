//Arrays of text from conversations with Milton
const miltonDialogues = ["Since all human beings are persons, and some human beings have psychological capacities similar to animals, some animals are therefore persons.", "Since only citizens can be persons, a hermit cannot be a person.", "Since negative entropy indicates personhood, microscopic organisms are also persons.", "Since only animals can be persons, a machine could never be a person.", "Since a person is merely a problem solving system, we could in principle build a person out of bits of string and tin cans.", "A person is under no authority other than that to which they consent.", "The quality of life of persons ought be maximised.", "Value is discovered.", "Persons deserve the talents they were born into.", "The liberty of persons ought be maximised.", "Value is created."];
const responsesToMiltonDialogues = ['Agree.', 'Disagree.', 'That is correct.', 'That is not correct.'];
const possibleProfiles = ['User provided an objective response when asked for a subjective one.', 'User provided a particular account of personhood but was uncomfortable with its implications.', 'User sought to maximise both liberty and quality of life, but these ideals are incompatible.', 'User denied moral authority but defended moral claims.', 'User had inconsistent ideas about value.', 'User displayed sociopathic tendencies.'];

//Random indexes
const randomMiltonDialogue = () => {
    return miltonDialogues[Math.floor(Math.random() * miltonDialogues.length)];
    
}
const randomResponseToMiltonDialogue = () => {
    return responsesToMiltonDialogues[Math.floor(Math.random() * responsesToMiltonDialogues.length)];
}
const randomGeneratedProfile = () => {
    return possibleProfiles[Math.floor(Math.random() * possibleProfiles.length)];
}

//The user profile
const profileFactory = (name, generatedProfile) => {
    return {
        name: name,
        generatedProfile: generatedProfile,
        message () {
            for(i=0; i < 2; i++) {
                console.log('');
            }
            console.log(`${this.name}, your conversation was:`);
            for (i=0; i < 5; i++) {
                console.log('');
                console.log(randomMiltonDialogue());
                console.log(randomResponseToMiltonDialogue());
            }
            console.log('')
            console.log('The certification process is now complete. Your user profile has been generated:');
            console.log(this.generatedProfile);
        }
    };
}

//The introduction
console.log('Welcome to The Talos Principle Milton Dialogue Generator v0.1.')
console.log('For now you will not be able to select an option. It will be given randomly to you.');
console.log('Thank you for your understanding.');

//The profile conversation
profileFactory("User", randomGeneratedProfile()).message();