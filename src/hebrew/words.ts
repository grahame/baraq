
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export class Word {
    position: [number, number];
    forms: Array<string>;
    definition: string;

    constructor({position, forms, definition}) {
        this.position = position;
        this.forms = forms;
        this.definition = definition;
    }

    bookReference() {
        let [posNum, posLetter] = this.position;
        let ref = posNum.toString();
        if (posLetter > 0) {
            ref += letters[posLetter - 1];
        }
        return ref;
    }
}

let words: Array<Word> = [
    {
        position: [1, 0],
        forms: ["יהוה"],
        definition: "Adonai, Lord",
    },
    {
        position: [2, 0],
        forms: ["כָּל"],
        definition: "The whole, all",
    },
    {
        position: [3, 0],
        forms: ["אֲשֶׁ֥ר"],
        definition: "who, whom, which, that, because",
    },
    {
        position: [4, 0],
        forms: ["אֶל"],
        definition: "to, toward",
    },
    {
        position: [5, 0],
        forms: ["אָמַר"],
        definition: "Q. he said",
    },
    {
        position: [6, 0],
        forms: ["לֹא"],
        definition: "not",
    },
    {
        position: [7, 0],
        forms: ["בֵּן"],
        definition: "son",
    },
    {
        position: [7, 1],
        forms: ["בַּת"],
        definition: "daughter",
    },
    {
        position: [8, 0],
        forms: ["עָלָה"],
        definition: "Q. he went up",
    },
    {
        position: [8, 1],
        forms: ["עֹלָה"],
        definition: "burnt offering",
    },
    {
        position: [8, 2],
        forms: ["עַל"],
        definition: "on, upon, concerning",
    },
    {
        position: [8, 3],
        forms: ["מַּ֫עַל"],
        definition: "above",
    },
    {
        position: [9, 0],
        forms: ["כִּי"],
        definition: "that",
    },
    {
        position: [10, 0],
        forms: ["הָיָה"],
        definition: "he/it was; it happened",
    },
    {
        position: [11, 0],
        forms: ["עָשָׂה"],
        definition: "Q: he made, did",
    },
    {
        position: [11, 1],
        forms: ["מַעֲשֵׂ֣ה"],
        definition: "deed, work",
    },
    {
        position: [12, 0],
        forms: ["אֵל"],
        definition: "God, also proper name El",
    },
    {
        position: [12, 1],
        forms: ["אֱלֹהִים"],
        definition: "God, gods",
    },
    {
        position: [13, 0],
        forms: ["בָּא"],
        definition: "Q. he entered/came",
    },
    {
        position: [14, 0],
        forms: ["מֶ֫לֶךְ"],
        definition: "king",
    },
    {
        position: [14, 1],
        forms: ["מַּלְכָּה"],
        definition: "queen",
    },
    {
        position: [15, 0],
        forms: ["מָלַךְ"],
        definition: "Q. he was king; he ruled",
    },
    {
        position: [15, 1],
        forms: ["מַלְכוּת"],
        definition: "royalty, royal power",
    },
    {
        position: [15, 2],
        forms: ["מַּמְלָכָה"],
        definition: "kingdom",
    },
    {
        position: [16, 0],
        forms: ["אֶ֫רֶץ"],
        definition: "earth, land (f.)",
    },
    {
        position: [17, 0],
        forms: ["יוֹם"],
        definition: "day",
    },
    {
        position: [18, 0],
        forms: ["אִישׁ"],
        definition: "man -> husband",
    },
    {
        position: [19, 0],
        forms: ["פָּנָה"],
        definition: "Q. he turned",
    },
    {
        position: [19, 1],
        forms: ["פָּנִים"],
        definition: "face -> presence",
    },
    {
        position: [20, 0],
        forms: ["בַּיִת"],
        definition: "house",
    },
    {
        position: [21, 0],
        forms: ["נָתַן"],
        definition: "Q. he gave",
    },
    {
        position: [22, 0],
        forms: ["עַם", "עָם"],
        definition: "people",
    },
    {
        position: [23, 0],
        forms: ["יָד"],
        definition: "hand -> strength",
    },
    {
        position: [24, 0],
        forms: ["הָלַךְ"],
        definition: "Q. he went, walked",
    },
    {
        position: [25, 0],
        forms: ["דִּבֵּר"],
        definition: "Pi. he spoke",
    },
    {
        position: [25, 1],
        forms: ["דָּבָר"],
        definition: "word, thing, affair",
    },
    {
        position: [25, 2],
        forms: ["מִדְבָּר"],
        definition: "wilderness",
    },
    {
        position: [26, 0],
        forms: ["הוּא"],
        definition: "he, that one (subj.)",
    },
    {
        position: [26, 1],
        forms: ["הִיא"],
        definition: "she, that one (subj.)",
    },
    {
        position: [27, 0],
        forms: ["רָאָה"],
        definition: "Q. he saw",
    },
    {
        position: [27, 1],
        forms: ["מַרְאֶה"],
        definition: "sight, appearance",
    },
    {
        position: [28, 0],
        forms: ["עַד"],
        definition: "as far as, until (prep.)",
    },
    {
        position: [29, 0],
        forms: ["אָב"],
        definition: "father, ancestor",
    },
    {
        position: [30, 0],
        forms: ["שָׁמַע"],
        definition: "Q. he heard",
    },
    {
        position: [31, 0],
        forms: ["זֶה"],
        definition: "this, this one (subj.)",
    },
    {
        position: [31, 1],
        forms: ["זֹאת"],
        definition: "this, this one (subj. f.)",
    },
    {
        position: [32, 0],
        forms: ["אֵ֫לֶּה"],
        definition: "these (subj. m./f.)",
    },
    {
        position: [33, 0],
        forms: ["עִיר"],
        definition: "city, town (f.)",
    },
    {
        position: [34, 0],
        forms: ["יָשַׁב"],
        definition: "Q. he sat, remained",
    },
    {
        position: [35, 0],
        forms: ["יָצָא"],
        definition: "Q. he went forth",
    },
    {
        position: [36, 0],
        forms: ["שׁוּב"],
        definition: "return, turn back",
    },
    {
        position: [36, 0],
        forms: ["שָּׁב"],
        definition: "Q. he turned back",
    },
    {
        position: [37, 0],
        forms: ["הִנֵּה", "הֵן"],
        definition: "behold! see! here!",
    },
    {
        position: [38, 0],
        forms: ["עִם"],
        definition: "with",
    },
    {
        position: [39, 0],
        forms: ["לָקַח"],
        definition: "Q. he took",
    },
    {
        position: [40, 0],
        forms: ["אֶחָד"],
        definition: "one (noun/adj.)",
    },
    {
        position: [41, 0],
        forms: ["יָדַע"],
        definition: "Q. he knew",
    },
    {
        position: [42, 0],
        forms: ["אִם"],
        definition: "if",
    },
    {
        position: [43, 0],
        forms: ["שָׁנָה"],
        definition: "year (f.)",
    },
    {
        position: [44, 0],
        forms: ["שְׁנַ֫יִם"],
        definition: "two",
    },
    {
        position: [44, 1],
        forms: ["שֵׁנִי"],
        definition: "second",
    },
    {
        position: [45, 0],
        forms: ["שֵׁם"],
        definition: "name -> face",
    },
    {
        position: [46, 0],
        forms: ["אֲנִי"],
        definition: "I",
    },
    {
        position: [46, 1],
        forms: ["אָנֹכִי"],
        definition: "I (poetic)",
    },
    {
        position: [47, 0],
        forms: ["עַ֫יִן"],
        definition: "eye (f.)",
    },
    {
        position: [47, 1],
        forms: ["עַיִן"],
        definition: "spring, fountain (f.)"
    },
    {
        position: [48, 0],
        forms: ["שָׁלַח"],
        definition: "Q. he sent",
    },
    {
        position: [49, 0],
        forms: ["מֵת"],
        definition: "Q. he died, is dead",
    },
    {
        position: [49, 1],
        forms: ["מָ֫וֶת"],
        definition: "death",
    },
    {
        position: [50, 0],
        forms: ["שָׁם"],
        definition: "there",
    },
    {
        position: [51, 0],
        forms: ["אָכַל"],
        definition: "Q. he ate",
    },
    {
        position: [52, 0],
        forms: ["עָבַד"],
        definition: "Q. he served",
    },
    {
        position: [52, 1],
        forms: ["עֶ֫בֶד"],
        definition: "slave, servant",
    },
    {
        position: [52, 2],
        forms: ["עֲבֹדָה"],
        definition: "service, labour (f.)",
    },
    {
        position: [53, 0],
        forms: ["אִשָׁה"],
        definition: "woman -> wife (f.)",
    },
    {
        position: [54, 0],
        forms: ["גַּם"],
        definition: "moreover, also, even",
    },
    {
        position: [55, 0],
        forms: ["נֶ֫פֶשׁ"],
        definition: "living being, person, life (f.)",
    },
    {
        position: [56, 0],
        forms: ["אַ֫יִן"],
        definition: "nothing",
    },
    {
        position: [57, 0],
        forms: ["אָדוֹן"],
        definition: "master, lord",
    },
    {
        position: [58, 0],
        forms: ["כֹּהֵן"],
        definition: "priest",
    },
    {
        position: [59, 0],
        forms: ["מָה"],
        definition: "what? how!",
    },
    {
        position: [59, 1],
        forms: ["לָ֫מָה"],
        definition: "why?",
    },
    {
        position: [60, 0],
        forms: ["אַתָּה"],
        definition: "you (m. sg.)",
    },
    {
        position: [60, 1],
        forms: ["אַתֶּם"],
        definition: "you (m. pl.)",
    },
    {
        position: [61, 0],
        forms: ["קָרָא"],
        definition: "Q. he called",
    },
    {
        position: [62, 0],
        forms: ["קָרָא"],
        definition: "encounter, befall",
    },
    {
        position: [63, 0],
        forms: ["אַחֵר"],
        definition: "another, different, other",
    },
    {
        position: [63, 1],
        forms: ["אַחַר", "אחֲרֵי"],
        definition: "behind, after",
    },
    {
        position: [64, 0],
        forms: ["דֶּ֫רֶךְ"],
        definition: "road, way (m./f.)",
    },
    {
        position: [65, 0],
        forms: ["כֵּן"],
        definition: "thus, so",
    },
    {
        position: [65, 1],
        forms: ["לָכֵן"],
        definition: "therefore",
    },
    {
        position: [66, 0],
        forms: ["רעע"],
        definition: "be evil, bad",
    },
    {
        position: [66, 0],
        forms: ["רַע"],
        definition: "evil, distress, misery",
    },
    {
        position: [66, 1],
        forms: ["רָעָה"],
        definition: "evil, distress, misery",
    },
    {
        position: [67, 0],
        forms: ["רָעָה"],
        definition: "Q. he pastered, it (the flock) grazed",
    },
    {
        position: [68, 0],
        forms: ["רֵ֫עַ"],
        definition: "friend, companion",
    },
    {
        position: [69, 0],
        forms: ["נָשָׂא"],
        definition: "Q. he lifted, carried",
    },
    {
        position: [69, 1],
        forms: ["נָשִׂיא"],
        definition: "prince",
    },
    {
        position: [70, 0],
        forms: ["אָח"],
        definition: "brother",
    },
    {
        position: [70, 1],
        forms: ["אֲחוֹת"],
        definition: "sister",
    },
    {
        position: [71, 0],
        forms: ["קָם"],
        definition: "Q. he stood up",
    },
    {
        position: [71, 1],
        forms: ["מָקוֹם"],
        definition: "place (noun)",
    },
    {
        position: [72, 0],
        forms: ["לֵב"],
        definition: "heart, inner self -> mind, will",
    },
    {
        position: [72, 1],
        forms: ["לֵבָב"],
        definition: "heart, inner self -> mind, will",
    },
    {
        position: [73, 0],
        forms: ["רֹאשׁ"],
        definition: "head, top, chief",
    },
    {
        position: [73, 1],
        forms: ["רִאשׁוֹן"],
        definition: "former, first (adj.)",
    },
    {
        position: [74, 0],
        forms: ["מֵאָה"],
        definition: "hundred (f.)",
    },
    {
        position: [75, 0],
        forms: ["שָׂם"],
        definition: "Q. he put, set",
    },
    {
        position: [76, 0],
        forms: ["מַ֫יִם"],
        definition: "water, waters",
    },
    {
        position: [77, 0],
        forms: ["כֹּה"],
        definition: "thus",
    },
    {
        position: [78, 0],
        forms: ["גּוֹי"],
        definition: "nation",
    },
    {
        position: [79, 0],
        forms: ["אָדָם"],
        definition: "man, humankind, Adam",
    },
    {
        position: [79, 1],
        forms: ["אֲדָמה"],
        definition: "ground, land (f.)",
    },
    {
        position: [80, 0],
        forms: ["הַר"],
        definition: "mountain, hill",
    },
    {
        position: [81, 0],
        forms: ["עָבַר"],
        definition: "Q. he passed by",
    },
    {
        position: [82, 0],
        forms: ["עֶ֫שֶׂר"],
        definition: "ten (with f. nouns)",
    },
    {
        position: [82, 1],
        forms: ["עֶשְׂרִים"],
        definition: "twenty",
    },
    {
        position: [83, 0],
        forms: ["גָּדַל"],
        definition: "Q. he grew up, became great",
    },
    {
        position: [83, 1],
        forms: ["גָּדוֹל"],
        definition: "big, great (adj.)",
    },
    {
        position: [84, 0],
        forms: ["עָמַד"],
        definition: "Q. he stood",
    },
    {
        position: [84, 1],
        forms: ["עַמֻּר", "עַמּוּד"],
        definition: "pillar, column",
    },
    {
        position: [85, 0],
        forms: ["הֵם", "הֵ֫מָּה"],
        definition: "they (subj.)",
    },
    {
        position: [85, 1],
        forms: ["הֵן", "הֵ֫נָּה"],
        definition: "they (f. subj.)",
    },
    {
        position: [86, 0],
        forms: ["קוֹל"],
        definition: "they (f. subj.)",
    },
    {
        position: [87, 0],
        forms: ["יָלַד"],
        definition: "Q. he bore (!)",
    },
    {
        position: [88, 0],
        forms: ["אֶ֫לֶף"],
        definition: "thousand, military unit",
    },
    {
        position: [89, 0],
        forms: ["תּ֫חַת"],
        definition: "under, in place of",
    },
    {
        position: [90, 0],
        forms: ["חָיָה"],
        definition: "Q. he lived",
    },
    {
        position: [90, 1],
        forms: ["חַי"],
        definition: "alive, living, living one (adj.)",
    },
    {
        position: [90, 2],
        forms: ["חָיָּה"],
        definition: "living being, animal (f.)",
    },
    {
        position: [90, 3],
        forms: ["חַיִּים"],
        definition: "life",
    },
    {
        position: [91, 0],
        forms: ["עוֹד"],
        definition: "still, yet, again",
    },
    {
        position: [92, 0],
        forms: ["פֶּה"],
        definition: "mouth",
    },
    {
        position: [93, 0],
        forms: ["צָבָא"],
        definition: "army, warfare, heavenly bodies",
    },
    {
        position: [94, 0],
        forms: ["צִוָּה"],
        definition: "Pi, he gave charge to/over",
    },
    {
        position: [94, 1],
        forms: ["מִצְוָה"],
        definition: "commandment (f.)",
    },
    {
        position: [95, 0],
        forms: ["ק֫דֶשׁ"],
        definition: "holiness, sacredness",
    },
    {
        position: [95, 1],
        forms: ["קְדוֹשׁ"],
        definition: "sacred, holy (adj.)",
    },
    {
        position: [95, 2],
        forms: ["קָדַשׁ"],
        definition: "Q. he/it was set apart",
    },
    {
        position: [95, 2],
        forms: ["קִדֵּשׁ"],
        definition: "Pi. he consecrated",
    },
    {
        position: [96, 0],
        forms: ["שָׁמַר"],
        definition: "Q. he guarded",
    },
    {
        position: [97, 0],
        forms: ["מָצָא"],
        definition: "Q. he found",
    },
    {
        position: [98, 0],
        forms: ["עוֹלָם"],
        definition: "eternity; a long time back; future time",
    },
    {
        position: [99, 0],
        forms: ["עָנָה"],
        definition: "Q. he answered",
    },
    {
        position: [99, 1],
        forms: ["עֵת"],
        definition: "time, season (f./m.)",
    },
    {
        position: [99, 2],
        forms: ["עַתָּה"],
        definition: "now",
    },
    {
        position: [99, 3],
        forms: ["לְמַ֫עַן"],
        definition: "for the sake of, in order that, on account of",
    },
    {
        position: [100, 0],
        forms: ["עָנָה"],
        definition: "Q. he was afflicted",
    },
    {
        position: [100, 1],
        forms: ["עָנִי"],
        definition: "afflicted, poor",
    },
    {
        position: [100, 2],
        forms: ["עֳנִי"],
        definition: "affliction, poverty",
    },
    {
        position: [101, 0],
        forms: ["נָפַל"],
        definition: "Q. he fell",
    },
    {
        position: [102, 0],
        forms: ["שָׁלשׁ"],
        definition: "three (with f. nouns)",
    },
    {
        position: [102, 1],
        forms: ["שְׁלִישִׁי"],
        definition: "third",
    },
    {
        position: [102, 2],
        forms: ["שְׁלִשִׁים"],
        definition: "thirty",
    },
    {
        position: [103, 0],
        forms: ["רַב"],
        definition: "much, many, great",
    },
    {
        position: [103, 1],
        forms: ["רֹב"],
        definition: "multitude, abundance",
    },
    {
        position: [104, 0],
        forms: ["מִי"],
        definition: "who?",
    },
    {
        position: [105, 0],
        forms: ["שָׁפַט"],
        definition: "Q. he judged",
    },
    {
        position: [105, 1],
        forms: ["מִשְׁפָּט"],
        definition: "judgement, justice; custom",
    },
    {
        position: [106, 0],
        forms: ["שָׁמַ֫יִם"],
        definition: "heaven(s), sky",
    },
    {
        position: [107, 0],
        forms: ["שַׂר"],
        definition: "ruler, chieftan",
    },
    {
        position: [108, 0],
        forms: ["תָּ֫וֶךְ"],
        definition: "midst, middle",
    },
    {
        position: [109, 0],
        forms: ["חֶרֶב"],
        definition: "sword (f.)",
    },
    {
        position: [110, 0],
        forms: ["יָרֵא"],
        definition: "Q. he feared; was in awe",
    },
    {
        position: [111, 0],
        forms: ["נָא"],
        definition: "please, now, pray",
    },
    {
        position: [112, 0],
        forms: ["יַ֫חַד"],
        definition: "unitedness, together",
    },
    {
        position: [112, 1],
        forms: ["יַחְדָּו"],
        definition: "together",
    },
    {
        position: [112, 2],
        forms: ["יָחִיד"],
        definition: "only one, unique",
    },
    {
        position: [113, 0],
        forms: ["זָבַח"],
        definition: "Q. he sacrificed; slaughtered for sacrifice",
    },
    {
        position: [113, 1],
        forms: ["זֶ֫בַח"],
        definition: "sacrifice (noun)",
    },
    {
        position: [113, 2],
        forms: ["מִזְבֵּ֫חַ"],
        definition: "place of sacrifice, altar",
    },
    {
        position: [114, 0],
        forms: ["אָהֵב", "אָהַב"],
        definition: "Q. he loved",
    },
    {
        position: [115, 0],
        forms: ["עֵץ"],
        definition: "tree(s), wood",
    },
    {
        position: [116, 0],
        forms: ["נַ֫עַר"],
        definition: "boy, youth, servant",
    },
    {
        position: [117, 0],
        forms: ["יָרַד"],
        definition: "Q. he went down",
    },
    {
        position: [118, 1],
        forms: ["בָּקָר"],
        definition: "cattle, herd, ox (m./f.)",
    },
    {
        position: [118, 2],
        forms: ["בֹּ֫קֶר"],
        definition: "morning",
    },
    {
        position: [119, 0],
        forms: ["ר֫וּחַ"],
        definition: "wind, spirit, breath",
    },
    {
        position: [120, 0],
        forms: ["אֵשׁ"],
        definition: "fire",
    },
    {
        position: [121, 0],
        forms: ["אַ֫יִל"],
        definition: "ram",
    },
    {
        position: [122, 0],
        forms: ["בָּנָה"],
        definition: "Q. he built",
    },
    {
        position: [123, 0],
        forms: ["שַׁ֫עַר"],
        definition: "gate",
    },
    {
        position: [124, 0],
        forms: ["דָּם"],
        definition: "blood",
    },
    {
        position: [125, 0],
        forms: ["אֹ֫הֶל"],
        definition: "tent",
    },
    {
        position: [126, 0],
        forms: ["חָמֵשׁ"],
        definition: "five (with f. nouns)j",
    },
    {
        position: [126, 1],
        forms: ["חֲמִישִׁים"],
        definition: "fifty",
    },
    {
        position: [127, 0],
        forms: ["טוֹב"],
        definition: "good (adj.)",
    },
    {
        position: [127, 1],
        forms: ["טוֹב"],
        definition: "benefit (noun)",
    },
    {
        position: [128, 0],
        forms: ["מַלְאָךְ"],
        definition: "messenger, angel",
    },
    {
        position: [128, 1],
        forms: ["מְלָאכָה"],
        definition: "work, occupation (f.)",
    },
    {
        position: [129, 0],
        forms: ["בָּרַךְ"],
        definition: "Q. he knelt, blessed",
    },
    {
        position: [130, 0],
        forms: ["זֶ֫רַא"],
        definition: "seed -> offspring",
    },
    {
        position: [131, 0],
        forms: ["נִלְחַם"],
        definition: "Ni. he waged war",
    },
    {
        position: [131, 1],
        forms: ["מִלְחָמָה"],
        definition: "battle, war",
    },
    {
        position: [132, 0],
        forms: ["לֶ֫חֶם"],
        definition: "bread, food",
    },
    {
        position: [133, 0],
        forms: ["אַל"],
        definition: "adv. of negation",
    },
    {
        position: [134, 0],
        forms: ["אַרְבַּע"],
        definition: "four (with f. nouns)",
    },
    {
        position: [134, 1],
        forms: ["אַרְבָּעִים"],
        definition: "forty",
    },
    {
        position: [135, 0],
        forms: ["עָזַב"],
        definition: "Q. he abandoned",
    },
    {
        position: [136, 0],
        forms: ["שָׁכַב"],
        definition: "Q. he lay down, lay with",
    },
    {
        position: [137, 0],
        forms: ["שֶׁ֫מֶשׁ"],
        definition: "sun (f./m.)",
    },
    {
        position: [138, 0],
        forms: ["אֶ֫בֶן"],
        definition: "stone (f.)",
    },
    {
        position: [139, 0],
        forms: ["שֶׁבַע"],
        definition: "seven (with f. nouns)",
    },
    {
        position: [139, 1],
        forms: ["נִשְׁבַּע"],
        definition: "Ni. he swore, took an oath",
    },
    {
        position: [140, 0],
        forms: ["נָגַע"],
        definition: "Q. he touched, reached",
    },
    {
        position: [141, 0],
        forms: ["יָם"],
        definition: "sea, west",
    },
    {
        position: [142, 0],
        forms: ["מִשְׁפָּחָה"],
        definition: "clan, family (f.)",
    },
    {
        position: [143, 0],
        forms: ["עָפָר"],
        definition: "dust, dry earth",
    },
    {
        position: [144, 0],
        forms: ["צָפוֹן"],
        definition: "north (f.)",
    },
    {
        position: [145, 0],
        forms: ["נֶ֫גֶב"],
        definition: "southland, Negev (the dry land)",
    },
    {
        position: [146, 0],
        forms: ["לָבַשׁ", "לָבֵשׁ"],
        definition: "Q. he wore; was clothed",
    },
    {
        position: [147, 0],
        forms: ["אוֹיֵב"],
        definition: "enemy (Q. part.)",
    },
    {
        position: [148, 0],
        forms: ["קָרַב"],
        definition: "Q. he drew near",
    },
    {
        position: [149, 0],
        forms: ["קֶ֫רֶב"],
        definition: "midst, inward part",
    },
    {
        position: [150, 0],
        forms: ["בֶּ֫גֶד"],
        definition: "garment, covering",
    },
    {
        position: [151, 0],
        forms: ["אָסַף"],
        definition: "Q. he gathered",
    },
    {
        position: [152, 0],
        forms: ["צֹאן"],
        definition: "flock (sheep/goats) (f.)",
    },
    {
        position: [153, 0],
        forms: ["בָּשָׂר"],
        definition: "flesh (of animals or humans)",
    },
    {
        position: [154, 0],
        forms: ["רָשָׁע"],
        definition: "wicked, guilty of sin",
    },
    {
        position: [155, 0],
        forms: ["נָטָה"],
        definition: "Q. he stretched out, inclined",
    },
    {
        position: [155, 1],
        forms: ["מַטֵּה"],
        definition: "rod, staff, tribe",
    },
    {
        position: [155, 2],
        forms: ["מִטָּה"],
        definition: "bed, couch (f.)",
    },
    {
        position: [156, 0],
        forms: ["מָלֵא"],
        definition: "Q. he/it was full, filled",
    },
    {
        position: [157, 0],
        forms: ["חֶ֫סֶד"],
        definition: "kindness, goodness",
    },
    {
        position: [158, 0],
        forms: ["רֶ֫גֶל"],
        definition: "foot, leg (f.)",
    },
    {
        position: [159, 0],
        forms: ["חַ֫יִל"],
        definition: "strength, wealth, army",
    },
    {
        position: [160, 0],
        forms: ["לַ֫יְלָה", "לַ֫יִל"],
        definition: "night (m.)",
    },
    {
        position: [161, 0],
        forms: ["גְּבוּל"],
        definition: "border, territory",
    },
    {
        position: [162, 0],
        forms: ["אֲנַחְנוּ"],
        definition: "we",
    },
    {
        position: [163, 0],
        forms: ["שִׁלַּם"],
        definition: "Pi. he completed, made compensation",
    },
    {
        position: [163, 1],
        forms: ["שָׁלוֹם"],
        definition: "welfare, wholeness, peace",
    },
    {
        position: [164, 0],
        forms: ["זָכָר"],
        definition: "Q. he remembered",
    },
    {
        position: [164, 1],
        forms: ["זָכָר"],
        definition: "male",
    },
    {
        position: [165, 0],
        forms: ["יָרַשׁ"],
        definition: "Q. he took possession",
    },
    {
        position: [166, 0],
        forms: ["נָגַשׁ"],
        definition: "Q. he drew near",
    },
    {
        position: [167, 0],
        forms: ["יָכוֹל", "יָכֹל"],
        definition: "Q. he was able, prevailed",
    },
    {
        position: [168, 0],
        forms: ["רָבוּ"],
        definition: "Q. they became many",
    },
    {
        position: [169, 0],
        forms: ["בִּקֵּשׁ"],
        definition: "Pi. he sought",
    },
    {
        position: [170, 0],
        forms: ["אֵם"],
        definition: "mother",
    },
    {
        position: [170, 1],
        forms: ["אַמָּה"],
        definition: "cubit (f.)",
    },
    {
        position: [171, 0],
        forms: ["אָבַד"],
        definition: "Q. he perished, was lost",
    },
    {
        position: [172, 0],
        forms: ["כָּתַב"],
        definition: "Q. he wrote",
    },
    {
        position: [173, 0],
        forms: ["עֵדָה"],
        definition: "congregation (f.)",
    },
    {
        position: [173, 1],
        forms: ["מוֹעֵד"],
        definition: "appointed time, or place, assembly, festival",
    },
    {
        position: [174, 0],
        forms: ["סָר"],
        definition: "Q. he turned aside",
    },
    {
        position: [175, 0],
        forms: ["תּוֹרָה"],
        definition: "Torah, teaching -> law (f.)",
    },
    {
        position: [176, 0],
        forms: ["נָכוֹן"],
        definition: "Ni. part (m. sg.) ready, established",
    },
    {
        position: [177, 0],
        forms: ["שָׁתָה"],
        definition: "Q. he drank",
    },
    {
        position: [178, 0],
        forms: ["אוֹ"],
        definition: "or",
    },
    {
        position: [179, 0],
        forms: ["שֵׁשׁ"],
        definition: "six (with f. nouns)",
    },
    {
        position: [180, 0],
        forms: ["לֵוִי"],
        definition: "Levite",
    },
    {
        position: [181, 0],
        forms: ["יָסַפ"],
        definition: "Q. he added, increased",
    },
    {
        position: [182, 0],
        forms: ["חָנָה"],
        definition: "Q. he encamped",
    },
    {
        position: [182, 1],
        forms: ["מַחֲנֶה"],
        definition: "camp, encampment",
    },
    {
        position: [183, 0],
        forms: ["דּוּר"],
        definition: "generation, age, period",
    },
    {
        position: [184, 0],
        forms: ["פַָּר"],
        definition: "Q. he visited, attended",
    },
    {
        position: [185, 0],
        forms: ["נָצַל"],
        definition: "tear away (E. K.)",
    },
    {
        position: [186, 0],
        forms: ["זקן"],
        definition: "to be bearded",
    },
    {
        position: [186, 1],
        forms: ["זָקֵן"],
        definition: "be or become old",
    },
    {
        position: [186, 2],
        forms: ["זָקֵן"],
        definition: "old, old man, elder",
    },
    {
        position: [187, 0],
        forms: ["חָטָא"],
        definition: "Q. he sinned",
    },
    {
        position: [187, 1],
        forms: ["חַטָאת"],
        definition: "sin, sin offering (f.)",
    },
    {
        position: [188, 0],
        forms: ["כָּלָה"],
        definition: "Q. he/it was completed",
    },
    {
        position: [188, 1],
        forms: ["כּלִי"],
        definition: "vessel, article, utensil",
    },
    {
        position: [189, 0],
        forms: ["צֶ֫דֶק"],
        definition: "righteousness, rightness",
    },
    {
        position: [189, 1],
        forms: ["צְדָקָה"],
        definition: "righteousness",
    },
    {
        position: [189, 2],
        forms: ["צַדִּיק"],
        definition: "just, righteous (adj.)",
    },
    {
        position: [190, 0],
        forms: ["יָשַׁע"],
        definition: "deliver",
    },
    {
        position: [191, 0],
        forms: ["אֲרוֹן"],
        definition: "ark, chest, coffin",
    },
    {
        position: [192, 0],
        forms: ["נָבִיא"],
        definition: "prophet",
    },
    {
        position: [192, 1],
        forms: ["נִבָּא"],
        definition: "Ni. he prophesied",
    },
    {
        position: [193, 0],
        forms: ["כָּבֵד"],
        definition: "Q. it was heavy",
    },
    {
        position: [193, 1],
        forms: ["כָּבוֹד"],
        definition: "heaviness, splendour, honour",
    },
    {
        position: [194, 0],
        forms: ["רוּם"],
        definition: "be high, exalted",
    },
    {
        position: [195, 0],
        forms: ["שָׂנֵא"],
        definition: "Q. he hated",
    },
    {
        position: [196, 0],
        forms: ["כַּף"],
        definition: "palm of hand, sole of foot (f.)",
    },
    {
        position: [197, 0],
        forms: ["שֶׁ֫מֶן"],
        definition: "oil, fat",
    },
    {
        position: [198, 0],
        forms: ["גָּלָה"],
        definition: "Q. he uncovered",
    },
    {
        position: [199, 0],
        forms: ["שֵׁ֫בֶט"],
        definition: "rod, staff, tribe",
    },
    {
        position: [200, 0],
        forms: ["אֹ֫זֶן"],
        definition: "ear (f.)",
    },
    {
        position: [201, 0],
        forms: ["בְּהֵמָה"],
        definition: "beast, animal, cattle (f.)",
    },
    {
        position: [202, 0],
        forms: ["סֵ֫פֶר"],
        definition: "letter, document",
    },
    {
        position: [202, 1],
        forms: ["סָפַר"],
        definition: "Q. he counted",
    },
    {
        position: [202, 2],
        forms: ["מִסְפָּר"],
        definition: "number",
    },
    {
        position: [203, 0],
        forms: ["שָׂדֶה"],
        definition: "field",
    },
    {
        position: [204, 0],
        forms: ["הִגִּיד"],
        definition: "Hi. he announced, declared",
    },
    {
        position: [204, 1],
        forms: ["נֶ֫גֶד"],
        definition: "in front of, in sight of, opposite",
    },
    {
        position: [205, 0],
        forms: ["שָׂפָה"],
        definition: "lip, edge, language (f.)",
    },
    {
        position: [206, 0],
        forms: ["הַיּוֹתֵר"],
        definition: "Q. part.: the remainder",
    },
    {
        position: [207, 0],
        forms: ["בָּחַר"],
        definition: "Q. he chose",
    },
    {
        position: [208, 0],
        forms: ["שָׁאַל"],
        definition: "Q. he asked, inquired",
    },
    {
        position: [209, 0],
        forms: ["יָבִין", "וַיָּ֫בֶן"],
        definition: "Q. prefix: he will perceive (with eyes, ear, touch, taste)",
    },
    {
        position: [210, 0],
        forms: ["בֵּין"],
        definition: "between (prep.)",
    },
    {
        position: [211, 0],
        forms: ["מְאֹר"],
        definition: "strength, force (noun); very, exceedingly (adv.)",
    },
    {
        position: [212, 0],
        forms: ["בַּ֫עַל"],
        definition: "Baal, owner, lord",
    },
    {
        position: [213, 0],
        forms: ["הָרַג"],
        definition: "Q. he killed",
    },
    {
        position: [214, 0],
        forms: ["חוּץ"],
        definition: "outside",
    },
    {
        position: [215, 0],
        forms: ["פָּתַח"],
        definition: "Q. he opened",
    },
    {
        position: [215, 1],
        forms: ["פֶּ֫תַח"],
        definition: "opening, entrance",
    },
    {
        position: [216, 0],
        forms: ["דָּרַשׁ"],
        definition: "Q. he sought, consulted",
    },
    {
        position: [217, 0],
        forms: ["סָבַב"],
        definition: "Q. he/it turned about",
    },
    {
        position: [217, 1],
        forms: ["סָבִיב"],
        definition: "[the area] round about, surrounding",
    },
    {
        position: [218, 0],
        forms: ["שָׁפַךְ"],
        definition: "Q. he poured out",
    },
    {
        position: [219, 0],
        forms: ["נָסַּע"],
        definition: "Q. he set out",
    },
    {
        position: [220, 0],
        forms: ["נָס"],
        definition: "Q. he escaped",
    },
    {
        position: [221, 0],
        forms: ["גִּבּוֹר"],
        definition: "warrior, mighty man",
    },
    {
        position: [222, 0],
        forms: ["הִכָּה", "יִכֶּה", "וַיַּךְ"],
        definition: "smit; Hi. he smote; Hi. prefix",
    },
    {
        position: [223, 0],
        forms: ["לְבַד", "לְבַדִּי"],
        definition: "alone, by oneself",
    },
    {
        position: [224, 0],
        forms: ["חָכָם"],
        definition: "wise, skillful, clever",
    },
    {
        position: [224, 1],
        forms: ["הָכְמָה"],
        definition: "wisdom, skill (f.)",
    },
    {
        position: [225, 0],
        forms: ["שָׂמַח"],
        definition: "Q. he rejoiced",
    },
    {
        position: [226, 0],
        forms: ["מִנְחָה"],
        definition: "gift, offering, tribute (f.)",
    },
    {
        position: [227, 0],
        forms: ["חָזַק"],
        definition: "Q. he became strong",
    },
    {
        position: [228, 0],
        forms: ["חֹק"],
        definition: "statute (m.)",
    },
    {
        position: [228, 1],
        forms: ["חֻקָּה"],
        definition: "statute (f.)",
    },
    {
        position: [229, 0],
        forms: ["כְּמוֹ"],
        definition: "as, like (poetic or with suffix)",
    },
    {
        position: [230, 0],
        forms: ["[יָטַב]", "יִיטַב", "הֵיטַיב"],
        definition: "be well, pleasing; Q. prefix: it will be well; Hi. he dealt well, did good",
    },
    {
        position: [231, 0],
        forms: ["[שָׁחַת]", "שִׁחֵת", "הִשְׁחִית"],
        definition: "go to ruin; Pi. he spoiled, ruined Hi. he spoiled, ruined",
    },
    {
        position: [232, 0],
        forms: ["אַף", "אַפַּ֫יִם"],
        definition: "nostril (m.) -> anger; du. face, countenance -> anger",
    },
    {
        position: [233, 0],
        forms: ["שָׁבַר"],
        definition: "Q. he broke",
    },
    {
        position: [234, 0],
        forms: ["אָמַן", "נֶאֱמַן", "הֶאֱמִין"],
        definition: "confirm, support; Ni. he was proven, shown to be faithful; Hi. he trusted, believed",
    },
    {
        position: [234, 1],
        forms: ["אֱמֶת"],
        definition: "firmness, constancy, trustworthiness, truth (f.)",
    },
    {
        position: [235, 0],
        forms: ["חָצֵר"],
        definition: "court, enclosure (f./m.)",
    },
    {
        position: [236, 0],
        forms: ["שָׁכַח"],
        definition: "Q. he forgot",
    },
    {
        position: [237, 0],
        forms: ["אָז"],
        definition: "at that time, then",
    },
    {
        position: [238, 0],
        forms: ["נוּחַ", "הֵנִיחַ", "הִנִּיחַ"],
        definition: "rest (Q. infin.); Hi. A. he gave rest to; Hi. B. he caused to rest, set down",
    },
    {
        position: [239, 0],
        forms: ["הִלֵּל"],
        definition: "Pi. he praised",
    },
    {
        position: [240, 0],
        forms: ["יַיִן"],
        definition: "wine",
    },
    {
        position: [241, 0],
        forms: ["רָדַף"],
        definition: "Q. he pursued",
    },
    {
        position: [242, 0],
        forms: ["שָׁכַן"],
        definition: "Q. he dwelled, settled down",
    },
    {
        position: [243, 0],
        forms: ["פֶּן"],
        definition: "lest",
    },
    {
        position: [244, 0],
        forms: ["סוּס"],
        definition: "horse",
    },
    {
        position: [245, 0],
        forms: ["יָמִין"],
        definition: "right hand",
    },
    {
        position: [246, 0],
        forms: ["יֵשׁ־", "יֵשׁ"],
        definition: "there is, there are",
    },
    {
        position: [247, 0],
        forms: ["נְחֹ֫שֶׁת"],
        definition: "copper, bronze",
    },
    {
        position: [248, 0],
        forms: ["חוֹמָה"],
        definition: "wall",
    },
    {
        position: [249, 0],
        forms: ["כִּסֵּה", "כִּסֵּא"],
        definition: "throne, seat",
    },
    {
        position: [250, 0],
        forms: ["נַחֲלָה"],
        definition: "property, possession, inheritance (f.)",
    },
    {
        position: [251, 0],
        forms: ["נַ֫חָל"],
        definition: "wadi, torrent",
    },
    {
        position: [252, 0],
        forms: ["שָׁאַר", "נִשְׁאַר", "הִשְׁאִיר"],
        definition: "remain, be left over; Ni. it/he was left over -> he survived, Hi. he left over -> spared",
    },
    {
        position: [253, 0],
        forms: ["קָבַר"],
        definition: "Q. he buried",
    },
    {
        position: [254, 0],
        forms: ["כָּרַת"],
        definition: "Q. he cut",
    },
    {
        position: [255, 0],
        forms: ["בְּרִית"],
        definition: "covenant (f.)",
    },
    {
        position: [256, 0],
        forms: ["עֶ֫רֶב"],
        definition: "sunset, evening",
    },
    {
        position: [257, 0],
        forms: ["יָחֵל", "הֵחֵל", "חִלֵּל", "חָלַל"],
        definition: "defile, profane, pollute; Pi. he defiled, profaned; Hi. 2. affix: he began; Hi. prefix",
    },
    {
        position: [258, 0],
        forms: ["פַּר"],
        definition: "bull, young bull",
    },
    {
        position: [259, 0],
        forms: ["כֹּח", "כּוֹחַ"],
        definition: "strength, power",
    },
    {
        position: [260, 0],
        forms: ["קָוַץ"],
        definition: "Q. he gathered, collected",
    },
    {
        position: [261, 0],
        forms: ["הִשְתַּחֲוָה"],
        definition: "affix: he prostrated himself in worship",
    },
    {
        position: [262, 0],
        forms: ["מְעַט"],
        definition: "a little, a few",
    },
    {
        position: [263, 0],
        forms: ["עֶ֫צֶם"],
        definition: "bone, substance -> self (f.)",
    },
    {
        position: [264, 0],
        forms: ["[שָׁלַךְ]", "הִשְׁלִיךְ"],
        definition: "throw, cast; Hi. he threw, cast",
    },
    {
        position: [265, 0],
        forms: ["חֹ֫דֶשׁ"],
        definition: "new moon, month",
    },
    {
        position: [266, 0],
        forms: ["חֲצִי"],
        definition: "half, middle",
    },
    {
        position: [267, 0],
        forms: ["קָהָל"],
        definition: "assembly, congregation",
    },
    {
        position: [268, 0],
        forms: ["עָוֹן"],
        definition: "sin, guilt, punishment",
    },
    {
        position: [269, 0],
        forms: ["אוֹר"],
        definition: "light (f.)",
    },
    {
        position: [270, 0],
        forms: ["חָשַׁב"],
        definition: "Q. he thought",
    },
    {
        position: [271, 0],
        forms: ["חֵמָה"],
        definition: "heat, rage, fury (f.)",
    },
    {
        position: [272, 0],
        forms: ["בָּטַח"],
        definition: "Q. he trusted",
    },
    {
        position: [273, 0],
        forms: ["לָכַד"],
        definition: "Q. he captured",
    },
    {
        position: [274, 0],
        forms: ["נָהָר"],
        definition: "river, stream",
    },
    {
        position: [275, 0],
        forms: ["רֶ֫כֶב"],
        definition: "chariot, group of chariots",
    },
    {
        position: [276, 0],
        forms: ["יָשַׁר"],
        definition: "upright, straight (adj.)",
    },
    {
        position: [277, 0],
        forms: ["פְּרִי"],
        definition: "fruit",
    },
    {
        position: [278, 0],
        forms: ["פַּ֫עַם"],
        definition: "beat, foot -> occurrence, time (f.)",
    },
    {
        position: [279, 0],
        forms: ["לָשׁוֹן"],
        definition: "tongue -> language (f./m.)",
    },
    {
        position: [280, 0],
        forms: ["שָׁרַף"],
        definition: "he burned",
    },
    {
        position: [281, 0],
        forms: ["תּוֹעֵבָה"],
        definition: "abomination (f.)",
    },
    {
        position: [282, 0],
        forms: ["קטר", "הִקְטֵר"],
        definition: "smoke; Hi. he burned incense",
    },
    {
        position: [283, 0],
        forms: ["בָּכָה"],
        definition: "Q. he wept",
    },
    {
        position: [284, 0],
        forms: ["יָדָה", "הוֹדוּ"],
        definition: "throw, cast; Hi. imp.: give thanks!",
    },
    {
        position: [285, 0],
        forms: ["בִּלְתִּי"],
        definition: "not, except",
    },
    {
        position: [286, 0],
        forms: ["רוּץ", "רָץ"],
        definition: "Q. he ran",
    },
    {
        position: [287, 0],
        forms: ["שֶׁ֫קֶר"],
        definition: "lie, falsehood",
    },
    {
        position: [288, 0],
        forms: ["רַק"],
        definition: "only, save, except",
    },
    {
        position: [289, 0],
        forms: ["שַׁבָּת"],
        definition: "Sabbath (f./m.)",
    },
    {
        position: [290, 0],
        forms: ["כִּפֶּר"],
        definition: "Pi. he covered over -> made propitiation",
    },
    {
        position: [291, 0],
        forms: ["אַךְ"],
        definition: "surely, only; but yet",
    },
    {
        position: [292, 0],
        forms: ["בְּכוֹר"],
        definition: "first-born",
    },
    {
        position: [293, 0],
        forms: ["בֹּשׁ", "יֵווֹשׁ"],
        definition: "Q. he was ashamed; Q. prefix",
    },
    {
        position: [294, 0],
        forms: ["כָּנָף"],
        definition: "wing -> skirt, extremity, edge (f.)",
    },
    {
        position: [295, 0],
        forms: ["שְׁמֹנֶה"],
        definition: "eight (with f. nouns)",
    },
    {
        position: [296, 0],
        forms: ["כֶּ֫סֶף"],
        definition: "silver",
    },
    {
        position: [297, 0],
        forms: ["זָהָב"],
        definition: "gold",
    },
    {
        position: [298, 0],
        forms: ["כֶּ֫בֶשׂ"],
        definition: "lamb",
    },
    {
        position: [299, 0],
        forms: ["נחם", "נַחַם", "נִחַם"],
        definition: "be sorry, console oneself; Ni. he was sorry, repented; Pi. he comforted",
    },
    {
        position: [300, 0],
        forms: ["צַר"],
        definition: "adversary, foe",
    },
    {
        position: [301, 0],
        forms: ["בַּ֫עַד", "בְּעַד"],
        definition: "away from, through, behind, on behalf of (prep.)",
    },
    {
        position: [302, 0],
        forms: ["בָּמָה"],
        definition: "high place (f.)",
    },
    {
        position: [303, 0],
        forms: ["גָּאַל"],
        definition: "Q. he redeemed",
    },
    {
        position: [304, 0],
        forms: ["טָמֵא"],
        definition: "Q. he was/became unclean",
    },
    {
        position: [305, 0],
        forms: ["תָּמִיד"],
        definition: "continually, daily (adv.)",
    },
    {
        position: [306, 0],
        forms: ["כִּסָּה"],
        definition: "Pi. he covered, concealed",
    },
    {
        position: [307, 0],
        forms: ["אַף"],
        definition: "also, indeed, even",
    },
    {
        position: [308, 0],
        forms: ["נְאֻם"],
        definition: "utterance, oracle",
    },
    {
        position: [309, 0],
        forms: ["רָחַב"],
        definition: "breadth, width",
    },
    {
        position: [310, 0],
        forms: ["רָעָב"],
        definition: "famine, hunger",
    },
].filter((d) => d.definition !== "").map((d) => new Word(d));

export default words;