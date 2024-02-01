define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
           
            {text:'1', value:1},
            {text:'2', value:2},
            {text:'3', value:3},
            {text:'4', value:4},
            {text:'5', value:5},
            
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Which statement best describes you?',
        answers: [
            {text:'I strongly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:7},
            {text:'I moderately prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:6},
            {text:'I slightly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:5},
            {text:'I like <%= global.whiteLabels %> and <%= global.blackLabels %> equally.',value:4},
            {text:'I slightly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:3},
            {text:'I moderately prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:2},
            {text:'I strongly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:1}
        ]
    });
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'Tblack_0to10',
        stem: 'Stiamo raggiungendo il limite massimo del numero di persone su questa Terra'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'Twhite_0to10',
        stem: 'Gli esseri umani hanno il diritto di modificare l’ambiente naturale per i propri bisogni'
    });

    API.addQuestionsSet('Item3',{
        inherit : 'therm',
        name: 'Item3',
        stem: 'Quando gli esseri umani interferiscono con la natura, si producono effetti disastrosi'
    });

    API.addQuestionsSet('Item4',{
        inherit : 'therm',
        name: 'Item4',
        stem: 'Grazie all’ingegno umano, la Terra rimarrà un luogo vivibile'
    });

    API.addQuestionsSet('Item5',{
        inherit : 'therm',
        name: 'Item5',
        stem: 'Gli esseri umani stanno abusando gravemente dell’ambiente'
    });

    API.addQuestionsSet('Item6',{
        inherit : 'therm',
        name: 'Item6',
        stem: 'La Terra in realtà ha tante risorse naturali se solo sapessimo farne buon uso'
    });

    API.addQuestionsSet('Item7',{
        inherit : 'therm',
        name: 'Item7',
        stem: 'Gli esseri umani hanno il dovere di tutelare la vita di animali e piante'
    });

    API.addQuestionsSet('Item8',{
        inherit : 'therm',
        name: 'Item8',
        stem: 'L’equilibrio dell’ambiente è forte abbastanza da reggere l’impatto delle società industrializzate'
    });

    API.addQuestionsSet('Item9',{
        inherit : 'therm',
        name: 'Item9',
        stem: 'Malgrado i progressi, siamo ancora in balia della forza della natura'
    });

    API.addQuestionsSet('Item10',{
        inherit : 'therm',
        name: 'Item10',
        stem: 'I problemi ambientali sono stati in larga misura esagerati'
    });

    API.addQuestionsSet('Item11',{
        inherit : 'therm',
        name: 'Item11',
        stem: 'La Terra ha risorse limitate'
    });

    API.addQuestionsSet('Item12',{
        inherit : 'therm',
        name: 'Item12',
        stem: 'Gli esseri umani sono destinati a comandare sulla natura'
    });

    API.addQuestionsSet('Item13',{
        inherit : 'therm',
        name: 'Item13',
        stem: 'L’equilibrio della natura è delicato e fragile'
    });

    API.addQuestionsSet('Item14',{
        inherit : 'therm',
        name: 'Item14',
        stem: 'Con il tempo gli esseri umani impareranno come funziona la natura e riusciranno a controllarla'
    });

    API.addQuestionsSet('Item15',{
        inherit : 'therm',
        name: 'Item15',
        stem: 'Se le cose vanno avanti così, presto ci sarà una catastrofe ambientale'
    });
	
    API.addSequence([
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
                    data : [
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermBlack'}
                        },
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermWhite'}							
                        }
                    ]
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'attributes7'}
                }
            ]
        }
    ]);

    return API.script;
});
