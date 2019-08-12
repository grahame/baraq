
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RouteComponentProps } from 'react-router-dom';
import { Word } from '../hebrew/words';
import { FlashParams, Cards } from '../cards';

class Flash extends Component<RouteComponentProps<FlashParams>> {
    cards: Cards;
    words: Word[];

    constructor(props) {
        super(props);
        this.cards = this.make_cards();
        this.words = this.cards.get_words();
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
        }
    }

    render() {
        return <Container><table className="worksheet table table-bordered">
            <tbody>
                {
                    this.words.map(
                        (word, i) => <tr key={i} className="d-flex">
                            <td className="col-2">
                                    { word.bookReference() }. { word.definition }
                            </td>
                            <td className="text-right col-3">{word.forms.map(
                                (form, i) => <div key={i} className="biblical-hebrew display-4">{form}</div>)}
                            </td>
                            <td className="col-7"></td>
                        </tr>
                    )
                }
            </tbody>
        </table></Container>
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