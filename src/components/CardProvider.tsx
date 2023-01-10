import React from "react";
import { useParams } from "react-router-dom";
import { Cards, FlashRouteParams } from "../cards";
import { Word } from "../hebrew/words";

export type CardProps = {
    cards: Cards;
    words: Word[];
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
};

export const CardProvider: React.FC<{ child: React.FC<CardProps> }> = ({ child }) => {
    const { slug, options } = useParams<FlashRouteParams>();
    const [cards, setCards] = React.useState<Cards>();
    const [words, setWords] = React.useState<Word[]>([]);

    React.useEffect(() => {
        if (slug && options) {
            setCards(new Cards(slug, options));
        } else {
            setCards(undefined);
        }
    }, [slug, options]);

    React.useEffect(() => {
        setWords(cards ? cards.get_words() : []);
    }, [cards]);

    if (!cards) {
        return <></>;
    }

    const props: CardProps = {
        cards: cards,
        words: words,
        setWords: setWords,
    };

    return React.createElement(child, props);
};
