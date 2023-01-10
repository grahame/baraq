import React from "react";
import { Row, Col, Progress, Container, ButtonGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Word } from "../hebrew/words";
import WordDisplay from "../components/word";
import ResultTable from "../components/resulttable";
import { Cards } from "../cards";
import { CardProps } from "../components/CardProvider";

export type Result = [boolean, Word];

interface FlashParams {
    cards: Cards;
    words: Word[];
    index: number;
    results: Result[];
    nextWord: () => void;
    restart: () => void;
    restartIncorrect: () => void;
    setResults: React.Dispatch<React.SetStateAction<Result[]>>;
}

const progress = (words: Word[], results: Result[]) => {
    if (words.length === 0) {
        return 0;
    }
    let val = (100 * results.length) / words.length;
    return val;
};

const wordsPartiallyWrong = (cards: Cards, results: Result[]) => {
    // would directly build the Set, but doesn't work in IE11
    let primaries: Set<number> = new Set();
    for (let position of results.filter(([correct]) => !correct).map(([correct, word]) => word.position[0])) {
        primaries.add(position);
    }
    return cards.get_words_in(primaries);
};

const QuizWord: React.FC<React.PropsWithChildren<FlashParams>> = ({
    cards,
    words,
    index,
    results,
    setResults,
    nextWord,
}) => {
    const wordResult = (correct: boolean) => {
        setResults([...results, [correct, words[index]]]);
        nextWord();
    };

    return (
        <div>
            <Container fluid={true}>
                <Progress striped color="success" value={progress(words, results)} />
                <Row>
                    <Col className="text-center">
                        {index + 1} / {words.length}
                    </Col>
                </Row>
                <Row className="w-100">
                    <Col className="text-center col-12 h-100">
                        <WordDisplay word={words[index]} onResult={(c) => wordResult(c)} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const QuizSummary: React.FC<React.PropsWithChildren<FlashParams>> = ({
    cards,
    words,
    restart,
    restartIncorrect,
    results,
}) => {
    let correct = results.filter(([correct]) => correct).length;
    let incorrect = results.filter(([correct]) => !correct).length;

    let per = 0;
    if (words.length > 0) {
        per = (100 * correct) / words.length;
    }

    const incorrectMessage = () => {
        let incorrect = results.filter(([correct]) => !correct).length;
        let restart_words = wordsPartiallyWrong(cards, results);
        let plural = restart_words.length > 1 ? "words" : "word";
        return `Quiz again (${restart_words.length} ${plural} related to the ${incorrect} you got wrong.)`;
    };

    return (
        <div>
            <Container fluid={true}>
                <h1 className="text-center">Quiz complete: {cards.description()}</h1>
                <p className="lead text-center">
                    You got {correct} / {words.length} correct – {per.toFixed(1)}%.
                </p>
                <Row className="mt-4 mb-4">
                    <Col className="text-center">
                        <ButtonGroup size="lg" vertical={true}>
                            <Button onClick={() => restart()} color="success">
                                Quiz again (all words)
                            </Button>
                            {incorrect > 0 ? (
                                <Button onClick={() => restartIncorrect()} color="warning">
                                    {incorrectMessage()}
                                </Button>
                            ) : (
                                ""
                            )}
                            <Button color="primary" tag={Link} to="/">
                                Done
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <h2>Results</h2>
                <div className="mt-4">
                    <ResultTable results={results} />
                </div>
            </Container>
        </div>
    );
};

export const Flash: React.FC<CardProps> = ({ cards, words, setWords }) => {
    const [index, setIndex] = React.useState<number>(0);
    const [results, setResults] = React.useState<Result[]>([]);

    const nextWord = () => {
        if (index < words.length) {
            setIndex(index + 1);
        }
    };

    const restart = () => {
        setIndex(0);
        setResults([]);
    };

    const restartIncorrect = () => {
        if (cards) {
            setWords(wordsPartiallyWrong(cards, results));
        } else {
            setWords([]);
        }
    };

    if (!cards) {
        return <></>;
    }

    const flashParams: FlashParams = {
        cards: cards,
        words: words,
        index: index,
        results: results,
        nextWord: nextWord,
        setResults: setResults,
        restart: restart,
        restartIncorrect: restartIncorrect,
    };

    if (words.length === 0 || results.length === words.length) {
        return <QuizSummary {...flashParams} />;
    } else {
        return <QuizWord {...flashParams} />;
    }
};

export default Flash;
