function Scale(name, notes, lhFingering, rhFingering) {
    this.name = name;
    this.notes = notes;
    this.lhFingering = lhFingering;
    this.rhFingering = rhFingering;
}

function getPitchValues(pitches) {
    const pitchValues = {
        'B#0': 0,
        'C0':  0,
        'C#0': 1,
        'Db0': 1,
        'D0':  2,
        'D#0': 3,
        'Eb0': 3,
        'E0':  4,
        'Fb0': 4,
        'E#0': 5,
        'F0':  5,
        'F#0': 6,
        'Gb0': 6,
        'G0':  7,
        'G#0': 8,
        'Ab1': 8,
        'A1':  9,
        'A#1': 10,
        'Bb1': 10,
        'B1':  11,
        'Cb1': 11,
        'B#1': 12,
        'C1':  12,
        'C#1': 13,
        'Db1': 13,
        'D1':  14,
        'D#1': 15,
        'Eb1': 15,
        'E1':  16,
        'Fb1': 16,
        'E#1': 17,
        'F1':  17,
        'F#1': 18,
        'Gb1': 18,
        'F##1': 19,
        'G1':  19,
        'G#1': 20,
        'Ab2': 20,
        'A2':  21,
        'A#2': 22,
        'Bb2': 2,
        'B2':  23,
        'Cb2': 23,
    }
    let selectedPitchValues = [];
    for (let i = 0; i < pitches.length; i++) {
        selectedPitchValues.push(pitchValues[pitches[i]]);
    }
    return selectedPitchValues;
}

