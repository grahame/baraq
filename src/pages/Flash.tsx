
import React, { Component } from 'react';
import { Row, Col, Progress, Container, ButtonGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouteComponentProps } from 'react-router-dom';
import { Word } from '../hebrew/words';
import WordDisplay from '../components/word';
import ResultTable from '../components/resulttable'
import { FlashParams, Cards } from '../cards';

interface FlashState {
    index: number,
    complete: boolean,
    results: [boolean, Word][],
}

const initialState = {
    'index': 0,
    'results': [],
}

class Flash extends Component<RouteComponentProps<FlashParams>, FlashState> {
    cards: Cards;
    words: Word[];

    constructor(props) {
        super(props);
        this.cards = this.make_cards();
        this.words = this.cards.get_words();
        this.state = {
            complete: this.words.length === 0,
            ...initialState
        };
    }

    restart() {
        this.words = this.cards.get_words();
        this.setState({
            complete: this.words.length === 0,
            ...initialState
        });
    }

    wordsPartiallyWrong() {
        // words we get at least one of the versions of wrong
        let primaries = new Set(
            this.state.results.filter(
                ([correct]) => !correct).map(
                    ([correct, word]) => word.position[0]));
        return this.cards.get_words_in(primaries);
    }

    restartIncorrect() {
        this.words = this.wordsPartiallyWrong();
        this.setState({
            complete: this.words.length === 0,
            ...initialState});
    }

    incorrectMessage() {
        let incorrect = this.state.results.filter(([correct]) => !correct).length;
        let restart_words = this.wordsPartiallyWrong();
        let plural = (restart_words.length > 1) ? "words" : "word";
        return `Quiz again (${restart_words.length} ${plural} related to the ${incorrect} you got wrong.)`;
    }

    make_cards(): Cards {
        let slug = this.props.match.params.slug;
        let options = this.props.match.params.options;
        return new Cards(slug, options);
    }

    public componentDidUpdate(prevProps) {
        let new_cards = this.make_cards();
        if (!new_cards.equals(this.cards)) {
            this.cards = new_cards;
            this.words = this.cards.get_words();
            this.setState({
                'index': 0,
            });
        }
    }

    currentWord(): Word {
        return this.words[this.state['index']];
    }

    nextWord() {
        let { index } = this.state;
        index++;
        if (index < this.words.length) {
            this.setState({
                'index': index
            });
        } else {
            this.setState({'complete': true})
        }
    }

    wordResult(correct: boolean) {
        this.setState({
            'results': [...this.state.results, [correct, this.currentWord()]]
        });
        this.nextWord();
    }

    quizWord() {
        return <div>
            <Container fluid={true}>
                <Progress striped color="success" value={this.progress()} />
                <Row>
                    <Col className="text-center">
                        { this.state.index + 1 } / { this.words.length }
                    </Col>
                </Row>
                <Row className="w-100">
                    <Col className="text-center col-12 h-100">
                        <WordDisplay word={this.currentWord()} onResult={(c) => this.wordResult(c)} />
                    </Col>
                </Row>
            </Container>
        </div>;
    }

    progress() {
        if (this.words.length === 0) {
            return 0;
        }
        let val = 100 * this.state.results.length / this.words.length;
        return val;
    }

    quizSummary() {
        let correct = this.state.results.filter(([correct]) => correct).length;
        let incorrect = this.state.results.filter(([correct]) => !correct).length;

        let per = 0;
        if (this.words.length > 0) {
            per = 100 * correct / this.words.length;
        }

        return <div>
            <Container fluid={true}>
                <h1 className="text-center">Quiz complete: {this.cards.description()}</h1>
                <p className="lead text-center">
                    You got { correct } / { this.words.length } correct – { per.toFixed(1) }%.
                </p>
                <Row className="mt-4 mb-4">
                    <Col className="text-center">
                        <ButtonGroup size="lg" vertical={true}>
                            <Button onClick={() => this.restart()} color="success">Quiz again (all words)</Button>
                            { incorrect > 0 ? 
                                <Button onClick={() => this.restartIncorrect()} color="warning">{this.incorrectMessage()}</Button> : "" }
                            <Button color="primary" tag={Link} to='/'>Done</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <h2>Results</h2>
                <div className="mt-4">
                    <ResultTable results={this.state.results} />
                </div>
            </Container>
        </div>;
    }

    render() {
        if (this.state.complete) {
            return this.quizSummary();
        } else {
            return this.quizWord();
        }
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flash);