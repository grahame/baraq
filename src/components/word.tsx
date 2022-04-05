import React, { Component } from "react";
import { ButtonGroup, Button } from "reactstrap";
import { bookReference, Word } from "../hebrew/words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

interface ResultFunc {
    (correct: boolean): void;
}

interface WordDisplayProps {
    word: Word;
    onResult: ResultFunc;
}

interface WordDisplayState {
    showAnswer: boolean;
}

class WordDisplay extends Component<WordDisplayProps, WordDisplayState> {
    constructor(props: WordDisplayProps) {
        super(props);
        this.state = {
            showAnswer: false,
        };
        this.revealAnswer = this.revealAnswer.bind(this);
    }

    answer() {
        if (!this.state["showAnswer"]) {
            // show some padding to avoid the UI jumping about
            return <div className="mt-5 mb-5"></div>;
        }
        return (
            <div>
                <div className="display-4 text-center">
                    {bookReference(this.props.word)}. {this.props.word.definition}
                </div>
            </div>
        );
    }

    result(correct: boolean) {
        this.setState({
            showAnswer: false,
        });
        this.props.onResult(correct);
    }

    revealAnswer() {
        this.setState({
            showAnswer: true,
        });
    }

    buttons() {
        if (this.state["showAnswer"]) {
            return (
                <div>
                    <ButtonGroup size="lg mt-4">
                        <Button onClick={() => this.result(false)} color="danger" className="mr-4">
                            <FontAwesomeIcon icon={faTimesCircle} /> Nope!
                        </Button>
                        <Button onClick={() => this.result(true)} color="success">
                            <FontAwesomeIcon icon={faCheckSquare} /> Got it!
                        </Button>
                    </ButtonGroup>
                </div>
            );
        } else {
            return (
                <ButtonGroup size="lg mt-4">
                    <Button color="primary" onClick={this.revealAnswer}>
                        Reveal Answer
                    </Button>
                </ButtonGroup>
            );
        }
    }

    render() {
        return (
            <div>
                {this.props.word.forms.map((form, i) => (
                    <div key={i} className="display-1 mt-4 text-center biblical-hebrew">
                        {form}
                    </div>
                ))}
                {this.answer()}
                {this.buttons()}
            </div>
        );
    }
}

export default WordDisplay;
