
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
        forms: ["יהיה"],
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
        forms: [""],
        definition: "",
    },
    {
        position: [102, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [103, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [104, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [105, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [106, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [107, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [108, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [109, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [110, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [111, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [112, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [113, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [114, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [115, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [116, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [117, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [118, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [119, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [120, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [121, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [122, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [123, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [124, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [125, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [126, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [127, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [128, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [129, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [130, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [131, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [132, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [133, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [134, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [135, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [136, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [137, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [138, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [139, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [140, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [141, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [142, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [143, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [144, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [145, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [146, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [147, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [148, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [149, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [150, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [151, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [152, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [153, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [154, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [155, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [156, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [157, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [158, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [159, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [160, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [161, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [162, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [163, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [164, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [165, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [166, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [167, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [168, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [169, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [170, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [171, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [172, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [173, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [174, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [175, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [176, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [177, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [178, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [179, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [180, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [181, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [182, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [183, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [184, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [185, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [186, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [187, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [188, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [189, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [190, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [191, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [192, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [193, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [194, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [195, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [196, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [197, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [198, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [199, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [200, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [201, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [202, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [203, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [204, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [205, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [206, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [207, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [208, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [209, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [210, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [211, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [212, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [213, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [214, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [215, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [216, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [217, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [218, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [219, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [220, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [221, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [222, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [223, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [224, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [225, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [226, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [227, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [228, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [229, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [230, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [231, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [232, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [233, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [234, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [235, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [236, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [237, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [238, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [239, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [240, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [241, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [242, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [243, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [244, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [245, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [246, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [247, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [248, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [249, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [250, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [251, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [252, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [253, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [254, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [255, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [256, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [257, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [258, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [259, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [260, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [261, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [262, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [263, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [264, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [265, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [266, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [267, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [268, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [269, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [270, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [271, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [272, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [273, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [274, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [275, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [276, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [277, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [278, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [279, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [280, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [281, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [282, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [283, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [284, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [285, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [286, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [287, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [288, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [289, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [290, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [291, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [292, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [293, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [294, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [295, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [296, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [297, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [298, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [299, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [300, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [301, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [302, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [303, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [304, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [305, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [306, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [307, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [308, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [309, 0],
        forms: [""],
        definition: "",
    },
    {
        position: [310, 0],
        forms: [""],
        definition: "",
    },
].map((d) => new Word(d));

export default words;