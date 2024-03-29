import { Word } from "./hebrew/words";
import Tasks, { Task } from "./hebrew/tasks";

export enum FlashOptions {
    FirstToLast = "ascending",
    LastToFirst = "descending",
    Shuffle = "shuffle",
    Sorted = "sorted",
}

export class Cards {
    slug: string;
    options: FlashOptions;
    task?: Task;

    constructor(slug: string, options: FlashOptions) {
        this.slug = slug;
        this.options = options;
        let matches = Tasks.filter((task) => task.slug() === this.slug);
        if (matches.length === 1) {
            this.task = matches[0];
        }
    }

    description(): string {
        if (!this.task) {
            return "";
        }
        return this.task.description();
    }

    get_words(): Word[] {
        // thanks to https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        function shuffle(a: Word[]) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        if (!this.task) {
            return [];
        }
        let words = this.task.words();
        switch (this.options) {
            case FlashOptions.LastToFirst:
                words.reverse();
                break;
            case FlashOptions.Shuffle:
                shuffle(words);
                break;
            case FlashOptions.Sorted:
                words.sort((a, b) => (a.forms === b.forms ? 0 : a.forms < b.forms ? -1 : 1));
                break;
        }
        return words;
    }

    get_words_in(primary_set: Set<number>): Word[] {
        return this.get_words().filter((word) => primary_set.has(word.position[0]));
    }
}

export type FlashRouteParams = {
    slug: string;
    options: FlashOptions;
};