function getMajorScale(key) {
    switch(key) {
        case 0:  // C
            return new Scale('C', ['C0','D0','E0','F0','G0','A1','B1','C1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 1:  // G
            return new Scale('G', ['G0','A1','B1','C1','D1','E1','F#1','G1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 2:  // D
            return new Scale('D', ['D0','E0','F#0','G0','A1','B1','C#1','D1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 3:  // A
            return new Scale('A', ['A1','B1','C#1','D1','E1','F#1','G#1','A2'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 4:  // E
            return new Scale('E', ['E0','F#0','G#0','A1','B1','C#1','D#1','E1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 5:  // B
            return new Scale('B', ['B1','C#1','D#1','E1','F#1','G#1','A#2','B2'], [4,3,2,1,4,3,2,1], [1,2,3,1,2,3,4,5]);
        case 6:  // F#
            return new Scale('F#', ['F#0','G#0','A#1','B1','C#1','D#1','E#1','F#1'], [4,3,2,1,3,2,1,4], [2,3,4,1,2,3,1,2]);
        case 7:  // G#
            return new Scale('G#', ['G#0','A#1','B#1','C#1','D#1','E#1','F##1','G#1'], [3,2,1,4,3,2,1,3], [3,4,1,2,3,1,2,3]);
        case -7: // Cb
            return new Scale('Cb', ['Cb1','Db1','Eb1','Fb1','Gb1','Ab2','Bb2','Cb2'], [4,3,2,1,4,3,2,1], [1,2,3,1,2,3,4,5]);
        case -6: // Gb
            return new Scale('Gb', ['Gb0','Ab1','Bb1','Cb1','Db1','Eb1','F1','Gb1'], [4,3,2,1,3,2,1,4], [2,3,4,1,2,3,1,2]);
        case -5: // Db
            return new Scale('Db', ['Db0','Eb0','F0','Gb0','Ab1','Bb1','C1','Db1'], [3,2,1,4,3,2,1,3], [2,3,1,2,3,4,1,2]);
        case -4: // Ab
            return new Scale('Ab', ['Ab1','Bb1','C1','Db1','Eb1','F1','G1','Ab1'], [3,2,1,4,3,2,1,3], [3,4,1,2,3,1,2,3]);
        case -3: // Eb
            return new Scale('Eb', ['Eb0','F0','G0','Ab1','Bb1','C1','D1','Eb1'], [3,2,1,4,3,2,1,3], [3,1,2,3,4,1,2,3]);
        case -2: // Bb
            return new Scale('Bb', ['Bb1','C1','D1','Eb1','F1','G1','A2','Bb2'], [3,2,1,4,3,2,1,3], [4,1,2,3,1,2,3,4]);
        case -1: // F
            return new Scale('F', ['F0','G0','A1','Bb1','C1','D1','E1','F1'], [5,4,3,2,1,3,2,1], [1,2,3,4,1,2,3,4]);;
    }
}

function getMinorScale(key) {
    switch(key) {
        case 0:  // Am
            return new Scale('Am', ['A1','B1','C1','D1','E1','F1','G1','A2'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 1:  // Em
            return new Scale('Em', ['E0','F#0','G0','A1','B1','C1','D1','E1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case 2:  // Bm
            return new Scale('Bm', ['B1','C#1','D1','E1','F#1','G1','A2','B21'], [4,3,2,1,4,3,2,1], [1,2,3,1,2,3,4,5]);
        case 3:  // F#m
            return new Scale('F#m', ['F#0','G#0','A1','B1','C#1','D1','E1','F#1'], [4,3,2,1,3,2,1,4], [2,3,1,2,3,1,2,3]);
        case 4:  // C#m
            return new Scale('C#m', ['C#0','D#0','E0','F#0','G#0','A1','B1','C#1'], [3,2,1,4,3,2,1,3], [3,4,1,2,3,1,2,3]);
        case 5:  // G#m
            return new Scale('G#m', ['G#0','A#1','B1','C#1','D#1','E1','F#1','G#1'], [3,2,1,3,2,1,3,2], [3,4,1,2,3,1,2,3]);
        case 6:  // D#m
            return new Scale('D#m', ['D#0','E#0','F#0','G#0','A#1','B1','C#1','D#1'], [2,1,4,3,2,1,3,2], [3,1,2,3,4,1,2,3]);
        case 7:  // A#m
            return new Scale('A#m', ['A#1','B#1','C#1','D#1','E#1','F#1','G#1','A#2'], [2,1,3,2,1,4,3,2], [2,1,2,3,1,2,3,4]);
        case -7: // Abm
            return new Scale('Abm', ['Ab1','Bb1','Cb1','Db1','Eb1','Fb1','Gb1','Ab2'], [3,2,1,3,2,1,3,2], [3,4,1,2,3,1,2,3]);
        case -6: // Ebm
            return new Scale('Ebm', ['Eb0','F0','Gb0','Ab1','Bb1','Cb1','Db1','Eb1'], [2,1,4,3,2,1,3,2], [3,1,2,3,4,1,2,3]);
        case -5: // Bbm
            return new Scale('Bbm', ['Bb1','C1','Db1','Eb1','F1','Gb1','A2','Bb2'], [2,1,3,2,1,4,3,2], [2,1,2,3,1,2,3,4]);
        case -4: // Fm
            return new Scale('Fm', ['F0','G0','Ab1','Bb1','C1','Db1','Eb1','F1'], [5,4,3,2,1,3,2,1], [1,2,3,4,1,2,3,4]);
        case -3: // Cm
            return new Scale('Cm', ['C0','D0','Eb0','F0','G0','Ab1','Bb1','C1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case -2: // Gm
            return new Scale('Gm', ['G0','A1','Bb1','C1','D1','Eb1','F1','G1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
        case -1: // Dm
            return new Scale('Dm', ['D0','E0','F0','G0','A1','Bb1','C1','D1'], [5,4,3,2,1,3,2,1], [1,2,3,1,2,3,4,5]);
    }
}

function generateChart(notes) {
    console.log("notes = " + notes);
    let pianoKeys = [
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
        "<b>|</b>w", "b", "w", "b", "w", "|w", "b", "w", "b", "w", "b", "w",
    ];

    const pitchSelections = getPitchValues(notes);
    for (let i = 0; i < pitchSelections.length; i++) {
        const selection = pitchSelections[i];
        console.log("selection = " + selection);
        if ((pianoKeys[selection]) == "w") { (pianoKeys[selection]) = "W" };
        if ((pianoKeys[selection]) == "|w") { (pianoKeys[selection]) = "|W" };
        if ((pianoKeys[selection]) == "<b>|</b>w") { (pianoKeys[selection]) = "<b>|</b>W" };
        if ((pianoKeys[selection]) == "b") { (pianoKeys[selection]) = "B" };
    }

    let chart = "";
    for (let j = 0; j < pianoKeys.length; j++) {
        chart = chart + pianoKeys[j];
    }
    return "|" + chart + "|";
}

function ScaleCharts(majorScale, minorScale) {
    this.majorScale = majorScale;
    this.majorScaleChart = generateChart(majorScale.notes);
    this.minorScale = minorScale;
    this.minorScaleChart = generateChart(minorScale.notes);
    
}


function getScaleCharts(key) {
    console.log("getScaleCharts with key = " + key);
    const majorScale = getMajorScale(key);
    console.log("majorScale:");
    console.log("   name:" + majorScale.name);
    console.log("   notes:" + majorScale.notes);
    console.log("   lhFingering:" + majorScale.lhFingering);
    console.log("   rhFingering:" + majorScale.rhFingering);
    const minorScale = getMinorScale(key);
    return new ScaleCharts(majorScale, minorScale);
}
