import Words, {Word} from './words'

export interface Range {
    start: Number,
    end: Number,
}

export interface TaskDefinition {
    range: Range;
    slug?: string;
    description?: string;
}

export class Task {
    defn: TaskDefinition;

    constructor(defn: TaskDefinition) {
        this.defn = defn;
    }

    public slug() {
        if (this.defn.slug) {
            return this.defn.slug;
        }
        return `words_${this.defn.range.start}_${this.defn.range.end}`
    }

    public description() {
        if (this.defn.description) {
            return this.defn.description;
        }
        return `Words ${this.defn.range.start}-${this.defn.range.end}`
    }

    public words(): Word[] {
        return [...Words.filter(
            word => {
                let [major] = word.position;
                return major >= this.defn.range.start && major <= this.defn.range.end;
            }
        )];
    }

}

const Tasks: Array<Task> = [
    {
        range: {
            start: 1,
            end: 15
        }
    },
    {
        range: {
            start: 16,
            end: 30
        }
    },
    {
        range: {
            start: 31,
            end: 50
        }
    },
    {
        range: {
            start: 51,
            end: 75
        }
    },
    {
        range: {
            start: 76,
            end: 100
        }
    },
    {
        range: {
            start: 1,
            end: 100
        }
    },
    {
        range: {
            start: 101,
            end: 120
        }
    },
    {
        range: {
            start: 121,
            end: 150
        }
    },
    {
        range: {
            start: 151,
            end: 180
        }
    },
    {
        range: {
            start: 181,
            end: 200
        }
    },
    {
        range: {
            start: 101,
            end: 200
        }
    },
    {
        range: {
            start: 201,
            end: 220
        }
    },
    {
        range: {
            start: 221,
            end: 240
        }
    },
    {
        range: {
            start: 241,
            end: 260
        }
    },
    {
        range: {
            start: 261,
            end: 280
        }
    },
    {
        range: {
            start: 281,
            end: 300
        }
    },
    {
        range: {
            start: 301,
            end: 310
        }
    },
    {
        slug: "all",
        description: "All words",
        range: {
            start: 1,
            end: Infinity,
        }
    },
].map(x => new Task(x));

export default Tasks;
