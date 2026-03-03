const GAME_WORDS = [
    'REACT',
    // 'JAVASCRIPT',
    // 'TYPESCRIPT',
    'HTML',
    // 'ANGULAR',
    'SOLID',
    'NODE',
    // 'VUEJS',
    // 'SVELTE',
    // 'EXPRESS',
    // 'MONGODB',
    // 'POSTGRES',
    // 'DOCKER',
    // 'KUBERNETES',
    // 'WEBPACK',
    'VITE',
    // 'TAILWIND',
];


// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

// const scrambledWords= shuffleArray(GAME_WORDS);

// This is a function that returns the initialState
// this is not a constant declaration
export const getInitialState = (): ScrambleWordsState => {
    //use ... to copy array and mutate that new array
    const scrambledWords = shuffleArray([...GAME_WORDS]);

    return {
        words: scrambledWords,
        wordsLength: GAME_WORDS.length,
        scrambledWord: scrambleWord(scrambledWords[0]),
        currentWord: scrambledWords[0],
        guess: '',
        points: 0,
        errors: 0,
        maxErrors: 3,
        skips: 0,
        maxSkips: 3,
        isGameOver: false,
    };
};

type ScrambleWordsState = {
    words: string[];
    wordsLength: number;
    scrambledWord: string;
    currentWord: string;
    guess: string;
    points: number;
    errors: number;
    maxErrors: number;
    skips: number;
    maxSkips: number;
    isGameOver: boolean;
}

type ScrambleWordsAction =
    | { type: 'SUBMIT_GUESS' }
    | { type: 'UPDATE_GUESS', payload: string }
    | { type: 'SKIP_WORD' }
    | { type: 'NEW_GAME', payload: ScrambleWordsState }


export const ScrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction) => {
    switch (action.type) {
        case "NEW_GAME":
            return action.payload;
        case "UPDATE_GUESS": {
            console.log('UPDATE_GUESS', action.payload);
            return {...state, guess: action.payload};
        }
        case "SUBMIT_GUESS": {
            if (state.guess.length < 1)
                return state;
            if (state.guess === state.currentWord) {
                const updatedWords = state.words.slice(1);
                return {
                    ...state,
                    words: updatedWords,
                    currentWord: updatedWords[0],
                    scrambledWord: scrambleWord(updatedWords[0]),
                    points: state.points + 1,
                    guess: '',
                };
            } else {
                return {
                    ...state,
                    errors: state.errors + 1,
                    guess: '',
                    isGameOver: state.errors + 1 === state.maxErrors
                };
            }
        }

        case "SKIP_WORD": {
            const updatedWords = state.words.slice(1);

            return {
                ...state,
                words: updatedWords,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                skips: state.skips + 1,
                guess: '',
            };
        }

        default:
            return state;

    }
}